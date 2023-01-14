const { getHome } = require('../controllers/userController')

const userRouter = require('express').Router()

// Routes
userRouter.route('/').get(getHome)

module.exports = userRouter