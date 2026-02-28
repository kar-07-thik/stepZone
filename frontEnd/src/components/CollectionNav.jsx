import { Link } from "react-router-dom"
import { useContext } from "react"
import { Context } from "../Context/ContextProvider"

import AddToCard from "./AddToCard"

const CollectionNav = () => {
    const { cardHandler, authCheck, Addtocardicon, setshowCollectionslide } = useContext(Context)


    return (
        <>
            <div className="bg-black text-white text-center p-1">
                <p>Get 30% Off you spend $150 or More. discount Automatically Applied at Checkout.<span>*Exclusions Apply</span></p>
            </div >


            <div className="flex flex-col w-full z-20 sticky top-0 p-5">
                <div style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }} className="bg-white flex justify-between items-center  rounded-2xl p-1 md:hidden ">
                    <svg onClick={() => setshowCollectionslide(true)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                    <h1 className="font-semibold text-2xl">stepZone</h1>
                    <div className="flex gap-3">
                        <Link to={"/Search"}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                        </svg></Link>
                        <svg onClick={cardHandler} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                        </svg>
                    </div>


                </div>


                <div style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }} className="bg-white flex justify-between  items-center p-2 px-3 rounded-2xl hidden md:flex ">

                    <h1 className="font-semibold text-2xl ">stepZone</h1>
                    <div className="flex gap-5 ">
                        <Link to={"/Collection/Men"}><p className="cursor-pointer border border-transparent hover:border-b-black">Men</p></Link>
                        <Link to={"/Collection/Women"}><p className="cursor-pointer border border-transparent hover:border-b-black">Women</p></Link>
                        <Link to={"/Collection/Sales"}><p className="cursor-pointer border border-transparent hover:border-b-black">Sales</p></Link>
                    </div>
                    <div className="flex gap-2">
                        <Link to={"/Search"}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 hover:bg-gray-300 p-1 rounded-2xl">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                        </svg></Link>
                        <svg onClick={authCheck} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 hover:bg-gray-300 p-1 rounded-2xl">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                        </svg>
                        <div className="relative w-6">
                            <svg onClick={cardHandler} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-full hover:bg-gray-300 p-1 rounded-2xl ">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                            </svg>

                            <div className="bg-red-600 rounded-2xl text-center text-white absolute top-1 right-0 " style={{ width: "40%", height: "10px", display: Addtocardicon ? "block" : "none" }}></div>
                        </div>


                    </div>



                </div>


            </div>
            <AddToCard />

        </>
    )
}
export default CollectionNav