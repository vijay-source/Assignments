const id = new URLSearchParams(window.location.search).get('id')
console.log("start");
const deleteData = async() => {
    const res = await fetch('http://localhost:3000/books' + id);
    const data = await res.json();
    console.log(data);
    document.getElementById("details").innerHTML = `<p> ${data.id}</p>`
}

document.getElementById("delte").addEventListener('click', async() => {
    console.log("delete button working");
    const res = await fetch('http://localhost:3000/books/' + id, {
        method: 'DELETE'
    })
    window.location.replace("./src/index.html");
});
window.addEventListener('DOMContentLoaded', deleteData());
console.log("deleted")