const express=require('express')
const app=express()
const port=process.env.PORT||3001
const fetchTrending=require('./github')
app.get('/trending',async(req,res)=>{res.json(await fetchTrending())})
app.listen(port)
