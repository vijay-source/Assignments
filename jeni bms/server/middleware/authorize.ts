import User from "../user"
function authorize(req:any,res:any,next:any){
    console.log("req.user.id",req.user.id);
    let user=User.findById(req.user.id);
    if(user.name!=="admin"){
        console.log("not admin");
        res.status(400).json({msg:"Authorization access denied to delete"})
    }
    next();
}
module.exports=authorize;