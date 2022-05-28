// Book_elements Class: will be used to create a book object
var book_elements = /** @class */ (function () {
    function book_elements(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
    return book_elements;
}());
//table Class: will be used to create a table objects
var table = /** @class */ (function () {
    function table() {
    }
    table.display_book_list = function () {
        // const books: String = Store.get_books(); use for later
        var list_of_books = [
            {
                title: "The Hobbit",
                author: "J.R.R. Tolkien",
                isbn: "0-395-07749-X"
            },
            {
                title: "The Lord of the Rings",
                author: "J.R.R. Tolkien",
                isbn: "0-395-07749-X"
            },
        ];
        //foreach is a loop that will run for each element in the array
        list_of_books.forEach(function (list_of_books) {
            //calls function add_book_to_table() to add book to table
            return table.add_book_to_table(list_of_books);
        });
    };
    table.add_book_to_table = function (book) {
        var table = document.getElementById("list");
        var row = document.createElement("tr");
        //insert book title,author, ISBN into table row and a delete button
        row.innerHTML = "<td>".concat(book.title, "</td><td>").concat(book.author, "</td><td>").concat(book.isbn, "</td>\n    <td><button class=\"delete\">Delete</button></td>");
        table.appendChild(row);
    };
    return table;
}());
// Store Class: will be used to create a store objects
// Show list of books in table
document.addEventListener("DOMContentLoaded", table.display_book_list);
// Add books
// remove books
