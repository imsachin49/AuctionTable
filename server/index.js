const express=require('express');
const app=express();
const dotenv=require('dotenv')
dotenv.config();
const port=process.env.PORT || 3001;
const {connectDB}=require('./db/conn')
const authRoutes=require('./routes/auth');
const cookieParser=require('cookie-parser');

connectDB();

// MiddleWares..
app.use(express.json({limit: "16kb"}))
app.use(express.urlencoded({extended: true, limit: "16kb"}))
app.use(express.static("public"))
app.use(cookieParser())

// router
app.use('/api/auth',authRoutes);

app.get('/',(req,res)=>{
    res.status(200).json({"message":"Hello World"});
})

app.listen(port,()=>{
    console.log(`Listening at port ${port}`);
});
