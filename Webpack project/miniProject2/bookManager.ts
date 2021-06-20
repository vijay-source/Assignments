import {Book} from './book.js';
let books: any = localStorage.getItem("books");
if(!books)
{
    books=[];
}
else{
    books=JSON.parse(books);
}
export class BookManager
{
    table:HTMLTableElement=document.getElementById("myTable")! as HTMLTableElement;
    constructor() {}
    
        searchBooks(searchparam:string,books:any,paramType:string)
        {
            if(paramType === "bookId")
            {
                return books[paramType].indexOf(searchparam)>=0;

            }
            return books[paramType].toLowerCase().indexOf(searchparam)>=0;
        }
        display(searchparam="",paramType="")
        {
            this.table.innerHTML=`<tr>
            <th> Book ID</th><th> Title</th><th>Author</th><th>Rating</th><th>Action</th></tr>`;
            for(let i=0;i<books.length;i++)
            {
                let row;
              let disFlag=true;
                if(searchparam.length>0 && paramType.length >0 && paramType!=="selected")
                    { 
                       if(!this.searchBooks(searchparam,books[i],paramType))
                       {
                           disFlag=false;
                       } 

                    }
                    if(disFlag)
                    {
                        row= `<tr>
                        <td>${books[i].bookId}</td>
                        <td>${books[i].title}</td>
                        <td>${books[i].author}</td> 
                        <td>${books[i].rating} </td>
                        <td>
                        <button class="delete" id="deleteId" style="border:none;background-color:inherit;">
                       
                        <span id="span" class="material-icons" style=color:red;">delete</span></button>
                        
                        </td>

                        </tr>`;
                        this.table.innerHTML +=row;
                    
                }
            }
        }
        searchResult()
        {
            let optionSelected:HTMLSelectElement=document.getElementById("drop")! as HTMLSelectElement;
            let paramType=optionSelected.value;
            let searchText=document.getElementById("textSearch")! as HTMLInputElement;
            this.display(searchText.value,paramType);
        }

        delete(item:any){
            books.splice(item.rowIndex-1,1);
            localStorage.setItem("books",JSON.stringify(books));
            this.display();

        }
        addBook()
        {
            let temp:number=books.length+1;
            /* let id:string=temp.toString(); */
            let id=document.getElementById("bookId")! as HTMLInputElement;
            let name=document.getElementById("bookName")! as HTMLInputElement;
            let author=document.getElementById("author")! as HTMLInputElement;
            let rating=document.getElementById("rating")! as HTMLInputElement;
            if(id.value!=="" && name.value!=="" && author.value!=="" && rating.value!=="")
            {
                const item={ bookId:id.value,title:name.value.toUpperCase(),author:author.value.toUpperCase(),rating:rating.value};
                books.push(item);
                localStorage.setItem("books",JSON.stringify(books));
            }
            else{
                return; 
            }
        }



    }

    


