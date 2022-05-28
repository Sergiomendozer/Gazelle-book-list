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
  }
}
// // foreach is a loop that will run for each element in the array
// // books.ForEach((books) => table.add_book_to_table(books));
// books.forEach(function (book_elements: String) {
//   table.add_book_to_table(book_elements);
// });

//   static add_book_to_table(book: String) {
//     const table: HTMLTableElement = document.getElementById(
//       "list"
//     )! as HTMLTableElement;
//     const row: HTMLTableRowElement = table.insertRow();
//     row.insertCell().innerHTML = book_elements.title;
//     row.insertCell().innerHTML = book_elements.author;
//     row.insertCell().innerHTML = book_elements.isbn;
//     const delete_button: HTMLButtonElement = document.createElement("button");
//     delete_button.innerHTML = "delete";
//     delete_button.setAttribute("class", "delete");
//     row.insertCell().appendChild(delete_button);
//   }

// Store Class: will be used to create a store objects

// Show books
// document.addEventListener("DOMContentLoaded", table.display_book_list);

// Add books

// remove books
