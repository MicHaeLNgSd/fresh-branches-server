const { BOOKS_SCHEME } = require('../validation/bookSchema');

module.exports.validateBookMW = async (req, res, next) => {
  try {
    const validatedBook = await BOOKS_SCHEME.validate(req.body);
    req.book = validatedBook;
    next();
  } catch (err) {
    next(err.message);
  }
};
