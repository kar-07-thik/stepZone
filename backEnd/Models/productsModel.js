const mongoose = require("mongoose")
const productSchema = new mongoose.Schema({
    shoeName: String,
    brand: String,
    originalPrice: Number,
    discount: Number,
    discountedPrice: Number,
    images: Array,
    category: String,
    type: String,
    desc: String,
    sales: String
})
const productsModel = new mongoose.model("products", productSchema)

module.exports=productsModel