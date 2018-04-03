const usersController = require('../controllers').users;
const userInputsController = require('../controllers').userInputs;
const fitnessSubgymsController = require('../controllers').fitnessSubgyms;
const basketballSubgymsController = require('../controllers').basketballSubgyms;

module.exports = (app) => {
  app.get('/api', (req, res) => res.status(200).send({
    message: 'MAL MURAT!',
  }));

  app.post('/api/users', usersController.create);
  app.get('/api/users', usersController.list);
  app.get('/api/users/:userId', usersController.retrieve);
  app.put('/api/users/:userId', usersController.update);
  app.delete('/api/users/:userId', usersController.destroy);

  app.post('/api/users/:userId/inputs', userInputsController.create);
  app.put('/api/users/:userId/inputs/:userInputId', userInputsController.update);
  app.delete(
    '/api/users/:userId/inputs/:userInputId', userInputsController.destroy);

  app.post('/api/users/:userId/fitness', fitnessSubgymsController.create);
  app.get('/api/users/:userId/fitness', fitnessSubgymsController.retrieve);
  app.put('/api/users/:userId/fitness/:fitnessId', fitnessSubgymsController.update);
  app.delete(
    '/api/users/:userId/fitness/:fitnessId', fitnessSubgymsController.destroy);
  
  app.post('/api/users/:userId/basketball', basketballSubgymsController.create);
  app.get('/api/users/:userId/basketball', basketballSubgymsController.retrieve);
  app.put('/api/users/:userId/basketball/:basketballId', basketballSubgymsController.update);
  app.delete(
    '/api/users/:userId/basketball/:basketballId', basketballSubgymsController.destroy);
// For any other request method on todo items, we're going to return "Method Not Allowed"
  app.all('/api/todos/:todoId/items', (req, res) =>
    res.status(405).send({
      message: 'Method Not Allowed',
  }));
};