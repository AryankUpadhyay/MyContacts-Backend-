const express = require("express");
const router = express.Router();
const {getContacts, getContact, updateContact, deleteContact, createContact} =require("../controllers/contactController");


//Instead of using multiple lines :

// router.route("/").get(getContacts);
// router.route("/").post(createContact);
// router.route("/:id").put(updateContact);
// router.route("/:id").delete(deleteContact);
// router.route("/:id").get(getContact);

// Another way to write it in single line. 

router.route("/").get(getContacts).post(createContact);
router.route("/:id").get(getContact).delete(deleteContact).put(updateContact);

module.exports= router;