const express = require('express');
const router = express.Router();
const appointmentController = require('../controller/appointmentController');
router.get('/:id', 
  appointmentController.getAppointment,
  (req, res) => {
    return res.status(200).json(res.locals.currentEvent);
  }
);
router.post('/:id', 
  appointmentController.addAppointment,
  (req, res) => {
    return res.sendStatus(200);
  }
);
module.exports = router;