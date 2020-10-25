
const feedbackController = {};
const Reviews = require('../models/reviewModel')
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
        long_form: longform
    }, (err, data) => {
        if(err) {
            return next(err);
        }
        Reviews.findOneAndUpdate({userId: userId},{$push: {reviews: reviewId}}, {new: true}, (err, data) => {
            if(err) {
                return next(err);
            }

        })
    })

}

module.exports = feedbackController