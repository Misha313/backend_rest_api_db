const cardsRouter = require('express').Router();

const fsPromises = require('fs').promises;
const path = require('path');

const cardsPath = path.join(__dirname, '../data/cards.json');

cardsRouter.get('/cards', (req, res) => {
  fsPromises.readFile(cardsPath, { encoding: 'utf8' })
    .then((data) => {
      const cards = JSON.parse(data);
      res.send(cards);
    })
    .catch((err) => {
      res.status(500);
      res.send({ message: err.message });
    });
});

module.exports = cardsRouter;
