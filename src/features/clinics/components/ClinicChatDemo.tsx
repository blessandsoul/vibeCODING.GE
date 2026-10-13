'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { AiNowImage as Image } from '@/features/home/components/ainow/AiNowImage';

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
}

type Props = {
  name: string;
  role: string;
  greeting: string;
  placeholder: string;
  chips: string[];
  note: string;
  // persona = the /api/chat-demo server persona key. Defaults to 'clinic' so
  // the original clinic landing keeps working unchanged; niche landings pass
  // their own key (e.g. 'dental'). avatar overrides the chat header/bubble image.
  persona?: string;
  avatar?: string;
  // Borrowed family-reference pages render the same surface without sending
  // messages to a target product API. Existing consumers keep the live default.
  readOnly?: boolean;
};

const MAX_MESSAGES = 20;
const MSN_BLUE = '#0084ff';
const DEFAULT_AVATAR = '/images/ai-influencer/avatar.jpg';

/**
 * The demo styled as Facebook Messenger: that is the surface where a business
 * owner will actually see the assistant, so the demo mirrors it (blue user
 * bubbles, gray assistant bubbles, avatar rows, pill input). Same
 * /api/chat-demo backend; the persona is a prop (default 'clinic'), so the
 * same widget serves every niche landing. Also exported as NicheChatDemo.
 * Scrolls ONLY its internal container; no autofocus on mount.
 */
