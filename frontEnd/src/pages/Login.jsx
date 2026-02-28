import { Link } from "react-router-dom"
import { auth } from "../config/firebaseConfig"
import { useState, useContext } from "react"
import { useNavigate } from "react-router-dom"
import { signInWithEmailAndPassword } from "firebase/auth"
import { Context } from "../Context/ContextProvider"
const Login = () => {
    const { LoginpopBox, setLoginpopBox, } = useContext(Context)
    const Navigate = useNavigate()
    const [LEemail, setLEemail] = useState("")
    const [LEpass, setLEpass] = useState("")



    const loginAuthHandler = async (e) => {
        e.preventDefault()
        try {
            const { user } = await signInWithEmailAndPassword(auth, LEemail, LEpass)
            console.log(user)
            console.log("login SucessFully")

            // SAVE USER IN LOCAL STOREGE
            const userData = {
                uid: user.uid,
                email: user.email
            }

            localStorage.setItem("user", JSON.stringify(userData))
            Navigate("/")
        } catch (err) {
            if (err.code === "auth/invalid-credential") {
                setLoginpopBox(true)
                setTimeout(() => {
                    setLoginpopBox(false)
                }, 4000)
            }
        }

    }
    return (
        <>
            <div>
                <div className="popBox" style={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px", display: LoginpopBox ? "flex" : "none" }}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="red" viewBox="0 0 24 24" strokeWidth={2} stroke="white" className="size-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>

                    <p>Invalid email or password</p>
                </div>
                <div className=" flex flex-col gap-5 absolute top-[22%] md:left-[30%] py-5 items-center w-full   overflow-hidden md:w-[40%] md:border border-gray-300 rounded-md md:shadow-lg" >

                    <h1 className="font-bold text-2xl">
                        setZone
                    </h1>
                    <div className="flex gap-5">
                        <Link to={"/Login"}><p className="font-medium text-xl  border-transparent border-2 cursor-pointer hover:border-b-2 hover:border-b-black">Login</p></Link>
                        <Link to={"/SignUp"}><p className="font-medium text-xl  border-transparent border-2 cursor-pointer hover:border-b-2 hover:border-b-black">Register</p></Link>
                    </div>
                    <form className="md:w-full w-full px-5 flex flex-col gap-5 text-center my-5" >
                        <input value={LEemail} onChange={(e) => setLEemail(e.target.value)} className="p-2 px-1  rounded-md  border border-gray-300 focus:outline-hidden" style={{ fontFamily: "Inter, sans-serif" }} placeholder="Email" type="text" />
                        <input value={LEpass} onChange={(e) => setLEpass(e.target.value)} className=" p-2 px-1 rounded-md  border border-gray-300 focus:outline-hidden" style={{ fontFamily: "Inter, sans-serif" }} placeholder="Password" type="password" />
                        <button onClick={loginAuthHandler} className="bg-black p-2 rounded-3xl text-white w-full md:w-[20%] m-auto">Login</button>
                        <p>Forgot password</p>
                        <p className="text-left">I don't have an account? <Link to={"/SignUp"}><span className="underline">Regsiter Now </span></Link></p>
                    </form>
                </div>
            </div>
        </>
    )
}
export default Login