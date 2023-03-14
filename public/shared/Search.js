// firebase
import { auth,db } from "../../src/firebase"
import { endAt, onValue, orderByChild, query, ref, startAt } from "firebase/database"

import SearchResult from "./SearchResult"
import { CloseIconSmall } from "../icons/icons"
import { useEffect, useRef, useState } from "react"

function Search ()
{

    const styles = { "padding": "10px 0", "border-top-right-radius": "10px", "box-shadow": "5px 0 6px -5px rgba(0, 0, 0, 0.5)" }

    const inputStyle = { "width": "364px", "height": "40px", "background": "rgb(239,239,239)", "border-radius": "5px" }

    const searchStyle = { "margin": "0 0 20px 0", "padding": "0 20px" }

    const searchBoxStyle = { "padding" : "0 5px", }

    const [search, setSearch] = useState("")
    const [searchResult, setSearchResult] = useState([])

    const inputRef = useRef()
    // const query = 

    const handleChangeSearchBox = (e) =>
    {
        setSearch(e.target.value);
        onValue(query(ref(db, "/users"), orderByChild("username"), startAt(e.target.value), endAt(e.target.value + '\uf8ff')), (snapshot) =>
        {
            const record = snapshot.val()
            if (record !== null)
            {
                const data = Object.values(record)
                setSearchResult(data)
            }
        })
    }

    const handleCleanSearch = () =>
    {
        setSearch("")
        inputRef.current.focus()
    }

    useEffect(() =>
    {
        console.log(searchResult);
    },[searchResult])

    return (
        <div className="w-full h-full bg-white flex flex-col border-r-[1px] rounded-br-[10px] border-[rgb(219,219,219)]" style={styles}>
            <div className="border-b-[1px] border-[rgb(219,219,219)] flex flex-col justify-center items-center mb-4" style={{padding:"0 0 40px 0"}}>
                <div className="font-[600] flex w-full" style={searchStyle}>Search</div>
                <div className="relative" style={inputStyle}>
                    <input ref={inputRef} style={searchBoxStyle} value={search} onChange={handleChangeSearchBox} className="w-full h-full outline-none bg-transparent text-[12px] placeholder:text-[12px]" placeholder="Search"/>
                    <div className="absolute rounded-[50px] w-[20px] h-[20px] flex justify-center items-center text-white cursor-pointer" style={{ right: "5px", top: '50%', transform: 'translateY(-50%)', background:"rgb(199,199,199)" }} onClick={handleCleanSearch}>{CloseIconSmall}</div>
                </div>
            </div>
            <div className="w-full">
                {
                    searchResult.map((item, index) =>
                    {   
                        return (
                            <div key={index}><SearchResult item={item}/></div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Search