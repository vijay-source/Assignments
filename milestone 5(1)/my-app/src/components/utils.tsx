export function searchBooks(searchText: string, selected: string, Books: any) {
    switch (selected) {
        case "id":
            return [Books.find((book: any) => searchText === book.id.toString())]
        case "title":
        case "author":
            return Books.filter((book: any) => book[selected]?.toLowerCase().indexOf(searchText?.toLocaleLowerCase()) !== -1);
        case "price":
            let [min, max] = searchText.split(" ");
            return Books.filter((book: any) => Number(book.price) >= Number(min) && Number(book.price) <= Number(max));
        case "rating":
            return Books.filter((book: any) => Number(book.rating) >= Number(searchText))
    }
}
