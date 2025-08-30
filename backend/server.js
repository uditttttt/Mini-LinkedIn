// const express = require('express');
// const connectDB = require('./config/db');
// const cors = require('cors');

// require('dotenv').config();
// const app = express();
// connectDB();

// app.use(cors());
// app.use(express.json({ extended: false }));

// app.get('/', (req, res) => res.send('API Running'));

// // Define Routes
// app.use('/api/auth', require('./routes/auth'));
// app.use('/api/posts', require('./routes/posts'));
// app.use('/api/users', require('./routes/users')); // <-- Add this line

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`Server started on port ${PORT}`));


const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');

// Note: You do not need require('dotenv').config() on Vercel.
// You will set environment variables in the project settings instead.
const app = express();

// Connect to the database when the serverless function initializes.
connectDB();

// IMPORTANT: Add CORS options to allow your Render frontend to connect.
// Replace 'https://your-frontend-app.onrender.com' with your actual frontend URL.
const corsOptions = {
  origin: process.env.FRONTEND_URL || 'http://localhost:3000', // Use environment variable for production
};

app.use(cors(corsOptions));
app.use(express.json({ extended: false }));

app.get('/', (req, res) => res.send('API Running'));

// Define Routes (No changes here)
app.use('/api/auth', require('./routes/auth'));
app.use('/api/posts', require('./routes/posts'));
app.use('/api/users', require('./routes/users'));

// REMOVED ----
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
// ----

// ADDED ----
// Export the Express app for Vercel to use as a serverless function.
module.exports = app;
// ----