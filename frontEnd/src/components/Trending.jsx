import { useContext, useState } from "react"
import { Context } from "../Context/ContextProvider"
import { motion } from "framer-motion"
import { useNavigate } from "react-router-dom"
const Trending = () => {
    const Navigate = useNavigate()
    const [filterGender, setfilterGender] = useState("Men")
    const { product, setproduct } = useContext(Context)

    // Trending filter
    const TrendingFilter = product.filter((item, index) => {
        return item.type == filterGender
    })

    return (
        <>
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 2 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
                className="m-2 flex flex-col gap-2 h-[450px] md:h-[500px]">
                <h1 className="text-black text-2xl font-medium ">TRENDING</h1>
                <div className="flex justify-between px-3">
                    <div className="flex gap-2">
                        <p onClick={() => setfilterGender("Men")} className="border-2 border-transparent hover:border-b-2 hover:border-b-black px-3 cursor-pointer">MEN</p>
                        <p onClick={() => setfilterGender("Women")} className="hover:border-b-2 px-3 cursor-pointer">WOMEN</p>
                    </div>
                    <div>
                        <p onClick={() => Navigate("/Search")} className="border-b text-blue-400 cursor-pointer">View All</p>
                    </div>
                </div>


                <div className="flex overflow-auto gap-5 my-5" style={{ scrollbarWidth: "none", fontFamily: "Inter, sans-serif", }}>

                    {
                        TrendingFilter.map((item, index) => {
                            return <div key={index} className=" border border-gray-400 bg-gray-200 rounded-md shrink-0 w-[50%]   md:w-[20%]">
                                <img onClick={() => Navigate(`/Product/${item._id}`)} className="rounded-t-md w-full h-[200px] md:h-[250px]" src={item.images[0]} />
                                <div className="p-1 my-2 ">
                                    <p className="font-medium">{item.brand}</p>
                                    <h1 className="font-bold">{item.shoeName}</h1>
                                    <p>{item.desc}</p>
                                    <h1 className="font-bold">${item.originalPrice}</h1>
                                </div>
                            </div>
                        })
                    }

                </div>
            </motion.div>
        </>
    )
}
export default Trending