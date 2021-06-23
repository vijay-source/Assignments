import express from "express";
import {authenticate} from "../controller/userController"
const Book= require('../models/schema');
export let router=express.Router();
router.use(express.json())
import {getAllBooks,addBook,getBookById,removeBook,getAllAuthors,addReview,getReview} from "../controller/bookController"

 router.route("").get(getAllBooks)
 router.route("").post(authenticate,addBook);
router.route('/:id').get(getBookById)
router.route('/:id').delete(authenticate,removeBook)
router.route("/all/authors").get(getAllAuthors)
router.route("/user/review").patch(addReview)
router.route("/review/:id").get(getReview)


router.route('/:id').put((req,res)=>{
        const book=new Book({
            _id:req.params.id,
            title:req.body.title,
            author:req.body.author,
            price:req.body.price,
            rating:req.body.rating,
        });
        Book.update({_id:req.params.id},book)
        .then(()=>{
            res.status(201).json({
                message:'Book updated successfully'
            })
        }).catch((error:Error)=>console.log(error))
    
    })
   
    router.get("/books/by/:author", async (req, res) => {
        try {
          const author = new RegExp(req.params.author, "i");
          let books = await Book.find({ author: author });
          console.log(books);
          res.send(JSON.stringify(books));
        } catch (e) {
          console.log(e);
        }
      });
      
      router.get("/by/title/:title", async (req, res) => {
        try {
          const title = new RegExp(req.params.title, "i");
          let books = await Book.find({ title });
          console.log(JSON.stringify(books));
          res.send(books);
        } catch (e) {
          console.log(e);
        }
      });
      
      router.get("/by/rating/:rating", async (req, res) => {
        try {
          let books = await Book.find({ rating: { $gte: req.params.rating } });
          console.log(JSON.stringify(books));
          res.send(books);
        } catch (e) {
          console.log(e);
        }
      });
      
      router.get("/priced/:min/:max", async (req, res) => {
        try {
          console.log(req.params.min);
          let books = await Book.find({
            $and: [
              { cost: { $gte: req.params.min } },
      
              { cost: { $lte: req.params.max } },
            ],
          });
          console.log(JSON.stringify(books));
          res.send(books);
        } catch (e) {
          console.log(e);
        }
      });
    //registration







   /*  //get user details by auth 
    router.get("/auth/user",auth,(req:any,res:any)=>{
        User.findById(req.user.id)
        .select("-password")
        .then((user:any)=>res.json(user))
    }) */


