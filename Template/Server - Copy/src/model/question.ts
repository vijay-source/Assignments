import mongoose from "mongoose";
const schema = mongoose.Schema;
const queschema = new schema(
  {
    text: { type: String  },
    category: { type: Array },
    upvote: { type: Number,default:0 },
    downvote: { type: Number,default:0 },
    name: {
         type: String
    },
  },
  { collection: "question" }
);
export default mongoose.model("question", queschema);
