'use client';

import { useState, useRef, useCallback, useEffect } from 'react';

export interface Message {
    id: string;
    role: 'user' | 'assistant';
    content: string;
}

export type CharacterState = 'idle' | 'thinking' | 'talking' | 'happy' | 'sleeping';

interface UseChatAssistantOptions {
    welcomeMessage: string;
    errorMessage: string;
}

/* ── Phone number detection ── */
const PHONE_REGEX = /(?:\+?\d{1,3}[\s-]?)?\(?\d{2,4}\)?[\s-]?\d{2,4}[\s-]?\d{2,4}[\s-]?\d{0,4}/;

function extractPhone(text: string): string | null {
    const match = text.match(PHONE_REGEX);
    if (!match) return null;
    const digits = match[0].replace(/\D/g, '');
    return digits.length >= 7 ? match[0].trim() : null;
}

/* ── Send notification to backend (fire-and-forget) ── */
function notifyTelegram(messages: Message[], type: 'phone' | 'close', phone?: string) {
    const payload = messages
        .filter(m => m.content)
        .map(m => ({ role: m.role, content: m.content }));

    fetch('/api/chat-notify', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: payload, type, phone }),
        // keepalive lets the request survive tab close / page unload -
        // without it the browser aborts the in-flight fetch and the
        // notification never reaches the server.
        keepalive: true,
    }).catch(() => { /* silent */ });
}

export function useChatAssistant({ welcomeMessage, errorMessage }: UseChatAssistantOptions) {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([
        { id: 'welcome', role: 'assistant', content: welcomeMessage },
    ]);
    const [isLoading, setIsLoading] = useState(false);
    const [characterState, setCharacterState] = useState<CharacterState>('idle');
    const sleepTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
    const phoneSentRef = useRef(false);
    // Latest messages mirrored into a ref so the pagehide listener (registered
    // once) always sees the current conversation without re-binding on every
    // message.
    const messagesRef = useRef(messages);
    messagesRef.current = messages;
    const closeNotifiedRef = useRef(false);

    // Fire the close-notification when the whole tab/window is closed, not
    // only when the user clicks the X button. pagehide does not fire on
    // client-side route changes, so navigating the site won't spam Telegram.
    useEffect(() => {
        const handlePageHide = () => {
            if (closeNotifiedRef.current) return;
            const current = messagesRef.current;
            if (current.some(m => m.role === 'user')) {
                closeNotifiedRef.current = true;
                notifyTelegram(current, 'close');
            }
        };
        window.addEventListener('pagehide', handlePageHide);
        return () => window.removeEventListener('pagehide', handlePageHide);
    }, []);

    const resetSleepTimer = useCallback(() => {
        if (sleepTimerRef.current) clearTimeout(sleepTimerRef.current);
        setCharacterState(prev => (prev === 'sleeping' ? 'idle' : prev));
        sleepTimerRef.current = setTimeout(() => {
            setCharacterState(prev => {
                if (prev === 'idle') return 'sleeping';
                return prev;
            });
        }, 30_000);
    }, []);

    useEffect(() => {
        resetSleepTimer();
        return () => {
            if (sleepTimerRef.current) clearTimeout(sleepTimerRef.current);
        };
    }, [resetSleepTimer]);

    const toggleChat = useCallback(() => {
        setIsOpen(prev => {
            // If closing and there was a real conversation, notify
            if (prev) {
                const hasUserMsg = messages.some(m => m.role === 'user');
                if (hasUserMsg && !closeNotifiedRef.current) {
                    closeNotifiedRef.current = true;
                    notifyTelegram(messages, 'close');
                }
            }
            setCharacterState(!prev ? 'happy' : 'idle');
            return !prev;
        });
        resetSleepTimer();
    }, [resetSleepTimer, messages]);

    const closeChat = useCallback(() => {
        // Send history to Telegram if there was a real conversation
        const hasUserMsg = messages.some(m => m.role === 'user');
        if (hasUserMsg && !closeNotifiedRef.current) {
            closeNotifiedRef.current = true;
            notifyTelegram(messages, 'close');
        }

        setIsOpen(false);
        setCharacterState('idle');
        resetSleepTimer();
    }, [resetSleepTimer, messages]);

    const sendMessage = useCallback(async (content: string) => {
        const trimmed = content.trim();
        if (!trimmed || isLoading) return;

        resetSleepTimer();

        // Check for phone number → instant Telegram alert
        const phone = extractPhone(trimmed);
        if (phone && !phoneSentRef.current) {
            phoneSentRef.current = true;
            notifyTelegram(
                [...messages, { id: 'temp', role: 'user', content: trimmed }],
                'phone',
                phone,
            );
        }

        const userMsg: Message = {
            id: `user-${Date.now()}`,
            role: 'user',
            content: trimmed,
        };

        setMessages(prev => [...prev, userMsg]);
        setIsLoading(true);
        setCharacterState('thinking');

        const botMsgId = `bot-${Date.now()}`;
        setMessages(prev => [...prev, { id: botMsgId, role: 'assistant', content: '' }]);

        try {
            const apiMessages = [...messages, userMsg]
                .filter(m => m.role === 'user' || m.id !== 'welcome')
                .map(m => ({ role: m.role, content: m.content }));

            const res = await fetch('/api/chat-assistant', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ messages: apiMessages.filter(m => m.content) }),
            });

            if (!res.ok) throw new Error('API error');

            const reader = res.body?.getReader();
            if (!reader) throw new Error('No reader');

            const decoder = new TextDecoder();
            let buffer = '';
            setCharacterState('talking');

            while (true) {
                const { done, value } = await reader.read();
                if (done) break;

                buffer += decoder.decode(value, { stream: true });
                const lines = buffer.split('\n');
                buffer = lines.pop() ?? '';

                for (const line of lines) {
                    const trimmedLine = line.trim();
                    if (!trimmedLine || !trimmedLine.startsWith('data: ')) continue;
                    const data = trimmedLine.slice(6);
                    if (data === '[DONE]') continue;

                    try {
                        const parsed = JSON.parse(data);
                        if (parsed.content) {
                            setMessages(prev =>
                                prev.map(m =>
                                    m.id === botMsgId
                                        ? { ...m, content: m.content + parsed.content }
                                        : m,
                                ),
                            );
                        }
                    } catch {
                        // skip malformed chunks
                    }
                }
            }
        } catch {
            setMessages(prev =>
                prev.map(m =>
                    m.id === botMsgId ? { ...m, content: errorMessage } : m,
                ),
            );
        } finally {
            setIsLoading(false);
            setTimeout(() => setCharacterState('idle'), 1500);
        }
    }, [isLoading, messages, resetSleepTimer, errorMessage]);

    const clearChat = useCallback(() => {
        setMessages([{ id: 'welcome', role: 'assistant', content: welcomeMessage }]);
        phoneSentRef.current = false;
        closeNotifiedRef.current = false;
    }, [welcomeMessage]);

    const wakeUp = useCallback(() => {
        setCharacterState(prev => (prev === 'sleeping' ? 'idle' : prev));
        resetSleepTimer();
    }, [resetSleepTimer]);

    return {
        isOpen,
        messages,
        isLoading,
        characterState,
        toggleChat,
        closeChat,
        sendMessage,
        clearChat,
        wakeUp,
    };
}
