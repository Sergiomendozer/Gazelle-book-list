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
//table Class: will be used to create a table objects
class table {
  static display_book_list() {
    // const books: String = Store.get_books(); use for later
    const list_of_books: { title: String; author: String; isbn: String }[] = [
      {
        title: "The Hobbit",
        author: "J.R.R. Tolkien",
        isbn: "0-395-07749-X",
      },
      {
        title: "The Lord of the Rings",
        author: "J.R.R. Tolkien",
        isbn: "0-395-07749-X",
      },
    ];
    //foreach is a loop that will run for each element in the array
    list_of_books.forEach(function (list_of_books): any {
      //calls function add_book_to_table() to add book to table
      return table.add_book_to_table(list_of_books);
    });
  }
  static add_book_to_table(book: {
    title: String;
    author: String;
    isbn: String;
  }) {
    const table = document.getElementById("list");
    const row = document.createElement("tr");
    //insert book title,author, ISBN into table row and a delete button
    row.innerHTML = `<td>${book.title}</td><td>${book.author}</td><td>${book.isbn}</td>
    <td><button class="delete">Delete</button></td>`;
    table.appendChild(row);
  }
}
// Store Class: will be used to create a store objects

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
  // calls class books elements to create book object
  const book = new book_elements(title, author, isbn);
  console.log(book);
});

// remove books when user clicks delete button
