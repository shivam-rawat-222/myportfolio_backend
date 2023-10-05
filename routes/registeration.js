const express = require("express");
const router = express.Router();
const register = require("../Schemas/register");
const bcrypt = require("bcrypt")
router.route("/all").get(async(req,res)=>{
    const allclients = await register.find();

    if(allclients){
        console.log(allclients);
        res.status(200);
        res.send(allclients)
    }
    else{
        res.status(400);
        throw new Error("no data found");
    }


})

router.route("/new").post(async(req,res)=>{
    const {username , gmail , password } = req.body;
    if(!username || !password || !gmail)
    {
        console.log(username)
        res.status(400).send("plz enter the complete data ")
        
        
    }
    else
    {
        const check = await register.findOne({gmail : gmail})
        if(check)
        {
            console.log(check)
            res.status(401);
            res.json({"message " : "user already exist" })
            
        }
        else{
        const hashedpass = await bcrypt.hash(password,10);
        const newdata = await register.create({
        username : username ,
        gmail:gmail,
        password : hashedpass
        })
        if(newdata)
        {
            


            res.status(200).send("data saved successfully")
            console.log(newdata)
        }
    }
}



    


})

router.route("/delete/:id").delete(async(req,res)=>{
 
    let del = await register.deleteMany({_id : req.params.id})
    console.log(del);
    if(del.acknowledged)
    {
        res.status(200).send(`${del.deletedCount} Data Deleted`)
    }
    else{
        res.status(400);
        throw new Error("cant delete the data ")
    }


    
   
})

router.route("/deletebyuser/:user").delete(async(req,res)=>{
    let del = await register.deleteMany({username : req.params.user})
    
  
    console.log(del);
    res.status(200).json(del)
   
})

module.exports = router
