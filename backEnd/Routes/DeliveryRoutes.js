const express = require("express")
const router = express.Router()
const { ReturnDocument } = require("mongodb");

// import Model
const DeliverydetailsModel = require("../Models/DeliverydetailsModel");

router.post("/Deliverydetails", async (req, res) => {
    try {
        const data = req.body

        const NewDeliverydetails = await DeliverydetailsModel.findOneAndUpdate({ userId: data.userID }, {
            userID: data.userID,
            Fristname: data.Fristname,
            Lastname: data.Lastname,
            Address: data.Address,
            Country: data.Country,
            State: data.State,
            City: data.City,
            Zip: data.Zip
        }, {
            upsert: true,
            ReturnDocument: "after"
        })

        res.status(200).json({ message: "Delivery details saved successfully" })


    } catch (err) {
        console.log(err)
        res.status(500).json({ message: "Delivery details not saved" })
    }

})

router.post("/fetchingDelivery", async (req, res) => {

    const { userID } = req.body

    try {
        const delivery = await DeliverydetailsModel.find({ userId: userID })
        res.status(200).json(delivery)
    } catch (err) {
        console.log(err)
        res.status(500).json("user delivery not found")
    }


})

module.exports = router