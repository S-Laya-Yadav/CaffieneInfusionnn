const sampleListings = [
    {
      title: "Coorg Arabica",
      description:
        "A premium coffee sourced from the lush plantations of Coorg, known for its smooth body, medium acidity, and hints of chocolate and spice. This medium roast is perfect for those seeking a balanced yet flavorful cup.",
      image:{
        url: "https://th.bing.com/th/id/OIG1.tbPT6M0SHfYisVznRP7c?pid=ImgGn",
        },
      
      price: 450,
   
    },

    {
      title: "Chikmagalur Estate Blend",
      description:
        "A blend of Arabica and Robusta beans from the scenic Chikmagalur region, this coffee offers a rich aroma with nutty and caramel undertones. It has a bold, full-bodied profile, making it ideal for a strong cup.",
      image:{url :
       "https://th.bing.com/th/id/OIG3.qZUcFhv8VJbMojq17liT?pid=ImgGn",
      },
      price: 500,
    },
    {
      title: "Monsooned Malabar",
      description:
        "A unique coffee that undergoes a special 'monsooning' process to reduce acidity and develop a smooth, mellow flavor with earthy notes. This dark roast is low in bitterness, providing a full-bodied experience.",
      image:{
        url:"https://th.bing.com/th/id/OIG3.kQ4zw3y0m9Gm8kbrh0nN?pid=ImgGn",
      },
      price: 600,
    },
    {
      title: "Nilgiri Blue Mountain",
      description:
        "Grown in the high altitudes of the Nilgiris, this coffee has a floral aroma, bright acidity, and a fruity sweetness. The medium roast profile enhances its delicate flavor, making it a favorite for a refreshing brew.",
      image: {
        url: "https://th.bing.com/th/id/OIG3.qvHoFMzdArXe_BEnyTYF?w=1024&h=1024&rs=1&pid=ImgDetMain",
        },

      price: 650,
    },
    {
      title: "Baba Budangiri Single-Origin",
      description:
        "Named after the legendary Baba Budan hills, this single-origin coffee is known for its smooth texture, medium acidity, and subtle hints of spice. The balanced flavor profile makes it ideal for both filter coffee and espresso.",
      image:{
        url: "https://th.bing.com/th/id/OIG3.yk8lAM6AZ5BHJq9wNbxk?pid=ImgGn",
      },

      price: 700,
    },
    {
      title: "Wayanad Robusta",
      description:
        "A strong, full-bodied coffee with robust flavors of dark chocolate and roasted nuts. Sourced from the misty plantations of Wayanad, this dark roast is perfect for those who prefer a bolder, more intense cup.",
      image: {
        url:
       "https://th.bing.com/th/id/OIG4.5PwecfjFJwD_XOGWRWsd?pid=ImgGn",
      },
      price: 550,
    },
    {
      title: "Araku Valley Organic",
      description:
        "Grown in the tribal regions of the Araku Valley, this organic coffee is known for its smooth, sweet profile with notes of berries and a hint of cocoa. The medium-light roast enhances its natural flavors.",
      image: {
        url:
      "https://th.bing.com/th/id/OIG3.Lpmo9QNflUuyeI8fj0cU?w=1024&h=1024&rs=1&pid=ImgDetMain",
      },
      price: 750,
    },
    {
      title: "Yercaud Peaberry",
      description:
        "Peaberry coffee beans, known for their concentrated flavor, are grown in the cool climate of Yercaud. This coffee has a bright, citrusy profile with a clean finish, making it a refreshing option for manual brewing methods.",
      image: 
      {
        url: "https://th.bing.com/th/id/OIG2.XVbMPm3Kmzj8iF.XfO72?pid=ImgGn",
      },

      price: 600,
      
    },
]

// // Helper function to extract numeric price from string
// const extractNumericPrice = (priceString) => {
//   const match = priceString.match(/\d+/); // Match numeric portion
//   return match ? parseInt(match[0]) : 0; // Return number or 0 if no match
// };

// // Add numeric price to each listing
// sampleListings.forEach((item) => {
//   item.numericPrice = extractNumericPrice(item.price);
// });

    module.exports = { data: sampleListings };