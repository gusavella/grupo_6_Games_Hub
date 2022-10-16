const express = require('express');
const path = require('path');

const app = express();

const publicPath = path.resolve(__dirname, './public');
app.use(express.static(publicPath));

app.listen(3030, () => {
    console.log("Server in port 3030 online.")
})

app.get('/login',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'./views/login.html'))
})

app.get('/',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'./views/main.html'))
})

app.get('/cart',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'./views/productCart.html'))
})

