module.exports = function(app){
  var tasks = require('../controllers/userController');

  app.route('/register')
    .get(tasks.list_register);

  app.route('/register/signup')
    .post(tasks.signup_user);

  app.route('/register/:userId')
    .delete(tasks.remove_user);
};
