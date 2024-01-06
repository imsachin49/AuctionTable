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
const bidRoutes=require('./routes/bid');
const {convertTimeToTimestamp,convertTimeStampToTime}=require('./utils/timeConversions')

connectDB();
console.log(convertTimeStampToTime(1704522032000));

// MiddleWares..
app.use(express.json({limit: "16kb"}));
app.use(express.urlencoded({extended: true, limit: "16kb"}));
app.use(express.static("public"));
app.use(cookieParser());
app.use(cors());

// routers
app.use('/api/auth',authRoutes);
app.use('/api/player',playerRoutes);
app.use('/api/bid',bidRoutes);

app.listen(port,()=>{
    console.log(`Listening at port ${port}`);
});
