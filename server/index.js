const express=require('express');
const app=express();
const cors=require('cors');
const dotenv=require('dotenv')
dotenv.config();
const port=process.env.PORT || 3001;
const {connectDB}=require('./db/conn')
const cookieParser=require('cookie-parser');
const authRoutes=require('./routes/auth');
const playerRoutes=require('./routes/player');

connectDB();
// MiddleWares..
app.use(express.json({limit: "16kb"}));
app.use(express.urlencoded({extended: true, limit: "16kb"}));
app.use(express.static("public"));
app.use(cookieParser());
app.use(cors());

// console.log(new Date().getTime());

// routers
app.use('/api/auth',authRoutes);
app.use('/api/player',playerRoutes);

app.listen(port,()=>{
    console.log(`Listening at port ${port}`);
});
