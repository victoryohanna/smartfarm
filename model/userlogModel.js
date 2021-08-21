const mongoose = require("mongoose");

const user = mongoose.Schema({
  
  email: {
    type: String,
  },
  username: {
    type: String,
  },
  password: {
    type: String,
  },
});
module.exports = mongoose.model("user", user);
