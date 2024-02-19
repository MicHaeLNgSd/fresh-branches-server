const yup = require('yup');

module.exports.BOOKS_SCHEME = yup.object({
  name: yup.string().required(),
  author: yup.string().required(),
  synopsis: yup.string(),
  pageCount: yup.number().required(),
  price: yup.number().required(),
  isAvaible: yup.boolean().required(),
});
