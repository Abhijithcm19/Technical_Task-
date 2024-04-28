const express = require('express');
const logger = require('./utils/logger'); 
const errorHandler = require('./middleware/errorHandler');
const dotenv = require("dotenv").config();
const connectDb = require("./config/dbConnection");
const imageRouter = require('./routes/imageRouter');
const cors = require('cors');

connectDb(); // Connecting to the database
const app = express();

app.use(cors());
app.use(express.json())
app.use('/api.snapshow.com', imageRouter);
app.use(errorHandler);

// Middleware to log incoming requests
app.use((req, res, next) => {
  logger.info(`${req.method} ${req.url}`);
  next();
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  logger.info(`Server is running on port ${PORT}`);
});

