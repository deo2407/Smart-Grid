const express = require("express");
const router = express.Router();
const User = require("../models/user");

// Creating a user
router.post("/", async (req, res) => {
  const user = new User({
    userId: req.body.userId,
    createdAt: Date.now(),
    updatedAt: Date.now(),
    powerConsumptionByTime: new Map(),
  });
  try {
    const newUser = await user.save();
    res.status(201).json(newUser);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Updating
// router.patch("/", (res, res) => {});

//Getting all
router.get("/", async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Getting one
router.get("/:id", async (req, res) => {
  res.send("Hello world");
});

// Deleting one
router.delete("/:id", (req, res) => {});

module.exports = router;