export function ClinicChatDemo({
  name,
  role,
  greeting,
  placeholder,
  chips,
  note,
  persona = 'clinic',
  avatar = DEFAULT_AVATAR,
  readOnly = false,
}: Props) {
  const [messages, setMessages] = useState<Message[]>([
    { id: 'greeting', role: 'assistant', content: greeting },
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [msgCount, setMsgCount] = useState(0);
  const [suggestions, setSuggestions] = useState<string[]>(chips);
  const listRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollList = useCallback(() => {
    const el = listRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, []);

  useEffect(() => {
    scrollList();
  }, [messages, suggestions, scrollList]);

  const send = useCallback(
    async (raw: string) => {
      const text = raw.trim();
      if (readOnly || !text || isLoading || msgCount >= MAX_MESSAGES) return;

      const userMsg: Message = { id: `user-${Date.now()}`, role: 'user', content: text };
      const history = [...messages, userMsg].map((m) => ({ role: m.role, content: m.content }));
      const botMsgId = `bot-${Date.now()}`;

      setMessages((prev) => [...prev, userMsg, { id: botMsgId, role: 'assistant', content: '' }]);
      setInput('');
      setIsLoading(true);
      setSuggestions([]);
      setMsgCount((c) => c + 1);
      let answer = '';

      try {
        const res = await fetch('/api/chat-demo', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ persona, messages: history.slice(-10) }),
        });
        if (!res.ok) throw new Error('API error');
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
            const trimmed = line.trim();
            if (!trimmed.startsWith('data: ')) continue;
            const data = trimmed.slice(6);
            if (data === '[DONE]') continue;
            try {
              const parsed = JSON.parse(data) as { content?: string };
              if (parsed.content) {
                answer += parsed.content;
                setMessages((prev) =>
                  prev.map((m) => (m.id === botMsgId ? { ...m, content: m.content + parsed.content } : m)),
                );
              }
            } catch {
              // skip malformed chunk
            }
          }
        }
      } catch {
        setMessages((prev) =>
          prev.map((m) => (m.id === botMsgId ? { ...m, content: '…' } : m)),
        );
      } finally {
        setIsLoading(false);
        // Contextual follow-up chips: a cheap second call once the answer is
        // in. Fails silently to no chips.
        if (answer && msgCount + 1 < MAX_MESSAGES) {
          try {
            const sres = await fetch('/api/chat-demo', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({
                persona,
                mode: 'suggestions',
                messages: [...history, { role: 'assistant', content: answer }].slice(-6),
              }),
            });
            if (sres.ok) {
              const { suggestions: next } = (await sres.json()) as { suggestions?: string[] };
              if (Array.isArray(next) && next.length > 0) setSuggestions(next.slice(0, 3));
            }
          } catch {
            // no chips this turn
          }
        }
      }
    },
    [isLoading, messages, msgCount, persona, readOnly],
  );

  const showChips = !readOnly && suggestions.length > 0 && !isLoading && msgCount < MAX_MESSAGES;

  return (
    <div id="chat" className="relative mx-auto w-full max-w-105 scroll-mt-24">
      <style>{`@keyframes clinicChipIn{from{opacity:0;transform:translateY(6px)}to{opacity:1;transform:translateY(0)}}`}</style>
      <div
        aria-hidden
        className="absolute -inset-4 rounded-[2rem] bg-linear-to-br from-[#7c3aed]/12 to-[#e040fb]/8 blur-xl"
      />
      <div className="relative overflow-hidden rounded-2xl border border-[#e5e5e5] bg-white shadow-lg shadow-neutral-900/5">
        {/* Header: Messenger-style */}
        <div className="flex items-center gap-2.5 border-b border-[#e5e5e5] px-3 py-2.5">
          <div className="relative shrink-0">
            <Image
              src={avatar}
              alt={name}
              width={36}
              height={36}
              frameClassName="block size-9 overflow-hidden rounded-full"
              className="size-9 rounded-full object-cover"
            />
            <span
              aria-hidden
              className="absolute -bottom-px -right-px size-3 rounded-full border-2 border-white bg-[#31cc46]"
            />
          </div>
          <div className="min-w-0 flex-1">
            <p className="truncate text-[15px] font-semibold leading-tight text-[#050505]">{name}</p>
            <p className="truncate text-xs leading-tight text-[#65676b]">{role}</p>
          </div>
          <div aria-hidden className="flex items-center gap-4 pr-1 text-[#0084ff]">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5">
              <path d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.02-.24c1.12.37 2.33.57 3.57.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C10.61 21 3 13.39 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.24.2 2.45.57 3.57a1 1 0 0 1-.25 1.02l-2.2 2.2Z" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5">
              <path d="M17 10.5V7a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-3.5l4 4v-11l-4 4Z" />
            </svg>
          </div>
        </div>

        {/* Messages */}
        <div
          ref={listRef}
          role="log"
          aria-live="polite"
          className="flex h-95 flex-col overflow-y-auto overscroll-contain px-3 py-3 md:h-105"
        >
          <div className="flex-1" />
          {messages.map((m, i) => {
            const isUser = m.role === 'user';
            const prevSame = messages[i - 1]?.role === m.role;
            const nextSame = messages[i + 1]?.role === m.role;
            // Real Messenger group radii (ishadeed.com reverse-engineering):
            // outer corners 18px, inner corners of a group 4px; 2px gap inside
            // a group, 7px between groups.
            const r = 18;
            const s = 4;
            const radius = isUser
              ? `${r}px ${prevSame ? s : r}px ${nextSame ? s : r}px ${r}px`
              : `${prevSame ? s : r}px ${r}px ${r}px ${nextSame ? s : r}px`;
            return (
              <div
                key={m.id}
                className={`flex items-end gap-2 ${isUser ? 'justify-end' : 'justify-start'} ${nextSame ? 'mb-0.5' : 'mb-1.75'}`}
              >
                {!isUser && (
                  <span className="w-7 shrink-0">
                    {!nextSame && (
                      <Image
                        src={avatar}
                        alt=""
                        width={28}
                        height={28}
                        frameClassName="block size-7 overflow-hidden rounded-full"
                        className="size-7 rounded-full object-cover"
                      />
                    )}
                  </span>
                )}
                <div
                  style={{
                    borderRadius: radius,
                    ...(isUser
                      ? {
                          // The signature Messenger effect: ONE viewport-fixed
                          // gradient shared by every sent bubble (bubbles are
                          // windows onto it). iOS Safari ignores `fixed` and
                          // falls back to a per-bubble gradient, still fine.
                          backgroundImage: 'linear-gradient(#00b2ff, #006aff)',
                          backgroundAttachment: 'fixed',
                        }
                      : {}),
                  }}
                  className={`max-w-[75%] px-3 py-2 text-[15px] leading-snug ${
                    isUser ? 'text-white' : 'bg-[#f0f0f0] text-[#050505]'
                  }`}
                >
                  {m.content || (
                    <span className="inline-flex items-center justify-center px-1 py-0.5">
                      <span
                        aria-hidden
                        className="size-4 animate-spin rounded-full"
                        style={{
                          background:
                            'conic-gradient(from 0deg, transparent 0 40deg, #00b2ff 120deg, #006aff 360deg)',
                          WebkitMask: 'radial-gradient(farthest-side, transparent calc(100% - 2.5px), #000 0)',
                          mask: 'radial-gradient(farthest-side, transparent calc(100% - 2.5px), #000 0)',
                        }}
                      />
                      <span className="sr-only">…</span>
                    </span>
                  )}
                </div>
              </div>
            );
          })}
          {showChips && (
            <div className="mt-2 flex flex-wrap justify-end gap-1.5">
              {suggestions.map((chip, i) => (
                <button
                  key={chip}
                  type="button"
                  onClick={() => send(chip)}
                  style={{ animationDelay: `${i * 80}ms` }}
                  className="animate-[clinicChipIn_0.25s_ease-out_backwards] rounded-full border border-[#0084ff]/40 bg-white px-3 py-1.5 text-[13px] font-medium text-[#0084ff] transition-transform duration-150 ease-out hover:bg-[#0084ff]/5 active:scale-[0.96]"
                >
                  {chip}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Input: Messenger pill */}
        <div className="flex items-center gap-2 border-t border-[#e5e5e5] px-3 py-2.5">
          <label htmlFor="clinic-chat-input" className="sr-only">
            {placeholder}
          </label>
          <input
            id="clinic-chat-input"
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                send(input);
              }
            }}
            placeholder={placeholder}
              disabled={readOnly || msgCount >= MAX_MESSAGES}
            className="min-h-10 flex-1 rounded-full bg-[#f0f0f0] px-4 text-[15px] text-[#050505] outline-none transition-colors duration-200 placeholder:text-[#90949c] focus-visible:ring-2 focus-visible:ring-[#0084ff]/30"
          />
          <button
            type="button"
            aria-label={placeholder}
            onClick={() => {
              if (readOnly) return;
              send(input);
              inputRef.current?.focus({ preventScroll: true });
            }}
            disabled={readOnly || isLoading || !input.trim() || msgCount >= MAX_MESSAGES}
            className="flex size-10 shrink-0 items-center justify-center rounded-full text-[#0084ff] transition-transform duration-150 ease-out hover:bg-[#0084ff]/10 active:scale-[0.96] disabled:opacity-40"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5">
              <path d="M2.4 20.4 22 12 2.4 3.6l-.01 6.53L16 12 2.39 13.87 2.4 20.4Z" />
            </svg>
          </button>
        </div>
      </div>
      <p className="mt-3 text-center text-xs leading-relaxed text-[#8a8a8a]">{note}</p>
    </div>
  );
}

// Niche landings import the same widget under a niche-neutral name.
export { ClinicChatDemo as NicheChatDemo };
