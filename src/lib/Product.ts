import { ProductList } from "@/types/Product";
import api from "./api";
import { PaginationTypes, SuksesBlog } from "@/types/Blog";

const PREFIX_STRAPI_COLLECTION =
  process.env.NEXT_PUBLIC_STRAPI_PREFIX_COLLECTION || "sukses";

export async function getAllProduct(
  query: string
): Promise<{ productList: ProductList[]; pagination: PaginationTypes }>  {
  try {
    const res = await api.get(
      `/${PREFIX_STRAPI_COLLECTION}-products${query}`
    );
    return {
        productList: res.data.data,
        pagination: res.data.meta.pagination
    };
  } catch (error) {
    console.error(error);
    throw new Error("Error Fetching Data");
  }
}

export async function getProductCategory(): Promise<SuksesBlog[]> {
  try {
    const res = await api.get(
      `/${PREFIX_STRAPI_COLLECTION}-product-categories`
    );
    return res.data.data;
  } catch (error) {
    console.error(error);
    throw new Error("Error Fetching Data");
  }
}

