const appointmentController = {};
const Users = require('../models/userModel')
const { v4: uuidv4 } = require('uuid');
appointmentController.getAppointment = (req, res, next) => {
    const userId = req.params.id;
    return next();
}
appointmentController.addAppointment = (req, res, next) => {
    return next();
}
appointmentController.postAppointment = (req, res, next) => {
    return next();
}
module.exports = appointmentController