  
function getInfo(){  
return "hello javatpoint! How r u?";  
}  
 console.log(document.write(getInfo()));


 app.get('/forgot_user', function(req, res){
    response.getInfo(req.body)
});


app.post('/login_user', function(req, res){
    loginService.checklogin(req.body)
    .then(function(response){
        console.log(response)
        res.send(response)
    }).catch(function(error){
        console.log(error);
    })
});