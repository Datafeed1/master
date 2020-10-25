const express = require('express');
const router = express.Router();
const dataController = require('../controller/dataController');
router.post('/', 
  dataController.getData,
  (req, res) => {
    return res.status(200).json(res.locals.created);
  }
);

module.exports = router;