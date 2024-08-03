import mongoose from "mongoose";

const userSchema  = new mongoose.Schema(
    {
        user: {
            type: String,
            required: true,
            unique: true
        },
       name: {
            type: String,
            required: true,
            unique: true
        },
       password: {
            type: String,
            required: true,
            unique: true
        }

    }
);

const User = mongoose.model("user", userSchema)
export default User;