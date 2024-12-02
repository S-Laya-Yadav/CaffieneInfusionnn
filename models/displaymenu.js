const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const menuSchema = new Schema({
    title: {
        type:String,
        required: true,
    },
    description: String,
    // image: {
    //     url: String,
    //     filename: String,
    // },
    image: String,
    price: Number,
})

const displayMenu = mongoose.model("displayMenu", menuSchema);
module.exports = displayMenu;