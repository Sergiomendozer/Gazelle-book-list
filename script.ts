// Book_elements Class: will be used to create a book object
class book_elements {
  title: String;
  author: String;
  isbn: String;
  constructor(title: String, author: String, isbn: String) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }
}
//table Class: will be used to create a table objects to then display book list
class table {
  static display_book_list() {
    //grabs books from local storage to display in table later
    const books = storage.get_books();
    //! below was used for testing purposes
    // const list_of_books: { title: String; author: String; isbn: String }[] = [
    //   {
    //     title: "The Hobbit",
    //     author: "J.R.R. Tolkien",
    //     isbn: "0-395-07749-X",
    //   },
    //   {
    //     title: "The Lord of the Rings",
    //     author: "J.R.R. Tolkien",
    //     isbn: "0-395-07749-X",
    //   },
    //! ];

    //foreach is a loop that will run for each element in the array
    books.forEach(function (books): any {
      //calls function add_book_to_table() to add book to table to display to user
      return table.add_book_to_table(books);
    });
  }
  // function to add book to table
  static add_book_to_table(book: {
    title: String;
    author: String;
    isbn: String;
  }) {
    //creates a table row element to add to table
    const table = document.getElementById("list");
    const row = document.createElement("tr");
    //insert book title,author, ISBN into table row and a delete button
    row.innerHTML = `<td>${book.title}</td><td>${book.author}</td><td>${book.isbn}</td>
    <td><button class="delete">Delete</button></td>`;
    table.appendChild(row);
  }
  // function to delete book from table
  //element is the button that was clicked and event is the event that was triggered
  static delete_book(el) {
    if (el.className == "delete") {
      el.parentElement.parentElement.remove();
    }
  }
  // clear all information from form after submitted
  static clear_form() {
    (<HTMLInputElement>document.getElementById("title")).value = " ";
    (<HTMLInputElement>document.getElementById("author")).value = " ";
    (<HTMLInputElement>document.getElementById("isbn")).value = " ";
  }
}
// Storage Class: will store book objects in local storage.
// so if user closes browser or refreshes, books will still be there.
class storage {
  //function grabs books from local storage and returns them as an array of book objects
  static get_books() {
    let books: book_elements[] = [];
    if (localStorage.getItem("books") === null) {
      books = [];
    } else {
      books = JSON.parse(localStorage.getItem("books"));
    }
    return books;
  }
  //function to add book to local storage
  static add_book(book: book_elements) {
    const books = storage.get_books();
    books.push(book);
    localStorage.setItem("books", JSON.stringify(books));
  }
  //function to deletes/removes book from local storage
  static remove_book(isbn: String) {
    const books = storage.get_books();
    books.forEach(function (book, index) {
      if (book.isbn === isbn) {
        books.splice(index, 1);
      }
    });
    localStorage.setItem("books", JSON.stringify(books));
  }
}

// Show list of books in table
document.addEventListener("DOMContentLoaded", table.display_book_list);

// Add books to table
//function grabs title values
document.getElementById("forum").addEventListener("submit", function (e) {
  //prevent default action of submit button
  e.preventDefault();
  // gets values: title, author, isbn from form user used
  const title: String = (<HTMLInputElement>document.getElementById("title"))
    .value;
  const author: String = (<HTMLInputElement>document.getElementById("author"))
    .value;
  const isbn: String = (<HTMLInputElement>document.getElementById("isbn"))
    .value;
  //validate form
  if (title === "" || author === "" || isbn === "") {
    alert("Please fill in all fields");
    return false;
  } else {
    // calls class books elements to create book object
    const book = new book_elements(title, author, isbn);
    // console.log(book); //! for testing purposes

    // add book to list
    table.add_book_to_table(book);

    // add book to local storage
    storage.add_book(book);

    // calls to clear form
    table.clear_form();
  }
  //   console.log(book); //! for testing purposes
});

// remove books when user clicks delete button
document.getElementById("list").addEventListener("click", function (e) {
  //remove book from table
  table.delete_book(e.target);
  //remove book from local storage
  //   storage.remove_book(
  //     e.target.parentElement.previousElementSibling.textContent
  //   );
});
