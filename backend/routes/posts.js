const express = require('express');
const router = express.Router();
const postController = require('../controllers/postController');
const authMiddleware = require('../middleware/authMiddleware');

router.post('/', authMiddleware, postController.createPost);
router.get('/', postController.getAllPosts);

// === ADD THIS NEW ROUTE ===
// @route   GET /api/posts/user/:userId
router.get('/user/:userId', postController.getPostsByUserId);

// ... (keep the POST and GET routes)

// @route   DELETE api/posts/:id
// @desc    Delete a post
// @access  Private
router.delete('/:id', authMiddleware, postController.deletePost);

module.exports = router;