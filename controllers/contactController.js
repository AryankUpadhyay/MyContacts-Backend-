//description get all contacts 
// routes GET/api/contacts
// access-> public
// when we introduce authentication we would make it private
const getContacts = (req, res) =>{
    res.status(200).json({message: "Get all Contacts"});
};


//description Create contact
// routes POST/api/contacts
// access-> public
// when we introduce authentication we would make it private
const createContact = (req, res) =>{
    console.log("The request body is :", req.body);
        res.status(201).json({messges: "Create Contact"});
};


//description get contact
// routes GET/api/contacts/:id
// access-> public
// when we introduce authentication we would make it private
const getContact = ((req, res)=>{
    res.status(200).json({messges: `update Contact for ${req.params.id}`});
});



//description delete contact
// routes DELETE/api/contacts/:id
// access-> public
// when we introduce authentication we would make it private
const deleteContact = ((req, res)=>{
    res.status(200).json({messges: `delete Contact for ${req.params.id}`});
});



//description update contact
// routes PUT/api/contacts/:id
// access-> public
// when we introduce authentication we would make it private
const updateContact = ((req, res)=>{
    res.status(200).json({messges: `update Contact for ${req.params.id}`});
});



module.exports = {getContacts, getContact, updateContact, deleteContact, createContact};