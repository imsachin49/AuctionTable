export const fetchProducts = async () => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/player`);
  const products = await response.json();
  return products;
}

export const fetchProduct = async (id:string) => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/player/${id}`);
  const product = await response.json();
  return product;
}