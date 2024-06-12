const mongoose = require("mongoose");
const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: [true,"Please Add the user name"],
    }
,   email: {
    type : String,
    required: [true,"please add the user email address"],
    unique: [true,"email  adderss already taken"],
},
    password: {
        type : String,
        required: [true,"Please add the user password"],
    },

},
{
    timestamps : true,
})
module.exports = mongoose.model("User",userSchema);