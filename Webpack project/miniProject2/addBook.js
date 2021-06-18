import { BookManager } from "./bookManager.js";
var manager = new BookManager();
function add() {
    manager.addBook();
}
var addButton = document.getElementById("submit");
addButton.addEventListener("click", add);
