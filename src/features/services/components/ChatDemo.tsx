'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import { useTranslations } from 'next-intl';
import { motion, AnimatePresence } from 'framer-motion';
import { FadeIn } from '@/components/common/FadeIn';

interface Message {
    id: string;
    role: 'user' | 'assistant';
    content: string;
}

/* ─── SVG Icons for each persona ─── */
const PersonaIcons: Record<string, React.ReactNode> = {
    seller: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-7 w-7 md:h-8 md:w-8">
            <circle cx="9" cy="21" r="1" /><circle cx="20" cy="21" r="1" />
            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
        </svg>
    ),
    consultant: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-7 w-7 md:h-8 md:w-8">
            <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
            <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
            <line x1="12" y1="12" x2="12" y2="12.01" />
        </svg>
    ),
    comedian: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-7 w-7 md:h-8 md:w-8">
            <circle cx="12" cy="12" r="10" />
            <path d="M8 14s1.5 2 4 2 4-2 4-2" />
            <line x1="9" y1="9" x2="9.01" y2="9" />
            <line x1="15" y1="9" x2="15.01" y2="9" />
        </svg>
    ),
    football: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-7 w-7 md:h-8 md:w-8">
            <circle cx="12" cy="12" r="10" />
            <path d="M12 2l3 7h-6l3-7z" />
            <path d="M2.5 9.5L7 12l-2 6" />
            <path d="M21.5 9.5L17 12l2 6" />
            <path d="M5 18h14" />
            <path d="M7 12h10" />
        </svg>
    ),
    health: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-7 w-7 md:h-8 md:w-8">
            <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
        </svg>
    ),
    chef: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-7 w-7 md:h-8 md:w-8">
            <path d="M6 13.87A4 4 0 0 1 7.41 6a5.11 5.11 0 0 1 1.05-1.54 5 5 0 0 1 7.08 0A5.11 5.11 0 0 1 16.59 6 4 4 0 0 1 18 13.87V21H6z" />
            <line x1="6" y1="17" x2="18" y2="17" />
        </svg>
    ),
};

const PERSONAS = [
    { key: 'seller' },
    { key: 'consultant' },
    { key: 'comedian' },
    { key: 'football' },
    { key: 'health' },
    { key: 'chef' },
] as const;

type PersonaKey = (typeof PERSONAS)[number]['key'];

/* ─── Bot icon for chat header ─── */
const BotIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
        <rect x="3" y="11" width="18" height="10" rx="2" />
        <circle cx="12" cy="5" r="2" />
        <path d="M12 7v4" />
        <line x1="8" y1="16" x2="8" y2="16.01" />
        <line x1="16" y1="16" x2="16" y2="16.01" />
    </svg>
);

