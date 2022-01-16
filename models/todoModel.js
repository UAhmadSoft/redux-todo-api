const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
  task: String,
  completed: {
    type: Boolean,
    default: false,
  },
  _id: String,
});

// this.pre(/^find/, function (next) {
//  this.populate({ path: '' });
//  next();
// });

const Todo = mongoose.model('Todo', todoSchema);
module.exports = Todo;
