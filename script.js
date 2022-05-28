// Book_elements Class: will be used to create a book object
var book_elements = /** @class */ (function () {
    function book_elements(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
    return book_elements;
}());
//table Class: will be used to create a table objects to then display book list
var table = /** @class */ (function () {
    function table() {
    }
    table.display_book_list = function () {
        //grabs books from local storage to display in table later
        var books = storage.get_books();
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
        books.forEach(function (books) {
            //calls function add_book_to_table() to add book to table to display to user
            return table.add_book_to_table(books);
        });
    };
    // function to add book to table
    table.add_book_to_table = function (book) {
        //creates a table row element to add to table
        var table = document.getElementById("list");
        var row = document.createElement("tr");
        //insert book title,author, ISBN into table row and a delete button
        row.innerHTML = "<td>".concat(book.title, "</td><td>").concat(book.author, "</td><td>").concat(book.isbn, "</td>\n    <td><button class=\"delete\">Delete</button></td>");
        table.appendChild(row);
    };
    // function to delete book from table
    //element is the button that was clicked and event is the event that was triggered
    table.delete_book = function (el) {
        if (el.className == "delete") {
            el.parentElement.parentElement.remove();
        }
    };
    //! clear all information from form
    table.clear_form = function () {
        // document.getElementById("title").value = 8;
        //   static clear_form() {
        //   document.getElementById("title").value = " ";
        //   document.getElementById("author").value = " ";
        //     document.getElementById("isbn").innerHTML = " ";
    };
    return table;
}());
// Storage Class: will store book objects in local storage.
// so if user closes browser or refreshes, books will still be there.
var storage = /** @class */ (function () {
    function storage() {
    }
    //function grabs books from local storage and returns them as an array of book objects
    storage.get_books = function () {
        var books = [];
        if (localStorage.getItem("books") === null) {
            books = [];
        }
        else {
            books = JSON.parse(localStorage.getItem("books"));
        }
        return books;
    };
    //function to add book to local storage
    storage.add_book = function (book) {
        var books = storage.get_books();
        books.push(book);
        localStorage.setItem("books", JSON.stringify(books));
    };
    //function to deletes/removes book from local storage
    storage.remove_book = function (isbn) {
        var books = storage.get_books();
        books.forEach(function (book, index) {
            if (book.isbn === isbn) {
                books.splice(index, 1);
            }
        });
        localStorage.setItem("books", JSON.stringify(books));
    };
    return storage;
}());
// Show list of books in table
document.addEventListener("DOMContentLoaded", table.display_book_list);
// Add books to table
//function grabs title values
document.getElementById("forum").addEventListener("submit", function (e) {
    //prevent default action of submit button
    e.preventDefault();
    // gets values: title, author, isbn from form user used
    var title = document.getElementById("title")
        .value;
    var author = document.getElementById("author")
        .value;
    var isbn = document.getElementById("isbn")
        .value;
    //validate form
    if (title === "" || author === "" || isbn === "") {
        alert("Please fill in all fields");
        return false;
    }
    else {
        // calls class books elements to create book object
        var book = new book_elements(title, author, isbn);
        console.log(book); //! for testing purposes
        // add book to list
        table.add_book_to_table(book);
        // add book to local storage
        storage.add_book(book);
        //! add clear field here
    }
    //   console.log(book); //! for testing purposes
});
// calls to clear form
// table.clear_form();
// remove books when user clicks delete button
document.getElementById("list").addEventListener("click", function (e) {
    //remove book from table
    table.delete_book(e.target);
});
