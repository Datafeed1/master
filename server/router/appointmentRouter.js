const express = require('express');
const router = express.Router();
const appointmentController = require('../controller/appointmentController');
router.get('/:id', 
  appointmentController.addAppointment,
  (req, res) => {
    return res.status(200).json({completed: 'completed'});
  }
);

module.exports = router;