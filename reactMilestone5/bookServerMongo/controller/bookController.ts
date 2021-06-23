import {authenticate} from "../controller/userController"
const Book= require('../models/schema');


export const getAllBooks = async (req: any, res: any) => {
    try {
      let result = await  Book.find()
      if (result) res.status(200).send(result);
    } catch (err: any) {
      res.status(400).send("ERROR", err.message);
    }
  };
  export const addBook = async (req: any, res: any) => {
    let book=new Book(req.body);
    try{
      const newBook=await book.save();
      res.send(newBook); 
    }catch(err){
      console.log(err);
      
    }
  }
  export const getBookById = async (req: any, res: any) => {
    const id= req.params.id;
    console.log("getbookByIdRoute",id);
    
    await Book.findById(id)
    .then((result: any)=>{
        res.send(result);
    })
    .catch((error: Error)=>console.log(error))
  }
  export const removeBook= async (req: any, res: any) => {
    const id= req.params.id;
    await Book.deleteOne({_id:id})
     .then(()=>{
     res.status(200).json({
         message:'Books deleted'
     })
 })
     .catch((error:Error)=>console.log(error))
  }

  export const getAllAuthors = async (req: any, res: any) => {
    try {
      let books = await Book.distinct("author");
      res.status(200).send(books);
      console.log("my authors list", books);
    } catch (err: any) {
      res.send(400).send("something went wrong");
      console.log(err, "error");
    }
  };
  export const addReview=async(req:any,res:any)=>{
    
    try{
      const{userId,name,review,bookId,rating}=req.body
      console.log("userId",userId);
      
    let book=await Book.findById(bookId)
    console.log("book",book);

    
    let reviews={userId:userId,name:name,review:review,rating:rating};

    let updatedBook=  await Book.update({_id:bookId},{$push:{reviews:reviews}})
    let newbook=await Book.findById(bookId)
    let newreviews=newbook.reviews.map((review:any)=>review)
    console.log("newReviews",newreviews);
    
     res.send(newreviews)
     

    }catch(err){
       res.send("book not found")
    }
  }
  export const getReview = async (req: any, res: any) => {
   try{
    const id= req.params.id;
    console.log("getbookByIdRoute",id);
    
    let newbook=await Book.findById(id)
    let newreviews=newbook.reviews.map((review:any)=>review)
    res.send(newreviews)
   }catch(err){
     console.log(err);
     res.send(err)
     
   }
  }