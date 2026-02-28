import { Link } from "react-router-dom"

const Orders = () => {
    return (
        <>
            <div className="flex items-center gap-[30%] md:gap-10 p-5 shadow-md" >
                <div className="md:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                </div>
                <div>
                    <h1 className="text-2xl font-semibold">stepZone</h1>
                </div>
                <div className="hidden gap-3 md:flex" style={{ fontFamily: "Inter, sans-serif" }}>
                    <Link to={"/"}><p className="hover:bg-gray-300 p-1 rounded cursor-pointer">Home</p></Link>
                    <Link to={"/Orders"}><p className="hover:bg-gray-300 p-1 rounded cursor-pointer">Orders</p></Link>
                    <Link to={"/Profile"}><p className="hover:bg-gray-300 p-1 rounded cursor-pointer">Profile</p></Link>
                </div>
            </div>
              <div className="flex flex-col gap-4 w-[90%] m-auto mt-20 md:w-[80%]" style={{ fontFamily: "Inter, sans-serif" }}>
                <div className="text-2xl font-bold">
                    <h1>Orders</h1>
                </div>
                <div className="flex flex-col gap-3 justify-between items-center  border border-gray-400 rounded-md w-full  p-7 m-auto ">
                   <h1 className="font-bold text-xl">No orders yet</h1>
                   <p>Go to store to place an order</p>
                   <Link to={"/Search"}><button className="font-medium bg-black p-1 px-2 rounded-2xl text-white">Shop now</button></Link>
                </div>
            </div>
      
        </>
    )
}
export default Orders