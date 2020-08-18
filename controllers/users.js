const User = require('../models/user');

module.exports.createUser = (req, res) => {
  const { name, about, avatar } = req.body;

  User.create({ name, about, avatar })
    .then((user) => res.status(200).contentType('JSON').send(user))
    .catch((err) => res.status(500).send({ massage: err }));
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
      res.status(500).send({ message: err.message });
    });
};
