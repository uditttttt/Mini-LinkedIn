const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PostSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId, // This links the Post to a User
    ref: 'user', // The 'user' model
  },
  text: {
    type: String,
    required: true,
  },
  name: {
    // We store the user's name directly in the post
    // so we don't have to look it up every single time we display a post.
    type: String,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('post', PostSchema);