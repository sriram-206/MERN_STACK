// server.js
const express = require('express');
const cors = require('cors');   
const app = express();
const port = 3000;
app.use(cors());

// Sample habit tracker data
let habitTracker = {
  user: "sriram",
  habits: [
    { id: 1, name: "Drink Water", goal: "8 glasses", completedToday: false },
    { id: 2, name: "Exercise", goal: "30 minutes", completedToday: false },
    { id: 3, name: "Read Book", goal: "20 pages", completedToday: false },
    { id: 4, name: "Meditation", goal: "10 minutes", completedToday: false },
    { id: 5, name: "Sleep 7+ hours", goal: "7 hours", completedToday: false }
  ],
  date: "2026-02-24"
};

// Enable JSON parsing
app.use(express.json());

// GET all habits
app.get('/habit-tracker', (req, res) => {
  res.json(habitTracker);
});

// GET a single habit by ID
app.get('/habit-tracker/:id', (req, res) => {
  const habit = habitTracker.habits.find(h => h.id === parseInt(req.params.id));
  if (!habit) {
    return res.status(404).json({ error: "Habit not found" });
  }
  res.json(habit);
});

// POST a new habit
app.post('/habit-tracker', (req, res) => {
  const { name, goal } = req.body;
  if (!name || !goal) {
    return res.status(400).json({ error: "Name and goal are required" });
  }
  const newHabit = {
    id: habitTracker.habits.length > 0 ? habitTracker.habits[habitTracker.habits.length - 1].id + 1 : 1,
    name,
    goal,
    completedToday: false
  };
  habitTracker.habits.push(newHabit);
  res.status(201).json(newHabit);
});

// PUT to update a habit by ID
app.put('/habit-tracker/:id', (req, res) => {
  const habit = habitTracker.habits.find(h => h.id === parseInt(req.params.id));
  if (!habit) {
    return res.status(404).json({ error: "Habit not found" });
  }
  const { name, goal, completedToday } = req.body;
  if (name !== undefined) habit.name = name;
  if (goal !== undefined) habit.goal = goal;
  if (completedToday !== undefined) habit.completedToday = completedToday;
  res.json(habit);
});

// DELETE a habit by ID
app.delete('/habit-tracker/:id', (req, res) => {
  const habitIndex = habitTracker.habits.findIndex(h => h.id === parseInt(req.params.id));
  if (habitIndex === -1) {
    return res.status(404).json({ error: "Habit not found" });
  }
  const deletedHabit = habitTracker.habits.splice(habitIndex, 1);
  res.json(deletedHabit[0]);
});

// Start server
app.listen(port, () => {
  console.log(`Habit Tracker API is running at http://localhost:${port}`);
});