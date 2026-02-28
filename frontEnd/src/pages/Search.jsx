import { Link, useNavigate } from "react-router-dom"
import CollectionNav from "../components/CollectionNav"
import Footer from "../components/Footer"
import { useContext, useEffect, useState } from "react"
import { Context } from "../Context/ContextProvider"

const Search = () => {

    const { product, setproduct, addtocardHandler } = useContext(Context)
    const Navigate = useNavigate()
    const [searchFilter, setsearchFilter] = useState([])
    const [Sval, setSval] = useState("")

    const searchHandler = (e) => {
        const value = e.target.value
        setSval(value)
        console.log(value)
        console.log(Sval)
        if (value.trim() === " ") {
            setsearchFilter(product)
            return
        }
        try {
            const searchFiltered = product.filter((item) => {
                return item.shoeName.toUpperCase().includes(value.toUpperCase()) ||
                    item.brand.toUpperCase().includes(value.toUpperCase())
            })
            setsearchFilter(searchFiltered)
        } catch (err) {
            console.log(err)
        }

    }

    useEffect(() => {
        setsearchFilter(product)
    }, [product])

    return (
        <>
            <CollectionNav />
            <div className="flex gap-1 px-6 ">
                <Link to={"/"}><p className="cursor-pointer border border-transparent   hover:border-b-black">Home</p></Link>
                <span>/</span>

            </div>
            <div>
                <div className="flex justify-between items-center md:mx-auto border-b border-gray-300 mx-6 p-2 md:w-[40%]" style={{ fontFamily: "Inter, sans-serif" }}>
                    <input value={Sval} onChange={searchHandler} className=" text-sm  focus:outline-hidden w-[80%]" placeholder="What are you Looking For?"></input>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="gray" className="size-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                    </svg>

                </div>
                <div className="Collection-container" style={{ fontFamily: "Inter, sans-serif" }}>
                    {
                        searchFilter.map((item, index) => {
                            return <div className="Collection-product" key={index} >
                                <img onClick={() => Navigate(`/Product/${item._id}`)} className="w-full h-[200px] md:h-[300px] rounded-t-md" src={item.images[0]} />
                                <div className="w-full px-2 bg-white border-t border-gray-200">
                                    <p className="font-medium">{item.brand}</p>
                                    <h1 className="font-bold">{item.shoeName}</h1>

                                    <h1 className="font-bold"><span className="pr-2 text-gray-400 line-through">${item.originalPrice}</span>${Math.floor(item.originalPrice * 0.7)}</h1>
                                </div>

                            </div>
                        })
                    }
                </div>
                <Footer />
            </div >

        </>
    )
}
export default Search