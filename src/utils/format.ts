export function formatMoney(value: number) {
  return `$${value.toLocaleString("es-AR")}`;
}

export function stockLabel(stock: number) {
  if (stock <= 0) return "Sin stock";
  if (stock <= 5) return `Quedan ${stock}`;
  return "Disponible";
}

export function discountLabel(price: number, effectivePrice: number) {
  if (effectivePrice >= price) return null;

  const discount = Math.round(((price - effectivePrice) / price) * 100);
  return discount > 0 ? `${discount}% OFF` : null;
}
