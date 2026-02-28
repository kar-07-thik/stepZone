import { useContext, useState } from "react"
import { Context } from "../Context/ContextProvider"
import axios from "axios"
import { Link } from "react-router-dom"
const AddToCard = () => {
    const { ShowAddtocard, setShowAddtocard, Addtocard, cardEither, FetchingCard, Selectedsize, Subtotal } = useContext(Context)


    const delectCard = async (ID) => {
        try {
            await axios.delete(`http://localhost:5000/removeCard/${ID}`)
            await FetchingCard()
        } catch (err) {
            console.log(err)
        }


    }

    return (
        <div className="flex flex-col  gap-5  top-0 right-0 bg-white z-20 fixed w-full md:w-[40%] h-screen shadow-2xl duration-700" style={{ fontFamily: "Inter, sans-serif", transform: ShowAddtocard ? "translateX(0)" : "translateX(100%)" }}>
            <div className="flex justify-between items-center p-3 border-b border-gray-300">
                <p>Spend $75 more to earn free shipping?</p>
                <svg onClick={() => setShowAddtocard(false)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className=" size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>

            </div>
            {
                cardEither ?
                    (
                        <div className="overflow-y-auto flex-1 ">
                            <div className="flex flex-col my-5 gap-2" >
                                {
                                    Addtocard.map((item, index) => (
                                        <div key={index} className="flex w-[95%] h-[100px] mx-auto items-center gap-3 border border-gray-300 rounded-md ">
                                            <div className="w-[30%] h-full">
                                                <img className="w-full h-full" src={item.image[0]} />
                                            </div>
                                            <div className="flex w-full justify-between  px-2">
                                                <div>
                                                    <h1 className="font-medium">{item.shoeName}</h1>
                                                    <p className="text-xs">{item.desc}</p>
                                                    <p className="my-1 text-sm underline">size: {item.Size}</p>
                                                </div>
                                                <div className="flex flex-col gap-4 items-center">
                                                    <h1 className="font-bold">${item.originalPrice}</h1>
                                                    <button onClick={() => delectCard(item._id)}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="bg-black p-1 rounded-2xl size-6">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                                                    </svg>
                                                    </button>
                                                </div>

                                            </div>

                                        </div>
                                    ))}

                            </div>

                        </div>


                    ) : (

                        <div className="flex flex-col gap-5 items-center  my-5">
                            <h1 className="font-bold text-xl">Your cart is empty.Start Shooping!</h1>
                            <button className="bg-black py-2 w-[80%] rounded-2xl text-white">SHOP MEN</button>
                            <button className="bg-black py-2 w-[80%] rounded-2xl text-white">SHOP WOMEN</button>
                            <button className="bg-black py-2 w-[80%] rounded-2xl text-white">SHOP SALE</button>
                        </div>
                    )
            }
            <div className="w-full flex flex-col gap-2  border-t border-gray-300">
                <div className="flex justify-between items-center w-[90%] mx-auto mt-2" style={{ display: cardEither ? "flex" : "none" }}>
                    <h1 className="font-bold text-xl">Subtotal</h1>
                    <p className="font-bold text-xl">${Subtotal}</p>
                </div>
                <div className="w-[90%] mx-auto  mb-5" style={{ display: cardEither ? "block" : "none" }}>
                    <Link to={"/Checkout"}><button className="bg-black w-full p-2 rounded-2xl text-white ">Check Out</button></Link>
                </div>
            </div>


        </div>
    )
}
export default AddToCard