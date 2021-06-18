import { BookManager } from "./bookManager.js";
let manager:BookManager=new BookManager();
manager.display();
function fun1(){
    var x=document.getElementById("detailsSection")! as HTMLElement;
    var y=document.getElementById("addBookPage")! as HTMLElement;
    if(x.style.display==="none"){
        x.style.display="block";
        y.style.display="none";
    }manager.display();
}
function fun2(){
    var x=document.getElementById("detailsSection")! as HTMLElement;
    var y=document.getElementById("addBookPage")! as HTMLElement;
    if(y.style.display==="none"){
        x.style.display="none";
        y.style.display="block";
    }manager.display();
}
document.getElementById("bookList")?.addEventListener("click",fun1);
document.getElementById("addBooks")?.addEventListener("click",fun2);


const optionSelected:HTMLSelectElement=document.getElementById("drop")! as HTMLSelectElement;
const textSearch:HTMLInputElement=document.getElementById("textSearch")! as HTMLInputElement;
const searchbtn:HTMLButtonElement=document.getElementById("Searchbtn")! as HTMLButtonElement;
const button=document.querySelector("#Searchbtn")! as HTMLElement;
button.addEventListener("click",function():void{
    manager.searchResult();
});
function search():void{
    let placeholder,buttonText;
    if(optionSelected.value==="bookId"){
        placeholder="Search by Id";
        buttonText="Enter ID";
    }
    else if(optionSelected.value==="title"){
        placeholder="Search by title";
        buttonText="Enter title";
    }
    else if(optionSelected.value==="author"){
        placeholder="Search by author";
        buttonText="Enter Author";
    }
    else{
        return;
    }
    textSearch.placeholder=placeholder;
    searchbtn.innerHTML=buttonText;
}
optionSelected.addEventListener("change",search);
export default optionSelected;

let table:HTMLTableElement=document.getElementById("myTable")! as HTMLTableElement;

table.addEventListener("click",(event:any)=>{
    let clicked:any=event.target;
    if(clicked.id==="span")
    clicked=event.target.parentElement.parentElement.parentElement;
    else if(clicked.id==="deleteId")
    clicked=event.target.parentElement.parentElement;
    else{
        return;
    }
    manager.delete(clicked)
})

function add():void{
    manager. addBook();
 
 }
 const addButton=document.getElementById("submit")! as HTMLElement;
 addButton.addEventListener("click",add);