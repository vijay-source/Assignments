let addbutton = document.getElementById("addbtn");
addbutton.addEventListener('click', add)

function add() {
    const xhr = new XMLHttpRequest();
    const container = document.getElementById("container");

    xhr.onload = function() {
        if (this.status == 200) {
            container.innerHTML = xhr.responseText;


            const form = document.getElementById('addNewBook');
            console.log("start event")
            if (form)
                form.addEventListener("submit", async(e) => {
                    e.preventDefault();
                    alert("hello");
                  
                    console.log("event initialized")

                    let bookA = document.getElementById('ttl').value;
                    let bookP = document.getElementById('atr').value;
                    let bookR = document.getElementById('prc').value;

                    const book = {

                        title: bookA,
                        author: bookP,
                        cost: bookR,
                    }
                    console.log(book);
                    await fetch('http://localhost:3000/books', {
                        method: 'POST',
                        body: JSON.stringify(book),
                        headers: { 'Content-Type': 'application/json' }
                    });
                    window.location.replace('./index.html');
                })

        } else {
            console.log('file not found');
        }
    }
    xhr.open('get', './views/addBook.html', true);
    xhr.send();

}




let listbutton = document.getElementById("listbtn");
listbutton.addEventListener('click', list)

function list() {
    const xhr1 = new XMLHttpRequest();
    const container = document.getElementById("container");

    xhr1.onload = function() {
        if (this.status = 200) {
            container.innerHTML = xhr1.responseText;
        } else {
            console.log('file not found');
        }
    }


    xhr1.open('get', './views/bookList.html', false);
    xhr1.send();
    const getAllBooks = async() => {
        let uri = " http://localhost:3000/books";
        const response = await fetch(uri);
        const books = await response.json();
        console.log(books);


        let template = " ";
        books.forEach(books => {
            template += `<tr>
                        <td>${books.id}</td>
                        <td>${books.title}</td>
                        <td>${books.author}</td>
                        <td>${books.cost}</td>
                        <td><a href="../details.html?id=${books.id}">details</a></td>
                        </tr>`
        });
        console.log(template);

        let table = document.getElementById('tble');
        table.innerHTML = template;

    }
    getAllBooks();

}