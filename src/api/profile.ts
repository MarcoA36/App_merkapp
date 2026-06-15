import { apiRequest } from "./client";
import type { Address, AddressInput } from "../types";

export function fetchAddresses(token: string) {
  return apiRequest<{ addresses: Address[] }>("/me/addresses", { token });
}

export function createAddress(token: string, input: AddressInput) {
  return apiRequest<{ address: Address }>("/me/addresses", {
    method: "POST",
    token,
    body: JSON.stringify(input)
  });
}
