const search = document.getElementById("Search");
search.addEventListener('click', (e) => {
    e.preventDefault();
    renderPosts(Search.term.value.trim());
});


function searchText() {

}