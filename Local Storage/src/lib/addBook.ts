// let addbooks = document.querySelector("Add Book")as HTMLElement;
// addBooks.addEventListener('click', addBook)as HTMLInputElement;

console.log("start");

console.log("waiting");
function addBook(){
var id=( <HTMLInputElement>document.getElementById("bookid")).value;
var title=( <HTMLInputElement>document.getElementById("booktitle")).value;
var author=( <HTMLInputElement>document.getElementById("bookauthor")).value;
var cost=( <HTMLInputElement>document.getElementById("bookcost")).value;


    let book = {
    id:id,
    title:title,
    author:author,
    cost:cost
    }
    // var newdata=document.getElementById("addBook")as HTMLInputElement;

    if(localStorage.getItem('book')==null)
    {
             localStorage.setItem('book','[]');
    }

    var olddata=JSON.parse(localStorage.getItem('book')!);
    olddata.push(book);

    localStorage.setItem('book',JSON.stringify(olddata));    
}