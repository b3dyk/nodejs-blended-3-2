const { Schema, model } = require("mongoose");

const bookSchema = new Schema({
  title: {
    type: String,
    required: [true, "Missing title"],
  },
  author: {
    type: String,
    required: [true, "Missing author"],
  },
  image: {
    type: String,
    required: [true, "Missing image"],
  },
  plot: {
    type: String,
    required: [true, "Missing plot"],
  },
  isRead: {
    type: Boolean,
    default: false,
  },
});

const Book = model("Book", bookSchema);

module.exports = Book;
