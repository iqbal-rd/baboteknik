export interface ProductList {
  id: number;
  documentId: string;
  name: string;
  image: string[];
  description: string;
  best_product: boolean;
  price: number;
  slug: string;
  stock: number;
  review_count: number;
  meta_description: string;
  meta_keyword: string;
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
  sukses_product_category: SuksesProductCategory;
  sukses_brand: SuksesBrand;
}

export interface SuksesBrand {
  id: number;
  documentId: string;
  name: string;
  image_url: string;
  image_alt: string;
  priority: number;
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
}

export interface SuksesProductCategory {
  includes(arg0: string): unknown;
  id: number;
  documentId: string;
  name: string;
  slug: string;
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
}
