const mongoose = require('mongoose');

const MainSchema =  mongoose.Schema({
    type: {
        type: Boolean,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Main', MainSchema);
