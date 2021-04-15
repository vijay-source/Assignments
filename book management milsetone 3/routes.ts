import express from "express"
const Book= require('./book'); 

let route = express.Router();
 route.get("/books",(req,res)=>{
    Book.find()
        .then((result: any)=>{
            res.send(result);
        })
        .catch((error: Error)=>console.log(error))
    })


    route.get("/books/:id",(req,res)=>{
        const id= req.params.id;
        //Book.findById('60768abb5d8c4f437c22a18b')
        Book.findById(id)
        .then((result: any)=>{
            res.send(result);
        })
        .catch((error: Error)=>console.log(error))
    })
    
    
    
    
    route.delete("/books/:id",(req,res)=>{
       const id= req.params.id;
    Book.deleteOne({_id:id})
    .then(()=>{
        res.status(200).json({
            message:'Books deleted'
        })
    })
    .catch((error:Error)=>console.log(error))
    })
    
    
    
    
    route.post('/books',(req,res)=>{
        let book=new Book(req.body);
        book.save();
        res.send(book);
    });
    
    
    
    
    route.put('/books/:id',(req,res)=>{
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





    
    export{route};
    