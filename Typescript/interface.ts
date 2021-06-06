interface Book {

    title: String,
    Author:String|Author,
    Book_id:Number,
    Cost?:Number,

}

interface Author{
    name:String
    age:Number
    gender:String
}

let b1:Book
b1={
    title:"The Accursed",
    Author:"Vivek",
    Book_id:1,
    Cost:100,
}


export default Book;