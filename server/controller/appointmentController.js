const appointmentController = {};
const Users = require('../models/userModel')
const { v4: uuidv4 } = require('uuid');
appointmentController.getAppointment = (req, res, next) => {
    const userId = req.params.id;
    Users.findOne({userId: userId},(err,data)=> {
        if(err) {
            return next(err);
        }
        let currentAppointment = data.currentSchedule;
        let schedule_array = data.schedule;
        if(!currentAppointment && schedule_array.length <= 0 ) {
            res.locals.currentEvent = 'None'
            return next();
        }
        else if(currentAppointment && currentAppointment.endTime > Date.now()){
            res.locals.currentEvent = currentAppointment;
            return next();
        }
        else{
            let new_currentSchedule = schedule_array.find(entry => entry.startTime > Date.now());
            let new_scheduleArray = schedule_array.filter(entry => entry.startTime > Date.now())
            
            Users.findOneAndUpdate({userId: userId},
                {currentSchedule: new_currentSchedule, schedule: new_scheduleArray},
                {new:true},
                (err,data) =>{
                    if(err) {
                        return next(err);
                    }
                    res.locals.currentEvent = new_currentSchedule;
                    return next();
            })
        }
    })
}
appointmentController.addAppointment = (req, res, next) => {
    let userId = req.params.id
    let startTime= req.body.startTime
    let endTime = req.body.endTime
    let date;
    if(typeof req.body.date === 'string') {
        date = req.body.date.toLowerCase();
    }
    let repeat = req.body.repeat
    let updateObject = {startTime: startTime, endTime: endTime, date: date, repeat: repeat}
    Users.findOneAndUpdate({userId: userId},{$push: {schedule: updateObject}}, {new:true} ,(err, data) => {
        if (err) {
            return next(err)
        }
        return next();
    })

}
module.exports = appointmentController