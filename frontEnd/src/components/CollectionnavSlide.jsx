import { useContext } from "react"
import { Context } from "../Context/ContextProvider"
import { useNavigate } from "react-router-dom"


const CollectionnavSlide = () => {
    const { showCollectionslide, setshowCollectionslide } = useContext(Context)
    const Navigate = useNavigate()

    return (
        <div className="flex flex-col gap-5 md:hidden bg-white w-[50%]  top-0 z-30 text-center h-[100vh] fixed pt-10 text-sm duration-700" style={{ fontFamily: "Inter, sans-serif", left: showCollectionslide ? "0px" : "-400px" }}>
            <div>
                <p onClick={() => setshowCollectionslide(false)} className="text-right px-2 cursor-pointer">X</p>
            </div>
            <p onClick={() => {
                Navigate("/Collection/Men")
                setshowCollectionslide(false)
            }} className="hover:underline hover:cursor-pointer">Men</p>
            <p onClick={() => {
                Navigate("/Collection/Women")
                setshowCollectionslide(false)
            }} className="hover:underline hover:cursor-pointer">women</p>
            <p onClick={() => {
                Navigate("/Collection/Sales")
                setshowCollectionslide(false)
            }} className="hover:underline hover:cursor-pointer">Sales</p>
        </div>
    )
}
export default CollectionnavSlide