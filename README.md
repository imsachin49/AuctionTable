## AuctionTable  

## Things to do
#### Login Delay Fix
#### Sidebar Links to be added

1. Add Queues for the AuctionEnd and AuctionStart.
2. Explore Pub/Sub for the same.
3. Utilise redis for making the Auction more Real-time and Scalable.
4. Change similar images from the server
5. Contact Winner Once Auction Ends via Email/Notification.(Future Scope)

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

## ⚙️ Tech Stack
    1. Next.js 14
    2. Next-Auth
    3. MongoDB
    4. Socket.io
    5. React.js
    6. Node.js
    7. Express.js
    8. Tailwind CSS
    9. Moment.js
    10. React-Toastify
    11. React-Icons