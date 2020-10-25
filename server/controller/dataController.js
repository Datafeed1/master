const dataController = {};
const Users = require('../models/userModel');
const Organizations = require('../models/organizationModel');
dataController.getData = (req, res, next) => {
    let userId = req.params.id;
    Users.findOne({userId:userId},(err,data)=> {
        if(err) {
            return next(err);
        }
        let organization_name = data.organization
        Organizations.findOne({name: organization_name}, (err,data)=> {
            if(err) {
                return next(err);
            }
            let {rating_timeseries,
                quantity_timeseries,
                quality_timeseries,
                accessibility_timeseries,
                avg_rating,
                avg_quantity,
                avg_quality,
                avg_accessibility} = data;
            let payload = {
                rating_timeseries: rating_timeseries,
                quantity_timeseries: quantity_timeseries,
                quality_timeseries: quality_timeseries,
                accessibility_timeseries: accessibility_timeseries,
                avg_rating: avg_rating,
                avg_quantity: avg_quantity,
                avg_quality:avg_quality,
                avg_accessibility:avg_accessibility
            }
            res.locals.payload = payload
            return next();
        })
    })
}
module.exports = dataController