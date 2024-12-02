const express = require("express");
const app = express();

const mongoose = require("mongoose");
const Listing = require("./models/listing.js");

const Order = require("./models/menu.js");
const Home = require("./models/home.js");

const DisplayMenu = require("./models/displaymenu.js");
const passport = require("passport")
const session = require('express-session');
const MongoStore = require("connect-mongo");
const flash = require("connect-flash");
// const Store = require("./models/store.js");
const path = require("path");
const ejsMate = require("ejs-mate");
const dotenv = require('dotenv').config();

const LocalStratergy = require("passport-local")
const User = require('./models/User.js');  
const {isLoggedIn} = require("./middleware.js")

const userRouter = require("./routes/user.js")
const cookieParser = require('cookie-parser');
app.use(cookieParser());
const wrapAsync = require("./utils/wrapAsync.js");
const ExpressError = require("./utils/ExpressError.js");
require('dotenv').config();

const { wrap } = require("module");

const dbUrl = process.env.ATLASDB_URL;

// console.log('MongoDB URI:', process.env.ATLASDB_URL);
// mongoose.connect(dbUrl, { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => console.log('Connected to MongoDB'))
//   .catch(err => console.error('Failed to connect to MongoDB', err));



// mongoose.set('debug', true);

// const MONGO_URL ="mongodb://127.0.0.1:27017/CaffieneInfusion";

main()
.then(() =>{
    console.log("connect to DB");
})
.catch((err) =>{
    console.log(err);
})

async function main(){
    await mongoose.connect(dbUrl);
    // await mongoose.connect(dbUrl);
   
      // await mongoose.connect(MONGO_URL);
     
}


const store = MongoStore.create({
  mongoUrl:dbUrl,
  crypto:{
    secret: process.env.SECERT,
  },
  touchAfter: 24 * 3600,
})

store.on("error",()=>{
  console.log("error in mongo session store",err)
})


// Set up express-session
app.use(session({
  store,
    secret: process.env.SECERT, // Replace with a secure secret key
    resave: false,
    saveUninitialized: false,
    
    cookie: { 
      httpOnly: true,
      secure: false } // Set to true if using HTTPS    
}));



// Other middleware (e.g., body-parser for handling form data)
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// console.log(path.join(__dirname, 'views', 'listings', 'order', 'cart.ejs'));

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.urlencoded({extended: true}));
app.engine("ejs", ejsMate);
app.use(express.static(path.join(__dirname, "/public")));
app.use('/images', express.static(path.join(__dirname, 'public/images')));



// app.use(session(sessionOptions));
// Flash messages middleware (must come after session middleware)
app.use(flash());

// Make flash messages accessible in all views
app.use((req, res, next) => {
  // console.log("Session:", req.session);
  // console.log("Current User:", req.user); 
  res.locals.success = req.flash("success");
  res.locals.error = req.flash("error");
  res.locals.currUser = req.user;
  next();
});
// In your main app file (e.g., app.js)
app.use((req, res, next) => {
  res.locals.messages = req.flash("messages"); // Make messages available in all templates
  next();
});

// app.use((req, res, next) => {
//   console.log("Session data:", req.session);
//   next();
// });


app.use(passport.initialize())
app.use(passport.session())

passport.use(new LocalStratergy(User.authenticate()))

passport.serializeUser((user, done) => {
  done(null, user.id); // Use user ID to store in the session
});

passport.deserializeUser(async (id, done) => { // Debugging line
try {
  const user = await User.findById(id);
  // console.log("Found user:", user);  // Debugging line
  if (!user) {
    return done(null, false);
  }
  done(null, user);
} catch (err) {
  done(err);
}
});

app.use((req, res, next) => {
  res.locals.isLoggedIn = req.isAuthenticated();
  next();
});



app.use("/", userRouter)
app.get("/listings",(req,res)=>{
  // console.log("Before rendering /listings:", req.session);
  //   console.log("Flash messages on /listings:", req.flash("messages")); 
    res.render("listings/homepage.ejs");
})



  app.use((req, res, next) => {
    res.locals.user = req.session.user;  // Make user accessible in all views
    next();
  });
  

    // order Router
    app.get("/listings/order", wrapAsync( async (req, res) => {
     
      const allOrders = await Order.find({});
      res.render("listings/order.ejs", { allOrders });
    }));
    
    // //Store router
    app.get("/listings/store",wrapAsync( async(req, res)=>{
        
        const allListings =  await Listing.find({});
        res.render("listings/store.ejs", {allListings}); 
    }));


    // Menu routes
