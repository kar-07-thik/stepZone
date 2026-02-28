import { useNavigate } from "react-router-dom"
import { useContext } from "react"
import { Context } from "../Context/ContextProvider"
import { motion } from "framer-motion"

import AddToCard from "../components/AddToCard"
import Footer from "../components/Footer"
import Nav from "../components/Nav"
import Slider from "../components/Slider"
import Trending from "../components/Trending"

const Home = () => {
    const { paymentpopBox, } = useContext(Context)
    const Navigate = useNavigate()
    return (
        <>
            <div>
                <div className="popBox" style={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px", display: paymentpopBox ? "flex" : "none" }}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="green" viewBox="0 0 24 24" strokeWidth={2} stroke="white" className="size-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                    <p>Payment Completed SuccessFully</p>
                </div>
                <Nav />

                <Slider />
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 2 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                    className="flex items-center overflow-x-auto" style={{ scrollbarWidth: "none" }}>
                    <div className="w-[350px]  h-110 p-3 shrink-0 relative" style={{ flexGrow: "1" }}>
                        <img className="w-full h-full rounded-md  " src="data:image/jpeg;base64,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" />
                        <div className="bg-black inset-3 absolute  rounded-md opacity-20 "></div>
                        <div className="flex flex-col gap-5  my-2 top-[35%] left-[33%] absolute">

                            <p className="text-white font-medium text-2xl">New Arrivals</p>
                            <button onClick={() => Navigate("/Collection/Men")} className="bg-white text-black p-1 rounded-2xl font-medium border px-3  border-white hover:bg-transparent hover:text-white  duration-200">SHOP MEN</button>
                            <button onClick={() => Navigate("/Collection/Women")} className="bg-white text-black p-1 rounded-2xl font-medium border px-3  border-white hover:bg-transparent hover:text-white duration-200">SHOP WOMEN</button>
                        </div>
                    </div>
                    <div className="w-[350px] h-110  p-3 shrink-0 relative" style={{ flexGrow: "1" }}>
                        <img className="w-full h-full rounded-md   " src="https://m.economictimes.com/thumb/msid-101782984,width-1200,height-1200,resizemode-4,imgsize-320856/best-skechers-sneakers-for-men-in-india.jpg" />
                        <div className="bg-black inset-3 absolute  rounded-md opacity-20 "></div>
                        <div className="flex flex-col gap-5 justify-center my-2 top-[40%] left-[35%] absolute">
                            <button onClick={() => Navigate("/Collection/Men")} className="bg-white text-black p-1 rounded-2xl font-medium border px-3  border-white hover:bg-transparent hover:text-white  duration-200">SHOP MEN</button>

                        </div>
                    </div>
                    <div className="w-[350px] h-110  p-3 shrink-0 relative" style={{ flexGrow: "1" }}>
                        <img className="w-full h-full rounded-md  " src="https://i.pinimg.com/736x/59/4b/0b/594b0b227315aaeefd1f8217646dfaf7.jpg" />
                        <div className="bg-black inset-3 absolute  rounded-md opacity-20 "></div>
                        <div className="flex flex-col gap-5 justify-center my-2 top-[40%] left-[35%] absolute">

                            <button onClick={() => Navigate("/Collection/Women")} className="bg-white text-black p-1 rounded-2xl font-medium border px-3  border-white hover:bg-transparent hover:text-white duration-200">SHOP WOMEN</button>
                        </div>
                    </div>
                    <div className="w-[350px] h-110  p-3 shrink-0 relative" style={{ flexGrow: "1" }}>
                        <img className="w-full h-full rounded-md " src="https://m.media-amazon.com/images/I/81CZh1iC4+L._AC_UY1000_.jpg" />

                        <div className="bg-black inset-3 absolute  rounded-md opacity-20 "></div>
                        <div className=" flex-col gap-5 justify-center my-2 top-[37%] left-[35%] absolute flex">
                            <p className="text-black font-medium text-2xl">Best Sellers</p>
                            <button onClick={() => Navigate("/Collection/Men")} className="bg-white text-black p-1 rounded-2xl font-medium border px-3  border-white hover:bg-transparent hover:text-white   duration-200">SHOP MEN</button>
                            <button onClick={() => Navigate("/Collection/Women")} className="bg-white text-black p-1 rounded-2xl font-medium border px-3  border-white hover:bg-transparent hover:text-white  duration-200">SHOP WOMEN</button>
                        </div>
                    </div>
                </motion.div >
                <Trending />
                <div className="md:flex gap-5 justify-around px-3 ">
                    <div className=" md:w-[500px] h-[600px] rounded-2xl overflow-clip my-3  relative">
                        <img className="w-full h-full rounded-2xl   hover:scale-110 duration-300" src="https://i.pinimg.com/originals/c7/ab/1c/c7ab1c57e365261687444cda4fcfb777.png" />
                        <h1 className="text-white font-bold text-xl md:text-2xl absolute top-[40%] left-[23%]">The Morden Styles</h1>
                        <div className="flex gap-5 justify-center my-2 absolute bottom-3 left-[20%]">
                            <button onClick={() => Navigate("/Collection/Men")} className="bg-white text-black p-1 rounded-2xl font-medium border px-3  border-white hover:bg-transparent hover:text-black duration-200">SHOP MEN</button>
                            <button onClick={() => Navigate("/Collection/Women")} className="bg-white text-black p-1 rounded-2xl font-medium border px-3  border-white hover:bg-transparent hover:text-black duration-200">SHOP WOMEN</button>
                        </div>
                    </div>

                    <div className=" md:w-[500px] h-[600px] rounded-2xl overflow-clip  relative my-3">
                        <img className="w-full h-full rounded-2xl   hover:scale-110 duration-300" src="https://assets.myntassets.com/assets/images/2025/SEPTEMBER/2/EYQkwchd_5b74f8707fde46aaaec14b3d22f52859.jpg" />
                        <h1 className="text-white font-bold text-xl md:text-2xl absolute top-[40%] left-[27%]">Stylishly Casuals</h1>
                        <div className="flex gap-5 justify-center my-2 absolute bottom-3 left-[20%]">
                            <button onClick={() => Navigate("/Collection/Men")} className="bg-white text-black p-1 rounded-2xl font-medium border px-3  border-white hover:bg-transparent hover:text-black duration-200">SHOP MEN</button>
                            <button onClick={() => Navigate("/Collection/Women")} className="bg-white text-black p-1 rounded-2xl font-medium border px-3  border-white hover:bg-transparent hover:text-black duration-200">SHOP WOMEN</button>
                        </div>
                    </div>

                    <div className=" md:w-[500px] h-[600px] rounded-2xl overflow-clip  relative my-3">
                        <img className="w-full h-full rounded-2xl   hover:scale-110 duration-300" src="https://img.freepik.com/free-photo/handsome-business-man-suit_1303-11273.jpg?semt=ais_user_personalization&w=740&q=80" />
                        <h1 className="text-white font-bold text-xl md:text-2xl absolute top-[40%] left-[20%] ">Imprint Your Impression</h1>
                        <div className="flex gap-5 justify-center my-2 absolute bottom-3 left-[20%]">
                            <button onClick={() => Navigate("/Collection/Men")} className="bg-white text-black p-1 rounded-2xl font-medium border px-3  border-white hover:bg-transparent hover:text-black duration-200">SHOP MEN</button>
                            <button onClick={() => Navigate("/Collection/Women")} className="bg-white text-black p-1 rounded-2xl font-medium border px-3  border-white hover:bg-transparent hover:text-black duration-200">SHOP WOMEN</button>
                        </div>
                    </div>


                </div>
                <Footer />
                <AddToCard />

            </div>
        </>


    )
}
export default Home