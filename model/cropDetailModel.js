const mongoose = require("mongoose");
const schema = mongoose.Schema;

const product = schema({
  productId: {
    type: String,
  },
  productName: {
    type: String,
  }, 

  step1: {
    title: {
      type: String,
    },
    details: {
      type: String,
    },
  },
  step2: {
    title: {
      type: String,
    },
    details: {
      type: String,
    },
  },
  step3: {
    title: {
      type: String,
    },
    details: {
      type: String,
    },
  },
  step4: {
    title: {
      type: String,
    },
    details: {
      type: String,
    },
  },
  step5: {
    title: {
      type: String,
    },
    details: {
      type: String,
    },
  },
  step6: {
    title: {
      type: String,
    },
    details: {
      type: String,
    },
  },
  step7: {
    title: {
      type: String,
    },
    details: {
      type: String,
    },
  },
  step8: {
    title: {
      type: String,
    },
    details: {
      type: String,
    },
  },


});
const productModel = mongoose.model("farmdetail", product);
module.exports = productModel;