app.get("/listings/menu",wrapAsync( async (req, res) => {
     
    try {
        // Fetch all the items from the DisplayMenu collection
        const alldisplayMenu = await DisplayMenu.find({});

        // console.log(alldisplayMenu);  // Add this for debugging



        // Pass the fetched data to the view as alldisplayMenu
        res.render("listings/displaymenu.ejs", { alldisplayMenu: alldisplayMenu });
    } catch (err) {
        console.error("Error fetching display menu:", err);
        // Handle the error
        res.status(500).send("Error retrieving menu data");
    }
}));



    // location router
    app.get("/listings/location",wrapAsync( 
      async(req, res)=>{
         
        
       res.render("listings/location.ejs" , { mapToken: process.env.MAP_TOKEN })
       
    }));

   
      



// Display the cart with items
app.get("/listings/cart",(req, res) => {

    // Initialize cart if not already set in session
    if (!req.session.cart) {
        req.session.cart = [];
    }
    // res.render("listings/cart", { cart: req.session.cart });
    res.render("listings/cart.ejs", { cart: req.session.cart });
});


// Add an item to the cart
app.post("/listings/cart", (req, res) => {
  if(!req.isAuthenticated()){
    // req.flash("messages", [{ text: "You must be logged in", type: "error" }]);
    return res.redirect("/login")
   }   
    const newItem = {
        title: req.body.title,
        description: req.body.description,
        price: req.body.price,
        image: req.body.image,
    };

    // Add new item to session cart array
    if (!req.session.cart) {
        req.session.cart = [];
    }
    req.session.cart.push(newItem);

    res.redirect("/listings/cart");
});




app.post("/listings/cart/remove", (req, res) => {
    const index = parseInt(req.body.index, 10);

    // Check if cart exists and index is valid
    if (req.session.cart && index >= 0 && index < req.session.cart.length) {
        req.session.cart.splice(index, 1); // Remove the item at the specified index
    }

    // Redirect back to the cart page after removal
    res.redirect("/listings/cart");
});


  app.post("/listings/add",wrapAsync( async (req, res) => {
   

    const { title, description, image, price } = req.body;

    const newStoreItem = new Store({
        title,
        description,
        image,
        price: parseFloat(price).toFixed(2), // Convert to number and format
    });

    await newStoreItem.save();
    res.redirect("/listings");
}));

process.on('uncaughtException', (err) => {
    console.error('Uncaught Exception:', err);
});

process.on('unhandledRejection', (reason, promise) => {
    console.error('Unhandled Rejection at promise', promise, 'reason:', reason);
});

function generateOrderId() {
    return 'ORD' + Date.now() + Math.floor(Math.random() * 1000);
  }
// Assuming you're using express-session to store the cart
app.post('/listings/cart/place-order', (req, res) => {
    // Get the cart from the session
    let cart = req.session.cart || [];  // Default to an empty array if no cart exists in session
  
    // If cart is empty, handle the case
    
    let totalAmount = parseFloat(req.body.totalAmount) || 0;  // Ensure totalAmount is a valid number
    let orderId = generateOrderId();  // Generate the order ID
    let paymentMethod = req.body.paymentMethod;
    let orderDate = new Date().toLocaleString();
  
    res.render('order-placed', { cart, totalAmount, orderId, paymentMethod, orderDate });
  });

    //show router
    app.get("/listings/:id", wrapAsync(async (req, res) =>{
        let {id} = req.params;
        const listing = await Listing.findById(id);
        res.render("listings/show.ejs",{ listing });
    }))


//     const PORT = process.env.PORT || 3000;  // Change 8080 to 3000 or any available port

// app.listen(PORT, () => {
//     console.log(Server running on port ${PORT});
// });


app.all("*", (req, res, next) =>{
  next(new ExpressError(404, "Page Not Found!"));
});
app.use((err, req, res, next)=>{
  // let {statusCode, message} = err;
  let { statusCode = 500, message="something went wrong"} = err;
  res.render("error.ejs", {message})
  // res.status(statuscode).render("error.ejs",{err});
  // res.status(statusCode).send(message);
})


app.listen(8080, () =>{
    console.log("server is listening to port 8080")
})

// const PORT = process.env.PORT || 3000;




