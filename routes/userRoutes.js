const express = require('express');
const userController = require('../controllers/userController');

const router = express.Router();

// Get all ussers
router.get('/', userController.getAllUsers);

// Get a user by id
router.get('/:id', userController.getUserById);

// Create a new user
router.post('/', userController.createUser);

// Update a user by Id
router.put('/:id', userController.updateUser);

// Delete a user by IDss
router.delete('/:id', userController.deleteUser);

module.exports = router;
