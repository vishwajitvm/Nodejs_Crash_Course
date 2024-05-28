const authService = require('../services/authService');

exports.signup = async (req, res) => {
  try {
    const user = await authService.signup(req.body);
    res.status(201).json({
      message: 'User successfully registered',
      user
    });
  } catch (error) {
    res.status(500).json({
      message: 'Error registering user',
      error: error.message
    });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const { user, token } = await authService.login(email, password);
    res.json({
      message: 'Login successful',
      user,
      token
    });
  } catch (error) {
    res.status(401).json({
      message: 'Invalid email or password',
      error: error.message
    });
  }
};

exports.updateFcmToken = async (req, res) => {
  try {
    const { userId, fcmToken } = req.body;
    const user = await authService.updateFcmToken(userId, fcmToken);
    res.json({
      message: 'FCM token updated successfully',
      user
    });
  } catch (error) {
    res.status(500).json({
      message: 'Error updating FCM token',
      error: error.message
    });
  }
};
