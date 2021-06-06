import mongoose from "mongoose";
const schema = mongoose.Schema;
const anschema = new schema(
  {
    answer: { type: String, required: true },  
    questionid:{type:String},
    userid:{type:String},
    Votecount: { type: Number, default:0},
  },
  { collection: "answer" }
);
export default mongoose.model("answer", anschema);
