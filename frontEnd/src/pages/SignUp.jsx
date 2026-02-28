import { Link, Navigate } from "react-router-dom"
import { auth } from "../config/firebaseConfig"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { createUserWithEmailAndPassword } from "firebase/auth"
import { useContext } from "react"
import { Context } from "../Context/ContextProvider"
const SignUp = () => {
    const { SEusername, setSEusername, SEemail, setSEemail, SEpass, setSEpass } = useContext(Context)
    const Navigate = useNavigate()
    

    const SignAuthHandler = async (e) => {
        e.preventDefault()
        try {
            const createCrendential = await createUserWithEmailAndPassword(auth, SEemail, SEpass)
            console.log("Resgister SucessFully")
            Navigate("/Login")
        }
        catch (err) {
            console.log(err)
        }

    }
    return (
        <>
            <div className=" flex flex-col gap-5 mt-35 py-5 items-center w-full m-auto  overflow-y-hidden md:w-[40%] md:border border-gray-300 rounded-md md:shadow-lg" >

                <h1 className="font-bold text-2xl">
                    setZone
                </h1>
                <div className="flex gap-5">
                    <Link to={"/Login"}><p className="font-medium text-xl  border-transparent border-2 cursor-pointer hover:border-b-2 hover:border-b-black">Login</p></Link>
                    <Link to={"/SignUp"}><p className="font-medium text-xl  border-transparent border-2 cursor-pointer hover:border-b-2 hover:border-b-black">Register</p></Link>
                </div>
                <form className="md:w-full w-full px-5 flex flex-col gap-5 text-center my-5">
                    <input onChange={(e) => setSEusername(e.target.value)} className=" p-2 px-1 rounded-md  border border-gray-300 focus:outline-hidden"  style={{fontFamily: "Inter, sans-serif"}} placeholder="Username" type="text" />
                    <input onChange={(e) => setSEemail(e.target.value)} className=" p-2 px-1 rounded-md  border border-gray-300 focus:outline-hidden"  style={{fontFamily: "Inter, sans-serif"}} placeholder="Email" type="text" />
                    <input onChange={(e) => setSEpass(e.target.value)} className=" p-2 px-1 rounded-md  border border-gray-300 focus:outline-hidden"  style={{fontFamily: "Inter, sans-serif"}} placeholder="Password" type="password" />
                    <button onClick={SignAuthHandler} className="bg-black p-2 rounded-3xl text-white w-full md:w-[20%] m-auto">SignUp</button>
                    <p className="text-left">I have an account already! <Link to={"/Login"}><span className="underline">Login Now </span></Link></p>
                </form>

            </div>
        </>
    )
}
export default SignUp