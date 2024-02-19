let books = [
  {
    id: 0,
    name: 'Harry Potter',
    author: 'J. Rowling',
    synopsis: 'the boy who lived come to die',
    pageCount: 452,
    price: 50,
    isAvaible: true,
  },
];

class Book {
  static async getAll() {
    return books;
  }
  static async getOne(id) {
    const book = books.find((b) => b.id === id);
    return book;
  }
  static async create(newData) {
    const newBook = { ...newData, id: books.length };
    books.push(newBook);
    return newBook;
  }

  static async update(id, newData) {
    books = books.map((b) => {
      if (b.id !== id) return b;
      const updatedBook = { ...b, ...newData };
      return updatedBook;
    });
    return await Book.getOne(id);
  }

  static async delete(id) {
    const deletedBook = await Book.getOne(id);
    books = books.filter((b) => b.id !== id);
    return deletedBook;
  }
}

module.exports = Book;
