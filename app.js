import express from "express";
import dotenv from "dotenv";

import Connection from "./config/db.js";
import userRouter from "./controllers/userController.js";

const port = 8080;

const app = express();

app.use(express.json());
dotenv.config();

// database
Connection(process.env.MONGO_URL);
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
