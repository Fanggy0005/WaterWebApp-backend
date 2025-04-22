// Models => เชื่อมต่อกับ database MongoDB

const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    no: {
        type: Number,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    diameter: {
        type: Number,
        required: true
    },
    length: {
        type: Number,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    totalPrice: {
        type: Number,
        required: true,
        default: function () {
            return this.quantity * this.price;
        }
    }
}, { timestamps: true });

module.exports = mongoose.model('products', productSchema);