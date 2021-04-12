let id = 0;
function display() {
    let arr = JSON.parse(localStorage.getItem("book") || "[]")
    let string = " ";
    for (let i = 0; i < arr.length; i++) {
        string += `<tr>
        <td>${arr[i].id}</td>
        <td>${arr[i].title}</td>
        <td>${arr[i].author}</td>
        <td>${arr[i].cost}</td>
        <td><button class="remove" id=${arr[i].id}>Delete</button></td>
 </tr>`
    }
    var table = document.getElementById("table") as HTMLTableElement;
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




let search = document.getElementById("Search")
search?.addEventListener('click', searchBooks)


function searchBooks() {
    console.log("i am waiting")
    var searcharr = JSON.parse(localStorage.getItem("book") || "[]")
    var arr1 = JSON.parse(localStorage.getItem("book") || "[]")
    let str = "";
    let store = document.getElementById("searchText") as HTMLInputElement;

    for (let i = 0; i < searcharr.length; i++) {
        if (store.value == arr1[i].id || store.value == arr1[i].title || store.value == arr1[i].bookauthor || store.value == arr1[i].cost) {
            str += `<tr>
        <td>${arr1[i].id}</td>
        <td>${arr1[i].title}</td>
        <td>${arr1[i].author}</td>
        <td>${arr1[i].cost}</td>
      

 </tr>`
        }

    }
    var table = document.getElementById("table") as HTMLTableElement;
    table.innerHTML = str;
}





let r = document.getElementById("table");
r?.addEventListener('click', deleteBooks)

function deleteBooks(e:any) {
    let abc;
    if (e.target.ClassName = "remove") {
        abc = JSON.parse(localStorage.getItem("book") || "[]")
        let del=e.target.getAttribute("id")
        console.log(del)
        console.log(abc);
        for (let i = 0; i < abc.length; i++) {
            if (abc[i].id == del) {
                abc.splice(i, 1)
                console.log("re")
                break;

            }
        }
    }
    localStorage.setItem("book", JSON.stringify(abc));
    display();
}


