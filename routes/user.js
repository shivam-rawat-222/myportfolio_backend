const express = require("express");
const router = express.Router();
const asynchandler = require("express-async-handler")
const users = require("../Schemas/userSchema")
router.route("/all").get(asynchandler(async (req, res) => {
    const data = await users.find()
    res.status(200).json({ message: data })


}))

router.route("/new").post(asynchandler(async (req, res) => {

    console.log(req.body)
    const { name, email, message } = req.body;
    console.log(message)
    const data = await users.create(
        {
            name,
            email,
            message
        }

    )
    if (!data) {
        res.status(404)
        throw new Error("cant submit the data");
    }
    res.status(200).json({
        "message": "data sent successfully"
    })




}))


module.exports = router;