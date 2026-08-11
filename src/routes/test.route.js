const express = require("express")
const router = express.Router();
const jwt = require("jsonwebtoken")
const userModel = require("../models/user.model");

router.get("/test", async (req, res) => {
    const token = req.cookies.token;

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        const user = await userModel.findOne({
            _id: decoded.id
        })

        return res.status(200).json({
            message: "User is authenticated and verified",
            user
        })
    } catch (e) {
        return res.status(409).json({
            message: "Unauthorized"
        })
    }

})

module.exports = router;
