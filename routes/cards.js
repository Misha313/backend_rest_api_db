const cardsRouter = require('express').Router();
const { getCards, createCard, deleteCardById } = require('../controllers/cards');

cardsRouter.get('/cards', getCards);
cardsRouter.post('/cards', createCard);
cardsRouter.delete('/cards/:cardId', deleteCardById);

module.exports = cardsRouter;
