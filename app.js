import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import Connection from "./config/db.js";
import userRouter from "./controllers/userController.js";

const port = 8080;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
dotenv.config();

// database
Connection(
  "mongodb+srv://nitesh0709yadav:nitesh0709yadav@cluster0.ctp026m.mongodb.net/?retryWrites=true&w=majorityesrew"
);
// app.get("/", (req, res) => {
//   res.json("Hello!");
// });

app.use("/", userRouter);

try {
  app.listen(port, () => {
    console.log(`app server running on ${port}...`);
  });
} catch (err) {
  console.log(err);
}
