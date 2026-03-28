const mongoose = require("mongoose");
const { Schema } = mongoose;

async function main() {
  await mongoose.connect("mongodb+srv://***@coding.denw2w0.mongodb.net/instagram");
}

module.exports = main;