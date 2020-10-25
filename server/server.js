require('dotenv').config()
const express = require('express');
const path = require('path')
const bodyParser = require('body-parser')
const app = express();
const PORT = 4000;
const logger = require('morgan')
const cookieParser = require('cookie-parser')
const cors = require('cors')
const feedbackRouter  = require('./router/feedbackRouter.js');
const signupRouter = require('./router/signupRouter.js');
const loginRouter = require('./router/loginRouter.js');
const dataRouter = require('./router/dataRouter.js');
const appointmentRouter = require('./router/appointmentRouter.js');
const mongoose = require('mongoose');
app.use(cookieParser());
app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true}))
app.use(bodyParser.json());
app.use(cookieParser());
app.enable("trust proxy");
app.use(express.json());
const password1 = 'fsfuser';
const dbName = 'datafeed';
const uri = `mongodb+srv://fsf:${password1}@datafeed.8jyoq.mongodb.net/${dbName}?retryWrites=true&w=majority`;
mongoose.connect(uri);
mongoose.connection.once('open', () => {
  console.log('Connected to Database');
});
console.log('fails there')
app.use('/signup', signupRouter)
console.log('fails at 24')
app.use('/login', loginRouter)
app.use('/feedback', feedbackRouter)
app.use('/getdata', dataRouter)
app.use('/getappointment', appointmentRouter)
app.use('/', (req,res) => {
    res.render('index', { title: 'Datafeed'})
})
app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});
module.exports = app;