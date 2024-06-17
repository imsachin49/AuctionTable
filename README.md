# AuctionTable: Real-Time Auctions Platform
    AuctionTable is a real-time auction platform that allows users to participate in live auctions, place bids, and monitor the status of their bids in real-time. The platform is designed to provide a seamless and engaging user experience, with instant updates on bid statuses and dynamic bid adjustments. AuctionTable also features secure authentication, robust security measures, and social sharing capabilities, making it a comprehensive and user-friendly auction solution.
      
## 💡 Key Features:
   - Real-Time Updates
   - Secure Authentication
   - Atomic Operations (DB Transactions)
   - Dynamic Bid Adjustments
   - Instant Notifications
   - Seamless User Experience
   - Robust Security
   - Social Sharing

## ⚙️ Tech Stack
    1. Next-14
    2. Node.js
    3. Express.js
    4. MongoDB
    5. Socket.io/Socket.io-client
    6. Next-Auth
    7. SWR Hook
    8. Tailwind CSS
    9. Shadow-UI
    10. React Context
   
## 📷 ScreenShots
![page-1](https://github.com/imsachin49/AuctionTable/assets/108334265/72fb2222-c320-4469-bace-558414f93180)
![page-2](https://github.com/imsachin49/AuctionTable/assets/108334265/d7f371dd-1257-4f79-8d6c-d0b241e1c0f6)
![page-3](https://github.com/imsachin49/AuctionTable/assets/108334265/cecca633-f451-4790-8d78-e783871eafd9)
![page-4](https://github.com/imsachin49/AuctionTable/assets/108334265/e56986e1-ee85-4935-abe7-02bc29f0f88d)

## How to run the project
Clone the repository=> `git clone https://github.com/imsachin49/AuctionTable.git`   
Change the directory to the project folder=> `cd AuctionTable`

### For Backend
- Change the directory to the backend folder=> `cd server`  
- Install the dependencies=> `npm install`
- Add the environment variables in a .env file.
- Run the backend=> `npm start`
  ### .env file for backend
      PORT=''
      MONGO_URI=''
      JWT_SECRET=''

### For Frontend
- Change the directory to the frontend folder=> `cd client`
- Install the dependencies=> `npm install`
- Add the environment variables in a .env file.
- Run the frontend=> `npm run dev`
  ### .env file for frontend
      GITHUB_ID=''
      GITHUB_SECRET=''
      GOOGLE_CLIENT_ID=''
      GOOGLE_CLIENT_SECRET=''
      NEXT_PUBLIC_BACKEND_URL=''
      NEXT_PUBLIC_SOCKET_URL=''
      NEXTAUTH_SECRET=''

## Things to do(Future Scope)
1. Add Queues for the AuctionEnd and AuctionStart.
2. Explore Pub/Sub for the same.
3. Utilise redis for making the Auction more Real-time and Scalable.
4. Payement by Winner Once Auction Ends & communication via Email/Notification.
5. Sidebar Pages to be added.