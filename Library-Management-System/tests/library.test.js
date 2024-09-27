const Library = require('../src/Library');
const Book = require('../src/Book');

describe('Library Management System', () => {
  let library;
  let book;

  beforeEach(() => {
    library = new Library();
    book = new Book('123456789', 'Clean Code', 'Robert C. Martin', 2008);
  });

  test('should add a book to the library', () => {
    library.addBook(book);
    expect(library.viewAvailableBooks().length).toBe(1);
    expect(library.viewAvailableBooks()[0].title).toBe('Clean Code');
  });

  test('should allow borrowing an available book', () => {
    library.addBook(book);
    expect(library.borrowBook('123456789')).toBe(true);
    expect(library.viewAvailableBooks().length).toBe(0);
  });

  test('should not allow borrowing a non-existent book', () => {
    expect(() => library.borrowBook('999999999')).toThrow('Book not found or unavailable');
  });

  // test('should allow returning a borrowed book', () => {
  //   library.addBook(book);
  //   library.borrowBook('123456789');
  //   library.returnBook('123456789');
  //   expect(library.viewAvailableBooks().length).toBe(1);
  // });
});
