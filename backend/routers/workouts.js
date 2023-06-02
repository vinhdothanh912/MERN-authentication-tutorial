const express = require("express");
const {
  createWorkout,
  getWorkouts,
  getWorkout,
  deleteWorkout,
  updateWorkout,
} = require("../controllers/workoutController");

const router = express.Router();

// GET workout list
router.get("/", getWorkouts);

// GET a workout
router.get("/:id", getWorkout);

// POST a new workout
router.post("/create", createWorkout);

// DELETE a workout
router.delete("/delete/:id", deleteWorkout);

// PUT a workout
router.patch("/update/:id", updateWorkout);

module.exports = router;
