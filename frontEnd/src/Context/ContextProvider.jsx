import { createContext, useEffect, useState } from "react"
import axios from "axios"
export const Context = createContext()
import { auth } from "../config/firebaseConfig"
import { useNavigate } from "react-router-dom"

const ContextProvider = ({ children }) => {
    const Navigate = useNavigate()

    //get the localStorage for user
    const user = JSON.parse(localStorage.getItem("user"))


    const [Addtocard, setAddtocard] = useState([])
    const [product, setproduct] = useState([])
    const [size, setSize] = useState([8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 12.5, 13, 13.5, 14])
    const [showCollectionslide, setshowCollectionslide] = useState(false)

    const [SEusername, setSEusername] = useState("")
    const [SEemail, setSEemail] = useState("")
    const [SEpass, setSEpass] = useState("")
    const [Selectedsize, setSelectedsize] = useState()

    const [Addtocardicon, setAddtocardicon] = useState(false)
    const [ShowAddtocard, setShowAddtocard] = useState(false)
    const [cardEither, setcardEither] = useState(true)
    const [paymentpopBox, setpaymentpopBox] = useState(false)
    const [LoginpopBox, setLoginpopBox] = useState(false)
    const [UsercheckpopBox, setUsercheckpopBox] = useState(false)
    const [showSales, setshowSales] = useState(true)

    useEffect(() => {
        const fetchProduct = async () => {

            const res = await axios.get("http://localhost:5000/Collection/products")
            setproduct(res.data)

        }
        fetchProduct()
        FetchingCard()

    }, [])

    useEffect(() => {
        if (Addtocard.length > 0) {
            setAddtocardicon(true)
            setcardEither(true)
        } else {
            setAddtocardicon(false)
            setcardEither(false)
        }

    }, [Addtocard])



    const authCheck = () => {
        auth.onAuthStateChanged((user) => {
            if (user) {
                Navigate("/Profile")
            } else {
                Navigate("/Login")
            }
        })
    }



    const addtocardHandler = async (id) => {

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
        await axios.post("http://localhost:5000/Addtocard", { productId: id, size: Selectedsize, userID: user.uid })
        // Fetching card from DB
        await FetchingCard()
        setShowAddtocard(true)

    }

    const cardHandler = async () => {
        await FetchingCard()
        setShowAddtocard(true)
    }

    const FetchingCard = async () => {
        const res = await axios.post("http://localhost:5000/sentCards", { userID: user.uid })
        setAddtocard(res.data)
    }

    const Subtotal = Addtocard.reduce((total, item) => {
        return total + item.originalPrice
    }, 0)


    return (
        <Context.Provider value={{
            ShowAddtocard, setShowAddtocard,
            Addtocard, setAddtocard,
            Addtocardicon, setAddtocardicon,
            cardEither, setcardEither,
            product, setproduct,
            SEusername, setSEusername,
            SEemail, setSEemail,
            SEpass, setSEpass, authCheck,
            size, setSize,
            showCollectionslide, setshowCollectionslide,
            Selectedsize, setSelectedsize,
            paymentpopBox, setpaymentpopBox,
            LoginpopBox, setLoginpopBox,
            showSales, setshowSales,
            UsercheckpopBox, setUsercheckpopBox,
            Subtotal, user,


            cardHandler,
            FetchingCard,
            addtocardHandler,

        }}>
            {children}
        </Context.Provider>
    )
}
export default ContextProvider