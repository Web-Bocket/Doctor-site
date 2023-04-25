const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
  blogTitle: {
    type: String,
    required: true,
  },
  blogImage: {
    type: String,
    required: true,
  },
  blogPerson: {
    type: String,
    required: true,
  },
  blogDescription: {
    type: String,
    required: true,
  }
});

const Blog = mongoose.model('Blog', blogSchema);
module.exports = Blog;