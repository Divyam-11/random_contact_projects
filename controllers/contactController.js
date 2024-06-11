// @desc get all contacts
//@route GET /api/contacts
// @access public
const asyncHandler = require("express-async-handler");
const getContacts = asyncHandler( async(req,res)=>{
    res.status(200).json({message : "get all contacts"});
})
const getContact =asyncHandler( async(req,res) =>{
    res.status(200).json({message: `get contact for ${req.params.id}`})
})

//
const createContact = asyncHandler(async(req,res)=>{

    console.log("The Req body is : ", req.body);
    const {name,email,phone} = req.body;
    if(!name || !email || !phone) { 
        res.status(400);
        throw new Error("all fields are kneeded")
    }
    res.status(201).json({message : "Create Contact"});
})
const updateContact = asyncHandler(async (req,res)=>{
    res.status(200).json({message : `Update Contact for ${req.params.id}`});
})
const deleteContact = asyncHandler(async(req,res)=>{
    res.status(200).json({message : `Delete contact for ${req.params.id}`});
})

module.exports = {getContacts,getContact,createContact,updateContact,deleteContact};