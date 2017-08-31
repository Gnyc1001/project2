const express = require('express'); //start express
const empireRouter = express.Router(); //start router
const empireController = require('../controllers/empire-controller'); //pull empirecontroller
const authHelpers = require('../services/auth/auth-helpers');//added

empireRouter.get('/', authHelpers.loginRequired, empireController.index);
empireRouter.post('/', authHelpers.loginRequired, empireController.create);
empireRouter.get('/add', authHelpers.loginRequired, ( req, res )=> {
  res.render('empire/empire-add', { currentPage: 'add',
  });//added with auth
});

empireRouter.get('/:id', empireController.show);
empireRouter.get('/:id/edit', authHelpers.loginRequired, empireController.edit);
empireRouter.put('/:id', authHelpers.loginRequired, empireController.update);
empireRouter.delete('/:id', authHelpers.loginRequired, empireController.delete);

module.exports = empireRouter;
