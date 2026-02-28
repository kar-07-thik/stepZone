require("dotenv").config();

const express = require("express")
const cors = require("cors");
const mongoose= require("mongoose")

const app = express()
app.use(cors())
app.use(express.json())


//import Routes
const cardRoutes=require("./Routes/cardRoutes")
const productsRoutes=require("./Routes/productsRoutes")
const DeliveryRoutes=require("./Routes/DeliveryRoutes")

// Routes
app.use(cardRoutes)
app.use(productsRoutes)
app.use(DeliveryRoutes)


mongoose.connect(process.env.DB_connection).then(() => {
    console.log("Databse connection succesFully")
}).catch((err) => {
    console.log(err)
    console.log("Databse connection failed")
})


app.listen(process.env.PORT, (req, res) => {
    console.log("Server Started...")
})