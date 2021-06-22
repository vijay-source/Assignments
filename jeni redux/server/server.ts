import expree from "express";
import mongoose from "mongoose";
import cors from "cors";
import env from "dotenv";
import express from "express";
import { userRouter } from "./routes/userRoutes";
import { movieRouter } from "./routes/movieRoutes";

const configureEnvironment = () => {
  env.config();
};

async function connectToDatabase() {
  const dbUri = `${process.env.MONGO_URI}`;
  console.log("initializing connection to database...");
  mongoose.connection.on("error", (err: any) => {
    console.log("mongoose error:", err.message);
  });
  await mongoose.connect(dbUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  });
  console.log("Connected to Database!!");
}

const startServer = async () => {
  configureEnvironment();
  await connectToDatabase();

  const app = express();
  app.use(cors());
  app.use(express.json());

  const server = app.listen(process.env.PORT);
  server.on("error",(error:any)=>console.log("server error : ", error.message)
  )
  //->routes
  app.use("/api/user", userRouter);
  app.use("/api/movies", movieRouter);

};
startServer()
  .then(() => {
    console.log("server started on port " + process.env.PORT);
  })
  .catch((error: any) => {
    console.log("error on starting server : ", error.message);
  });
