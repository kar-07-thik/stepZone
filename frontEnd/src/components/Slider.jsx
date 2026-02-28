import { useState } from "react"
import Slidervid1 from "../assets/Slidervid1.mp4"
import Sliderimg2 from "../assets/Sliderimg2.avif"
import Sliderimg3 from "../assets/Sliderimg3.jpg"
import Sliderimg4 from "../assets/Sliderimg4.webp"
import { Link } from "react-router-dom"
const Slider = () => {
    const [index, setIndex] = useState(0)
    const images = [{ type: "video", src: Slidervid1 }, { type: "image", src: Sliderimg2 }, { type: "image", src: Sliderimg3 }, { type: "image", src: Sliderimg4 }]
    const leftBtn = () => {
        setIndex((prev) => (prev - 1))
    }
    const rightBtn = () => {

        setIndex((prev) => (prev + 1) % images.length)

    }
    return (
        <>
            <div className="relative p-2 w-full h-130" >
                {/* desktop View */}
                <div className="w-full h-full hidden relative md:block overflow-hidden">
                    <div className=" w-full h-full flex duration-700" style={{ transform: `translateX(-${index * 100}%)` }}>
                        {images.map((item, index) => {
                            return item.type == "video" ? (<video key={index} src={item.src} autoPlay muted loop className="w-full h-full shrink-0 object-cover"></video>) :
                                (<img key={index} src={item.src} className="w-full h-full shrink-0" />)
                        })}

                    </div>

                    <div onClick={leftBtn} className="flex justify-between top-[50%] left-5 bg-white rounded-2xl p-1 absolute">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                        </svg>
                    </div>
                    <div onClick={rightBtn} className="flex justify-between top-[50%] rounded-2xl  bg-white p-1 right-5 absolute" >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                        </svg>
                    </div>
                </div>

                {/* Moblie View */}
                <img className="rounded-md w-full h-full md:hidden" src="https://images.unsplash.com/photo-1696649124389-97f8800386b7?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZSUyMG1vZGVsfGVufDB8fDB8fHww" />

                <div className="absolute bottom-5 right-5 text-white text-center">
                    <p className="text-xl">ALL NEW DASHER NZ COLLECTION</p>
                    <h1>Widly Comfortable. Super Natural.</h1>
                    <div className="flex gap-5 justify-center my-2">
                        <Link to={"/Collection/Men"}><button className="bg-white text-black p-1 rounded-2xl font-medium border px-3  border-white hover:bg-transparent hover:text-white duration-200">SHOP MEN</button></Link>
                        <Link to={"/Collection/Women"}> <button className="bg-white text-black p-1 rounded-2xl font-medium border px-3  border-white hover:bg-transparent hover:text-white duration-200">SHOP WOMEN</button></Link>
                    </div>
                </div>


            </div>
        </>
    )
}

export default Slider