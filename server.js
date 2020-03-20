const express = require('express');

const ProjectRouter = require('./projects/project-router');
const ResourceRouter = require('./resources/resource-router');
const TaskRouter = require('./tasks/task-router');

const server = express();

server.use(express.json());
server.use('/api/projects', ProjectRouter);
server.use('/api/resources', ResourceRouter);
server.use('/api/tasks', TaskRouter);

module.exports = server;