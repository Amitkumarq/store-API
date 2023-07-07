require('dotenv').config();
require('express-async-errors');

const express = require('express');
const mongoose = require('mongoose');
const app = express();

const connectDB = require('./db/connect');
mongoose.set('strictQuery', true);

const errorHandlerMiddelware = require('./middleware/error-handler');
const notFoundMiddleware = require('./middleware/not-found');

const productsRouter = require('./routes/products');
app.use(express.json());

// Router
app.use('/api/v1/products', productsRouter);

app.use(errorHandlerMiddelware);
app.use(notFoundMiddleware);

const port = process.env.PORT || 8080;

const start = async () => {
  try {
    // connectDB
    await connectDB();
    app.listen(port, () => console.log(`Server is listening port ${port}...`));
  } catch (error) {
    console.log(error);
  }
};

start();
