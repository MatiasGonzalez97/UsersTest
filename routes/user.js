var express = require('express');
var UserController = require('../controllers/user');

var router = express.Router();

// router.post('/register',UserController.save);
router.post('/create',UserController.create);
router.get('/getUserById/:id',UserController.getUserById);
module.exports = router;