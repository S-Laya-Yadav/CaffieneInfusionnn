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
const Store = mongoose.model("Store", orderSchema);
module.exports = Store;