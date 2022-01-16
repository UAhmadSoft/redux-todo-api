const Todo = require('../models/todoModel');
const AppError = require('../utils/appError');
const catchAsync = require('../utils/catchAsync');

exports.getAllTodos = catchAsync(async (req, res, next) => {
  const todos = await Todo.find();

  res.status(200).json({
    status: 'success',
    todos,
  });
});

exports.addNewTodo = catchAsync(async (req, res, next) => {
  const todo = await Todo.create(req.body);

  res.status(201).json({
    status: 'success',
    todo,
  });
});

exports.getTodo = catchAsync(async (req, res, next) => {
  const todo = await Todo.findById(req.params.id);

  if (!todo)
    return next(new AppError(`Can't find todo for id ${req.params.id}`, 404));

  res.status(200).json({
    status: 'success',
    todo,
  });
});

exports.updateTodo = catchAsync(async (req, res, next) => {
  const todo = await Todo.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  if (!todo)
    return next(new AppError(`Can't find todo for id ${req.params.id}`, 404));

  res.status(200).json({
    status: 'success',
    todo,
  });
});

exports.deleteTodo = catchAsync(async (req, res, next) => {
  const todo = await Todo.findByIdAndDelete(req.params.id);

  if (!todo)
    return next(new AppError(`Can't find todo for id ${req.params.id}`, 404));

  res.status(200).json({
    status: 'success',
    todo,
  });
});
