'use client';

import { useState, useEffect, useRef, useCallback, useMemo, type ReactNode } from 'react';
import { useTranslations } from 'next-intl';
import { motion, AnimatePresence } from 'framer-motion';
import { FadeIn } from '@/components/common/FadeIn';
import { Ico } from '@/components/common/Ico';

/* ────────────────────────────────────────────
   Types
   ──────────────────────────────────────────── */
interface WorkflowNode {
    id: string;
    labelKey?: string;
    label?: string;
    icon: ReactNode;
    x: number;
    y: number;
    type: 'trigger' | 'process' | 'decision' | 'output';
}

interface WorkflowConnection {
    from: string;
    to: string;
}

interface WorkflowScenario {
    key: string;
    icon: ReactNode;
    nodes: WorkflowNode[];
    connections: WorkflowConnection[];
}

export type AutomationNodesNodeType = 'trigger' | 'process' | 'decision' | 'output';
export type AutomationNodesScenarioCopy = {
    key: string;
    label: string;
    icon: string;
    nodes: readonly {
        id: string;
        label: string;
        icon: string;
        x: number;
        y: number;
        type: AutomationNodesNodeType;
    }[];
    connections: readonly WorkflowConnection[];
};
export type AutomationNodesCopy = {
    nodesTitle: string;
    nodesSubtitle: string;
    scenarios: readonly AutomationNodesScenarioCopy[];
    stats: readonly { value: string; label: string }[];
};

/* ────────────────────────────────────────────
   Icon helper: consistent size
   ──────────────────────────────────────────── */
const I = (name: string) => (
    <Ico name={name} className="size-[16px]" />
);

/* ────────────────────────────────────────────
   Scenario Definitions
   ──────────────────────────────────────────── */
const NODE_W = 140;
const NODE_H = 56;

const scenarios: WorkflowScenario[] = [
    {
        key: 'ecommerce',
        icon: I('solar:cart-large-bold-duotone'),
        nodes: [
            { id: 'trigger', labelKey: 'nodeNewOrder', icon: I('solar:cart-large-bold-duotone'), x: 60, y: 170, type: 'trigger' },
            { id: 'ai', labelKey: 'nodeAiAnalysis', icon: I('solar:cpu-bolt-bold-duotone'), x: 270, y: 170, type: 'process' },
            { id: 'decision', labelKey: 'nodeInStock', icon: I('solar:question-circle-bold-duotone'), x: 480, y: 170, type: 'decision' },
            { id: 'ship', labelKey: 'nodeShip', icon: I('solar:box-bold-duotone'), x: 680, y: 90, type: 'output' },
            { id: 'notify', labelKey: 'nodeNotify', icon: I('solar:bell-bold-duotone'), x: 680, y: 260, type: 'output' },
            { id: 'crm', labelKey: 'nodeCrmUpdate', icon: I('solar:clipboard-list-bold-duotone'), x: 270, y: 50, type: 'process' },
        ],
        connections: [
            { from: 'trigger', to: 'ai' },
            { from: 'trigger', to: 'crm' },
            { from: 'ai', to: 'decision' },
            { from: 'decision', to: 'ship' },
            { from: 'decision', to: 'notify' },
        ],
    },
    {
        key: 'support',
        icon: I('solar:chat-round-bold-duotone'),
        nodes: [
            { id: 'trigger', labelKey: 'nodeMessage', icon: I('solar:chat-round-bold-duotone'), x: 60, y: 170, type: 'trigger' },
            { id: 'classify', labelKey: 'nodeClassify', icon: I('solar:tag-bold-duotone'), x: 270, y: 170, type: 'process' },
            { id: 'decision', labelKey: 'nodeRoute', icon: I('solar:branching-paths-down-bold-duotone'), x: 480, y: 170, type: 'decision' },
            { id: 'aiReply', labelKey: 'nodeAiReply', icon: I('solar:cpu-bold-duotone'), x: 680, y: 70, type: 'output' },
            { id: 'human', labelKey: 'nodeHuman', icon: I('solar:user-bold-duotone'), x: 680, y: 170, type: 'output' },
            { id: 'faq', labelKey: 'nodeFaq', icon: I('solar:book-bold-duotone'), x: 680, y: 270, type: 'output' },
        ],
        connections: [
            { from: 'trigger', to: 'classify' },
            { from: 'classify', to: 'decision' },
            { from: 'decision', to: 'aiReply' },
            { from: 'decision', to: 'human' },
            { from: 'decision', to: 'faq' },
        ],
    },
    {
        key: 'sales',
        icon: I('solar:target-bold-duotone'),
        nodes: [
            { id: 'trigger', labelKey: 'nodeLead', icon: I('solar:target-bold-duotone'), x: 40, y: 170, type: 'trigger' },
            { id: 'score', labelKey: 'nodeScore', icon: I('solar:bolt-bold-duotone'), x: 220, y: 170, type: 'process' },
            { id: 'crm', labelKey: 'nodeCrm', icon: I('solar:clipboard-list-bold-duotone'), x: 400, y: 170, type: 'process' },
            { id: 'email', labelKey: 'nodeEmail', icon: I('solar:letter-bold-duotone'), x: 580, y: 170, type: 'process' },
            { id: 'meeting', labelKey: 'nodeMeeting', icon: I('solar:calendar-mark-bold-duotone'), x: 740, y: 170, type: 'output' },
        ],
        connections: [
            { from: 'trigger', to: 'score' },
            { from: 'score', to: 'crm' },
            { from: 'crm', to: 'email' },
            { from: 'email', to: 'meeting' },
        ],
    },
];