export const ChatDemo = () => {
    const t = useTranslations('chatDemo');
    const ownerReferenceOnly = true;
    const [selectedPersona, setSelectedPersona] = useState<PersonaKey | null>(null);
    const [messages, setMessages] = useState<Message[]>([]);
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [msgCount, setMsgCount] = useState(0);
    const messagesContainerRef = useRef<HTMLDivElement>(null);
    const chatWrapperRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);

    const scrollToBottom = useCallback(() => {
        const container = messagesContainerRef.current;
        if (container) {
            container.scrollTop = container.scrollHeight;
        }
    }, []);

    const scrollChatIntoView = useCallback(() => {
        const el = chatWrapperRef.current;
        if (el) {
            // Scroll so chat top sits just below the navbar (4rem = 64px) + 16px padding
            const top = el.getBoundingClientRect().top + window.scrollY - 80;
            window.scrollTo({ top, behavior: 'smooth' });
        }
    }, []);

    useEffect(() => {
        scrollToBottom();
    }, [messages, scrollToBottom]);

    const selectPersona = (key: PersonaKey) => {
        setSelectedPersona(key);
        setMessages([
            {
                id: 'greeting',
                role: 'assistant',
                content: t(`personas.${key}.greeting`),
            },
        ]);
        setMsgCount(0);
        setTimeout(() => {
            scrollChatIntoView();
            inputRef.current?.focus();
        }, 500);
    };

    const resetChat = () => {
        setSelectedPersona(null);
        setMessages([]);
        setInput('');
        setMsgCount(0);
    };

    const sendMessage = async () => {
        if (ownerReferenceOnly) return;
        const trimmed = input.trim();
        if (!trimmed || isLoading || !selectedPersona) return;
        if (msgCount >= 20) return;

        const userMsg: Message = {
            id: `user-${Date.now()}`,
            role: 'user',
            content: trimmed,
        };

        setMessages((prev) => [...prev, userMsg]);
        setInput('');
        setIsLoading(true);
        setMsgCount((c) => c + 1);

        const apiMessages = [...messages, userMsg]
            .filter((m) => m.id !== 'greeting' || m.role === 'assistant')
            .map((m) => ({ role: m.role, content: m.content }));

        const botMsgId = `bot-${Date.now()}`;
        setMessages((prev) => [
            ...prev,
            { id: botMsgId, role: 'assistant', content: '' },
        ]);

        try {
            const res = await fetch('/api/chat-demo', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    persona: selectedPersona,
                    messages: apiMessages,
                }),
            });

            if (!res.ok) {
                const err = await res.json().catch(() => ({}));
                throw new Error(err.error || 'API error');
            }

            const reader = res.body?.getReader();
            if (!reader) throw new Error('No reader');

            const decoder = new TextDecoder();
            let buffer = '';

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
                            setMessages((prev) =>
                                prev.map((m) =>
                                    m.id === botMsgId
                                        ? { ...m, content: m.content + parsed.content }
                                        : m,
                                ),
                            );
                        }
                    } catch {
                        // skip
                    }
                }
            }
        } catch (error) {
            console.error('Chat error:', error);
            setMessages((prev) =>
                prev.map((m) =>
                    m.id === botMsgId
                        ? { ...m, content: t('errorMessage') }
                        : m,
                ),
            );
        } finally {
            setIsLoading(false);
            // Re-focus input after response completes
            requestAnimationFrame(() => {
                inputRef.current?.focus();
            });
        }
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            sendMessage();
        }
    };

    return (
        <section className="relative py-12 md:py-20">
            <div className="container relative z-10 mx-auto px-4 md:px-6 lg:px-8">
                {/* Persona selector */}
                <AnimatePresence mode="wait">
                    {!selectedPersona && (
                        <motion.div
                            key="selector"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.4 }}
                        >
                            <div className="mx-auto max-w-3xl text-center mb-10">
                                <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                                    {t('selectorEyebrow')}
                                </p>
                                <h2 className="mt-3 text-2xl font-bold tracking-tight md:text-3xl">
                                    {t('selectorTitle')}{' '}
                                    <span className="text-blue-600 dark:text-blue-300">{t('selectorTitleAccent')}</span>
                                </h2>
                                <p className="mt-3 text-sm text-muted-foreground md:text-base">
                                    {t('selectorSubtitle')}
                                </p>
                            </div>

                            <div className="mx-auto grid max-w-4xl gap-4 grid-cols-2 sm:grid-cols-3">
                                {PERSONAS.map((persona, i) => (
                                    <FadeIn key={persona.key} delay={i * 0.06}>
                                        <button
                                            onClick={() => selectPersona(persona.key)}
                                            className="persona-card dodo-glass-card group flex w-full flex-col items-center gap-3 p-6 text-center transition duration-300 hover:border-blue-500/40 dark:hover:border-blue-400/30 hover:scale-[1.03] active:scale-[0.98] md:p-8"
                                        >
                                            <span className="text-primary/70 transition duration-300 group-hover:text-primary group-hover:scale-110">
                                                {PersonaIcons[persona.key]}
                                            </span>
                                            <span className="text-sm font-bold md:text-base">
                                                {t(`personas.${persona.key}.name`)}
                                            </span>
                                            <span className="text-xs text-muted-foreground leading-relaxed">
                                                {t(`personas.${persona.key}.desc`)}
                                            </span>
                                        </button>
                                    </FadeIn>
                                ))}
                            </div>
                        </motion.div>
                    )}

                    {/* Chat window */}
                    {selectedPersona && (
                        <motion.div
                            key="chat"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.4 }}
                            ref={chatWrapperRef}
                            className="mx-auto max-w-2xl"
                        >
                            {/* Chat header */}
                            <div className="mb-4 flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <span className="dodo-glass-inset flex h-10 w-10 items-center justify-center text-blue-600 dark:text-blue-300">
                                        {PersonaIcons[selectedPersona] ? (
                                            <span className="[&_svg]:h-5 [&_svg]:w-5">{PersonaIcons[selectedPersona]}</span>
                                        ) : (
                                            <BotIcon />
                                        )}
                                    </span>
                                    <div>
                                        <h3 className="text-sm font-bold">
                                            {t(`personas.${selectedPersona}.name`)}
                                        </h3>
                                        <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
                                            <span className="inline-block h-2 w-2 rounded-full bg-green-500 animate-pulse" />
                                            {t('online')}
                                        </span>
                                    </div>
                                </div>
                                <button
                                    onClick={resetChat}
                                    className="dodo-glass-box px-4 py-2 text-xs font-medium text-slate-600 dark:text-slate-300 transition duration-200 hover:border-blue-500/30 dark:hover:border-blue-400/25 hover:text-slate-950 dark:hover:text-white"
                                >
                                    {t('tryAnother')}
                                </button>
                            </div>

                            {/* Chat container */}
                            <div className="chat-container dodo-glass-card overflow-hidden">
                                {/* Messages */}
                                <div ref={messagesContainerRef} className="flex h-[400px] flex-col overflow-y-auto p-4 md:h-[480px] md:p-6 chat-messages-scroll">
                                    <div className="flex-1" />
                                    {messages.map((msg) => (
                                        <motion.div
                                            key={msg.id}
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.25 }}
                                            className={`mb-3 flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'
                                                }`}
                                        >
                                            <div
                                                className={`max-w-[80%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${msg.role === 'user'
                                                        ? 'chat-bubble-user !bg-blue-600 dark:!bg-blue-500'
                                                        : 'chat-bubble-bot'
                                                    }`}
                                            >
                                                {msg.content || (
                                                    <span className="typing-indicator">
                                                        <span />
                                                        <span />
                                                        <span />
                                                    </span>
                                                )}
                                            </div>
                                        </motion.div>
                                    ))}
                                    {isLoading && messages[messages.length - 1]?.content !== '' && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            className="mb-3 flex justify-start"
                                        >
                                            <div className="chat-bubble-bot rounded-2xl px-4 py-2.5">
                                                <span className="typing-indicator">
                                                    <span />
                                                    <span />
                                                    <span />
                                                </span>
                                            </div>
                                        </motion.div>
                                    )}
                                    <div />
                                </div>

                                {/* Input area */}
                                <div className="dodo-glass-inset border-0 p-3 md:p-4">
                                    {msgCount >= 20 ? (
                                        <p className="text-center text-xs text-muted-foreground">
                                            {t('limitReached')}
                                        </p>
                                    ) : (
                                        <div className="flex items-center gap-2">
                                            <label htmlFor="chat-demo-input" className="sr-only">
                                                {t('inputPlaceholder')}
                                            </label>
                                            <input
                                                id="chat-demo-input"
                                                ref={inputRef}
                                                type="text"
                                                value={input}
                                                readOnly={ownerReferenceOnly}
                                                onChange={(e) => setInput(e.target.value)}
                                                onKeyDown={handleKeyDown}
                                                placeholder={t('inputPlaceholder')}
                                                aria-label={t('inputPlaceholder')}
                                                data-mcp-toolname="chat-demo-input"
                                                data-mcp-tooldescription="Type a message to chat with the selected AI persona"
                                                className="dodo-glass-inset flex-1 px-4 py-2.5 text-sm outline-none transition-colors duration-200 placeholder:text-slate-500/70 dark:placeholder:text-slate-400/70 focus:border-blue-500/40 focus:ring-1 focus:ring-blue-500/20"
                                            />
                                            <button
                                                aria-label={t('send') || 'Send message'}
                                                data-mcp-toolname="chat-demo-send"
                                                data-mcp-tooldescription="Send the typed message to the AI persona"
                                                onMouseDown={(e) => e.preventDefault()}
                                                onTouchEnd={(e) => {
                                                    e.preventDefault();
                                                    sendMessage();
                                                    inputRef.current?.focus();
                                                }}
                                                onClick={() => {
                                                    sendMessage();
                                                    inputRef.current?.focus();
                                                }}
                                                disabled={ownerReferenceOnly || isLoading || !input.trim()}
                                                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-600 text-white shadow-md shadow-blue-600/20 transition duration-200 hover:bg-blue-500 hover:shadow-lg hover:shadow-blue-500/30 active:scale-95 disabled:opacity-40 disabled:shadow-none"
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                    className="h-4 w-4"
                                                >
                                                    <path d="M3.105 2.288a.75.75 0 0 0-.826.95l1.414 4.926A1.5 1.5 0 0 0 5.135 9.25h6.115a.75.75 0 0 1 0 1.5H5.135a1.5 1.5 0 0 0-1.442 1.086l-1.414 4.926a.75.75 0 0 0 .826.95 28.897 28.897 0 0 0 15.293-7.155.75.75 0 0 0 0-1.114A28.897 28.897 0 0 0 3.105 2.288Z" />
                                                </svg>
                                            </button>
                                        </div>
                                    )}
                                    {ownerReferenceOnly && (
                                        <p role="status" data-owner-reference="true" className="mt-2 text-center text-xs text-muted-foreground">
                                            Owner-reference only — this demo does not send messages in this product release.
                                        </p>
                                    )}
                                </div>
                            </div>

                            {/* Powered by label */}
                            <p className="mt-3 text-center text-[10px] text-muted-foreground/50">
                                {t('poweredBy')}
                            </p>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
};





