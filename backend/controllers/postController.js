const Post = require('../models/Post');
const User = require('../models/User');

// Function to create a post
exports.createPost = async (req, res) => {
    try {
        const user = await User.findById(req.user.id).select('-password');
        const newPost = new Post({
            text: req.body.text,
            name: user.name,
            user: req.user.id,
        });
        const post = await newPost.save();
        res.json(post);
    } catch (err) {
        console.error('---! ERROR IN CREATE POST !---', err);
        res.status(500).send('Server Error');
    }
};

// Function to get all posts for the main feed
exports.getAllPosts = async (req, res) => {
    try {
        const posts = await Post.find().sort({ date: -1 });
        res.json(posts);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};

// Function to get all posts for a specific user's profile
exports.getPostsByUserId = async (req, res) => {
    try {
        const posts = await Post.find({ user: req.params.userId }).sort({ date: -1 });
        res.json(posts);
    } catch (err) {
        console.error("---! ERROR IN GET POSTS BY USER !---", err);
        res.status(500).send('Server Error');
    }
};

// Function to delete a post
exports.deletePost = async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        if (!post) {
            return res.status(404).json({ msg: 'Post not found' });
        }
        if (post.user.toString() !== req.user.id) {
            return res.status(401).json({ msg: 'User not authorized' });
        }
        await post.deleteOne();
        res.json({ msg: 'Post removed' });
    } catch (err) {
        console.error('---! ERROR IN DELETE POST !---', err);
        if (err.kind === 'ObjectId') {
            return res.status(404).json({ msg: 'Post not found' });
        }
        res.status(500).send('Server Error');
    }
};