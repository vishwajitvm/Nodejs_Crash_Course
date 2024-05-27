const User = require('../models/userModel');

exports.getAllUsers = async () => {
  return await User.findAll();
};

exports.getUserById = async (id) => {
  return await User.findByPk(id);
};

exports.createUser = async (userData) => {
  return await User.create(userData);
};

exports.updateUser = async (id, userData) => {
  const user = await User.findByPk(id);
  if (user) {
    await user.update(userData);
    return user;
  }
  return null;
};

exports.deleteUser = async (id) => {
  const user = await User.findByPk(id);
  if (user) {
    await user.destroy();
    return true;
  }
  return false;
};
