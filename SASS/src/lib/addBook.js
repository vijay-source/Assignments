"use strict";
// let addbooks = document.querySelector("Add Book")as HTMLElement;
// addBooks.addEventListener('click', addBook)as HTMLInputElement;
console.log("start");
console.log("waiting");
function addBook() {
    var id = document.getElementById("bookid").value;
    var title = document.getElementById("booktitle").value;
    var author = document.getElementById("bookauthor").value;
    var cost = document.getElementById("bookcost").value;
    var book = {
        id: id,
        title: title,
        author: author,
        cost: cost
    };
    // var newdata=document.getElementById("addBook")as HTMLInputElement;
    if (localStorage.getItem('book') == null) {
        localStorage.setItem('book', '[]');
    }
    var olddata = JSON.parse(localStorage.getItem('book'));
    olddata.push(book);
    localStorage.setItem('book', JSON.stringify(olddata));
}
