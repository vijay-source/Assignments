 const Book=require('./booksmodel')
 //details of all books "/books"
 async function getBooks(req,res) {
     try {
         const books=await Book.findAll()
        res.writeHead(200,{'Content-Type':'application/json'})
        res.end(JSON.stringify(books))
         
     } catch (error) {
         console.log(error);    
         
         
     }
     
 }
 //searching by id "/books/1"
 async function searchById(req,res,id) {
     try {
         const book=await Book.findById(id)
         if(!book){
            res.writeHead(400,{'Content-Type':'application/json'})
            res.end(JSON.stringify({message:'Book does not exist'}))

         }else{
            res.writeHead(200,{'Content-Type':'application/json'})
            res.end(JSON.stringify(book))

         }
         
     } catch (error) {
         console.log(error);
         
         
     }

     
 }
 // search by author
 async function searchByAuthor(req,res,author) {
    try {
        const book=await Book.findByAuthor(author)
        if(!book){
           res.writeHead(400,{'Content-Type':'application/json'})
           res.end(JSON.stringify({message:'Book does not exist'}))

        }else{
           res.writeHead(200,{'Content-Type':'application/json'})
           res.end(JSON.stringify(book))

        }
        
    } catch (error) {
        console.log(error);
        
        
    }

    
}
 //add new book
 async function addBook(req,res) {
    try {
        let body=''
        req.on('data',(chunk)=>{
            body+=chunk.toString()
        })
        req.on('end',async()=>{
           const{title,author,price,rating}= JSON.parse(body)
           const book={
            title,
            author,
            price,
            rating
           
        }
        const newBook= await Book.create(book)
        res.writeHead(201,{'Content-Type':'application/json'})
        return res.end(JSON.stringify(newBook))

        })
        
        
    } catch (error) {
        console.log(error);
        
        
    }
    
}
//update book
async function updateBook(req,res,id) {
    try {
        const book=await Book.findById(id)
        if(!book){
            res.writeHead(400,{'Content-Type':'application/json'})
            res.end(JSON.stringify({message:'Book does not exist'}))
         }else{
            let body=''
            req.on('data',(chunk)=>{
                body+=chunk.toString()
            })
            req.on('end',async()=>{
               const{title,author,price,rating}= JSON.parse(body)
               const bookData={
                title:title || book.title,
                author:author || book.author,
                price:price||book.price,
                rating:rating||book.rating
               
            }
            const updateBook= await Book.update(id,bookData)
            res.writeHead(200,{'Content-Type':'application/json'})
            return res.end(JSON.stringify(updateBook))
    
            })

         }

        
        
        
    } catch (error) {
        console.log(error);
        
        
    }
    
}
//delete a book by id
async function deleteBook(req,res,id) {
    try {
        const book=await Book.findById(id)
        if(!book){
           res.writeHead(400,{'Content-Type':'application/json'})
           res.end(JSON.stringify({message:'Book does not exist'}))

        }else{
            await Book.deleted(id)
           res.writeHead(200,{'Content-Type':'application/json'})
           res.end(JSON.stringify({message:`book with ${id} has been removed`}))

        }
        
    } catch (error) {
        console.log(error);
        
        
    }

    
}
 module.exports={
     getBooks,
     searchById,
     searchByAuthor,
     addBook,
     updateBook,
     deleteBook
 }