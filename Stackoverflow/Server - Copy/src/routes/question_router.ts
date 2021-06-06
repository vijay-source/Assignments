import express, { response } from "express";
import question from "../model/question";
import answer from "../model/answer";
import {auth} from "../routes/userRouter"


const router = express.Router();
router.use(express.json());

// get All questions
router.get("/", async (req, res) => {
  let result = await question.find();
  res.send(result);
});


// get questions of logged in user
router.get("/user/:userid", async (req, res) => {
  let userid=req.params.userid;
  let myquestions=await question.find({name:userid})
 res.send(myquestions)
});
 

// get  particular question by qid
router.get("/:id", async (req, res) => {
  const id = req.params.id;
  let result = await question.findById(id)
   res.send(result);
  });

  //delete by id
  router.route("/delete/:id").delete(auth,async(req:any,res:any)=>{
    try{
        const id= req.params.id;
        const result=await  question.deleteOne({_id:id})
        res.json({message:"question has been deleted"})   
       }catch(err){
        res.send("error"+err) 
       }
})


  router.get("/quest/:text", async (req, res) => {
      const search = new RegExp(req.params.text, "i");
      let result = await question.find({ text:search });
      const myresult =(JSON.stringify(result));
      console.log("new resilt",myresult)
      res.send(result);
    })
 

// post questions

router.post("/:userid",async(req, res) => {
  let userId=req.params.userid
  const newQuestion = new question({text:req.body.text,category:req.body.category,name:userId});
  console.log("enterd body", req.body);
  let result = await question.create(newQuestion);
  console.log("my question", result);
  question.create(result);
  res.send(result);
});




router.put("/upvote/question/:userid", async (req, res) => {
  let userid=req.params.userid
  let myquestions=await question.find({name:userid})
  
  .update({ $inc :{upvote:+1}})
    .then(() => {
      res.status(201).json({
        message: "Book updated successfully",
      });
    })
    .catch((error: Error) => console.log(error));
});


router.put("/downvote/question/:userid", async (req, res) => {
  let userid=req.params.userid
  let myquestions=await question.find({name:userid})
  
  .update({ $inc :{downvote:+1}})
    .then(() => {
      res.status(201).json({
        message: "Book updated successfully",
      });
    })
    .catch((error: Error) => console.log(error));
});


export default router;
