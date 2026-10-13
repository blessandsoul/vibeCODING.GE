'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, type Variants } from 'framer-motion';
import type { CharacterState } from '../hooks/useChatAssistant';

interface CharacterProps {
    state: CharacterState;
    size?: number;
    className?: string;
}

export function Character({ state, size = 48, className }: CharacterProps) {
    const [isBlinking, setIsBlinking] = useState(false);
    const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });
    const svgRef = useRef<SVGSVGElement>(null);

    /* ── Blinking ── */
    useEffect(() => {
        if (state !== 'idle') return;
        const interval = setInterval(() => {
            setIsBlinking(true);
            setTimeout(() => setIsBlinking(false), 150);
        }, 3000 + Math.random() * 2000);
        return () => clearInterval(interval);
    }, [state]);

    /* ── Mouse tracking ── */
    useEffect(() => {
        if (state === 'sleeping') return;
        const handleMouseMove = (e: MouseEvent) => {
            if (!svgRef.current) return;
            const rect = svgRef.current.getBoundingClientRect();
            const cx = rect.left + rect.width / 2;
            const cy = rect.top + rect.height / 2;
            const dx = e.clientX - cx;
            const dy = e.clientY - cy;
            const max = 3;
            const dist = Math.sqrt(dx * dx + dy * dy);
            const nx = dist > 0 ? (dx / dist) * Math.min(dist / 50, 1) * max : 0;
            const ny = dist > 0 ? (dy / dist) * Math.min(dist / 50, 1) * max : 0;
            setMouseOffset({ x: nx, y: ny });
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, [state]);

    const eyeScaleY = (() => {
        if (state === 'sleeping') return 0.05;
        if (isBlinking && state === 'idle') return 0.1;
        if (state === 'thinking') return 0.8;
        return 1;
    })();

    const bodyVariants: Variants = {
        idle: { y: [0, -3, 0], transition: { repeat: Infinity, duration: 2, ease: 'easeInOut' } },
        thinking: { rotate: [-2, 2, -2], transition: { repeat: Infinity, duration: 0.5 } },
        talking: { y: [0, -2, 0], transition: { repeat: Infinity, duration: 0.3 } },
        happy: { y: -5, scale: 1.1, transition: { type: 'spring', stiffness: 300 } },
        sleeping: { y: [0, 2, 0], transition: { repeat: Infinity, duration: 3, ease: 'easeInOut' } },
    };

    const isSleeping = state === 'sleeping';
    const ox = isSleeping ? 0 : mouseOffset.x;
    const oy = isSleeping ? 0 : mouseOffset.y;

    return (
        <motion.svg
            ref={svgRef}
            viewBox="0 0 100 100"
            width={size}
            height={size}
            className={className}
            animate={state}
            variants={bodyVariants}
        >
            {/* Shadow */}
            <ellipse cx="50" cy="90" rx="30" ry="5" fill="rgba(0,0,0,0.15)" />
            {/* Body, OBSIDIAN purple */}
            <motion.circle cx="50" cy="50" r="35" fill="oklch(0.55 0.22 300)" stroke="oklch(0.45 0.22 300)" strokeWidth="2" />
            {/* Shine */}
            <ellipse cx="38" cy="38" rx="10" ry="8" fill="rgba(255,255,255,0.25)" />
            {/* Left eye */}
            <ellipse cx="38" cy="48" rx="9" ry="11" fill="white" stroke="oklch(0.25 0.05 300)" strokeWidth="1" />
            <motion.ellipse
                cx={40 + ox} cy={48 + oy} rx="4" ry={5 * eyeScaleY}
                fill="oklch(0.25 0.05 300)"
                animate={{ scaleY: eyeScaleY }}
                transition={{ duration: 0.1 }}
            />
            {!isSleeping && <circle cx={42 + ox * 0.5} cy="45" r="2" fill="white" opacity="0.8" />}
            {/* Right eye */}
            <ellipse cx="62" cy="48" rx="9" ry="11" fill="white" stroke="oklch(0.25 0.05 300)" strokeWidth="1" />
            <motion.ellipse
                cx={64 + ox} cy={48 + oy} rx="4" ry={5 * eyeScaleY}
                fill="oklch(0.25 0.05 300)"
                animate={{ scaleY: eyeScaleY }}
                transition={{ duration: 0.1 }}
            />
            {!isSleeping && <circle cx={66 + ox * 0.5} cy="45" r="2" fill="white" opacity="0.8" />}
            {/* Smile, happy/talking */}
            {(state === 'happy' || state === 'talking') && (
                <motion.path
                    d="M40 62 Q50 72 60 62" fill="none" stroke="oklch(0.25 0.05 300)" strokeWidth="2" strokeLinecap="round"
                    initial={{ opacity: 0, pathLength: 0 }}
                    animate={{ opacity: 1, pathLength: 1 }}
                    transition={{ duration: 0.3 }}
                />
            )}
            {/* Thinking dots */}
            {state === 'thinking' && (
                <g>
                    <motion.circle cx="75" cy="25" r="3" fill="oklch(0.70 0.15 300)" animate={{ opacity: [0.3, 1, 0.3] }} transition={{ repeat: Infinity, duration: 1, delay: 0 }} />
                    <motion.circle cx="82" cy="18" r="2.5" fill="oklch(0.70 0.15 300)" animate={{ opacity: [0.3, 1, 0.3] }} transition={{ repeat: Infinity, duration: 1, delay: 0.2 }} />
                    <motion.circle cx="88" cy="12" r="2" fill="oklch(0.70 0.15 300)" animate={{ opacity: [0.3, 1, 0.3] }} transition={{ repeat: Infinity, duration: 1, delay: 0.4 }} />
                </g>
            )}
            {/* Sleeping ZZZ */}
            {isSleeping && (
                <g>
                    <motion.text x="70" y="20" fill="oklch(0.70 0.15 300)" fontSize="10" fontWeight="bold" animate={{ opacity: [0, 1, 0], y: [20, 15, 10], x: [70, 73, 76] }} transition={{ repeat: Infinity, duration: 2, delay: 0 }}>z</motion.text>
                    <motion.text x="78" y="14" fill="oklch(0.70 0.15 300)" fontSize="8" fontWeight="bold" animate={{ opacity: [0, 1, 0], y: [14, 9, 4], x: [78, 81, 84] }} transition={{ repeat: Infinity, duration: 2, delay: 0.3 }}>z</motion.text>
                    <motion.text x="85" y="8" fill="oklch(0.70 0.15 300)" fontSize="6" fontWeight="bold" animate={{ opacity: [0, 1, 0], y: [8, 3, -2], x: [85, 88, 91] }} transition={{ repeat: Infinity, duration: 2, delay: 0.6 }}>z</motion.text>
                </g>
            )}
        </motion.svg>
    );
}
