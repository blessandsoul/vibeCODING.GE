'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Character } from './Character';
import type { CharacterState } from '../hooks/useChatAssistant';

interface ChatButtonProps {
    onClick: () => void;
    characterState: CharacterState;
    onWakeUp: () => void;
    tooltip: string;
    sleepTooltip: string;
}

export function ChatButton({ onClick, characterState, onWakeUp, tooltip, sleepTooltip }: ChatButtonProps) {
    const [isHovered, setIsHovered] = useState(false);
    const isSleeping = characterState === 'sleeping';

    const handleMouseEnter = () => {
        setIsHovered(true);
        if (isSleeping) onWakeUp();
    };

    const displayState: CharacterState = isHovered && isSleeping ? 'idle' : characterState;

    return (
        <motion.button
            onClick={onClick}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={() => setIsHovered(false)}
            className="relative flex h-16 w-16 cursor-pointer items-center justify-center rounded-full shadow-lg transition-shadow hover:shadow-xl"
            style={{ background: 'linear-gradient(135deg, oklch(0.55 0.22 300), oklch(0.50 0.16 195))' }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: 'spring', stiffness: 260, damping: 20 }}
            aria-label="Chat assistant"
        >
            {/* Pulse ring */}
            <motion.div
                className="absolute inset-0 rounded-full"
                style={{ background: 'oklch(0.55 0.22 300)' }}
                animate={isSleeping
                    ? { scale: [1, 1.05, 1], opacity: [0.2, 0.3, 0.2] }
                    : { scale: [1, 1.2, 1], opacity: [0.4, 0, 0.4] }
                }
                transition={{ duration: isSleeping ? 3 : 2, repeat: Infinity, ease: 'easeInOut' }}
            />

            <Character state={displayState} size={52} />

            {/* Tooltip */}
            <motion.div
                className="absolute -top-12 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-lg bg-foreground px-3 py-1.5 text-xs text-background shadow-lg"
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 5 }}
                transition={{ duration: 0.2 }}
            >
                {isSleeping ? sleepTooltip : tooltip}
                <div className="absolute -bottom-1 left-1/2 h-2 w-2 -translate-x-1/2 rotate-45 bg-foreground" />
            </motion.div>
        </motion.button>
    );
}
