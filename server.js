const express = require("express")
const app = express();
const dotenv = require("dotenv").config();
const createConnection = require("./Mongoose/createConnection")
const user = require("./routes/user")
const cors = require("cors")
const port = process.env.PORT || 2000
const registeration = require("./routes/registeration")
const download = require("./routes/download")
const login = require("./routes/login")
createConnection();
app.use(cors())
app.use(express.json());
app.use(express.static("public"));
app.use("/Contact", user);
app.use("/", download);
app.use("/register",registeration);
app.use("/",login)


app.get("/", (req, res) => {
    res.send("rawat ki updated api h")
})
app.get("/hello", (req, res) => {

    res.status(200).json({
        message: "hello rawat"
    })
})
app.listen(port, () => {
    console.log("running ha bhai", port)
}
)