const  mongoose = require("mongoose");
const data = require("./homePage.js"); 
const homepage = require("../models/home.js");
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
const initHP = async () =>{
    await homepage.deleteMany({});
    // initData.data.map((obj) => ({...obj, owner:"66a1418c19f9b7a9dc441b8c"}));
    await homepage.insertMany(data.home);
    console.log("data was initialized");
};
initHP();