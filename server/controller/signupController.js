
const signupController = {};

const Users = require('../models/userModel')
const Organizations = require('../models/organizationModel')
const { v4: uuidv4 } = require('uuid');
const bcrypt = require('bcryptjs');
const salt = bcrypt.genSaltSync(10)
signupController.signup = (req, res, next) => {
    const name = req.body.name
    const email = req.body.email
    const password = req.body.password
    const address = req.body.address
    const usertype = req.body.usertype
    const organization = req.body.organization

    // const volunteer_hours = req.body.volunteer_hours

    bcrypt.hash(password, salt, (err, hash) => {
        if (err) {
            return res.send(err);
                }
                console.log(hash);
        Users.create({
            userId: uuidv4(),
            name: name,
            email: email,
            password: hash,
            address: address,
            user_type: usertype,
            organization: organization,
            last_active: Date.now()
        }, (err, data) => {
          if (err) {
            return next(err);
          }
          console.log()
          res.locals.created = data;
          return next();
        });
    })

}
signupController.checkLogin = (req, res, next) => {
    const email = req.body.email;
    const password =req.body.password;
    bcrypt.hash(password, salt, (err, hash) => {
            if (err) {
                return next(err);
            }
            Users.findOne(
                {password:hash, email: email},
                (err, data) => {
                if (err) {
                    return next(err);
                }
                res.locals.data = data;
                return next();
                }
            );
        })

}
module.exports = signupController;