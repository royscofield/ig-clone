import Link from "next/link"
import { useEffect, useState, useRef } from "react"

import More from "./More"
import Search from "./Search"
import { IgSidebar, IgIcon, HomeIcon, SearchIcon, Explore, ReelIcon, MessagesIcon, NotificationIcon, MoreIcon, CreateIcon, SearchSelectIcon, HomeSelectIcon, MoreSelectIcon, ReelSelectIcon, CreateSelectIcon, ExploreSelectIcon, MessagesSelectIcon, NotificationSelectIcon } from "../icons/icons"

function Sidebar ()
{
    const [state, setState] = useState(0)
    const [select, setSelect] = useState(0)
    const [showMore, setShowMore] = useState(false)
    const [showSearch, setShowSearch] = useState(false)

    // hanlde click outside to close more options pop up
    const morePopUpRef = useRef(null)
    const searchRef = useRef(null)
    const searchBoxRef = useRef(null)

    useEffect(() =>
    {
        function handleClickOutSide(e)
        {
            if (morePopUpRef.current && !morePopUpRef.current.contains(e.target))
            {
                setShowMore(false)
            }
            if (searchRef.current && !searchRef.current.contains(e.target) && searchBoxRef.current && !searchBoxRef.current.contains(e.target))
            {
                setShowSearch(false)
            }
        }

        document.addEventListener("click", handleClickOutSide)
        return () =>
        {
            document.removeEventListener("click", handleClickOutSide)
        }
    },[])

    return (
            <div className="flex h-screen">
                <div className={`hidden md:flex md:flex-col md:justify-between md:items-center lg:flex lg:flex-col lg:justify-between lg:items-center md:w-[73px] h-full border-r-[1px] border-[rgb(219,219,219)] py-8 ${state === 1 ? "lg:w-[73px]]" : `${state === 2 ? "lg:w-[73px]" : "lg:w-[245px]"}`}`}>
                    <div className="flex flex-col w-full">
                        <Link className={`md:hidden lg:flex px-7 mb-8 ${state === 1 ? "lg:hidden" : `${state === 2 ? "lg:hidden" : "lg:flex"}`}`} href="/" >
                            {IgSidebar}
                        </Link>
                        <Link className={`md:flex justify-center mb-8 ${state === 1 ? "lg:flex" : `${state === 2 ? "lg:flex" : "lg:hidden"}`}`} href="/" >
                            {IgIcon}
                        </Link>
                        <div className="flex flex-col w-full">
                            <Link className="flex lg:mx-5 lg:h-[56px] md:h-[48px] lg:justify-start md:justify-center items-center hover:bg-[rgb(250,250,250)] rounded-[25px]" href="/" onClick={() => {setState(0); setSelect(0)}}>
                                <div className={`lg:pl-2 md:justify-center md:items-center text-black ${select === 0 ? "hidden" : "flex"}`}>{HomeIcon}</div>
                                <div className={`lg:pl-2 md:justify-center md:items-center text-black ${select === 0 ? "flex" : "hidden"}`}>{HomeSelectIcon}</div>
                                <div className={`font-[500] ml-5 md:hidden lg:justify-center lg: items-center ${state === 1 ? "lg:hidden" : `${state === 2 ? "lg:hidden" : "lg:flex"}`}`} >Home</div>
                            </Link>
                            <Link className="flex lg:mx-5 lg:h-[56px] md:h-[48px] lg:justify-start md:justify-center items-center hover:bg-[rgb(250,250,250)] rounded-[25px]" href="/" onClick={() => {setState(1); setSelect(1); setShowSearch(true)}} ref={searchRef}>
                                <div className={`lg:pl-2 md:justify-center md:items-center ${select === 1 ? "hidden" : "flex"}`}>{SearchIcon}</div>
                                <div className={`lg:pl-2 md:justify-center md:items-center ${select === 1 ? "flex" : "hidden"}`}>{SearchSelectIcon}</div>
                                <div className={`font-[500] ml-5 md:hidden lg:justify-center lg: items-center ${state === 1 ? "lg:hidden" : `${state === 2 ? "lg:hidden" : "lg:flex"}`}`}>Search</div>
                            </Link>
                            <Link className="flex lg:mx-5 lg:h-[56px] md:h-[48px] lg:justify-start md:justify-center items-center hover:bg-[rgb(250,250,250)] rounded-[25px]" href="/" onClick={() => {setState(0); setSelect(2)}}>
                                <div className={`lg:pl-2 md:justify-center md:items-center ${select === 2 ? "hidden" : "flex"}`}>{Explore}</div>
                                <div className={`lg:pl-2 md:justify-center md:items-center ${select === 2 ? "flex" : "hidden"}`}>{ExploreSelectIcon}</div>
                                <div className={`font-[500] ml-5 md:hidden lg:justify-center lg: items-center ${state === 1 ? "lg:hidden" : `${state === 2 ? "lg:hidden" : "lg:flex"}`}`}>Explore</div>
                            </Link>
                            <Link className="flex lg:mx-5 lg:h-[56px] md:h-[48px] lg:justify-start md:justify-center items-center hover:bg-[rgb(250,250,250)] rounded-[25px]" href="/" onClick={() => {setState(0); setSelect(3)}}>
                                <div className={`lg:pl-2 md:justify-center md:items-center ${select === 3 ? "hidden" : "flex"}`}>{ReelIcon}</div>
                                <div className={`lg:pl-2 md:justify-center md:items-center ${select === 3 ? "flex" : "hidden"}`}>{ReelSelectIcon}</div>
                                <div className={`font-[500] ml-5 md:hidden lg:justify-center lg: items-center ${state === 1 ? "lg:hidden" : `${state === 2 ? "lg:hidden" : "lg:flex"}`}`}>Reels</div>
                            </Link>
                            <Link className="flex lg:mx-5 lg:h-[56px] md:h-[48px] lg:justify-start md:justify-center items-center hover:bg-[rgb(250,250,250)] rounded-[25px]" href="/" onClick={() => {setState(0); setSelect(4)}}>
                                <div className={`lg:pl-2 md:justify-center md:items-center ${select === 4 ? "hidden" : "flex"}`}>{MessagesIcon}</div>
                                <div className={`lg:pl-2 md:justify-center md:items-center ${select === 4 ? "flex" : "hidden"}`}>{MessagesSelectIcon}</div>
                                <div className={`font-[500] ml-5 md:hidden lg:justify-center lg: items-center ${state === 1 ? "lg:hidden" : `${state === 2 ? "lg:hidden" : "lg:flex"}`}`}>Messages</div>
                            </Link>
                            <Link className="flex lg:mx-5 lg:h-[56px] md:h-[48px] lg:justify-start md:justify-center items-center hover:bg-[rgb(250,250,250)] rounded-[25px]" href="/" onClick={() => {setState(2); setSelect(5)}}>
                                <div className={`lg:pl-2 md:justify-center md:items-center ${select === 5 ? "hidden" : "flex"}`}>{NotificationIcon}</div>
                                <div className={`lg:pl-2 md:justify-center md:items-center ${select === 5 ? "flex" : "hidden"}`}>{NotificationSelectIcon}</div>
                                <div className={`font-[500] ml-5 md:hidden lg:justify-center lg: items-center ${state === 1 ? "lg:hidden" : `${state === 2 ? "lg:hidden" : "lg:flex"}`}`}>Notifications</div>
                            </Link>
                            <Link className="flex lg:mx-5 lg:h-[56px] md:h-[48px] lg:justify-start md:justify-center items-center hover:bg-[rgb(250,250,250)] rounded-[25px]" href="/" onClick={() => {setState(0); setSelect(6)}}>
                                <div className={`lg:pl-2 md:justify-center md:items-center ${select === 6 ? "hidden" : "flex"}`}>{CreateIcon}</div>
                                <div className={`lg:pl-2 md:justify-center md:items-center ${select === 6 ? "flex" : "hidden"}`}>{CreateSelectIcon}</div>
                                <div className={`font-[500] ml-5 md:hidden lg:justify-center lg: items-center ${state === 1 ? "lg:hidden" : `${state === 2 ? "lg:hidden" : "lg:flex"}`}`}>Create</div>
                            </Link>
                        </div>
                    </div>
                    <div className="flex flex-col w-full relative" ref={morePopUpRef}>
                        <Link className="flex lg:mx-5 lg:h-[56px] md:h-[48px] lg:justify-start md:justify-center items-center hover:bg-[rgb(250,250,250)] rounded-[25px]" href="/" onClick={() => {setState(0); setSelect(7); setShowMore(!showMore)}}>
                            <div className={`lg:pl-2 md:justify-center md:items-center ${select === 7 ? "hidden" : "flex"}`}>{MoreIcon}</div>
                            <div className={`lg:pl-2 md:justify-center md:items-center ${select === 7 ? "flex" : "hidden"}`}>{MoreSelectIcon}</div>
                            <div className={`font-[500] ml-5 md:hidden lg:justify-center lg: items-center ${state === 1 ? "lg:hidden" : `${state === 2 ? "lg:hidden" : "lg:flex"}`}`}>More</div>
                        </Link>
                        <div className="absolute bottom-14 left-2">
                            {
                                showMore ? (<More />) : (<></>)
                            }
                        </div>
                    </div>
                </div>
                {
                    showSearch ?
                    (
                        <div ref={searchBoxRef} className="w-[400px] hidden md:flex lg:flex bg-white h-screen ">
                            <Search />
                        </div>
                    )
                    :
                    (<></>)
                }
            </div>
            
    )
}

export default Sidebar