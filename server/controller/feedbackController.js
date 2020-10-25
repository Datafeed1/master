
const feedbackController = {};
const Reviews = require('../models/reviewModel')
const Users = require('../models/userModel');
const Organizations = require('../models/organizationModel');
const { v4: uuidv4 } = require('uuid');

feedbackController.postFeedback = (req, res, next) => {
    const userId = req.params.id;
    const reviewId = uuidv4();
    const timestamp = Date.now();
    const length = req.body.length
    const location = req.body.location
    const rating = req.body.rating
    const quantity = req.body.quantity
    const quality = req.body.quality
    const accessibility = req.body.accessibility
    const long_form = req.body.long_form
    Reviews.create({
        reviewId: reviewId,
        timestamp: timestamp,
        length: length,
        location: location,
        rating: rating,
        quantity: quantity,
        quality: quality,
        accessibility: accessibility,
        long_form: long_form
    }, (err, data) => {
        if(err) {
            return next(err);
        }
        Users.findOneAndUpdate({userId: userId},{$push: {reviews: reviewId}}, {new: true}, (err, data) => {
            if(err) {
                return next(err);
            }
            let organization = data.organization;
            Organizations.findOne({name:organization}, (err, data) => {
                if(err) {
                    return next(err);
                }
                let new_rating_timeseries = [];
                let new_quantity_timeseries = [];
                let new_quality_timeseries = []
                let new_accessibility_timeseries = [];
                let { avg_rating, avg_quantity, avg_quality, avg_accessibility} = data;
                let new_avg_rating;
                let new_avg_quantity;
                let new_avg_quality;
                let new_accessibility;
                if(data.rating_timeseries.length === 0 || data.rating_timeseries === null) {
                    new_rating_timeseries.push({timestamp: Date.now(),rating: rating})
                    new_quantity_timeseries.push({timestamp: Date.now(),quantity : quantity})
                    new_quality_timeseries.push({timestamp: Date.now(),quality : quality})
                    new_accessibility_timeseries.push({timestamp: Date.now(),accessibility : accessibility})
                }
                else{
                    let array_length = data.rating_timeseries.length;
                    let difference =Date.now() -data.rating_timeseries[array_length-1].timestamp
                    if(difference < 604800000) {
                        new_rating_timeseries = data.rating_timeseries.push({timestamp: Date.now(),rating : rating});
                        new_quantity_timeseries = data.quantity_timeseries.push({timestamp: Date.now(),quantity : quantity});
                        new_quality_timeseries = data.quality_timeseries.push({timestamp: Date.now(),quality : quality})
                        new_accessibility_timeseries = accessibility_timeseries.push({timestamp: Date.now(),accessibility : accessibility})
                    }
                }
                let num_reviews = data.reviews.length;
                if(!num_reviews || num_reviews.length === 0){
                    new_avg_rating = rating
                    new_avg_quantity = quantity
                    new_avg_quality = quality
                    new_accessibility = accessibility
                }
                else {
                    new_avg_rating = ((avg_rating * num_reviews) + rating) / (num_reviews+1)
                    new_avg_quantity = ((avg_quantity * num_reviews) + quantity)/ (num_reviews+1)
                    new_avg_quality = ((avg_quality * num_reviews) + quality) / (num_reviews+1)
                    new_accessibility = ((avg_accessibility * num_reviews) + accessibility)/ (num_reviews+1)
                }
                let updateObject = {
                                    rating_timeseries: new_rating_timeseries,
                                    quantity_timeseries: new_quantity_timeseries,
                                    quality_timeseries: new_quality_timeseries,
                                    accessibility_timeseries: new_accessibility_timeseries,
                                    avg_rating: new_avg_rating,
                                    avg_quantity: new_avg_quantity,
                                    avg_quality: new_avg_quality,
                                    avg_accessibility: new_accessibility,
                                    $push: {reviews: reviewId}}
                Organizations.findOneandUpdate({name:organization},updateObject,(err, data)=> {
                    if(err) {
                        return next(err)
                    }
                    return next();
                })
            })

        })
    })

}

module.exports = feedbackController