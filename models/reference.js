// Initialize Document

  // const pizza = new PizzaStore({
  //     name : 'Margherita',
  //     category: 'Veg',
  //     price : 225,
  //     quantity: 1

  // })

  // pizza.save().then( () => {
  //     console.log(pizza.name + " saved to pizzalist");
  //   }).catch( (e) => {
  //     console.log('There was an error', e.message);
  //   });

  // Adding multiple documents to the model

  const pizzas = [
    {
      name: " Chicken Dominator",
      category: "Non-Veg",
      price: 300,
      quantity: 1,
    },

    {
      name: " Chicken Golden Delight",
      category: "Non-Veg",
      price: 350,
      quantity: 1,
    },

    {
      name: " Golden Corn Pizza",
      category: "Veg",
      price: 200,
      quantity: 1,
    },
  ];

  PizzaStore.collection.insertMany(pizzas, (err, docs) => {
    if (err) {
      return console.log(err);
    } else {
      console.log("Pizzas saved in the Pizza Store");
    }
  });
