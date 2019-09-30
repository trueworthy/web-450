/**
 * Author: Lea Trueworthy
 * Description: Demonstration of how to connect to MongoDB and test middleware API's in SoapUI
 */

const express = require('express');
const http = require('http');
const mongoose = require('mongoose');
const Employee = require('./models/employees');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const path = require('path');
const createError = require('http-errors');

const port = 3000; // port the application listens on

// MongoDB (mLab) connection string
// const connString = 'mongodb://<username>:<password>@<host-name>:<port><database-name>';
const connString = 'mongodb+srv://admin:admin@buwebdev-cluster-1-m4xeg.mongodb.net/nodequiz?retryWrites=true&w=majority';

// MongoDB (Atlas) connection string
// const connString = 'mongodb+srv://<username>:<password>@<url>/<database-name>?retryWrites=true&w=majority'

// MongoDB connect
mongoose.connect(connString, { promiseLibrary: require('bluebird'), useNewUrlParser: true })
    .then(() => console.debug('Connection to the MongoDB instance was successful'))
    .catch((err) => console.debug('MongoDB Error: ' + err.message));

// App configurations
let app = express();

/**
 * Setup
 * body-parser needs to be added to handle JSON post data
 */
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ 'extended': 'false' }));
app.use(morgan('dev'));

// API routes
/**
 * Get all employees
 */
/**adding a new employee */
app.post('/api/employees',function(req,res,next){
  const employee={
    employeeId:req.body.employeeId,
    firstName:req.body.firstName,
    lastName:req.body.lastName,
    quizes:req.body.quizes
  }
Employee.create(employee,function(err,employees){
  if(err){
    console.log(err);
    return next(err);
  }else{
    console.log(employees);
    res.json(employees);
  }
})
})

app.get('/api/employees/:id', function(req, res, next) {
  Employee.findOne({'employeeId': req.params.id}, function(err, employee) {
    if (err) {
      console.log(err);
      return next(err);
    }  else {
      console.log(employee);
      res.json(employee);
    }
  })
});

http.createServer(app).listen(serverPort, function() {
  console.log(`Application started and listing on port: ${serverPort}`);
});