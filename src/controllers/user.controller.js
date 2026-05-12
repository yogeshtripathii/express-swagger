const User = require("../models/user.model");

exports.getUsers = async (req, res) => {
  res.json(await User.find());
};

exports.createUser = async (req, res) => {
  res.json(await User.create(req.body));
};

exports.updateUser = async (req, res) => {
  res.json(
    await User.findByIdAndUpdate(req.params.id, req.body, { new: true })
  );
};

exports.deleteUser = async (req, res) => {
  await User.findByIdAndDelete(req.params.id);
  res.json({ msg: "deleted" });
};