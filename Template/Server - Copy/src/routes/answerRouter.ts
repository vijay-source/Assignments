import express, { response } from "express";
import question from "../model/question";
import answer from "../model/answer";
import { auth } from "../routes/userRouter";
// import user from "../model/user"
const answerRouter = express.Router();

// display all answers
answerRouter.get("/", async (req, res) => {
  let result = await answer.find();
  res.send(result);
});

// getting answers for for particular question
answerRouter.get("/getAns/:id", async (req, res) => {
  const questionid = req.params.id;
  let result = await answer.find({ questionid: questionid });
  console.log(result);
  res.send(result);
});




// // upVote
// answerRouter.patch("/getAns/upvote/:id", async (req, res) => {
//   const questionid = req.params.id;
//    let result=await answer.updateOne(
//       { qid: req.params.id },
//       {
//         $inc: {
//           Votecount: +1,
//         },
//       }
//     );
//   console.log(result);
//   res.send(result);
// },
// );



// getting answers answered by loggedin user
answerRouter.get("/user/:userid", async (req, res) => {
  let userid = req.params.userid;
  let myanswer = await answer.find({ userid: userid });
  res.send(myanswer);
});


// posting answer by loggedin user to a particular question
answerRouter.post("/:qid/user/:uid", async (req: any, res: any) => {
  const uid = req.params.uid;
  const qid = req.params.qid;
  const newAnswer = new answer({
    answer: req.body.answer,
    Votecount:req.body.Votecount,
    questionid: qid,
    userid: uid,
  });
  console.log("enterd body", req.body);
  let result = await answer.create(newAnswer);
  console.log("my question", result);
  question.create(result);
  res.send(result);
});


// // Upvoting
// answerRouter.patch( "/:qid/user/upVote/:uid",async (req: any, res: any) => {
//     try {
//       await answer.updateOne(
//         { _id: req.params.id },
//         {
//           $inc: {
//             Votecount: +1,
//           },
//         }
//       );
//       let response = await answer.find({ question: req.params.quesId });
//       res.send(response);
//     } catch (err: any) {
//       res.status(400).send("Can not increment votes");
//     }
//   }
// );
export default answerRouter;
