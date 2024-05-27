const User = require('../models/userModel');

exports.getAllUsers = async () => {
  return await User.findAll();
};

exports.getUserById = async (id) => {
  return await User.findByPk(id);
};

exports.createUser = async (userData) => {
  const user = await User.create(userData);
  sendWelcomeNotification(user);
  return user;
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

// Function to send welcome notification
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
