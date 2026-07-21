export interface BlogAuthor {
  name: string;
  role?: string;
}

export interface BlogPostMeta {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  updated: string;
  readTime: string;
  author: BlogAuthor;
  tags: string[];
  cluster: string;
  locale: string;
  indexable: boolean;
  sources: string[];
  wordCount: number;
  coverImage: string;
  coverQuery?: string;
  coverCredit?: {
    credit: string;
    creditUrl: string;
    source: 'unsplash' | 'pexels';
    sourceUrl: string;
  };
}

export interface BlogPost extends BlogPostMeta {
  content: string;
}
