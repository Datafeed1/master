
const express = require('express');

const feedbackController = require('../controller/feedbackController');
const router = express.Router();

/* GET users listing. */
router.post('/:id', 
  feedbackController.postFeedback,
  (req, res) => {
    return res.sendStatus(200);
  }
);

module.exports = router;