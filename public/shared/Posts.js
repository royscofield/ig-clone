import Image from "next/image"
import { useState } from "react"
import Camera  from "../icons/camera.png"
import CreatePost from "./CreatePost"

function Posts() {
    const [createPost, setCreatePost] = useState(false)

    const handleCreatePost = () => {
        setCreatePost(!createPost)
    }

    return (
        <div className="flex flex-col items-center justify-center h-[300px]">
            <div className={createPost ? "block" : "hidden"}>
                <CreatePost
                    handleCreatePost = {handleCreatePost} 
                />
            </div>
            <div className="flex flex-col items-center justify-center">
                <Image className="w-[50px] h-[50px] mb-[20px]" src={Camera} />

                <div className="text-[32px] font-extrabold mb-[20px]">Share Photos</div>

                <div className="mb-[10px]">When you share photos, they will appear on your profile.</div>

                <div 
                    className="text-[#2997f6] cursor-pointer hover:text-black"
                    onClick={handleCreatePost}
                >
                    Share your first photo
                </div>
            </div>
        </div>
    )
}

export default Posts