import http=require("http");
const { getBooks,searchById,addBook,updateBook,deleteBook, searchByAuthor}=require('./booksController')


const server=http.createServer((req,res)=>{
    if(req.url==='/books' && req.method==='GET'){
        getBooks(req,res)
    }else if(req.url.match(/\/books\/([0-9]+)/) &&req.method=='GET'){
        const id=req.url.split('/')[2]
        searchById(req,res,id)
    }else if(req.url.match(/\/books\/([A-z]+[A-z]+)/) &&req.method=='GET'){
        const author=req.url.split('/')[2]
        console.log(author);
         searchByAuthor(req,res,author)
    }else if(req.url==='/books' && req.method==='POST'){
        addBook(req,res)
    }else if(req.url.match(/\/books\/([0-9]+)/) &&req.method=='PUT'){
        const id=req.url.split('/')[2]
        updateBook(req,res,id)
    }else if(req.url.match(/\/books\/([0-9]+)/) &&req.method=='DELETE'){
        const id=req.url.split('/')[2]
        deleteBook(req,res,id)
    }else{
        res.writeHead(404,{'Content-Type':'application/json'})
        res.end(JSON.stringify({message:'Route not found'}))
    }
    
    

})
const port=process.env.port || 8070
server.listen(port,()=> console.log(`server running on port ${port}`));
