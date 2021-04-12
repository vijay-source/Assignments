import { rejects } from "node:assert";
import { resolve } from "node:path";
const { v4: uuidv4}=require('uuid');
const fs=require('fs')
let books
fs.readFile('./books.json',"utf8",(err,data)=>{
    if(err){
        console.log(err);}
        else{
            books=JSON.parse(data) 
            console.log(books);
            
        }
    }
)
const {writeDataToFile} = require('./utils');
function findAll(){
    //we dont technically need promise but when fetch db we return a promise
    return new Promise((resolve,reject)=>{
        resolve(books);
    })
}
function findById(id: any){
    //we dont technically need promise but when fetch db we return a promise
    return new Promise((resolve,reject)=>{
        const book=books.find((p: { id: any; })=>p.id===id)
        resolve(book);
    })
}
function findByAuthor(author: any){
    //we dont technically need promise but when fetch db we return a promise
    return new Promise((resolve,reject)=>{
        const book=books.find((p: { author: any; })=>p.author.toLowerCase()===author.toLowerCase())
        resolve(book);
    })
}
function create(book: any){
    return new Promise((resolve,reject)=>{
        // using spread operator to spread all products passed in
        const newBook={id:uuidv4(),...book};//here all the product attribute(key value fields) will be passed to new product
        books.push(newBook);//pushing the new book to the book array
        //we need to add that to json file now only added to book array that has to be added to json file
        //so we create a utility file
        writeDataToFile("./books.json",books);
        resolve(newBook);//bcz that is what we want to send back when we call that in our api
    })
}
function update(id: any,book: any){
    return new Promise((resolve,reject)=>{
        //update already existing one and rewrite file
        const index=books.findIndex((p: any)=>p.id===id);
        books[index]={id,...book};
        writeDataToFile("./books.json",books);
        resolve(books[index]);//bcz that is what we want to send back when we call that in our api
    })
}
function deleted(id: any){
    return new Promise<void>((resolve,reject)=>{
        //update already existing one and rewrite file
        books=books.filter((b: { id: any; })=>b.id!==id)
        writeDataToFile("./books.json",books);
        resolve();
    })
}

module.exports={
    findAll,
    findById,
    create,
    update,
   deleted,
    findByAuthor
}