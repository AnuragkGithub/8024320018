const User = require("../models/User");

const getUsers = async (req, res) => {
  try {
    const users = await User.find().populate("posts");
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { getUsers };
