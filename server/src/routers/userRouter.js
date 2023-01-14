const { getHome, getError } = require('../controllers/userController')

const userRouter = require('express').Router()

// Routes
userRouter.route('/').get(getHome)
userRouter.route('/error').get(getError)

module.exports = userRouter