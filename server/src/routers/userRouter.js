const { getHome, getError, getAllUsers, postUsers,getUser, updateUser, deleteUser } = require('../controllers/userController')

const userRouter = require('express').Router()

// Routes
userRouter.route('/').get(getHome)
userRouter.route('/error').get(getError)
userRouter.route('/users').get(getAllUsers).post(postUsers)
userRouter.route('/user/:id').get(getUser).patch(updateUser).delete(deleteUser)

module.exports = userRouter