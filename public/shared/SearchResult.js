import Image from "next/image"
import { useEffect } from "react"
import AVT from "../../public/img/default-avatar.png"

function SearchResult ({ item })
{
    useEffect(() =>
    {
        console.log(item?.avatar.length);
    },[])

    return (
        <div className="flex w-full items-center select-none cursor-pointer hover:bg-[rgb(250,250,250)]" style={{padding:"0 20px", height:"60px"}}>
            <div className="w-[44px] h-[44px]" style={{margin:"0 10px 0 0 "}}>
                {
                    item?.avatar.length > 0 
                    ?
                    (
                        <img alt="image" className="rounded-[50px]" style={{width:"44px", height:"44px"}} src={item?.avatar} />
                    )
                    :
                    (
                        <Image alt="image" className="rounded-[50px]" style={{width:"44px", height:"44px"}} src={AVT} />
                    )
                }
            </div>
            <div className="flex flex-col text-[14px]">
                <div className="font-[600]">{item?.username}</div>
                <div className="text-[rgb(142,142,142)]">{item?.name}</div>
            </div>
        </div>
    )   
}

export default SearchResult