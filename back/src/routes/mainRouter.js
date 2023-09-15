const express = require('express');
const mainRouter = express.Router();
const login = require('../controllers/login.js');
const getCharById = require('../controllers/getCharById.js');
const { postFav, deleteFav } = require('../controllers/handleFavorite.js');

mainRouter.get("/character/:id", getCharById);
mainRouter.get("/login", login);
mainRouter.post("/fav", postFav);
mainRouter.delete("/fav/:id", deleteFav);

module.exports = mainRouter;