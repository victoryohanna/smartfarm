const CropDetail = require("../model/cropDetailModel");
const Crop = require("../model/cropModel");

const addProduct = async (req, res) => {
  //Check if record exist
  await CropDetail.findOne(
    { productName: req.body.productName },
    (err, response) => {
      if (err) {
        return res.status(500).json({
          message: "Error!! Please try again",
        });
      }
      if (response) {
        return res.status(401).json({
          message: "Record already exist",
        });
      }
      // Save record to database
      let product = new CropDetail(req.body);
      product.save().then((data) => {
        return res.status(200).json({
          message: "Saved Successfuly",
          data,
        });
      });
    }
  );
};


const allProduct = (req, res) => {
  CropDetail.find((err, response) => {
    if (err) {
      return res.status(500).json({ status: err });
    }
    if (!response) {
      return res.status(400).json({
        message: " Records not available",
      });
    }

    console.log(response)

    return res.status(200).json({
      status: "ok",
      response,
    });
  });
};

const allCrops = (req, res) => {
  Crop.find((err, response) => {
    if (err) {
      return res.status(500).json({ status: err });
    }
    if (!response) {
      return res.status(400).json({
        message: " Records not available",
      });
    }

    //console.log(response)

    return res.status(200).json({
      status: "ok",
      response,
    });
  });
};

const getProduct = (req, res) => {  
  CropDetail.findOne({ productName: req.body.productName }, (err, response) => {
    if (err) {
      return res.status(500).json({ status: err });
    }
    if (!response) {
      return res.status(400).json({
        message: " Records not available",
      });
    }

    //console.log(response)

    return res.status(200).json({
      status: "ok",
      response,


    });
  });
};

module.exports = { addProduct, getProduct, allProduct, allCrops };
