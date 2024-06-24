const mongoose = require("mongoose");
const crypto = require("crypto");

const userSchema = new mongoose.Schema({
    uid: {
        type: String,
        unique: true
    },
    username: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },

});

userSchema.pre("save", async function(next) {
    if(!this.uid){
        this.uid = await crypto.randomBytes(16).toString("base64");
    }
    next();
});

const User = mongoose.model("User", userSchema);

module.exports = User;