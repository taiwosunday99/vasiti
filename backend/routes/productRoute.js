const multer = require('multer');
const Product = require('../models/product');

const express = require('express');

const router = express.Router();

const storage = require('../uploads/upload');

router.post('/product', multer({storage: storage}).single("image"), (req, res) => {
console.log('post route for product');
const url = req.protocol + '://' + req.get("host");
    const product = new Product({
        product_name: req.body.product_name,
        product_description: req.body.product_description,
        product_varities: req.body.product_varities,
        image_path: url + "/images/" + req.file.filename,
        date_uploaded: new Date()
    })

    product.save().then((newProd) => {
        res.json({
            message: 'new product was added',
            product: newProd
        })
    })
})

router.get('/product', (req, res) => {
    console.log('get route for product');
    Product.find({}).then((product) => {
        res.json(product)
    })
})

module.exports = router;