const { getHome, getError, getAllUsers, register,getUser, updateUser, deleteUser, login } = require('../controllers/userController')
const auth = require('../middlewares/auth')
const userRouter = require('express').Router()

// Routes
userRouter.route('/').get(getHome)
userRouter.route('/error').get(getError)
userRouter.route('/api/v1/users').get(auth,getAllUsers).post(register)
userRouter.route('/api/v1/user/:id').get(auth,getUser).patch(auth,updateUser).delete(auth,deleteUser)
userRouter.route('/login').post(login)

module.exports = userRouter