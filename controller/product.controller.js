const Product = require('../models/product.model');
const mongoose = require('mongoose');




exports.getAllProducts = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 0;
    const perPage = parseInt(req.query.perPage) || 10;

    const totalCount = await Product.countDocuments();
    const clothes = await Product.find()
      .skip(page * perPage)
      .limit(perPage);

    res.status(200).json({
      items: clothes,
      total: totalCount,
      page,
      perPage,
      totalPages: Math.ceil(totalCount / perPage),
    });
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};

exports.createProduct = async (req, res) => {
    try {
        console.log("enter");
      const { image, name, price, rating } = req.body;
  
      const newClothes = await Product.create({
        image,
        name,
        price,
        rating,
      });
  
      res.status(201).json(newClothes);
    } catch (error) {
      console.error(error);
      res.status(500).send("Internal Server Error");
    }
  };

  exports.updateProduct = async (req, res) => {
  
    try {
    
      const id = req.params.id;
      const { image, name, price, rating } = req.body;
       // Check if the id is a valid ObjectId
    
    
      const updatedProduct = await Product.findByIdAndUpdate(id, { image, name, price, rating }, { new: true });
  
      if (!updatedProduct) {
        return res.status(404).send('Product not found');
      }
  
      res.status(200).json(updatedProduct);
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    }
  };

  exports.deleteProduct = async (req, res) => {
    try {
      const id = req.params.id;
  
      const deletedProduct = await Product.findByIdAndDelete(id);
  
      if (!deletedProduct) {
        return res.status(404).send('Product not found');
      }
  
      res.status(204).send();
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    }
  };