const express = require('express');
let router = express.Router();
var productModel = require('../../models/productModal');





// Create aproduct
router.post('/', async (req, res) => {
    let product = new productModel();
    product.title = req.body.title;
    product.name = req.body.name;
    product.price = req.body.price;
    product.description = req.body.description;
    await product.save();
    res.send(product);

});

// Read all products
router.get('/',async (req, res) => {
    let product = await productModel.find();


   return res.send(product);

});

// Read a single product
router.get('/:id', async (req, res) => {
    try {
        let product = await productModel.findById(req.params.id);
        return res.send(product);
    }
    catch (err) {
        return res.status(404).send("invalid id");
    }
}
);



// update a single product
router.put('/:id', async (req, res) => {
    
        let product = await productModel.findById(req.params.id);
        product.title = req.body.title;
        product.name = req.body.name;
        product.price = req.body.price;
        product.description = req.body.description;
        product.imageUrl = req.body.imageUrl;
        await product.save();
        return res.send(product);
});

// delete a single product
router.delete('/:id', async (req, res) => {
        let product = await productModel.findByIdAndDelete(req.params.id);
        return res.send(product);
});


module.exports = router;