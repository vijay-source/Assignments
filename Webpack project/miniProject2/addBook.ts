import { BookManager } from "./bookManager.js";
let manager:BookManager=new BookManager();
function add():void{
   manager. addBook();

}
const addButton=document.getElementById("submit")! as HTMLElement;
addButton.addEventListener("click",add);
