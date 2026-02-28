const mongoose = require("mongoose")
const AddtocardSchema = new mongoose.Schema({
    userId: String,
    shoeName: String,
    originalPrice: Number,
    discountedPrice: Number,
    desc: String,
    image: Array,
    sales: String,
    Size: Number
})

const AddtocardModel = new mongoose.model("Addtocard", AddtocardSchema, "Addtocard")

module.exports=AddtocardModel