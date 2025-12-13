import type { MDXRemoteSerializeResult } from "next-mdx-remote";

export interface BlogCategory {
  id: number;
  name: string;
  slug: string;
  created_at: string;
  suksesmulya_blogs: Blog[];
}

export interface BlogAuthor {
  id: number;
  name: string;
  image_url: string;
  image_alt: string;
}

export interface BlogTags {
  id: number;
  name: string;
  slug: string;
  created_at: string;
  suksesmulya_blogs: Blog[];
}

export interface Blog {
  id: number;
  title: string;
  slug: string;
  image_url: string;
  image_alt: string;
  content: string | MDXRemoteSerializeResult<Record<string, unknown>>;
  meta_description: string;
  created_at: string;
  author: BlogAuthor;
  suksesmulya_blog_categories: BlogCategory[];
  suksesmulya_blog_tags: BlogTags[];
}

export interface BlogCard {
  meta_description: string;
  image_url: string;
  image_alt: string;
  created_at: string;
  title: string;
  slug: string;
}

export interface PaginationTypes {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
}

export interface BlogResponse {
  id: number;
  documentId: string;
  title: string;
  image_url: string;
  image_alt: string;
  slug: string;
  content: string;
  meta_description: string;
  meta_keyword: string;
  createdAt: string;
  updatedAt: Date;
  publishedAt: Date;
  sukses_blog_authors: SuksesBlog[];
  sukses_blog_categories: SuksesBlog[];
}

export interface SuksesBlog {
  id: number;
  documentId: string;
  name: string;
  image_url?: string;
  image_alt?: string;
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
  slug: string;
}
