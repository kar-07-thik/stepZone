const express= require("express")
const router=express.Router()

// import Model
const productsModel=require("../Models/productsModel");
router.get("/Collection/products", async (req, res) => {
    try {
        const productData = await productsModel.find({})
        res.send(productData)
    }
    catch (err) {
        console.log(err)
        res.status(500).json({ message: "Internal server error" }).send()
    }

})

module.exports=router