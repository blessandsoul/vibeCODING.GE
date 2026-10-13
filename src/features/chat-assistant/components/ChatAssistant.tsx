'use client';

import { AnimatePresence } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { ChatButton } from './ChatButton';
import { ChatWindow } from './ChatWindow';
import { useChatAssistant } from '../hooks/useChatAssistant';

export function ChatAssistant() {
    const t = useTranslations('chatAssistant');

    const {
        isOpen, messages, isLoading, characterState,
        toggleChat, closeChat, sendMessage, clearChat, wakeUp,
    } = useChatAssistant({
        welcomeMessage: t('greeting'),
        errorMessage: t('error'),
    });

    return (
        <div className="fixed bottom-6 right-6 z-50">
            <AnimatePresence mode="wait">
                {isOpen && (
                    <ChatWindow
                        messages={messages}
                        isLoading={isLoading}
                        characterState={characterState}
                        onSendMessage={sendMessage}
                        onClose={closeChat}
                        onClear={clearChat}
                        t={{
                            title: t('title'),
                            online: t('online'),
                            placeholder: t('placeholder'),
                            clear: t('clear'),
                            close: t('close'),
                            quickServices: t('quickServices'),
                            quickPricing: t('quickPricing'),
                            quickContact: t('quickContact'),
                            quickHow: t('quickHow'),
                        }}
                    />
                )}
            </AnimatePresence>
            <ChatButton
                onClick={toggleChat}
                characterState={isOpen ? 'happy' : characterState}
                onWakeUp={wakeUp}
                tooltip={t('tooltip')}
                sleepTooltip={t('sleepTooltip')}
            />
        </div>
    );
}
