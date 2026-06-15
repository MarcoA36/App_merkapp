import { apiRequest } from "./client";
import type { Category } from "../types";

export function fetchCategories() {
  return apiRequest<{ categories: Category[] }>("/categories");
}
