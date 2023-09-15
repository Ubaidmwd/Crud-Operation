const express = require("express");

const app = express();
const errorMiddleware=require("./middleware/error")
app.use(express.json());

// Route import
const product = require("./routes/productRoute");

app.use("/api", product);

// Middleware
app.use(errorMiddleware)

module.exports = app;
