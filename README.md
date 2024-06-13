## AuctionTable  

## Things to do
1. Add Queues for the AuctionEnd and AuctionStart.
2. Explore Pub/Sub for the same.
3. Utilise redis for making the Auction more Real-time and Scalable.
4. Check the timing issue in the AuctionEnd.
5. Adding live auctions at the landing page.
6. Implement Search Suggestionsm functionality.
7. Make Responsive.
8. Add more features like sorting, filtering, etc.
9. Change img src to next/image.
10. Will time automatically update on expiry of the auction.
11. React Infinite Scroll.

## How to run the project
   Clone the repository=> `git clone https://github.com/imsachin49/AuctionTable.git`   
   Change the directory to the project folder=> `cd AuctionTable`

### For Backend
    1. Change the directory to the backend folder=> `cd server`
    2. Install the dependencies=> `npm install`
    3. Add the environment variables in a .env file.
    4. Run the backend=> `npm start`

### For Frontend
    1. Change the directory to the frontend folder=> `cd client`
    2. Install the dependencies=> `npm install`
    3. Add the environment variables in a .env.local file.
    4. Run the frontend=> `npm run dev`

### .env file for backend
```
PORT=''
MONGO_URI=''
JWT_SECRET=''
```

### .env file for frontend
```
NEXT_PUBLIC_BACKEND_URL=''
GITHUB_ID=''
GITHUB_SECRET=''
GOOGLE_CLIENT_ID=''
GOOGLE_CLIENT_SECRET=''
NEXTAUTH_SECRET=''
```

## Features
    coming soon!

## Tech Stack
    1. Next.js
    2. Next-Auth
    3. MongoDB
    4. Socket.io
    5. React.js
    6. Node.js
    7. Express.js
    8. Tailwind CSS
    9. Axios
    10. Moment.js
    11. React-Toastify
    12. React-Icons