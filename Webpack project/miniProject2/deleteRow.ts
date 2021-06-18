let table:HTMLTableElement=document.getElementById("myTable")! as HTMLTableElement;
import { BookManager } from "./bookManager.js";
let manager:BookManager=new BookManager();
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
