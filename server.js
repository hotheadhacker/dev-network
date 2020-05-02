const express = require('express');
const connectDB = require('./config/db');

const app = express();

//Connect DB
connectDB();

app.get('/', (req, res) => res.send('API Running!'));

// Define Routs

app.use('/api/users', require('./Routes/api/users'));
app.use('/api/auth', require('./Routes/api/auth'));
app.use('/api/post', require('./Routes/api/post'));
app.use('/api/profile', require('./Routes/api/profile'));

const PORT = process.env.PORT || 500;

app.listen(PORT, () => console.log(`Running on Port ${PORT}`));
