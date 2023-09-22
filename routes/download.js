const express = require("express")
const router = express.Router();

router.route("/download").get((req, res) => {

    res.download("./shivam_resume.pdf")

})

module.exports = router;