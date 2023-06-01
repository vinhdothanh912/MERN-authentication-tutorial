const express = require("express");

const workoutRouter = express.Router();

workoutRouter.get("/", (req, res) => {
  res.json({ message: "Welcome to the app" });
});

module.exports = workoutRouter;
