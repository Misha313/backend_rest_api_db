const User = require('../models/user');

module.exports.createUser = (req, res) => {
  const { name, about, avatar } = req.body;

  User.create({ name, about, avatar })
    .then((user) => res.status(200).send(user))
    .catch((err) => {
      if (err.name === 'ValidationError') {
        res.status(500).send({ massage: err.message });
      }
      res.status(400).send({ massage: err.message });
    });
};

module.exports.getUsers = (req, res) => {
  User.find({})
    .then((users) => {
      res.send({ data: users });
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
};

module.exports.getUserById = (req, res) => {
  const { id } = req.params;
  User.findById(id)
    .then((user) => {
      if (!user) {
        res.status(404).send({ message: 'пользователь с данным id не найден' });
      } else {
        res.send(user);
      }
    })
    .catch((err) => {
      if (err.message.includes('Cast')) {
        res.status(404).send({ message: 'пользователь с данным id не найден' });
      }
      res.status(500).send({ message: err.message });
    });
};
