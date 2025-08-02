const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// @route   GET api/users/:userId
// @desc    Get user profile
router.get('/:userId', userController.getUserProfile);

module.exports = router;