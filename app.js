import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import Connection from "./config/db.js";
import userRouter from "./controllers/userController.js";

const port = 8080;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: "*",
  })
);
dotenv.config();

// database
Connection(process.env.MONGO_URL);
// app.get("/", (req, res) => {
//   res.json("Hello!");
// });

app.get("/get", (req, res) => {
  res.send("hello");
});

app.use("/", userRouter);

try {
  app.listen(port||8000, () => {
    console.log(`app server running on ${port}...`);
  });
} catch (err) {
  console.log(err);
}
