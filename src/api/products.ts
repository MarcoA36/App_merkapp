import { apiRequest } from "./client";
import type { Product } from "../types";

export type ProductsResponse = {
  products: Product[];
  nextCursor: string | null;
  hasMore: boolean;
};

export function fetchProducts(params?: {
  brandId?: string;
  categoryId?: string;
  search?: string;
  cursor?: string | null;
  limit?: number;
  promotionalOnly?: boolean;
}) {
  const query = new URLSearchParams();
  if (params?.brandId) query.set("brandId", params.brandId);
  if (params?.categoryId) query.set("categoryId", params.categoryId);
  if (params?.search) query.set("search", params.search);
  if (params?.cursor) query.set("cursor", params.cursor);
  if (params?.limit) query.set("limit", String(params.limit));
  if (params?.promotionalOnly) query.set("promotionalOnly", "true");
  const suffix = query.toString() ? `?${query.toString()}` : "";
  return apiRequest<ProductsResponse>(`/products${suffix}`);
}

export function fetchProduct(id: string) {
  return apiRequest<{ product: Product }>(`/products/${id}`);
}
