const sampleOrder = [
    {
      title: "Espresso",
      description:
        "A concentrated coffee brewed by forcing hot water through finely-ground coffee beans.",
      image: { 
        url: "https://plus.unsplash.com/premium_photo-1669687924558-386bff1a0469?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
      
      price: 200,
    },
    {
      title: "Americano",
      description:
        "Espresso diluted with hot water, giving it a similar strength to regular brewed coffee.",
      image: 
      { 
        url: "https://images.unsplash.com/photo-1712584602992-5f5b04adf258?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
      price: 215,
    },
    {
      title: "Flat Faft White",
      description:
        "Espresso with microfoam of steamed milk, higher coffee-to-milk ratio than a latte. ",
      image: {
        url: "https://plus.unsplash.com/premium_photo-1723759448747-1d174225e61f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
      price: 290,
    },
    {
      title: "Mocha Latte",
      description:
        "Espresso with steamed milk and chocolate syrup, topped with whipped cream.",
      image: 
      { 
        url: "https://images.unsplash.com/photo-1521813475821-5e3f5bc3c7a6?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
      price: 290,
    },
    {
      title: "Caramel Latte",
      description:
        "Espresso with steamed milk and caramel syrup, often topped with whipped cream.",
      image: 
      { 
        url:"https://images.unsplash.com/photo-1582054344255-10f748c17a9e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
   },
      price: 290,
    },
    {
      title: "Matcha Latte",
      description:
        "Espresso or steamed milk mixed with matcha (powdered green tea).",
      image: 
      { 
        url:"https://images.unsplash.com/photo-1582785513054-8d1bf9d69c1a?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
      price: 290,
    },
    {
      title: "Affogato Coffee",
      description:
        "Espresso poured over a scoop of vanilla ice cream, often drizzled with chocolate sauce.",
      image: 
      { 
        url: "https://images.unsplash.com/photo-1594631661960-34762327295a?q=80&w=1886&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
       },
      price: 280,
    },
    {
      title: "Rum Coffee",
      description:
        "Espresso or brewed coffee with a shot of rum, sometimes sweetened with sugar or cream.",
      image: 
      { 
        url: "https://images.unsplash.com/photo-1470338745628-171cf53de3a8?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
      price:275,
      
    },
]


module.exports = { menudata: sampleOrder };