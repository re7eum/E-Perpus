import { LibraryController } from "./controllers/LibraryController.js";
import { BookForm } from "./views/BookForm.js";
import { BookList } from "./views/BookList.js";

// Initialize components
const bookForm = new BookForm();
const bookList = new BookList();
const libraryController = new LibraryController(bookForm, bookList);

// Render the book form with the addBook method
bookForm.render(libraryController.addBook.bind(libraryController));

// Render the book list with deleteBook and editBook methods
bookList.render(
  libraryController.books,
  libraryController.deleteBook.bind(libraryController),
  libraryController.editBook.bind(libraryController)
);

// Set up theme toggle functionality
document
  .getElementById("theme-toggle")
  .addEventListener("click", () => libraryController.toggleTheme());

// Initialize the theme from localStorage or default
libraryController.initTheme();

document.getElementById("search-input").addEventListener("input", (e) => {
  const query = e.target.value;
  libraryController.searchBooks(query);
});
