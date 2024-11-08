const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const { body } = require('express-validator');

router.post('/register', authController.register);

router.post('/login', authController.login);

router.post('/google-login', authController.googleLogin);

router.post('/request-password-reset', authController.requestPasswordReset);

router.post('/reset-password', authController.resetPassword);

module.exports = router;