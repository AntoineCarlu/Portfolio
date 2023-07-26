const router = require('express').Router();
const authController = require('../controllers/auth.controller');

router.post('/register', authController.createAdmin);
router.post('/login', authController.loginAdmin);

module.exports = router;