const { getHome, getError, getAllUsers } = require('../controllers/userController')

const userRouter = require('express').Router()

// Routes
userRouter.route('/').get(getHome)
userRouter.route('/error').get(getError)
userRouter.route('/users').get(getAllUsers)

module.exports = userRouter