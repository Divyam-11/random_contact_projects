// @desc register a users
// @route POST /api/users/register
// @acess public
const asyncHandler = require("express-async-handler");
const registerUser = asyncHandler( async(req,res) =>(req,res)=>{
    res.json({message: "Registers the users"})
});
const loginUser = asyncHandler( async(req,res) =>(req,res)=>{
    res.json({message: "logins the users"})
});
const currentUser = asyncHandler( async(req,res) =>(req,res)=>{
    res.json({message: "current user information"})
});
module.exports = {registerUser,loginUser,currentUser};