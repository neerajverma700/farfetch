// routes/productRoutes.js
const express = require('express');
const router = express.Router();
const { productModel } = require('../Models/Product');
const productData = require('../data');

// 🔁 Insert the data (one-time seeding)
router.post('/product', async (req, res) => {
  try {
    await productModel.deleteMany(); // optional: clear old data
    const inserted = await productModel.insertMany(productData);
    res.status(201).json({ message: `${inserted.length} products inserted.` });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ✅ Fetch all products
router.get('/product', async (req, res) => {
  try {
    const products = await productModel.find();
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get("/product/mens", async (req, res) => {
  try {
    const product = await productModel.find({ gender: "male" });
    res.status(201).send({ type: "success", product: product });
  } catch (error) {
    console.log(error);
    res.status(500).send({ type: "error", message: "An error occured" });
  }
});

router.get("/product/mens/cloths", async (req, res) => {
  try {
    const product = await productModel.find({ gender: "male", type: "cloths" });
    res.status(201).send({ type: "success", product: product });
  } catch (error) {
    console.log(error);
    res.status(500).send({ type: "error", message: "An error occured" });
  }
});
router.get("/product/mens/shoes", async (req, res) => {
  try {
    const product = await productModel.find({ gender: "male", type: "shoes" });
    res.status(201).send({ type: "success", product: product });
  } catch (error) {
    console.log(error);
    res.status(500).send({ type: "error", message: "An error occured" });
  }
});
router.get("/product/mens/gift", async (req, res) => {
  try {
    const product = await productModel.find({ gender: "male", type: "gift" });
    res.status(201).send({ type: "success", product: product });
  } catch (error) {
    console.log(error);
    res.status(500).send({ type: "error", message: "An error occured" });
  }
});

router.get("/product/womens", async (req, res) => {
  try {
    const data =await productModel.updateMany({type:"shoes"},
        { $set: { type: "shoes" } })
        const product = await productModel.find({ gender: "womens" });
    res.status(201).send({ type: "success", product: product });
  } catch (error) {
    console.log(error);
    res.status(500).send({ type: "error", message: "An error occured" });
  }
});

router.get("/product/womens/shoes", async (req, res) => {
  try {
    const product = await productModel.find({
      gender: "womens",
      type: "shoes",
    });
    res.status(201).send({ type: "success", product: product });
  } catch (error) {
    console.log(error);
    res.status(500).send({ type: "error", message: "An error occured" });
  }
});

router.get("/product/womens/gift", async (req, res) => {
  try {
    const product = await productModel.find({ gender: "womens", type: "gift" });
    res.status(201).send({ type: "success", product: product });
  } catch (error) {
    console.log(error);
    res.status(500).send({ type: "error", message: "An error occured" });
  }
});

router.get("/product/womens/cloths", async (req, res) => {
  try {
    const product = await productModel.find({
      gender: "womens",
      type: "cloths",
    });
    res.status(201).send({ type: "success", product: product });
  } catch (error) {
    console.log(error);
    res.status(500).send({ type: "error", message: "An error occured" });
  }
});

router.get("/product/kids", async (req, res) => {
  try {
    const product = await productModel.find({ gender: "kids" });
    res.status(201).send({ type: "success", product: product });
  } catch (error) {
    console.log(error);
    res.status(500).send({ type: "error", message: "An error occured" });
  }
});

router.get("/product/kids/cloths", async (req, res) => {
  try {
    const product = await productModel.find({ gender: "kids", type: "cloths" });
    res.status(201).send({ type: "success", product: product });
  } catch (error) {
    console.log(error);
    res.status(500).send({ type: "error", message: "An error occured" });
  }
});

router.get("/product/kids/shoes", async (req, res) => {
  try {
    const product = await productModel.find({ gender: "kids", type: "shoes" });
    res.status(201).send({ type: "success", product: product });
  } catch (error) {
    console.log(error);
    res.status(500).send({ type: "error", message: "An error occured" });
  }
});

router.get("/product/kids/gift", async (req, res) => {
  try {
    const product = await productModel.find({ gender: "kids", type: "gift" });
    res.status(201).send({ type: "success", product: product });
  } catch (error) {
    console.log(error);
    res.status(500).send({ type: "error", message: "An error occured" });
  }
});
router.get("/product/:productId", async (req, res) => {
  const {productId}= req.params;
  console.log(productId)
  try {
    const data = await productModel.findOne({ _id: productId });
    console.log(data)
    res.send({ type: "success", product: data });
  } catch (err) {
    console.log(err);
    re.status(500).json({ type: "err", massage: "Unable to find" });
  }
});

router.post("/create", async (req, res) => {
  try {
    const new_task = new productModel({ ...req.body });
    await new_task.save();
    res.status(201).send({ type: "success", message: "Task is created" });
  } catch (error) {
    console.log(error);
    res.status(500).send({ type: "error", message: "An error occured" });
  }
});

module.exports = router;