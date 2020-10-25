const dayController = {};
const Users = require('../models/userModel')

dayController.addDays = (req, res, next) => {
    let userId = req.params.id
    let startTime= req.body.startTime
    let endTime = req.body.endTime
    let date = req.body.date
    let repeat = req.body.repeat
    let updateObject = {startTime: startTime, endTime: endTime, date: date, repeat: repeat}
    Users.findOneAndUpdate({userId: userId},{$push: {days: updateObject}}, {new:true} ,(err, data) => {
        if (err) {
            return next(err)
        }
        return next()
    });
}
dayController.getCurrentDay = (req, res, next) => {
    const userId = req.params.id;
    Users.findOne({userId:userId},(err,data) => {
        if(err) {
            return next(err);
        }
        let day;
        switch (new Date().getDay()) {
            case 0:
              day = "sunday";
              break;
            case 1:
              day = "monday";
              break;
            case 2:
               day = "tuesday";
              break;
            case 3:
              day = "wednesday";
              break;
            case 4:
              day = "thursday";
              break;
            case 5:
              day = "friday";
              break;
            case 6:
              day = "saturday";
          }
        let payload = data.days.find(entry => entry.date = day);
        res.locals.payload = payload;
    })
}
module.exports = dayController