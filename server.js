const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const product = require('./routes/product');
require('dotenv').config()
const port = process.env.PORT

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); 

app.use(express.static('public'));
app.use(product);

app.listen(port, () => console.log(`Server Running on Port ${port}`));