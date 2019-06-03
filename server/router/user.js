const express = require('express')
const Router = express.Router()
Router.get('/login',(req,res)=>{
    res.send({
        a:1
    })
})

Router.post('/login',(req,res)=>{
    res.send({
        name:'aaa',
        type:'boss'
    })
})


Router.post('/register',(req,res)=>{
    res.send({
        aa:1
    })
})

module.exports = Router