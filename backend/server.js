const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');

require('dotenv').config();
const app = express();
connectDB();

app.use(cors());
app.use(express.json({ extended: false }));

app.get('/', (req, res) => res.send('API Running'));

// Define Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/posts', require('./routes/posts'));
app.use('/api/users', require('./routes/users')); // <-- Add this line

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));