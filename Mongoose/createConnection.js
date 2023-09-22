const mongoose = require("mongoose");

const createConnection = () => {
    try { mongoose.connect(process.env.MONGO); }
    catch (err) { if (err) { console.log("cant connect mongodb") } }


    console.log("Mongoose Connected Successfully")
}

module.exports = createConnection;