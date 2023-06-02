const { default: mongoose } = require("mongoose");
const Workout = require("../models/workoutModel");

// get workout list
const getWorkouts = async (req, res) => {
  try {
    const workouts = await Workout.find({}).sort({ createdAt: -1 });

    return res.status(200).json(workouts);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

// get a workout
const getWorkout = async (req, res) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({ error: "No such workout" });
    }

    const workout = await Workout.findById(id);

    if (!workout) {
      return res.status(404).json({ error: "No such workout" });
    }

    return res.status(200).json(workout);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

// create a new workout
const createWorkout = async (req, res) => {
  const { title, load, reps } = req.body;

  try {
    const workout = await Workout.create({ title, load, reps });

    res.status(200).json(workout);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// delete workout
const deleteWorkout = async (req, res) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({ error: "No such workout" });
    }

    const workout = await Workout.findByIdAndDelete(id);

    if (!workout) {
      return res.status(404).json({ error: "No such workout" });
    }

    return res.status(200).json(workout);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

// update workout
const updateWorkout = async (req, res) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({ error: "No such workout" });
    }

    const workout = await Workout.findByIdAndUpdate(id, { ...req.body });

    if (!workout) {
      return res.status(404).json({ error: "No such workout" });
    }

    return res.status(200).json(workout);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

module.exports = {
  createWorkout,
  getWorkout,
  getWorkouts,
  deleteWorkout,
  updateWorkout,
};
