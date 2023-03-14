import { auth, db } from '../../src/firebase'
import Image from 'next/image'
import Link from 'next/link'
import {signInWithPopup, GoogleAuthProvider, } from "firebase/auth"
import { child, onValue, ref, set } from "firebase/database"
import {useEffect, useRef, useState } from 'react'
import GoogleIcon from '../../public/icons/7123025_logo_google_g_icon.svg'
import PopUp from '../../public/shared/PopUp'

function Login() {
    const [datas , setDatas] = useState([])
    const [isSuccess, setIsSuccess] = useState(false)
    const [isPopUp, setIsPopUp] = useState(false)
    const [statement, setStatement] = useState('Vui lòng kiểm tra lại email, password')
    const provider = new GoogleAuthProvider()
    const emailRef = useRef()
    const passRef = useRef()

    useEffect( () => {
        onValue(ref(db, '/users'), (snapshot) => {
            var data1 = []
            snapshot.forEach( (childSnapshot) =>{
                data1.push(childSnapshot.val())
            } )
            setDatas(data1)
        } )
    }, [])

    const handlePopUp = () => {
        setIsPopUp(!isPopUp)
    }

    const handleLogIn = () => {
        datas.forEach( (data) => {
            if(data.email == emailRef.current.value && data.password == passRef.current.value){
                setIsSuccess(true)
                setStatement('Đăng nhập thành công')
            }
        } )
        setIsPopUp(!isPopUp)
        console.log(isSuccess)
        console.log(isPopUp)
    } 

    const handleLogInGoogle = () => {
        signInWithPopup(auth,provider)
            .then( (result) => {
                set( ref(db, 'users/' + result.user.uid ), {
                    avatar: result.user.photoURL,
                    create_at: new Date().getTime(),
                    email: result.user.email,
                    name: result.user.displayName,
                    userId: result.user.uid
                })
            } )
            .catch( (error) => {
                console.log(error.message)
            } )
    }

    return(
        <div className="flex flex-col items-center mt-[30px]">
            <div className={ isPopUp ? "block" : "hidden"} > 
                <PopUp 
                    closePopUp={handlePopUp}
                    statement={statement}
                    isSuccess = {isSuccess}
                /> 
            </div>
            <div className="sm:border-[1px] sm:w-[350px] h-[370px] flex flex-col items-center w-screen">
                <div className="text-[50px] font-bold h-[30%]">Instagram</div>
                <div className="h-[70%] flex flex-col">
                    <input 
                        ref={emailRef}
                        className="outline-none	border-[1px] rounded w-[280px] h-[36px] text-[12px] p-[10px]"
                        placeholder="Phone number, user name, or email"
                    />
                    <input 
                        ref={passRef}
                        className="outline-none	border-[1px] rounded w-[280px] h-[36px] text-[12px] p-[10px] mt-[10px]"
                        placeholder="Password"
                    />

                    <div 
                        className="cursor-default bg-[#4db5f9] rounded w-[280px] h-[32px] text-center py-[5px] text-white mt-[10px] font-bold"
                        onClick={handleLogIn}
                    >
                        Log in
                    </div>

                    <div className="w-[280px] flex items-center mt-[10px]">
                        <div className="w-[40%] h-[1px] bg-black"></div>
                        <div className="w-[20%] text-center	text-[12px] font-bold">OR</div>
                        <div className="w-[40%] h-[1px] bg-black"></div>
                    </div>

                    <div 
                        className="text-center text-[#385185] font-semibold cursor-pointer mt-[10px] flex items-center justify-center"
                        onClick={handleLogInGoogle}
                    >
                        <Image className='w-[20px] h-[20px] mr-[5px]' src = {GoogleIcon} />
                        Log in with Google
                    </div>

                    <div className="text-center text-[12px] cursor-pointer mt-[10px]">
                        Forgot Password?
                    </div>
                </div>
            </div>

            <div className="sm:w-[350px] sm:h-[45px] h-[45px] sm:border-[1px] mt-[10px] p-[10px] flex items-center justify-center w-screen">
                <div className="mr-[10px] sm:mr-[5px] text-[20px] font-semibold"> Don't have an account?</div>
                <Link className="text-[#0095f6] text-[20px]" href="/auth/sign-up"> Sign up </Link>
            </div>
        </div>
    )
}

export default Login