const express = require("express");
const router = express.Router();

router.route("/").get((req, res)=>{
    res.status(200).json({messges: "Get all Contacts"});
});

module.exports= router;