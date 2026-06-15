import { apiRequest } from "./client";
import type { Brand } from "../types";

export function fetchBrands() {
  return apiRequest<{ brands: Brand[] }>("/brands");
}
