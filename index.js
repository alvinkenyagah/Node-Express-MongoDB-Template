const express = require('express');
const app = express();
const Product = require('./models/products.model.js');
const mongoose = require('mongoose');
const productRoute = require('./routes/product.route.js');
require('dotenv').config();  // Load environment variables

app.use(express.json());

// FORMURLENCODED SUPPORT
app.use(express.urlencoded({ extended: false }));

// ROUTES
app.use("/api/products", productRoute);

app.get('/', function (req, res) {
  res.send('Hello World');
});


const mongoURI = process.env.MONGODB_URI;

mongoose.connect(mongoURI)
  .then(() => {
    console.log('Connected to database!');
    app.listen(3000, () => {
      console.log("Server running on port 3000");
    });
  })
  .catch(() => console.log("Failed to connect to database!"));
