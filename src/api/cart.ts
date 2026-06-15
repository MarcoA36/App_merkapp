import { apiRequest } from "./client";
import type { Cart } from "../types";

export function fetchCart(token: string) {
  return apiRequest<{ cart: Cart }>("/cart", { token });
}

export function addCartItem(token: string, productId: string, quantity = 1) {
  return apiRequest<{ cart: Cart }>("/cart/items", {
    method: "POST",
    token,
    body: JSON.stringify({ productId, quantity })
  });
}

export function updateCartItem(token: string, productId: string, quantity: number) {
  return apiRequest<{ cart: Cart }>(`/cart/items/${productId}`, {
    method: "PUT",
    token,
    body: JSON.stringify({ quantity })
  });
}

export function removeCartItem(token: string, productId: string) {
  return apiRequest<{ cart: Cart }>(`/cart/items/${productId}`, {
    method: "DELETE",
    token
  });
}
