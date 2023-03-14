import Image from "next/image"
import Avatar  from "../icons/avatar.png"

function Tagged() {
    return(
        <div className="flex flex-col items-center justify-center h-[300px]">
            <div className="flex flex-col items-center justify-center">
                <Image className="w-[60px] h-[60px] mb-[20px]" src={Avatar} />
                <div className="text-[32px] font-extrabold mb-[20px]">Photos of you</div>
                <div className="mb-[10px]">When people tag you in photos, they'll appear here.</div>
            </div>
        </div>
    )
}

export default Tagged