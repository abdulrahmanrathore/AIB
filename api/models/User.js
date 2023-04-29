import mongoose from "mongoose";

const User = new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true
    },

    email:{
        type:String,
        required: true,
    },

    password: {
        type: String,
        required: true,
    },

    profilePic: {
        type: String,
        default: "",
    },
  }, 
  { timestamps: true}
);

const UserSchema = mongoose.model('User', User);

export default UserSchema;