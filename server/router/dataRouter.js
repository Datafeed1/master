const express = require('express');
const router = express.Router();
const dataController = require('../controller/dataController');
router.post('/:id', 
  dataController.getData,
  (req, res) => {
    return res.status(200).json(res.locals.payload);
  }
);

module.exports = router;