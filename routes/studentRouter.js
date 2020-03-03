const express = require('express');
const bodyParser = require('body-parser');

const studentRouter = express.Router();

studentRouter.use(bodyParser.json());

studentRouter.route('/').
all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
}).
get((req, res) => {
    res.end('Will send all the students to you.');
}).
post((req, res) => {
    res.end(`Will add the student: ${req.body.firstname} 
        with lastname ${req.body.lastname}`);
}).
put((req, res) => {
    res.statusCode = 403;
    res.end('Put operation is not supported on /students.');
}).
delete((req, res) => {
    res.end('Deleting all students.');
});

studentRouter.route('/:studentId').
all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
}).
get((req, res) => {
    res.end(`Will send details of the student: ${req.params.studentId} to you.`);
}).
post((req, res) => {
    res.statusCode = 403;
    res.end(`POST operation is not supported on /students/ ${req.params.studentId}.`);
}).
put((req, res) => {
    res.write(`Updating the student: ${req.params.studentId}\n`);
    res.end(`Will update the student: ${req.body.firstname} 
        with lastname: ${req.body.lastname}`);
}).
delete((req, res) => {
    res.end(`Deleting student: ${req.params.studentId}.`);
});


module.exports = studentRouter;
