const express = require("express")
const app = express();
const dotenv = require("dotenv").config();
const createConnection = require("./Mongoose/createConnection")
const user = require("./routes/user")
const cors = require("cors")
const port = process.env.PORT || 2000
const download = require("./routes/download")
createConnection();
app.use(express.json());
app.use(express.static("public"));
app.use("/Contact", user);
app.use("/", download);
const allowedOrigins = ['https://shivamrawat.vercel.app', "http://localhost:3000/"];

app.use(
    cors({
        origin: function (origin, callback) {

            if (!origin || allowedOrigins.includes(origin)) {
                callback(null, true);
            } else {
                callback(new Error('Not allowed by CORS'));
            }
        },
    })
);

app.get("/", (req, res) => {
    res.send("rawat ki api h")
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