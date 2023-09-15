const Product = require("../models/productModel");
const ErrorHander = require("../utils/errorhander");


// add products
exports.addProducts = async (req, res,next) => {
  const product = await Product.create(req.body);
  res.status(201).json({
    success: true,
    product,
  });
};

// getProducts
exports.getAllProducts = async (req, res,next) => {
  const product = await Product.find();

  res.status(200).json({
    success: true,
    product,
  });
};

// update products
exports.updateProducts = async (req, res,next) => {
  let product = await Product.findById(req.params.id);

  if (!product){
    return next(new ErrorHander("Product not Found",404))
  }
 
  product = await Product.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });
  res.status(200).json({
    success: true,
    product,
  });
};

// Detail products

exports.detailProducts= async(req,res,next)=>{
  const product= await Product.findById(req.params.id)
  console.log(product)
  if (!product){
    return res.status(500).json({
      success:false,
      message:"Product not found"
    })
  }
 
  
  res.status(200).json({
    success:true,
    product
  })
}
// Delelte products

exports.deleteProducts= async(req,res,next)=>{
  const product= await Product.findById(req.params.id)
  if (!product){
    return res.status(500).json({
      success:false,
      message:"Product not found"
    })
  }

  await product.deleteOne();
  res.status(200).json({
    success:true,
    message:"product deleted successfully"
  })
}