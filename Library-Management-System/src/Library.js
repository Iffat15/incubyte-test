const Book = require('./Book');

class Library {
  constructor() {
    this.books = [];
  }

  addBook(book) {
    this.books.push(book);
  }

  borrowBook(id) {
    const book = this.books.find((b) => b.id === id && b.isAvailable);
    if (!book) {
      throw new Error('Book not found or unavailable');
    }
    book.isAvailable = false;
    return true;
  }

  returnBook(id) {
    const book = this.books.find((b) => b.id === id && !b.isAvailable);
    if (!book) {
      throw new Error('Book not found or not borrowed');
    }
    book.isAvailable = true;
  }

  viewAvailableBooks() {
    return this.books.filter((b) => b.isAvailable);
  }
}

module.exports = Library;
