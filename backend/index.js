require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const workoutRoutes = require("./routers/workouts");

// express app
const app = express();

// midelware
app.use(express.urlencoded());
app.use(express.json());
const corsOptions = {
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};
app.use(cors(corsOptions));

// routers
app.use("/api/v1/workouts", workoutRoutes);

//connect to database
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(
        `Server connected to DB and is listening on port ${process.env.PORT}`
      );
    });
  })
  .catch((e) => console.log(e));
