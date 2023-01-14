const { getHome, getError, getAllUsers, register,getUser, updateUser, deleteUser, login } = require('../controllers/userController')

const userRouter = require('express').Router()

// Routes
userRouter.route('/').get(getHome)
userRouter.route('/error').get(getError)
userRouter.route('/users').get(getAllUsers).post(register)
userRouter.route('/user/:id').get(getUser).patch(updateUser).delete(deleteUser)
userRouter.route('/login').post(login)

module.exports = userRouter