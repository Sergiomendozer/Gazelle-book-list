// Book_elements Class: will be used to create a book object
var Book_elements = /** @class */ (function () {
    function Book_elements(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
    return Book_elements;
}());
//table Class: will be used to create a table objects
var table = /** @class */ (function () {
    function table() {
    }
    table.display_book_list = function () {
        var books = Store.get_books();
        // foreach is a loop that will run for each element in the array
        // books.ForEach((books) => table.add_book_to_table(books));
        books.forEach(function (Book_elements) {
            table.add_book_to_table(Book_elements);
        });
    };
    table.add_book_to_table = function (book) {
        var table = document.getElementById("list");
        var row = table.insertRow();
        row.insertCell().innerHTML = book.title;
        row.insertCell().innerHTML = book.author;
        row.insertCell().innerHTML = book.isbn;
        var delete_button = document.createElement("button");
        delete_button.innerHTML = "delete";
        delete_button.setAttribute("class", "delete");
        row.insertCell().appendChild(delete_button);
    };
    return table;
}());
// Store Class: will be used to create a store objects
// Show books
document.addEventListener("DOMContentLoaded", table.display_book_list);
// Add books
// remove books
