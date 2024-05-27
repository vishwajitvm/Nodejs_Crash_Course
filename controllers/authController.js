const authService = require('../services/authService');

exports.signup = async (req, res) => {
  try {
    const user = await authService.signup(req.body);
    res.status(201).json(user);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const { user, token } = await authService.login(email, password);
    res.json({ user, token });
  } catch (error) {
    res.status(401).send({ message: 'Invalid email or password' });
  }
};

exports.updateFcmToken = async (req, res) => {
  try {
    const { userId, fcmToken } = req.body;
    const user = await authService.updateFcmToken(userId, fcmToken);
    res.json(user);
  } catch (error) {
    res.status(500).send(error.message);
  }
};
