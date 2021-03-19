const mongoose = require("mongoose");
let userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    age: { type: Number },
    occupation: { type: String },
    firstAdded: {
      type: Date,
      default: Date.now(),
    },
  },
  { collection: "users" }
);

let User = (module.exports = mongoose.model("User", userSchema));
