import api from "./api";
import { Blog, BlogCategory, BlogResponse, PaginationTypes, SuksesBlog } from "@/types/Blog";
import { formatDate } from "./utils";

const PREFIX_STRAPI_COLLECTION =
  process.env.NEXT_PUBLIC_STRAPI_PREFIX_COLLECTION || "sukses";

export async function getAllBlogs(
  query: string
): Promise<{ blogs: Blog[]; pagination: PaginationTypes }> {
  try {
    const res = await api.get(
      `/${PREFIX_STRAPI_COLLECTION}-blogs?${query.toString()}`
    );
    
    return {
      blogs: res.data.data,
      pagination: res.data.meta.pagination,
    };
  } catch (error) {
    console.error(error);
    throw new Error("Error Fetching Data");
  }
}

export async function getBlog(query: string): Promise<{ blogs: Blog[] }> {
  try {
    const res = await api.get(
      `/${PREFIX_STRAPI_COLLECTION}-blogs?${query.toString()}`
    );
    const blogs = res.data.data.map((blog: BlogResponse) => ({
      id: blog.id,
      title: blog.title,
      slug: blog.slug,
      content: blog.content,
      meta_description: blog.meta_description,
      image_url: blog.image_url,
      image_alt: blog.image_alt,
      created_at: formatDate(blog.createdAt),
      author: {
        name: blog.sukses_blog_authors[0]?.name || "",
        image_url: blog.sukses_blog_authors[0]?.image_url || null,
        image_alt: blog.sukses_blog_authors[0]?.image_alt || "",
      },
      categories: blog.sukses_blog_categories.map((category: SuksesBlog) => ({
        name: category.name,
        slug: category.slug,
      })),
    }));
    return {
      blogs,
    };
  } catch (error) {
    console.error(error);
    throw new Error("Error Fetching Data");
  }
}

export async function getBlogCategory(): Promise<BlogCategory[]> {
  try {
    const res = await api.get(
      `/${PREFIX_STRAPI_COLLECTION}-blog-categories`
    );
    return res.data.data;
  } catch (error) {
    console.error(error);
    throw new Error("Error Fetching Data");
  }
}
