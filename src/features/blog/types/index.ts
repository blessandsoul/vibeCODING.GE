export interface Author {
    name: string
    avatar?: string
    role?: string
}

export interface CoverCredit {
    credit: string
    creditUrl: string
    source: 'generated' | 'unsplash' | 'pexels'
    sourceUrl: string
}

export interface BlogPost {
    id: string
    slug: string
    title: string
    excerpt: string
    content: string // HTML or Markdown
    coverImage: string
    coverCredit?: CoverCredit
    coverQuery?: string // English search query for auto-fetching cover photos
    date: string // ISO date string
    // Set this when you REVISE a published post. Article JSON-LD used to hard-wire
    // dateModified to `date`, so refreshing an evergreen piece emitted no freshness
    // signal at all unless you moved its publish date, which reshuffles the blog index.
    // Leave it unset on a new post: dateModified then falls back to `date`.
    updated?: string // ISO date string
    readTime: string
    author: Author
    tags: string[]
    locale?: string // 'ka' | 'en' | 'ru'
}
