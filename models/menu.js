const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const orderSchema = new Schema({
    title: {
        type:String,
        required: true,
    },
    description: String,
    image: {
        url: String,
        filename: String,
    },
    // image: String,
    price: Number,
})
const Order = mongoose.model("Order", orderSchema);
module.exports = Order;


