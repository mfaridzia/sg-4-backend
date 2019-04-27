const express = require('express');
const Product = require('../models/product');
const router  = express.Router();
const upload = require('../middleware/upload');
const fs = require('fs');

// Get all Product
router.get('/product/', (req, res) => {
  Product.findAll().then(product => {
    res.json(product)
  })
});

// Get Product by id
router.get('/product/:id', (req, res) => {
  Product.findOne({ 
    where: {
      id: req.params.id
    }
    }).then(product => {
      if(!product) {
        return res.json({data: "Not found"})
      }
      res.json(product)
    })
});

// Insert Product
router.post('/product/', upload.single('image'), (req, res) => {
  Product.create({
    name: req.body.name,
    price: req.body.price,
    image: req.file === undefined ? "" : req.file.filename
  }).then(products => {
    res.json({
      "status": "success",
      "message": "Product added",
      "data": products
    })
  })
});

// Update Product
router.put('/product/:id', upload.single('image'), (req, res) => {
  const updateProduct = {
    name: req.body.name,
    price: req.body.price,
    image: req.file === undefined ? "" : req.file.filename
  }
  Product.update(updateProduct, { 
    where: { id: req.params.id }
  })
  .then(data => {
    return product.findOne({
      where: { id: req.params.id }
    })      
  })
  .then(product => {
    res.json({
      "status": "success",
      "message": "Product updated!",
      "data": product
    })
  })
});

// Delete Product
router.delete('/product/:id', (req, res) => {
  Product.destroy({
    where: { id: req.params.id }
  })
  .then(data => {
    if(data){
      return {
        "status": "success",
        "message": "Product deleted",
        "data": null
      }
    }
  }).then(product => {
    res.json(product)
  })
});

module.exports = router;