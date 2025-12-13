declare module "next-mdx-remote/serialize";
declare module "next-mdx-remote" {
  export interface MDXRemoteSerializeResult<T = Record<string, unknown>> {
    compiledSource: string;
    frontmatter?: T;
  }
}

declare module "next-mdx-remote/serialize";
