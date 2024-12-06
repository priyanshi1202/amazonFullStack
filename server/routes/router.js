const express = require("express");
const router = new express.Router(); 
const Products = require('../models/productsSchema');


router.get("/getProducts", async(req,res)=>{
    try{

        const productsdata = await Products.find();
        //console.log("log the data" + productsdata);
        res.status(201).json(productsdata);
    }
    catch(error){
        console.log("error" + error.message);
        res.status(500).json({ error: error.message });
    }
})


module.exports = router;