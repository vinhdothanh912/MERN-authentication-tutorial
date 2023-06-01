require("dotenv").config();
const express = require("express");
const workoutRouter = require("./routers/workoutRouter");

const port = process.env.PORT || 4000;

// express app
const app = express();

// midelware
app.use(express.urlencoded());
app.use(express.json());

// routers
app.use("/api/v1", workoutRouter);

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
