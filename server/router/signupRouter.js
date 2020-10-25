const express = require('express');
const router = express.Router();
const signupController = require('../controller/signupController');
router.post('/', 
  signupController.signup,
  (req, res) => {
    return res.status(200).json(res.locals.created);
  }
);

module.exports = router;