const express = require('express');
const restaurantsRouter = require('./routes/restaurants');
const app = express();

const logger = require('./middleware/logger');
const port = process.env.PORT || 8000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({extended:false}));

// Custom Middleware
app.use(logger);

// Routes
app.use('/api/restaurants',restaurantsRouter);

app.listen(port,'127.0.0.1',()=>{
console.log(`Listening to request on port ${port}`);
});