const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const homeSchema = new Schema({
    title: {
        type:String,
        required: true,
    },
    description: String,
    // image: {
    //     url: String,
    //     filename: String,
    //     // type:String,
    //     // default:"https://media.gettyimages.com/id/182717746/photo/espresso-coffee-cup-color-image.jpg?s=612x612&w=0&k=20&c=LGeYlM0h31rbQdFgYdt88386lw71pU-6I8_y5XDNXv4=",
    // },
    image: String,
    price: Number,
})

const Home = mongoose.model("Home", homeSchema);
module.exports = Home;