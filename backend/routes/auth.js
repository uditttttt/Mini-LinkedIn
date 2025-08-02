const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const authMiddleware = require('../middleware/authMiddleware'); // 1. Import middleware

// @route   POST api/auth/register
// @desc    Register a user
router.post('/register', authController.registerUser);

// @route   POST api/auth/login
// @desc    Login a user
router.post('/login', authController.loginUser);

// 2. Add the new GET route
// @route   GET api/auth
// @desc    Get logged-in user data
router.get('/', authMiddleware, authController.getLoggedInUser);

module.exports = router;