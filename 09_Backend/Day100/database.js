const mongoose = require("mongoose");
const { Schema } = mongoose;

async function main() {
  await mongoose.connect(process.env.CONNECT_DB);
}

module.exports = main;