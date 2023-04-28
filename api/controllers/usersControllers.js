import bcrypt from "bcrypt";
import User from "../models/user.js";

const getAllUsers = async(req, res) => {
    try {
       const getUsers = await User.find();
       return res.status(200).json(getUsers);
    } catch(err) {
        console.log(err);
    }
}

const updateUser = (req, res) => {
    res.send("all users")
}

const createNewUser = async(req, res) => {
    try {
        const { name, surname, email, password } = req.body;
        const isUser = await User.findOne({ email });
        if(isUser) return res.status(409).json({message: "User is already registred"});
        const hashPwd = await bcrypt.hash(password, 10);
        const userObject = { name, surname, email, "password": hashPwd };
        const isCreated = User.create(userObject);
        if(isCreated) {
            res.status(201).json({ message: "User was created" });
        } else {
            res.status(400).json({ message: "Invalid user data!" });
        }
    } catch(err) {
        console.log(err);
    }
}


const deleteUser = (req, res) => {
    res.send("all users")
}

const userController = {
    getAllUsers,
    createNewUser,
    updateUser,    
    deleteUser
}

export default userController;