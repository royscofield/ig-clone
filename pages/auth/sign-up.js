import { useState } from "react"
import { useRouter } from "next/router"

// firebase
import { ref, set, child, get } from "firebase/database"
import { db, auth, app } from "../../src/firebase"
import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth"

import Line from "../../public/shared/Line"
import Input from "../../public/shared/Input"
import PopUp from "../../public/shared/PopUp"
import { IgLogo } from "../../public/icons/icons"
import GOOGLE_ICON from "../../public/icons/7123025_logo_google_g_icon.svg"
import Button from "../../public/shared/Button"
import { isEmail, enoughNumCountPass, hasWhiteSpaceAndValidLength, isEmpty } from "../../public/utils/functions"
import Link from "next/link"

const uuid = require("uuid")
const dbRef = ref(db)

function SignUp ()
{
    // router
    const router = useRouter()

    const [email, setEmail] = useState("")
    const [name, setName] = useState("")
    const [userName, setUserName] = useState("")
    const [password, setPassword] = useState("")
    const [showPopUp, setShowPopUp] = useState(false)
    const [isSuccess, setIsSuccess] = useState(false)
    const [statement, setStatement] = useState("")

    const handleClosePopUp = () =>
    {
        setShowPopUp(false)
    }

    const handleSummit = (email, name, username, password) =>
    {
        const id = uuid.v4() // id of user
        // check validate
        if(isEmpty(email) || isEmpty(name) || isEmpty(username) || isEmpty(password))
        {
            setShowPopUp(true)
            setIsSuccess(false)
            setStatement("Plaese fill all the information")
            setTimeout(() =>
            {
                setShowPopUp(false)
            },2000)
            return
        }
        if(!isEmail(email))
        {
            setShowPopUp(true)
            setIsSuccess(false)
            setStatement("Invalid email")
            setTimeout(() =>
            {
                setShowPopUp(false)
            },2000)
            return
        }
        if(hasWhiteSpaceAndValidLength(username))
        {
            setShowPopUp(true)
            setIsSuccess(false)
            setStatement("Invalid username")
            setTimeout(() =>
            {
                setShowPopUp(false)
            },2000)
            return
        }
        if(password.length < 6)
        {
            setShowPopUp(true)
            setIsSuccess(false)
            setStatement("Invalid password")
            setTimeout(() =>
            {
                setShowPopUp(false)
            },2000)
            return
        }
        // sign up for user
        get(child(dbRef, "users/"))
            .then((snapshot) =>
            {
                const record = snapshot.val() ?? []
                const values = Object.values(record)
                const isUserExisting = values.some((item) => item.email === email || item.username === username)
                if(isUserExisting) alert("tai khoan da ton tai")
                let newUser = {
                    userId: id,
                    name: name,
                    email: email,
                    username:username,
                    password: password,
                    avatar: "",
                    create_at: new Date().getTime()
                }
                set(ref(db, `users/${id}/`), newUser)
                    .then(() => { 
                        setShowPopUp(true)
                        setIsSuccess(true)
                        setStatement("Register successful !!!")
                        setTimeout(() =>
                        {
                            setShowPopUp(false)
                            router.push("/auth/Login")
                        },2000)
                     })
                    .catch((err) => { alert(err) })
            })
            .catch((err) => { alert(err) })
    }

    const handleGoogleLogin = () =>
    {
        signOut(auth)
            .then(async () =>
            {
                const id = uuid.v4()
                const provider = new GoogleAuthProvider(app)
                provider.setCustomParameters({
                    login_hint: "user@example.com"
                })
                await signInWithPopup(auth, provider)
                .then((result) =>
                {
                    const newUser = {
                        userId: id,
                        name: result._tokenResponse.email.slice(0, result._tokenResponse.email.lastIndexOf("@")),
                        email: result._tokenResponse.email,
                        username: result._tokenResponse.email.slice(0, result._tokenResponse.email.lastIndexOf("@")),
                        password: "123456",
                        avatar: result._tokenResponse.photoUrl,
                        create_at: new Date().getTime()
                    }
                    get(child(ref(db), "users/"))
                        .then((snapshot) =>
                        {
                            const record = snapshot.val() ?? []
                            const values = Object.values(record)
                            const isUserExisting = values.some(
                                (item) => item.email === newUser.email
                            )
                            if(isUserExisting) {
                                setShowPopUp(true)
                                setIsSuccess(false)
                                setStatement("Account already exists")
                            }
                            set(ref(db, `users/${id}/`), newUser)
                                .then(() => { 
                                    setShowPopUp(true)
                                    setIsSuccess(true)
                                    setStatement("Register successful !!!")
                                    setTimeout(() =>
                                    {
                                        setShowPopUp(false)
                                        router.push("/auth/Login")
                                    },2000)
                                })
                                .catch((err) => { alert(err) })
                        })
                        .catch((err) => { alert(err) })
                })
            })
    }

    return (
        <>
            <div className="w-screen h-screen flex flex-col justify-center items-center">
                <div className="w-4/5 h-3/4 md:w-1/4 md:h-3/4 border-[1px] border-[rgb(219,219,219)] mb-4 flex flex-col items-center justify-center">
                    <div className="text-black mb-4">{IgLogo}</div>
                    <div className="text-[17px] font-[600] text-[rgb(142,142,142)] text-center mb-4">Sign up to see photos and videos from your friends.</div>
                    <div className="w-4/5 h-[34px] mb-4">
                        <Button
                            hoverColor={"rgb(26,119,242)"}
                            icon={GOOGLE_ICON}
                            backgroundColor={"rgb(255,255,255)"}
                            iconColor={"white"}
                            content={"Login with Google"}
                            contentColor={"black"}
                            rounded={"10px"}
                            onClick={handleGoogleLogin}
                            border
                        />
                    </div>
                    <div className="w-4/5 mb-4"><Line content={"OR"}/></div>
                    <div className="w-4/5 mb-4">
                        <div className="mb-2 h-[38px]"> <Input type={"text"} value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email address"/> </div>
                        <div className="mb-2 h-[38px]"> <Input type={"text"} value={name} onChange={(e) => setName(e.target.value)} placeholder="Full name"/> </div>
                        <div className="mb-2 h-[38px]"> <Input type={"text"} value={userName} onChange={(e) => setUserName(e.target.value)} placeholder="Username"/> </div>
                        <div className="mb-2 h-[38px]"> <Input type={"password"} value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password"/> </div>
                    </div>
                    <div className="w-4/5 h-[34px] bg-[rgb(103,181,250)] rounded-[10px]">
                        <Button
                            contentColor={"white"}
                            content={"Sign up"}
                            onClick={() =>{handleSummit(email, name, userName, password)}}
                        />
                    </div>
                </div>
                <div className="w-4/5 h-[70px] md:w-1/4 border-[1px] border-[rgb(219,219,219)] text-[14px] flex justify-center items-center">
                    Have an account? <Link className="text-[rgb(7,119,195)] cursor-pointer ml-1" href="/auth/Login">Log in</Link>
                </div>
            </div>
            {
                showPopUp ? 
                (
                    <div><PopUp statement={statement} isSuccess={isSuccess} closePopUp={handleClosePopUp}/></div>
                )
                :
                (<></>)
            }
        </>
    )
}

export default SignUp