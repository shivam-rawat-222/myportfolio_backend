const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt")
const wtoken = require("jsonwebtoken")
const register = require("../Schemas/register")
const env = require("dotenv")
router.route("/login").post(async(req,res)=>{
    const {gmail , password} = req.body;
    const founded_data = await register.findOne({gmail});
    if(founded_data && await bcrypt.compare(password,founded_data.password))
    {
        const token = wtoken.sign({
            user :{
                username : founded_data.username,
                gmail : founded_data.gmail
            }
            
        },
        process.env.SECRET,
        {expiresIn : "15m"}
        )
        if(token){
            console.log("everything is okay");
            console.log(token);
            res.status(200).json({
                "token" : token
            });
        }
        else{
            console.log("gadbad hai bhai")
            res.status(400);
            throw new Error("token not found ")
        }

    }



})
module.exports = router;