const express = require('express')
const mongoose = require('mongoose')
const DB_URL = `mongodb://localhost:27017/employ`
mongoose.connect(DB_URL)

const userRouter = require('./router/user')

const app = express()
app.all('*', function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    res.header('Access-Control-Allow-Methods', '*');
    // res.header('Content-Type', 'application/json;charset=utf-8');
    next();
});
app.use('/user',userRouter)

app.listen(5000,()=>{
    console.log('server is running at port:5000 !')
})



