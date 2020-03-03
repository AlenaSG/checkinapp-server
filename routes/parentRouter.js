const express = require('express');
const bodyParser = require('body-parser');

const parentRouter = express.Router();

parentRouter.use(bodyParser.json());

parentRouter.route('/').
all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
}).
get((req, res) => {
    res.end('Will send all the parents to you.');
}).
post((req, res) => {
    res.end(`Will add the parent: ${req.body.firstname} 
        with lastname ${req.body.lastname}`);
}).
put((req, res) => {
    res.statusCode = 403;
    res.end('Put operation is not supported on /parents.');
}).
delete((req, res) => {
    res.end('Deleting all parents.');
});

parentRouter.route('/:parentId').
all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
}).
get((req, res) => {
    res.end(`Will send details of the parent: ${req.params.parentId} to you.`);
}).
post((req, res) => {
    res.statusCode = 403;
    res.end(`POST operation is not supported on /parents/ ${req.params.parentId}.`);
}).
put((req, res) => {
    res.write(`Updating the parent: ${req.params.parentId}\n`);
    res.end(`Will update the parent: ${req.body.firstname}
        with lastname: ${req.body.lastname}`);
}).
delete((req, res) => {
    res.end(`Deleting parent: ${req.params.parentId}.`);
});


module.exports = parentRouter;

