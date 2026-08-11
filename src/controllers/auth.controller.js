const userModel = require("../models/user.model");
const jwt = require("jsonwebtoken");

async function registerUser(req, res) {
    const { username, email, password } = req.body;

    const ifUserAlreadyExist = await userModel.findOne({ email });

    if (ifUserAlreadyExist) {
        return res.status(400).json({
            message: "user already exist"
        })
    }

    const user = await userModel.create({
        username,
        email,
        password
    })

    const token = jwt.sign({
        id: user._id
    }, process.env.JWT_SECRET)

    res.cookie("token", token)

    res.status(201).json({
        message: "User registered sucessfully",
        user,
    })
}

module.exports = { registerUser }
