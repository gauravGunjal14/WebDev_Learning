const bcrypt = require("bcrypt");

const password = "abc123";

async function encryptPassword(password) {
    // const salt = await bcrypt.genSalt(10);
    const hashpass = await bcrypt.hash(password, 10);

    const isMatch = await bcrypt.compare(password, hashpass);
    console.log(isMatch);
}

encryptPassword(password);