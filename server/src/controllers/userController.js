const CustomError = require("../errors/customError")
const UserDB = require("../models/UserModel")

// Home controller [for developing]
const getHome = (req,res) => {
    res.json({message: 'Home'})
}

// Error controller [for developing]
const getError = (req,res) => {
    // normal error class
    // throw new Error('Check Error middleware')

    // Custom Error Class
    throw new CustomError(500,'Check Custom Error middleware')
    res.json({message: 'Error message'})
}

// Get All Users
const getAllUsers = async (req,res) => {
    const users = await UserDB.find({})
    if(!users) throw new CustomError(500,'No All Users')
    res.status(200).json({Total: users.length,users})
}

// Create User
const postUsers = async (req,res) => {
    const user = await UserDB.create(req.body)
    if(!user) throw new CustomError(404, 'No User Created!')
    res.status(201).json({user, message:'User Created'})
}

// fetch single user
const getUser = async (req,res) => {
    const user = await UserDB.findById(req.params.id)
    if(!user) throw new CustomError(404, "No such user exists!")
    res.status(200).json({user})
}

// update user
const updateUser = async (req,res) => {
    const user = await UserDB.findByIdAndUpdate(req.params.id,req.body,{
        new: true,
        runValidators: true
    })
    if(!user) throw new CustomError(404, "No such user exists!")
    res.status(200).json({user, message: 'User Updated'})
}

// delete user
const deleteUser = async (req,res) => {
    const user = await UserDB.findByIdAndDelete(req.params.id)
    if(!user) throw new CustomError(404, "No such user exists!")
    res.status(200).json({user, message:'User Deleted'})
}

module.exports = {
    getHome,
    getError,
    getAllUsers,
    postUsers,
    getUser,
    updateUser,
    deleteUser
}