const  mongoose = require("mongoose");
const initMenuData= require("./menudata.js"); 
const Order = require("../models/menu.js");
const MONGO_URL ="mongodb://127.0.0.1:27017/CaffieneInfusion";
async function main(){
    await mongoose.connect(MONGO_URL);
}
main()
.then(() =>{
    console.log("connect to DB");
})
.catch((err) =>{
    console.log(err);
});
const initDM = async () =>{
    await Order.deleteMany({});
    // initData.data.map((obj) => ({...obj, owner:"66a1418c19f9b7a9dc441b8c"}));
    await Order.insertMany(initMenuData.menudata);
    console.log("data was initialized");
};
initDM();
