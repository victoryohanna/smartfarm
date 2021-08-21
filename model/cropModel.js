const mongoose = require("mongoose");
const schema = mongoose.Schema;

const crop = schema({
  cropId: {
    type: String,
  },
  cropName: {
    type: String,
  }, 
  
});
const cropModel = mongoose.model("crop", crop);
module.exports = cropModel;
