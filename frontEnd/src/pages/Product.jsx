import { Link, useParams, useNavigate } from "react-router-dom"
import { useContext, useEffect, useState } from "react"
import { Context } from "../Context/ContextProvider"

import CollectionNav from "../components/CollectionNav"
import Footer from "../components/Footer"


const Product = () => {
    const { product, addtocardHandler, size, Selectedsize, setSelectedsize, UsercheckpopBox } = useContext(Context)
    const Navigate = useNavigate()
    const { productID } = useParams()


    const Singleproduct = product.find((item) => {
        return item._id == productID
    })

    if (!Singleproduct) {
        return <h1>Loading...</h1>
    }



    return (
        <>
            <div className="bg-gray-200">
                <div className="popBox" style={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px", display: UsercheckpopBox ? "flex" : "none" }}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="red" viewBox="0 0 24 24" strokeWidth={2} stroke="white" className="size-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                    <p>Login first</p>
                </div>
                <CollectionNav />
                <div className="flex gap-2 px-5">
                    <Link to={"/"}><p className="cursor-pointer border border-transparent   hover:border-b-black">Home</p></Link>
                    <span>/</span>
                    <p onClick={() => Navigate("/Collection/Men")} className="cursor-pointer border-b border-transparent hover:border-b-1">Men</p>
                    <span>/</span>
                    <p onClick={() => Navigate("/Collection/Women")} className="cursor-pointer border-b border-transparent hover:border-b">Women</p>
                    <span>/</span>
                    <p onClick={() => Navigate("/Collection/Sales")} className="cursor-pointer border-b border-transparent hover:border-b">Sales</p>
                </div>

                <div className="px-5 flex flex-col md:flex-row ">
                    <div className="w-[100%] md:w-[50%]">
                        <div className="flex justify-between items-center md:hidden">
                            <h1 className="text-2xl font-medium">{Singleproduct.shoeName}</h1>
                            <p className="text-xl font-bold " style={{ fontFamily: "Inter, sans-serif" }}>${Singleproduct.originalPrice}</p>
                        </div>
                        <div className="flex md:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="black" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="black" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="black" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="black" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                            </svg>

                        </div>
                        <div className="P-ImageConatiner">
                            <img width={100}  src={Singleproduct.images[0]} alt="" />
                            <img  src={Singleproduct.images[1]} alt="" />
                            <img  src={Singleproduct.images[2]} alt="" />
                            <img  src={Singleproduct.images[3]} alt="" />
                        </div>
                    </div>

                    <div className="w-[100%] md:w-[50%] flex flex-col gap-7 rounded-md h-fit border border-gray-300 p-4 bg-white rounded-md sticky top-20">

                        <div className="justify-between items-center hidden md:flex">
                            <h1 className="text-2xl font-medium">{Singleproduct.shoeName}</h1>
                            <p className="text-xl font-bold " style={{ fontFamily: "Inter, sans-serif" }}>${Singleproduct.originalPrice}</p>
                        </div>
                        <div>
                            <p>{Singleproduct.desc}</p>
                        </div>
                        <div className="hidden md:flex">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="black" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="black" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="black" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="black" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                            </svg>

                        </div>

                        <div className="sizeContainer" >
                            {
                                size.map((item, index) => {
                                    return <div key={index} onClick={() => setSelectedsize(item)} className={`sizeBox ${Selectedsize == item ? "text-white bg-black" : "text-black bg-white"}`} >{item}</div>
                                })
                            }

                        </div>
                        <div onClick={() => addtocardHandler(Singleproduct._id)} className="flex border-t border-gray-200  bg-black text-white  rounded-2xl gap-2 p-2 justify-center items-center" style={{ fontFamily: "Inter, sans-serif" }}>

                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4 md:size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                            </svg>
                            <button >ADD TO CART</button>
                            <p>- $ {Singleproduct.originalPrice}</p>
                        </div>
                    </div>

                </div>
                <Footer />
            </div>
        </>

    )
}
export default Product