var books = localStorage.getItem("books");
if (!books) {
    books = [];
}
else {
    books = JSON.parse(books);
}
var BookManager = /** @class */ (function () {
    function BookManager() {
        this.table = document.getElementById("myTable");
    }
    BookManager.prototype.searchBooks = function (searchparam, books, paramType) {
        if (paramType === "bookId") {
            return books[paramType].indexOf(searchparam) >= 0;
        }
        return books[paramType].toLowerCase().indexOf(searchparam) >= 0;
    };
    BookManager.prototype.display = function (searchparam, paramType) {
        if (searchparam === void 0) { searchparam = ""; }
        if (paramType === void 0) { paramType = ""; }
        this.table.innerHTML = "<tr>\n            <th> Book ID</th><th> Title</th><th>Author</th><th>Rating</th><th>Action</th></tr>";
        for (var i = 0; i < books.length; i++) {
            var row = void 0;
            var disFlag = true;
            if (searchparam.length > 0 && paramType.length > 0 && paramType !== "selected") {
                if (!this.searchBooks(searchparam, books[i], paramType)) {
                    disFlag = false;
                }
            }
            if (disFlag) {
                row = "<tr>\n                        <td>" + books[i].bookId + "</td>\n                        <td>" + books[i].title + "</td>\n                        <td>" + books[i].author + "</td>\n                        <td>" + books[i].rating + "</td>\n                        <td>\n                        <button class=\"delete\" id=\"deleteId\" style=\"border:none;background-color:inherit;\">\n                       \n                        <span id=\"span\" class=\"material-icons\" style=color:red;\">delete</span></button>\n                        \n                        </td>\n\n                        </tr>";
                this.table.innerHTML += row;
            }
        }
    };
    BookManager.prototype.searchResult = function () {
        var optionSelected = document.getElementById("drop");
        var paramType = optionSelected.value;
        var searchText = document.getElementById("textSearch");
        this.display(searchText.value, paramType);
    };
    BookManager.prototype.delete = function (item) {
        books.splice(item.rowIndex - 1, 1);
        localStorage.setItem("books", JSON.stringify(books));
        this.display();
    };
    BookManager.prototype.addBook = function () {
        var temp = books.length + 1;
        /* let id:string=temp.toString(); */
        var id = document.getElementById("bookId");
        var name = document.getElementById("bookName");
        var author = document.getElementById("author");
        var rating = document.getElementById("rating");
        if (id.value !== "" && name.value !== "" && author.value !== "" && rating.value !== "") {
            var item = { bookId: id.value, title: name.value.toUpperCase(), author: author.value.toUpperCase(), rating: rating.value };
            books.push(item);
            localStorage.setItem("books", JSON.stringify(books));
        }
        else {
            return;
        }
    };
    return BookManager;
}());
export { BookManager };