/* ────────────────────────────────────────────
   Animated Counter Hook
   ──────────────────────────────────────────── */
function useAnimatedCounter(end: number, duration = 2000, start = 0) {
    const [value, setValue] = useState(start);
    const [hasAnimated, setHasAnimated] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (hasAnimated) return;
        const el = ref.current;
        if (!el) return;
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setHasAnimated(true);
                    const startTime = performance.now();
                    const animate = (now: number) => {
                        const elapsed = now - startTime;
                        const progress = Math.min(elapsed / duration, 1);
                        const eased = 1 - Math.pow(1 - progress, 3);
                        setValue(Math.round(start + (end - start) * eased));
                        if (progress < 1) requestAnimationFrame(animate);
                    };
                    requestAnimationFrame(animate);
                }
            },
            { threshold: 0.3 },
        );
        observer.observe(el);
        return () => observer.disconnect();
    }, [end, duration, start, hasAnimated]);

    return [value, ref] as const;
}

/* ────────────────────────────────────────────
   Connection SVG Path: uses HTML overlay
   ──────────────────────────────────────────── */
function getOutputEdge(node: WorkflowNode) {
    return { x: node.x + NODE_W, y: node.y + NODE_H / 2 };
}

function getInputEdge(node: WorkflowNode) {
    return { x: node.x, y: node.y + NODE_H / 2 };
}

function ConnectionLine({
    fromNode,
    toNode,
    index,
}: {
    fromNode: WorkflowNode;
    toNode: WorkflowNode;
    index: number;
}) {
    const a = getOutputEdge(fromNode);
    const b = getInputEdge(toNode);

    // Horizontal distance for bezier control points
    const dx = Math.abs(b.x - a.x);
    const cpOff = Math.max(dx * 0.45, 40);

    const d = `M ${a.x} ${a.y} C ${a.x + cpOff} ${a.y}, ${b.x - cpOff} ${b.y}, ${b.x} ${b.y}`;

    return (
        <g>
            {/* Background path */}
            <path
                d={d}
                fill="none"
                stroke="url(#connectionGradient)"
                strokeWidth={2}
                strokeOpacity={0.2}
            />
            {/* Animated flow */}
            <path
                d={d}
                fill="none"
                stroke="url(#connectionGradient)"
                strokeWidth={2}
                strokeDasharray="6 8"
                strokeOpacity={0.6}
                className="automation-connection"
                style={{ animationDelay: `${index * 0.3}s` }}
            />
            {/* Flowing dot */}
            <circle r="3.5" fill="#2563eb" opacity={0.85}>
                <animateMotion
                    dur={`${2 + index * 0.15}s`}
                    repeatCount="indefinite"
                    path={d}
                    begin={`${index * 0.35}s`}
                />
            </circle>
            <circle r="7" fill="#2563eb" opacity={0.15}>
                <animateMotion
                    dur={`${2 + index * 0.15}s`}
                    repeatCount="indefinite"
                    path={d}
                    begin={`${index * 0.35}s`}
                />
            </circle>
        </g>
    );
}

/* ────────────────────────────────────────────
   Node Card Component
   ──────────────────────────────────────────── */
