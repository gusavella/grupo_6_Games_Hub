const express = require('express');
const path = require('path');

const app = express();

const publicPath = path.resolve(__dirname, './public');
app.use(express.static(publicPath));

app.listen(3030, () => {
    console.log("Server in port 3030 online.")
})


app.get(('/terraria'), (req, res) => res.sendFile(path.resolve(__dirname, ('./views/productDetail.html'))))
app.get(('/login'), (req, res) => res.sendFile(path.resolve(__dirname, ('./views/login.html'))))
app.get(('/register'), (req, res) => res.sendFile(path.resolve(__dirname, ('./views/register.html'))))
app.get(('/cart'), (req, res) => res.sendFile(path.resolve(__dirname, ('./views/productCart.html'))))

