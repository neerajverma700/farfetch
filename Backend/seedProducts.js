const mongoose = require("mongoose");
require("dotenv").config();

const products = require("./data");
const { productModel } = require("./Models/Product.model");

async function seedProducts() {
  if (!process.env.MONGODB_URI) {
    throw new Error("MONGODB_URI is not set");
  }

  try {
    await mongoose.connect(process.env.MONGODB_URI);

    const existingCount = await productModel.estimatedDocumentCount();
    if (existingCount > 0) {
      console.log(`Skipping seed: ${existingCount} products already exist.`);
      return;
    }

    const insertedProducts = await productModel.insertMany(products);
    console.log(`Inserted ${insertedProducts.length} products.`);
  } finally {
    await mongoose.disconnect();
  }
}

seedProducts().catch((error) => {
  console.error("Product seed failed:", error.message);
  process.exitCode = 1;
});