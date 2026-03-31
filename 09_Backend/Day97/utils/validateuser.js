const validator = require("validator");

function validateUser(user) {
    if(!user.firstName || !user.age || !user.email){
        throw new Error("Missing mandatory fields");
    }
    if(user.firstName.length < 3 || user.firstName.length > 20){
        throw new Error("First name must be between 3 and 20 characters");
    }
    if(!validator.isEmail(user.email)){
        throw new Error("Invalid email format");
    }
    if(user.age < 18 || user.age > 100){
        throw new Error("Age must be between 18 and 100");
    }
    if(user.gender && !["Male", "Female", "Other"].includes(user.gender)){
        throw new Error("Invalid gender value");
    }
    if(!validator.isStrongPassword(user.password)){
        throw new Error("Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one symbol");
    }
}

module.exports = validateUser;