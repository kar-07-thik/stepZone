import { useContext, useEffect, useState } from "react"
import { Context } from "../Context/ContextProvider"
import { useNavigate } from "react-router-dom"
import { auth } from "../config/firebaseConfig"

import axios from "axios"

const Checkout = () => {
    const { Addtocard, Subtotal, cardEither, user,setShowAddtocard, setpaymentpopBox, UsercheckpopBox, setUsercheckpopBox } = useContext(Context)
    const Navigate = useNavigate()


    const [fristName, setfristName] = useState("")
    const [lastName, setlastName] = useState("")
    const [address, setaddress] = useState("")
    const [country, setcountry] = useState("")
    const [state, setstate] = useState("")
    const [city, setcity] = useState("")
    const [zip, setzip] = useState("")


    const fetchingDelivery = async () => {
        const res = await axios.post("http://localhost:5000/fetchingDelivery", { userID: user.uid })

        const data = res.data[0]

        if (data) {
            setfristName(data.Fristname)
            setlastName(data.Lastname)
            setaddress(data.Address)
            setcountry(data.Country)
            setstate(data.State)
            setcity(data.City)
            setzip(data.Zip)
        }
    }

    const Paynow = async (e) => {
        e.preventDefault()
        //Check user Login
        const user = auth.currentUser;
        if (!user) {

            setUsercheckpopBox(true)

            setTimeout(() => {
                setUsercheckpopBox(false)
            }, 4000)
            setTimeout(() => {
                Navigate("/login", { state: { from: "/Checkout" } })
            }, 4000)

            return;
        }

        const res = await axios.post("http://localhost:5000/Deliverydetails", { userID: user.uid, Fristname: fristName, Lastname: lastName, Address: address, Country: country, State: state, City: city, Zip: zip })
        Navigate("/")
        setShowAddtocard(false)
        setpaymentpopBox(true)
        setTimeout(() => {
            setpaymentpopBox(false)
        }, 4000)
        console.log(res)
    }

    useEffect(() => {

        auth.onAuthStateChanged(async (user) => {
            if (user) {
                await fetchingDelivery()
            }

        })

    }, [])
    return (
        <div>
            <div className="popBox" style={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px", display: UsercheckpopBox ? "flex" : "none" }}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="red" viewBox="0 0 24 24" strokeWidth={2} stroke="white" className="size-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
                <p>Login first</p>
            </div>

            <div className="w-[90%] md:w-[70%] mx-auto">

                <form>
                    <div className="text-center">
                        <h1 className="text-2xl font-bold">StepZone</h1>
                    </div>
                    <div className="w-full" style={{ fontFamily: "Inter, sans-serif" }}>

                        <h1 className="font-bold text-xl">Delivery Details</h1>
                        <div className="flex flex-col  gap-5">

                            <input value={fristName} onChange={(e) => setfristName(e.target.value)} required type="text" className="border p-3 " placeholder="First Name" />
                            <input value={lastName} onChange={(e) => setlastName(e.target.value)} required type="text" className="border p-3 " placeholder="Last Name" />
                            <input value={address} onChange={(e) => setaddress(e.target.value)} required type="text" className="border p-3 " placeholder="Address" />
                            <input value={country} onChange={(e) => setcountry(e.target.value)} required type="text" className="border p-3 " placeholder="Country" />
                            <input value={state} onChange={(e) => setstate(e.target.value)} required type="text" className="border p-3 " placeholder="State" />
                            <input value={city} onChange={(e) => setcity(e.target.value)} required type="text" className="border p-3 " placeholder="City" />
                            <input value={zip} onChange={(e) => setzip(e.target.value)} required type="text" className="border p-3 " placeholder="Zip code" />
                        </div>

                    </div>
                    <div className="overflow-y-auto flex-1 w-full my-8" style={{ fontFamily: "Inter, sans-serif" }}>

                        <div className="flex flex-col my-5 gap-2" >
                            <div className="flex justify-between items-center w-full mx-auto" style={{ display: cardEither ? "flex" : "none" }}>
                                <h1 className="font-bold text-xl">Total</h1>
                                <p className="font-bold text-xl">${Subtotal}</p>
                            </div>
                            {
                                Addtocard.map((item, index) => (
                                    <div key={index} className="flex w-full h-[100px] mx-auto items-center gap-3 border border-gray-300 rounded-md ">
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


                                            </div>

                                        </div>

                                    </div>
                                ))}

                        </div>

                        <div className="w-full">
                            <button onClick={Paynow} className="bg-black text-white w-full p-3 rounded-2xl">Pay Now</button>
                        </div>

                    </div>
                </form>
            </div >
        </div>
    )
}
export default Checkout