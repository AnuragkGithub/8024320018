const express = require("express");
const User = require("../models/User");

const router = express.Router();

// Route to save a new user
router.post("/register", async (req, res) => {
  const { name, email, password } = req.body;

  try {
    // Check if user already exists
    let user = await User.findOne({ email });
    if (user) return res.status(400).json({ message: "User already exists" });

    // Create new user
    user = new User({ name, email, password });
    await user.save();
    
    res.status(201).json({ message: "User created successfully", user });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
});

module.exports = router;
