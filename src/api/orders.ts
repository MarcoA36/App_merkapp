import { apiRequest } from "./client";
import type { Order } from "../types";

export function checkout(token: string, addressId: string) {
  return apiRequest<{ order: Order }>("/orders/checkout", {
    method: "POST",
    token,
    body: JSON.stringify({ addressId })
  });
}

export function fetchMyOrders(token: string) {
  return apiRequest<{ orders: Order[] }>("/me/orders", { token });
}

export function cancelMyOrder(token: string, orderId: string) {
  return apiRequest<{ order: Order }>(`/me/orders/${orderId}/cancel`, {
    method: "PATCH",
    token
  });
}
