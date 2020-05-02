const express = require('express');
const connectDB = require('./config/db');

const app = express();

//Connect DB
connectDB();

app.get('/', (req, res) => res.send('API Running!'));

const PORT = process.env.PORT || 500;

app.listen(PORT, () => console.log(`Running on Port ${PORT}`));
