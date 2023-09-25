const asyncHandler = require("express-async-handler");

//description get all contacts
// routes GET/api/contacts
// access-> public
// when we introduce authentication we would make it private

const getContacts = asyncHandler(async (req, res) => {
  // whenever we interact with database we get Promises therefore we add asyc:
  res.status(200).json({ message: "Get all Contacts" });
});

// whenever we use Async we should add it try catch.
// but in express we use express async handler so to avoid try catch .. it works like try catch only

//description Create contact
// routes POST/api/contacts
// access-> public
// when we introduce authentication we would make it private
const createContact = asyncHandler(async (req, res) => {
  console.log("The request body is :", req.body);
  // error handling
  const { name, email } = req.body;
  if (!name || !email) {
    res.status(400);
    throw new Error("All fields are mandatory");
  }
  res.status(201).json({ messges: "Create Contact" });
});

//description get contact
// routes GET/api/contacts/:id
// access-> public
// when we introduce authentication we would make it private

const getContact = asyncHandler(async (req, res) => {
  res.status(200).json({ messges: `update Contact for ${req.params.id}` });
});

//description delete contact
// routes DELETE/api/contacts/:id
// access-> public
// when we introduce authentication we would make it private
const deleteContact = asyncHandler(async (req, res) => {
  res.status(200).json({ messges: `delete Contact for ${req.params.id}` });
});

//description update contact
// routes PUT/api/contacts/:id
// access-> public
// when we introduce authentication we would make it private
const updateContact = asyncHandler(async (req, res) => {
  res.status(200).json({ messges: `update Contact for ${req.params.id}` });
});

module.exports = {
  getContacts,
  getContact,
  updateContact,
  deleteContact,
  createContact,
};
