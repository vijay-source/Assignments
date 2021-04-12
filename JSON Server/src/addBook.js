const form = document.getElementById('addNewBook');
console.log("start event")
if (form)
    form.addEventListener("submit", async(e) => {
        e.preventDefault();
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
        // window.location.replace('/book=bookList.html');
    })