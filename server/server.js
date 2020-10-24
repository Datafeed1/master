require('dotenv').config()
const express = require('express');
const path = require('path')
const app = express();
const PORT = 4000;
const cookieParser = require('cookie-parser')
const cors = require('cors')
const userController  = require('./router/userController.js')
app.use(cookieParser());
app.use(cors());
app.use(express.json());
app.listen(PORT, () => {
    console.log(`Server listening on port: ${PORT}`);
  });
app.use('/users', userController)
app.use('/', (req,res) => {
    res.render('index', { title: 'Datafeed'})
})
module.exports = app;