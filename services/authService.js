const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/userModel');

const signup = async (userData) => {
  const hashedPassword = await bcrypt.hash(userData.password, 10);
  const user = await User.create({
    ...userData,
    password: hashedPassword
  });
  return user;
};

const login = async (email, password) => {
  const user = await User.findOne({ where: { email } });
  if (!user) {
    throw new Error('Invalid email or password');
  }
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    throw new Error('Invalid email or password');
  }
  const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });
  return { user, token };
};

const updateFcmToken = async (userId, fcmToken) => {
  const user = await User.findByPk(userId);
  if (user) {
    user.fcmToken = fcmToken;
    await user.save();
    return user;
  }
  throw new Error('User not found');
};

module.exports = {
  signup,
  login,
  updateFcmToken
};
