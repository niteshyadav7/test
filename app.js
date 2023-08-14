import express from "express";

import Connection from "./config/db.js";
import userRouter from "./controllers/userController.js";

const port = 8080;

const app = express();

app.use(express.json());

// database
Connection(
  "mongodb+srv://nitesh0709yadav:nitesh0709yadav@cluster0.ctp026m.mongodb.net/?retryWrites=true&w=majorityesrew"
);
app.get("/", (req, res) => {
  res.json("Hello!");
});

app.use("/api", userRouter);

try {
  app.listen(port, () => {
    console.log(`app server running on ${port}...`);
  });
} catch (err) {
  console.log(err);
}
