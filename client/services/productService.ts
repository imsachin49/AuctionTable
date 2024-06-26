const apiUrl=process.env.NEXT_PUBLIC_BACKEND_URL;

export const fetchProducts = async () => {
  const response = await fetch(`${apiUrl}/api/player`);
  const products = await response.json();
  return products;
}

export const fetchProduct = async (id:string) => {
  const response = await fetch(`${apiUrl}/api/player/${id}`);
  const product = await response.json();
  return product;
}

export const fetchBiddingHistory = async (id:string) => {
  const response = await fetch(`${apiUrl}/api/player/${id}/bids`);
  const biddingHistory = await response.json();
  return biddingHistory;
}

export const searchPlayers= async (searchTerm:string) => {
  const response = await fetch(`${apiUrl}/api/player/search/all?name=${searchTerm}`);
  const players = await response.json();
  return players;
}

export const getTopXOngoingAuctions= async () => {
  const response = await fetch(`${apiUrl}/api/player/top/ongoing?x=${3}`);
  const players = await response.json();
  return players;
}

export const getAllBidsByUser= async (userId:string) => {
  const response = await fetch(`${apiUrl}/api/player/${userId}/bids/all`);
  const bids = await response.json();
  return bids;
}

export const getUserPlayers= async (userId:string) => {
  const response = await fetch(`${apiUrl}/api/player/${userId}/user/all`);
  const players = await response.json();
  return players;
}