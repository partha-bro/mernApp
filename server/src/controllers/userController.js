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

// Create User / Signup
const register = async (req,res) => {
    const { name, email, phone, work, password, cnfPassword } = req.body
    if( !name && !email && !phone && !work && !password && !cnfPassword ) throw new CustomError(400,'Please fill all details!')
    if(password === cnfPassword){
        const user = await UserDB.create({ name, email, phone, work, password, cnfPassword })
        if(!user) throw new CustomError(404, 'No User Created!')
        res.status(201).json({user, message:'User Created'})
    }else{
        throw new CustomError(400,'Doesn\'t Match password! please try again')
    }
    
}

// Login
const login = async (req,res) => {
    const { username, password } = req.body
    if(!username && !password) throw new CustomError(400,'Please Provide all fields!')
    const user = await UserDB.findOne({name: username})
    if(!user) throw new CustomError(404,'User Doesn\'t exists! ')
    if(user.password === password) res.status(200).json({message: 'Login SuccessFully'})
    else throw new CustomError(400,'Password Error! ')
}

module.exports = {
    getHome,
    getError,
    getAllUsers,
    register,
    getUser,
    updateUser,
    deleteUser,
    login
}