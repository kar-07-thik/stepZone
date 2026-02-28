import { Link, useParams } from "react-router-dom"
const CollectionHeader = () => {
    const { type } = useParams()
    return (
        <div className="px-5">
            <div className="flex gap-2 ">
                <Link to={"/"}><p className="cursor-pointer border border-transparent   hover:border-b-black">Home</p></Link>
                <span>/</span>
                <p className="cursor-pointer hover:border-b-1">{type.charAt(0).toUpperCase() + type.slice(1)} Shoes</p>
            </div>
            <div className="flex flex-col items-center my-3">
                <h1 className="font-medium text-2xl">{type.toUpperCase()} SHOES</h1>
                <p>Lightweight, supportive, and wildly comfortable, our premium men’s shoes make any outing feel effortless.</p>
            </div>
        </div>
    )
}
export default CollectionHeader