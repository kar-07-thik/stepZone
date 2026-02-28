const Footer = () => {
    return (
        <>
            <div className="flex flex-col md:flex-row gap-3  items-center px-3 my-5">
                <div className=" flex flex-col gap-2  p-5 w-full md:w-[40%] border border-gray-300 rounded-2xl">
                    <h1 className="font-medium text-sm md:text-xl">Wear All Day Comfort</h1>
                    <p className="text-xs md:text-sm">Lightweight, bouncy, and wildly comfortable, Allbirds shoes make any outing feel effortless. Slip in, lace up, or slide them on and enjoy the comfy support.</p>
                </div>
                <div className=" flex flex-col gap-2  p-5 w-full md:w-[40%] border border-gray-300 rounded-2xl">
                    <h1 className="font-medium text-sm md:text-xl">Sustainability In Every Step</h1>
                    <p className="text-xs md:text-sm">From materials to transport, we’re working to reduce our carbon footprint to near zero. Holding ourselves accountable and striving for climate goals isn’t a 30-year goal—it’s now</p>
                </div>
                <div className=" flex flex-col gap-2  p-5 w-full md:w-[40%] border border-gray-300 rounded-2xl">
                    <h1 className="font-medium text-sm md:text-xl">Materials From The Earth</h1>
                    <p className="text-xs md:text-sm">We replace petroleum-based synthetics with natural alternatives wherever we can. Like using wool, tree fiber, and sugarcane. They’re soft, breathable, and better for the planet—win, win, win.</p>
                </div>
            </div>
            <div className="bg-[#212121] text-center">
                <p className="text-white">Right of Karthik</p>
            </div>
        </>

    )
}
export default Footer