function NodeCard({
    node,
    label,
    index,
}: {
    node: WorkflowNode;
    label: string;
    index: number;
}) {
    const isDecision = node.type === 'decision';
    const isTrigger = node.type === 'trigger';

    return (
        <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 + index * 0.1, ease: 'easeOut' }}
            className="absolute"
            style={{
                left: node.x,
                top: node.y,
                width: NODE_W,
                height: NODE_H,
            }}
        >
            <div
                className={`automation-node ${isDecision
                    ? 'automation-node-decision'
                    : isTrigger
                        ? 'automation-node-trigger'
                        : ''
                    }`}
            >
                {/* Active pulse */}
                <span className="automation-node-pulse" />
                {/* Icon */}
                <span className="automation-node-icon">
                    {node.icon}
                </span>
                {/* Label */}
                <span className="automation-node-label">{label}</span>
            </div>
        </motion.div>
    );
}

/* ────────────────────────────────────────────
   Main Export
   ──────────────────────────────────────────── */
export const AutomationNodes = ({ copy }: { copy?: AutomationNodesCopy } = {}) => {
    const t = useTranslations('servicesAutomation');
    const [activeIdx, setActiveIdx] = useState(0);
    const customScenario = copy?.scenarios[activeIdx];
    const scenario: WorkflowScenario = useMemo(() => customScenario
        ? {
            key: customScenario.key,
            icon: I(customScenario.icon),
            nodes: customScenario.nodes.map((node) => ({ ...node, labelKey: undefined, icon: I(node.icon) })),
            connections: [...customScenario.connections],
        }
        : scenarios[activeIdx], [customScenario, activeIdx]);

    /* Responsive scaling: scroll on mobile, scale on tablet+ */
    const [scale, setScale] = useState(1);
    const [useScroll, setUseScroll] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleResize = () => {
            if (!containerRef.current) return;
            // containerRef is on the outer card div;
            // use its parent (FadeIn wrapper) width as available space
            const availableWidth = containerRef.current.parentElement?.clientWidth
                ?? containerRef.current.clientWidth;
            const contentWidth = 920;
            const scaleFactor = Math.min(1, availableWidth / contentWidth);

            // Below 640px (mobile), use horizontal scroll instead of scaling
            if (availableWidth < 640) {
                setUseScroll(true);
                setScale(1);
            } else {
                setUseScroll(false);
                setScale(scaleFactor);
            }
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    /* Map node ids for fast lookup */
    const nodeMap = useCallback(() => {
        const m = new Map<string, WorkflowNode>();
        scenario.nodes.forEach((n) => m.set(n.id, n));
        return m;
    }, [scenario])();

    /* Animated stats */
    const [stat1Value, stat1Ref] = useAnimatedCounter(2400);
    const [stat2Value, stat2Ref] = useAnimatedCounter(997, 2000, 900);
    const [stat3Value, stat3Ref] = useAnimatedCounter(85);

    return (
        <section className="relative py-8 md:py-16">
            <div className="container relative z-10 mx-auto px-4 md:px-6 lg:px-8">
                {/* Section header */}
                <FadeIn>
                    <div className="mb-8 text-center md:mb-12">
                        <h3 className="eyebrow uppercase tracking-[0.3em] text-slate-600 dark:text-slate-300">
                            {copy?.nodesTitle ?? t('nodesTitle')}
                        </h3>
                        <p className="mt-2 text-base text-slate-600/70 dark:text-slate-300/80 md:text-lg">
                            {copy?.nodesSubtitle ?? t('nodesSubtitle')}
                        </p>
                    </div>
                </FadeIn>

                {/* Scenario tabs */}
                <FadeIn delay={0.1}>
                    <div className="mb-6 flex flex-wrap justify-center gap-2 md:mb-8">
                        {(copy?.scenarios ?? scenarios).map((s, i) => (
                            <button
                                key={s.key}
                                onClick={() => setActiveIdx(i)}
                                className={`dodo-glass-box flex items-center gap-2 px-4 py-2.5 text-sm font-medium transition duration-300 ${activeIdx === i
                                    ? 'border-blue-500/40 dark:border-blue-400/30 bg-blue-500/10 dark:bg-blue-400/15 text-slate-950 dark:text-white shadow-md shadow-[#2563eb]/10'
                                    : 'border-slate-200/80 dark:border-white/10 text-slate-600 dark:text-slate-300 hover:border-blue-500/20 dark:hover:border-blue-400/20 hover:bg-slate-100/60 dark:hover:bg-[#0a0b0e]/10'
                                    }`}
                            >
                                <span className="flex items-center">{typeof s.icon === 'string' ? I(s.icon) : s.icon}</span>
                                <span>{'label' in s ? s.label : t(`scenario${i + 1}`)}</span>
                            </button>
                        ))}
                    </div>
                </FadeIn>

                {/* Workflow canvas */}
                <FadeIn delay={0.2}>
                    <div
                        ref={containerRef}
                        className={`relative mx-auto dodo-glass-card p-2 md:p-4 ${useScroll ? 'overflow-x-auto' : 'overflow-hidden'}`}
                        style={useScroll ? { WebkitOverflowScrolling: 'touch', overflowX: 'auto' } : undefined}
                    >
                        <div
                            className="relative mx-auto w-full"
                            style={useScroll
                                ? { height: 380 }
                                : { height: 380 * scale }
                            }
                        >
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={scenario.key}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.35 }}
                                    className="relative origin-top-left"
                                    style={useScroll
                                        ? { width: 920, height: 380, minWidth: 920 }
                                        : { width: 920, height: 380, minWidth: 920, transform: `scale(${scale})` }
                                    }
                                >
                                    {/* SVG layer for connections */}
                                    <svg
                                        className="absolute inset-0 h-full w-full"
                                        viewBox="0 0 920 380"
                                        fill="none"
                                        style={{ zIndex: 0 }}
                                    >
                                        <defs>
                                            <linearGradient
                                                id="connectionGradient"
                                                x1="0%"
                                                y1="0%"
                                                x2="100%"
                                                y2="0%"
                                            >
                                                <stop
                                                    offset="0%"
                                                    stopColor="#2563eb"
                                                    stopOpacity="0.7"
                                                />
                                                <stop
                                                    offset="100%"
                                                    stopColor="#60a5fa"
                                                    stopOpacity="0.7"
                                                />
                                            </linearGradient>
                                        </defs>

                                        {scenario.connections.map((conn, i) => {
                                            const fromNode = nodeMap.get(conn.from);
                                            const toNode = nodeMap.get(conn.to);
                                            if (!fromNode || !toNode) return null;
                                            return (
                                                <ConnectionLine
                                                    key={`${scenario.key}-${conn.from}-${conn.to}`}
                                                    fromNode={fromNode}
                                                    toNode={toNode}
                                                    index={i}
                                                />
                                            );
                                        })}
                                    </svg>

                                    {/* HTML layer for node cards */}
                                    {scenario.nodes.map((node, i) => (
                                        <NodeCard
                                            key={`${scenario.key}-${node.id}`}
                                            node={node}
                                            label={node.label ?? t(node.labelKey ?? '')}
                                            index={i}
                                        />
                                    ))}
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </div>
                </FadeIn>

                {/* Stats bar */}
                <FadeIn delay={0.35}>
                    <div className="mt-8 grid grid-cols-3 gap-4 md:mt-12">
                        <div ref={copy?.stats ? undefined : stat1Ref} className="text-center">
                            <p className="stat-number text-2xl text-slate-950 dark:text-white md:text-3xl">
                                {copy?.stats?.[0]?.value ?? `${stat1Value.toLocaleString()}+`}
                            </p>
                            <p className="mt-1 text-xs text-slate-600 dark:text-slate-300 md:text-sm">
                                {copy?.stats?.[0]?.label ?? t('statProcesses')}
                            </p>
                        </div>
                        <div ref={copy?.stats ? undefined : stat2Ref} className="text-center">
                            <p className="stat-number text-2xl text-slate-950 dark:text-white md:text-3xl">
                                {copy?.stats?.[1]?.value ?? `${(stat2Value / 10).toFixed(1)}%`}
                            </p>
                            <p className="mt-1 text-xs text-slate-600 dark:text-slate-300 md:text-sm">
                                {copy?.stats?.[1]?.label ?? t('statUptime')}
                            </p>
                        </div>
                        <div ref={copy?.stats ? undefined : stat3Ref} className="text-center">
                            <p className="stat-number text-2xl text-slate-950 dark:text-white md:text-3xl">
                                {copy?.stats?.[2]?.value ?? `${stat3Value}%`}
                            </p>
                            <p className="mt-1 text-xs text-slate-600 dark:text-slate-300 md:text-sm">
                                {copy?.stats?.[2]?.label ?? t('statTimeSaved')}
                            </p>
                        </div>
                    </div>
                </FadeIn>
            </div>
        </section>
    );
};
