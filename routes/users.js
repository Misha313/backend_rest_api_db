const usersRouter = require('express').Router();

const fsPromises = require('fs').promises;
const path = require('path');

const usersPath = path.join(__dirname, '../data/user.json');

usersRouter.get('/users/:id', (req, res) => {
  fsPromises.readFile(usersPath, { encoding: 'utf8' })
    .then((data) => {
      const users = JSON.parse(data);
      const { id } = req.params;
      // eslint-disable-next-line no-underscore-dangle
      const user = users.find((item) => item._id === id);
      if (!user) {
        res.status(404).send({ message: 'пользователь с данным id не найден' });
      } else {
        res.send(user);
      }
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
});

usersRouter.get('/users', (req, res) => {
  fsPromises.readFile(usersPath, { encoding: 'utf8' })
    .then((data) => {
      const users = JSON.parse(data);
      res.send(users);
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
});

module.exports = usersRouter;
