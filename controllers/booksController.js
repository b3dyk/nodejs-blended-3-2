const Book = require("../models/bookModel");

const getBooks = async (req, res) => {
  try {
    const books = await Book.find();

    res.status(201).json(books);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server error" });
  }
};

const addBook = async (req, res) => {
  try {
    const book = await Book.create(req.body);
    res.status(200).json(book);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

const getBookById = async (req, res) => {
  try {
    const { bookId } = req.params;
    const book = await Book.findById(bookId);
    res.status(200).json(book);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

const deleteBook = async (req, res, next) => {
  try {
    const { bookId } = req.params;

    const deletedBook = await Book.findByIdAndDelete(bookId);

    if (!deletedBook)
      return res.status(404).json({ message: "Book not found" });

    res.status(200).json({ message: "Book deleted" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server error" });
  }
};

const updateBook = async (req, res) => {
  try {
    const { bookId } = req.params;

    const book = await Book.findByIdAndUpdate(bookId, req.body, { new: true });

    if (!book) return res.status(404).json({ message: "Book not found" });

    res.status(200).json(book);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server error" });
  }
};

const patchIsRead = async (req, res) => {
  try {
    const { bookId } = req.params;

    const book = await Book.findByIdAndUpdate(bookId, req.body, { new: true });

    res.status(200).json(book);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = {
  getBooks,
  addBook,
  getBookById,
  deleteBook,
  updateBook,
  patchIsRead,
};
