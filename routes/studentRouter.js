const express = require('express');
const bodyParser = require('body-parser');
const Student = require('../models/student');

const studentRouter = express.Router();

studentRouter.use(bodyParser.json());

studentRouter.route('/')
.get((req, res, next) => {
    Student.find()
    .then(students => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(students);
    })
    .catch(err => next(err));
})
.post((req, res, next) => {
    Student.create(req.body)
    .then(student => {
        console.log('Student created', student);
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(student);
    })
    .catch(err => next(err));
})
.put((req, res) => {
    res.statusCode = 403;
    res.end('Put operation is not supported on /students.');
})
.delete((req, res) => {
    Student.deleteMany()
    .then(response => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(response);
    })
    .catch(err => next(err));
});

//student id
studentRouter.route('/:studentId').
get((req, res, next) => {
    Student.findById(req.params.studentId)
    .then(campsite => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(campsite);
    })
    .catch(err => next(err));
})
.post((req, res) => {
    res.statusCode = 403;
    res.end(`POST operation is not supported on /students/ ${req.params.studentId}.`);
}).
put((req, res, next) => {
    Student.findByIdAndUpdate(req.params.studentId, {
        $set: req.body
    }, {new: true })
    .then(campsite => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(campsite);
    })
    .catch(err => next(err));
})
.delete((req, res, next) => {
   Student.findByIdAndDelete(req.params.studentId)
   .then(response => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(response);
    })
    .catch(err => next(err));
});


module.exports = studentRouter;
