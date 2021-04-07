"use strict";
var id = 0;
function display() {
    var arr = JSON.parse(localStorage.getItem("book") || "[]");
    var string = " ";
    for (var i = 0; i < arr.length; i++) {
        string += "<tr>\n        <td>" + arr[i].id + "</td>\n        <td>" + arr[i].title + "</td>\n        <td>" + arr[i].author + "</td>\n        <td>" + arr[i].cost + "</td>\n        <td><button class=\"remove\" id=" + arr[i].id + ">Delete</button></td>\n </tr>";
    }
    var table = document.getElementById("table");
    table.innerHTML = string;
    // var random=document.getElementById("del")
    // random?.addEventListener("click",function(){
    //     // console.log(this.parentNode);
    //     var node=this.parentNode?.parentNode;
    //     console.log(node);
    //     console.log(node?.textContent)
    // } )
}
display();
var search = document.getElementById("Search");
search === null || search === void 0 ? void 0 : search.addEventListener('click', searchBooks);
function searchBooks() {
    console.log("i am waiting");
    var searcharr = JSON.parse(localStorage.getItem("book") || "[]");
    var arr1 = JSON.parse(localStorage.getItem("book") || "[]");
    var str = "";
    var store = document.getElementById("searchText");
    for (var i = 0; i < searcharr.length; i++) {
        if (store.value == arr1[i].id || store.value == arr1[i].title || store.value == arr1[i].bookauthor || store.value == arr1[i].cost) {
            str += "<tr>\n        <td>" + arr1[i].id + "</td>\n        <td>" + arr1[i].title + "</td>\n        <td>" + arr1[i].author + "</td>\n        <td>" + arr1[i].cost + "</td>\n      \n\n </tr>";
        }
    }
    var table = document.getElementById("table");
    table.innerHTML = str;
}
var r = document.getElementById("table");
r === null || r === void 0 ? void 0 : r.addEventListener('click', deleteBooks);
function deleteBooks(e) {
    var abc;
    if (e.target.ClassName = "remove") {
        abc = JSON.parse(localStorage.getItem("book") || "[]");
        var del = e.target.getAttribute("id");
        console.log(del);
        console.log(abc);
        for (var i = 0; i < abc.length; i++) {
            if (abc[i].id == del) {
                abc.splice(i, 1);
                console.log("re");
                break;
            }
        }
    }
    localStorage.setItem("book", JSON.stringify(abc));
    display();
}
