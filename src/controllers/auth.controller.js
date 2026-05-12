const jwt = require("jsonwebtoken");
const User = require("../models/user.model");

// signup
exports.signup = async (req, res) => {
  const user = await User.create(req.body);

  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);

  res.json({ token });
};

// login
exports.login = async (req, res) => {
  const user = await User.findOne({ email: req.body.email }).select("+password");

  const match = await user.comparePassword(req.body.password);

  if (!match) return res.status(401).json({ msg: "Invalid" });

  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);

  res.json({ token });
};