const mongoose = require("mongoose")
const register = mongoose.Schema({
    username : {
        type: String,
        require : [true]
    },
    gmail :{
        type : String ,
        require : [true]

    },

    password :{
        type: String,
        require : [true]
    }
   
})

module.exports = mongoose.model("register" , register);