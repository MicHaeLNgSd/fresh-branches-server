const express = require('express');
const {
  getBooks,
  getBook,
  createBook,
  updateBook,
  deleteBook,
} = require('../controllers/bookController');
const { validateBookMW } = require('../middlewares/book.mw');
const bookRouter = express.Router();

bookRouter.get('/', getBooks);
bookRouter.get('/:id', getBook);
bookRouter.post('/', validateBookMW, createBook);
bookRouter.put('/:id', updateBook);
bookRouter.delete('/:id', deleteBook);

module.exports = bookRouter;
