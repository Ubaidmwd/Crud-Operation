const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const Product = require("../models/productModel");
const ErrorHander = require("../utils/errorhander");

// add products
exports.addProducts = catchAsyncErrors(async (req, res, next) => {
  const product = await Product.create(req.body);
  res.status(201).json({
    success: true,
    product,
  });
});

// getProducts
exports.getAllProducts = catchAsyncErrors(async (req, res, next) => {
  const product = await Product.find();

  res.status(200).json({
    success: true,
    product,
  });
});

// update products
exports.updateProducts = catchAsyncErrors(async (req, res, next) => {
  let product = await Product.findById(req.params.id);

  if (!product) {
    return next(new ErrorHander("Product not Found", 404));
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
});

// Detail products
exports.detailProducts = catchAsyncErrors(async (req, res, next) => {
  const product = await Product.findById(req.params.id);

  if (!product) {
    return next(new ErrorHander("Product not Found", 404));
  }

  res.status(200).json({
    success: true,
    product,
  });
});

// Delelte products
exports.deleteProducts = catchAsyncErrors(async (req, res, next) => {
  const product = await Product.findById(req.params.id);

  if (!product) {
    return next(new ErrorHander("Product not Found", 404));
  }

  await product.deleteOne();
  res.status(200).json({
    success: true,
    message: "product deleted successfully",
  });
});
