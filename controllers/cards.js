const Card = require('../models/card');

module.exports.getCards = (req, res) => {
  Card.find({})
    .then((cards) => {
      res.send({ message: cards });
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
};

module.exports.createCard = (req, res) => {
  const { name, link } = req.body;
  const owner = req.user._id;

  Card.create({ name, link, owner })
    .then((card) => res.send(card))
    .catch((err) => res.status(400).send({ message: err.message }));
};

module.exports.deleteCardById = (req, res) => {
  const { cardId } = req.params;

  Card.findByIdAndRemove(cardId)
    .then((user) => {
      if (!user) {
        res.status(404).send({ message: 'карточка с данным id не найдена' });
      } else {
        res.status(200).send({ data: user });
      }
    })
    .catch((err) => res.status(500).send({ message: err.message }));
};
