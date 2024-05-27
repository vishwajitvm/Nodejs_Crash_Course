const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const admin = require('firebase-admin'); // Add this line
const User = require('../models/userModel');

const signup = async (userData) => {
  const hashedPassword = await bcrypt.hash(userData.password, 10);
  const user = await User.create({
    ...userData,
    password: hashedPassword
  });
  sendWelcomeNotification(user);
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

const sendWelcomeNotification = (user) => {
  const message = {
    notification: {
      title: 'Welcome!',
      body: `Welcome to our app, ${user.name}!`
    },
    token: user.fcmToken
  };

  admin.messaging().send(message)
    .then((response) => {
      console.log('Successfully sent welcome notification:', response);
    })
    .catch((error) => {
      console.error('Error sending welcome notification:', error);
    });
};

module.exports = {
  signup,
  login,
  updateFcmToken
};
