const express = require('express');
const bodyParser = require('body-parser');

const groupRouter = express.Router();

groupRouter.use(bodyParser.json());

groupRouter.route('/').
all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
}).
get((req, res) => {
    res.end('Will send all the groups to you.');
}).
post((req, res) => {
    res.end(`Will add the group: ${req.body.name} 
        with teacher ${req.body.teacher}`);
}).
put((req, res) => {
    res.statusCode = 403;
    res.end('Put operation is not supported on /groups.');
}).
delete((req, res) => {
    res.end('Deleting all groups.');
});

groupRouter.route('/:groupId').
all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
}).
get((req, res) => {
    res.end(`Will send details of the group: ${req.params.groupId} to you.`);
}).
post((req, res) => {
    res.statusCode = 403;
    res.end(`POST operation is not supported on /groups/ ${req.params.groupId}.`);
}).
put((req, res) => {
    res.write(`Updating the group: ${req.params.groupId}\n`);
    res.end(`Will update the group: ${req.body.name} 
        with teacher: ${req.body.teacher}`);
}).
delete((req, res) => {
    res.end(`Deleting group: ${req.params.groupId}.`);
});


module.exports = groupRouter;
