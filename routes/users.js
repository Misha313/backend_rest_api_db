const usersRouter = require('express').Router();

const { getUsers, getUserById, createUser } = require('../controllers/users');

usersRouter.get('/users/:id', getUserById);

usersRouter.get('/users', getUsers);

usersRouter.post('/users', createUser);

module.exports = usersRouter;
