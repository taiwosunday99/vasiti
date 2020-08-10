const express = require('express');

const http = require('http');

const cors = require('cors');

const path = require('path');

const bodyParser = require('body-parser');

const mongoose = require('mongoose');

const app = express();

const routeProduct = require('./routes/productRoute');

mongoose.connect("mongodb+srv://vasiti_user:vasiti12345@cluster0-jsgc7.mongodb.net/avios?retryWrites=true&w=majority")
.then(() => {
    console.log('connected to database');
}).catch((err) => {
    console.log('error connection', err)
})
app.use(bodyParser.json());

app.use(cors());

// app.use(express.static(path.join(__dirname, 'images')));
app.use("/images", express.static(path.join(__dirname, 'images')));

const server = http.createServer(app);

const port = process.env.PORT || 3000;

server.listen(port, () => {
    console.log('app is running on port ', port);
})

app.use('', routeProduct);