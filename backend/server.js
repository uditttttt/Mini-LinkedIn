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

// for vercel deployment

// const express = require('express');
// const connectDB = require('./config/db');
// const cors = require('cors');

// // This loads your .env file variables for local development.
// // On Vercel and Render, you will set these variables in the dashboard instead.
// require('dotenv').config();

// const app = express();

// // Connect to the database.
// connectDB();

// // --- CORS Configuration ---
// // This setup allows requests from your live frontend and multiple local development ports.
// const allowedOrigins = [
//   process.env.FRONTEND_URL, // Your live frontend URL (from Vercel/Render dashboard)
//   'http://localhost:3000',
//   'http://localhost:5173', // A common port for Vite/React dev servers
//   'http://localhost:5174'
// ];

// const corsOptions = {
//   origin: function (origin, callback) {
//     // Allow requests with no origin (like mobile apps, curl, or server-to-server)
//     if (!origin) return callback(null, true);
    
//     if (allowedOrigins.indexOf(origin) === -1) {
//       const msg = 'The CORS policy for this site does not allow access from the specified Origin.';
//       return callback(new Error(msg), false);
//     }
//     return callback(null, true);
//   }
// };

// app.use(cors(corsOptions));
// app.use(express.json({ extended: false }));

// // --- API Routes ---
// app.get('/', (req, res) => res.send('API Running'));
// app.use('/api/auth', require('./routes/auth'));
// app.use('/api/posts', require('./routes/posts'));
// app.use('/api/users', require('./routes/users'));

// // --- Server Start Logic ---
// // This part is for Render and your local machine.
// // Vercel ignores this and uses the module export below.
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

// // --- Vercel Export ---
// // This line allows Vercel to use your Express app as a serverless function.
// module.exports = app;


//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');

// This loads your .env file variables for local development.
require('dotenv').config();

const app = express();

// Connect to the database.
connectDB();

// --- NEW ROBUST CORS Configuration ---
const allowedOrigins = [
  'http://localhost:3000',
  'http://localhost:5173',
  'http://localhost:5174'
];

const corsOptions = {
  origin: function (origin, callback) {
    // The 'origin' is the URL of the site making the request (e.g., your frontend)
    
    // If the origin is in our allowed list (for localhost) OR if it's a request from our Render frontend...
    if (!origin || allowedOrigins.indexOf(origin) !== -1 || origin.endsWith('.onrender.com')) {
      // ...then allow the request.
      callback(null, true);
    } else {
      // ...otherwise, block it.
      callback(new Error('Not allowed by CORS'));
    }
  }
};

app.use(cors(corsOptions));
// --- END OF NEW CODE ---

app.use(express.json({ extended: false }));

// --- API Routes ---
app.get('/', (req, res) => res.send('API Running'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/posts', require('./routes/posts'));
app.use('/api/users', require('./routes/users'));

// --- Server Start Logic (for Render/local) ---
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

// --- Vercel Export ---
module.exports = app;

