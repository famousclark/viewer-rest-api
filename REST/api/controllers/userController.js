const mongoose = require('mongoose');
const User = mongoose.model('userTasks');
const bcrypt = require('bcrypt');

exports.list_register = (req, res) => {
  User.find({}, (err, task) => {
      if(err)
        res.send(err);
      res.json(task);
  });
};

exports.signup_user = (req, res, next) => {
  User.find({email: req.body.email})
    .exec()
    .then(user => {
      if(user.length>=1){
        return res.status(409).json({
          message: 'Mail exists'
        });
      } else {
        bcrypt.hash(req.body.password, 10, (err, hash) => {
          if (err){
            return res.status(500).json({
              error: err
            });
          } else {
            const user = new User({
              email: req.body.email,
              password: hash
            });
            user
              .save()
              .then(result => {
                res.status(201).json({
                  message: 'User created'
                });
              })
              .catch(err => {
                console.log(err);
                res.status(500).json({error: err});
              });
          }
        });
      }
    });
};

exports.remove_user = (req, res) => {
  User.remove({_id: req.params.userId},
    function(err, task) {
      if (err)
        res.send(err);
      res.json({ message: 'User successfully deleted' });
    });
};
