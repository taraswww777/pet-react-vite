export const productList = Array.from({ length: 10 }).map((_, i) => ({
  id: `${i}`,
  name: `product_${i}`,
}));