const router = require('express').Router();

let PizzaStore = require('../models/pizza.models');


router.route('/add').post((req, res)=>{
    const name = req.body.name;
    const category = req.body.category;
    const price = req.body.price;
    const quantity = req.body.quantity;

    const newPizza = new PizzaStore({
        name,
        category,
        price,
        quantity
    })

    newPizza.save()
    .then( () => {
     res.json('Pizza Added');
          })
          .catch( (err) => {
           res.status(400).json('Error: ' + err);
          });

});


router.route('/').get((req, res)=>{
    PizzaStore.find()
    .then(pizza =>(res.json(pizza)))
    .catch(err=>{
        res.status(400).json('Error : ' + err)
    })

});

module.exports = router;