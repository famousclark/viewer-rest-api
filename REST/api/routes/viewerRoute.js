module.exports = function(app){
  var tasks = require('../controllers/viewerController');

  //Routes
  app.route('/')
    .get(tasks.landing);

  app.route('/tasks')
    .get(tasks.list_all_tasks)
    .post(tasks.create_a_task);

  app.route('/tasks/:taskId')
    .get(tasks.read_a_task)
    .put(tasks.update_a_task)
    .delete(tasks.delete_a_task);

};
