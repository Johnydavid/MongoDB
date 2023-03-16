const router = require('express').Router();

let PizzaStore = require('../models/pizza.models');

// Create Operation
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

// Read Operation
    router.route('/').get((req, res)=>{
    PizzaStore.find()
    .then(pizza =>(res.json(pizza)))
    .catch(err=>{
        res.status(400).json('Error : ' + err)
    })

});


// To select a specific record


 router.route('/:id').get((req, res)=>{
    PizzaStore.findById(req.params.id)
    .then(pizza =>(res.json(pizza)))
    .catch(err=>{
        res.status(400).json('Error : ' + err)
    })

});


// Update  Operation
router.route('/update/:id').put((req, res)=>{
    PizzaStore.findByIdAndUpdate(req.params.id)
    .then(p => {
        p.name = req.body.name,
        p.category = req.body.category,
        p.price = req.body.price,
        p.quantity = req.body.quantity
   


    p.save()
    .then( () => {
     res.json('Pizza Updated');
          })
          .catch( (err) => {
           res.status(400).json('Error: ' + err);
          });
})

});


// To Delete a specific record


 router.route('/:id').delete((req, res)=>{
    PizzaStore.findByIdAndDelete(req.params.id)
    .then(res.json("Pizza Deleted"))
    .catch(err=>{
        res.status(400).json('Error : ' + err)
    })

});

module.exports = router;