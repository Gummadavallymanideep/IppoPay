const mongoose = require('mongoose');

const amountSchema = new mongoose.Schema({
    amount: {
        type: Number,
        required: true
    },
    totalamount: {
        type: Number,
    }
},{
    timestamps: true
}); 

const Amount = mongoose.model('Amount', amountSchema);
module.exports = Amount;