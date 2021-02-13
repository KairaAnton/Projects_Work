const { Router } = require('express');
const basicMiddlewares = require('./middlewares/basicMiddlewares');
const contestController = require('./controllers/contestController');
const checkToken = require('./middlewares/checkToken');

const contestRouter = Router();

// router.post(
//   '/getAllContests',
contestRouter.get('/', checkToken.checkToken,
  basicMiddlewares.onlyForCreative,
  contestController.getContests);

module.exports = contestRouter;
