const express = require("express")
const router = express.Router();

router.route("/download").get((req, res) => {

    res.download(__dirname + "/public/shivam_resume.pdf", (err) => {
        if (err) {
            console.error(err);
            res.status(500).send("we didnt find any pdf file")

        }
    })

})

module.exports = router;