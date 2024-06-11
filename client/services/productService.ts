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

export const fetchBiddingHistory = async (id:string) => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/player/${id}/bids`);
  const biddingHistory = await response.json();
  return biddingHistory;
}

export const searchPlayers= async (searchTerm:string) => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/player/search/all?name=${searchTerm}`);
  const players = await response.json();
  return players;
}