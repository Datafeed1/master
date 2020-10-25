
const express = require('express');

const feedbackController = require('../controller/feedbackController');
const router = express.Router();

/* GET users listing. */
router.post('/:id', 
  feedbackController.postFeedback,
  (req, res) => {
    return res.status(200).json({complete:'completed'});
  }
);

module.exports = router;