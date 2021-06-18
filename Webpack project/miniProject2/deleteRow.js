var table = document.getElementById("myTable");
import { BookManager } from "./bookManager.js";
var manager = new BookManager();
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
