import { BookManager } from "./bookManager.js";
var manager = new BookManager();
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
