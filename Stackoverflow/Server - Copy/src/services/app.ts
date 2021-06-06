import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import env from "dotenv";
import router from "../routes/question_router";
import answerRouter from "../routes/answerRouter";
import userRouter from "../routes/userRouter"


const configureEvironment = () => {
  env.config();
};
async function connectToDb() {
  const connStr = ` mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.s3eeb.mongodb.net/${process.env.DB_DATABASE}?retryWrites=true&w=majority`;
  console.log("Initializing  database connection");
  await mongoose.connect(connStr, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log("database connection established");
}
function configureExpress() {
  const app = express();
  app.use(express.json())
  app.use(cors());
  app.get("/", (req, res) => {
    res.send("tgbcb");
  });
  app.use("/api/questions",router);
  app.use("/api/answers",answerRouter);
  app.use("/api/users",userRouter);
  return app;
}

const startServer = async () => {
  configureEvironment();
  await connectToDb();
  const app = configureExpress();
  const server = app.listen(process.env.PORT);
  server.on("error", (error: any) => {
    console.log("server error", error.message);
  });
};

startServer()
  .then(() => {
    console.log("server started on port", process.env.PORT);
  })
  .catch((error: any) => {
    console.log("error starting server", error.message);
  });
