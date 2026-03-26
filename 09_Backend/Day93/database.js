const mongoose = require("mongoose");
const { Schema } = mongoose;

async function main() {
  await mongoose.connect("");

  // Define a schema for the user collection
  // const userSchema = new Schema({
  //   name: String,
  //   city: String,
  //   age: Number,
  // });

  // Create a model based on the schema
  // const User = mongoose.model("User", userSchema);

  // Example: Create a new user
  // const User1 = new User({
  //   name: "John Doe",
  //   city: "New York",
  //   age: 30,
  // });

  // await User.create({
  //   name: "John Doe",
  //   city: "New York",
  //   age: 30,
  // });

  // await User.insertMany([
  //   {
  //     name: "Alice Smith",
  //     city: "Los Angeles",
  //     age: 25,
  //   },
  //   {
  //     name: "Bob Johnson",
  //     city: "Chicago",
  //     age: 35,
  //   },
  // ]);

  // Save the user to the database
  // await User1.save();


  // Example: Find all users
  // const users = await User.find();
  // console.log("All Users:", users);

  // Example: Find users by city
  // const result = await User.find({ city: "New York" });
  // console.log(result);
}

module.exports = main;