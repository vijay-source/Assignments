import { BookManager } from "./bookManager.js";
let manager:BookManager=new BookManager();
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