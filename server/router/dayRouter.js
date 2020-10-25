const express = require('express');
const router = express.Router();
const dayController = require('../controller/dayController');
router.get('/:id', 
  dayController.getCurrentDay,
  (req, res) => {
    return res.status(200).json(res.locals.payload);
  }
);
router.post('/:id', 
  dayController.addDays,
  (req, res) => {
    return res.sendStatus(200);
  }
);
module.exports = router;