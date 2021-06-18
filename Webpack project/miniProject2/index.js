var _a, _b;
import { BookManager } from "./bookManager.js";
var manager = new BookManager();
manager.display();
function fun1() {
    var x = document.getElementById("detailsSection");
    var y = document.getElementById("addBookPage");
    if (x.style.display === "none") {
        x.style.display = "block";
        y.style.display = "none";
    }
    manager.display();
}
function fun2() {
    var x = document.getElementById("detailsSection");
    var y = document.getElementById("addBookPage");
    if (y.style.display === "none") {
        x.style.display = "none";
        y.style.display = "block";
    }
    manager.display();
}
(_a = document.getElementById("bookList")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", fun1);
(_b = document.getElementById("addBooks")) === null || _b === void 0 ? void 0 : _b.addEventListener("click", fun2);
var optionSelected = document.getElementById("drop");
var textSearch = document.getElementById("textSearch");
var searchbtn = document.getElementById("Searchbtn");
var button = document.querySelector("#Searchbtn");
button.addEventListener("click", function () {
    manager.searchResult();
});
function search() {
    var placeholder, buttonText;
    if (optionSelected.value === "bookId") {
        placeholder = "Search by Id";
        buttonText = "Enter ID";
    }
    else if (optionSelected.value === "title") {
        placeholder = "Search by title";
        buttonText = "Enter title";
    }
    else if (optionSelected.value === "author") {
        placeholder = "Search by author";
        buttonText = "Enter Author";
    }
    else {
        return;
    }
    textSearch.placeholder = placeholder;
    searchbtn.innerHTML = buttonText;
}
optionSelected.addEventListener("change", search);
export default optionSelected;
var table = document.getElementById("myTable");
table.addEventListener("click", function (event) {
    var clicked = event.target;
    if (clicked.id === "span")
        clicked = event.target.parentElement.parentElement.parentElement;
    else if (clicked.id === "deleteId")
        clicked = event.target.parentElement.parentElement;
    else {
        return;
    }
    manager.delete(clicked);
});
function add() {
    manager.addBook();
}
var addButton = document.getElementById("submit");
addButton.addEventListener("click", add);
