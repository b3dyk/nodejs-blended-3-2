const { Router } = require("express");

const {
  getBooks,
  addBook,
  getBookById,
  deleteBook,
  updateBook,
  patchIsRead,
} = require("../controllers/booksController");
const {
  checkBody,
  checkHasBody,
  checkIsRead,
} = require("../middleware/booksMiddleware");

const booksRouter = Router();

booksRouter.route("/").get(getBooks).post(checkBody, addBook);

booksRouter
  .route("/:bookId")
  .get(getBookById)
  .put(checkHasBody, updateBook)
  .delete(deleteBook);

booksRouter.route("/:bookId/isRead").patch(checkIsRead, patchIsRead);

module.exports = booksRouter;
