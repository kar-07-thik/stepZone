const mongoose = require("mongoose")
const DeliverydetailsSchema = new mongoose.Schema({
    userId: String,
    Fristname: String,
    Lastname: String,
    Address: String,
    Country: String,
    State: String,
    City: String,
    Zip: Number
})

const DeliverydetailsModel = new mongoose.model("Deliverydetails", DeliverydetailsSchema, "Deliverydetails")

module.exports=DeliverydetailsModel