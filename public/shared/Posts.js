import Image from "next/image"
import Camera  from "../icons/camera.png"

function Posts() {
    return (
        <div className="flex flex-col items-center justify-center h-[300px]">
            <div className="flex flex-col items-center justify-center">
                <Image className="w-[50px] h-[50px] mb-[20px]" src={Camera} />
                <div className="text-[32px] font-extrabold mb-[20px]">Share Photos</div>
                <div className="mb-[10px]">When you share photos, they will appear on your profile.</div>
                <div className="text-[#2997f6] cursor-pointer hover:text-black">Share your first photo</div>
            </div>
        </div>
    )
}

export default Posts