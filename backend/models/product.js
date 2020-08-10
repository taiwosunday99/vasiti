const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    product_name : {
        type: String
    },
    product_description : {
        type: String
    },
    product_varieties : {
        type: String
    },
    date_uploaded : {
        type: Date
    },
    date_edited : {
        type: Date
    },
    image_path : {
        type: String
    }
})

const productModel = mongoose.model('product', productSchema);

module.exports = productModel;