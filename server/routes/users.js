const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const { getUsers } = require('../controllers/userController');

router.use(auth);

router.get('/', getUsers);

module.exports = router;
