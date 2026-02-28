const express = require("express")
const router = express.Router()
// import Model
const AddtocardModel = require("../Models/AddtocardModel");
const productsModel = require("../Models/productsModel");

router.post("/sentCards", async (req, res) => {
    const { userID } = req.body
    try {
        const cardData = await AddtocardModel.find({ userId: userID })
        res.send(cardData)
    } catch (err) {
        console.log(err)
        res.status(500).json({ message: "Internal server error" }).send()
    }

})

router.post("/Addtocard", async (req, res) => {
    try {
        const { productId } = req.body
        const { size } = req.body
        const { userID } = req.body


        const product = await productsModel.findById(productId)

        if (!product) {
            console.log("productid is not match")
        }

        const carditem = new AddtocardModel({
            userId: userID,
            shoeName: product.shoeName,
            originalPrice: product.originalPrice,
            discountedPrice: product.discountedPrice,
            desc: product.desc,
            image: product.images,
            sales: product.sales,
            Size: size
        })


        await carditem.save()
        res.status(200).send({ message: "Card product saved" })

    } catch (err) {
        console.log(err)
        res.status(500).json({ message: "Internal server error" }).send()
    }

})


router.delete("/removeCard/:id", async (req, res) => {
    try {
        const delectID = req.params.id
        await AddtocardModel.findByIdAndDelete(delectID)
        res.status(200).json({
            message: "card delected success"
        })
    } catch (err) {
        console.log(err)
        res.status(500).json({ message: "Internal server error" })
    }

})


module.exports = router