import {  useNavigate, useParams } from "react-router-dom"
import { useContext, useEffect } from "react"
import { Context } from "../Context/ContextProvider"


import axios from "axios"

const CollectionContainer = () => {
    const { product, showSales, setshowSales, } = useContext(Context)
    const { type } = useParams()
    const Navigate = useNavigate()

    useEffect(() => {
        if (type === "Sales") {
            setshowSales(false)
        } else {
            setshowSales(true)
        }
    }, [type])

    const filteredProduct = product.filter((item) => {
        if (type === "Sales") {
            return item.sales === "true"
        }

        return item.type == type
    })
    return (
        <div className="Collection-container" style={{ fontFamily: "Inter, sans-serif" }}>
            {
                filteredProduct.map((item, index) => {
                    return showSales ?
                        (<div className="Collection-product" key={index} >
                            <img onClick={() => Navigate(`/Product/${item._id}`)} className="w-full h-[200px] md:h-[300px] rounded-t-md" src={item.images[0]} />
                            <div className="w-full px-2 bg-white border-t border-gray-200">
                                <p className="font-medium">{item.brand}</p>
                                <h1 className="font-bold">{item.shoeName}</h1>

                                <h1 className="font-bold">${item.originalPrice}</h1>
                            </div>

                        </div>) : (<div className="Collection-product" key={index}>
                            <div className="text-center absolute top-0 left-0 rounded-md " style={{ width: "20%" }}>
                                <img style={{ width: "100%" }} src="https://static.vecteezy.com/system/resources/thumbnails/050/703/203/small_2x/valuable-discount-labels-special-offer-price-sign-percent-off-price-png.png" />
                            </div>

                            <img onClick={() => Navigate(`/Product/${item._id}`)} className="w-full h-[200px] md:h-[300px] rounded-t-md" src={item.images[0]} />
                            <div className="w-full px-2 bg-white border-t border-gray-200">
                                <p className="font-medium">{item.brand}</p>
                                <h1 className="font-bold">{item.shoeName}</h1>

                                <h1 className="font-bold "><span className=" text-gray-400 line-through">${item.originalPrice}</span><span className="px-1"></span>${Math.floor(item.originalPrice * 0.7)}</h1>
                            </div>

                        </div>)
                })
            }





        </div>
    )
}
export default CollectionContainer