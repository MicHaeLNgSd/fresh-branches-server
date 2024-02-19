const Book = require('../models/Book');

module.exports.getBooks = async (req, res) => {
  const books = await Book.getAll();
  res.send(books);
};

module.exports.getBook = async (req, res) => {
  const { id } = req.params;
  const books = await Book.getOne(Number(id));
  res.send(books);
};

module.exports.createBook = async (req, res) => {
  const newBook = await Book.create(req.book);
  res.send(newBook);
};

module.exports.updateBook = async (req, res) => {
  const {
    params: { id },
    body,
  } = req;
  const updatedBooks = await Book.update(Number(id), body);
  res.send(updatedBooks);
};

module.exports.deleteBook = async (req, res) => {
  const { id } = req.params;
  const deletedBook = await Book.delete(Number(id));
  res.send(deletedBook);
};
