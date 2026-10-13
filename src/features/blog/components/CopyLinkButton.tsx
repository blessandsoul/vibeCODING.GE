'use client'

import { useState } from 'react'
import { Ico } from '@/components/common/Ico'
import { cn } from '@/lib/utils'

export function CopyLinkButton() {
    const [copied, setCopied] = useState(false)

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(window.location.href)
            setCopied(true)
            setTimeout(() => setCopied(false), 2000)
        } catch {
            // fallback
            const input = document.createElement('input')
            input.value = window.location.href
            document.body.appendChild(input)
            input.select()
            document.execCommand('copy')
            document.body.removeChild(input)
            setCopied(true)
            setTimeout(() => setCopied(false), 2000)
        }
    }

    return (
        <button
            onClick={handleCopy}
            className={cn(
                "inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition duration-200 cursor-pointer",
                "border",
                copied
                    ? "bg-green-500/10 border-green-500/30 text-green-600"
                    : "bg-white border-[#e5e5e5] text-[#525252] hover:text-neutral-900 hover:border-[#e5e5e5]"
            )}
            aria-label="Copy link to clipboard"
        >
            {copied ? (
                <>
                    <Ico name="solar:check-read-bold-duotone" className="w-3.5 h-3.5" />
                    Copied!
                </>
            ) : (
                <>
                    <Ico name="solar:link-bold-duotone" className="w-3.5 h-3.5" />
                    Copy link
                </>
            )}
        </button>
    )
}
