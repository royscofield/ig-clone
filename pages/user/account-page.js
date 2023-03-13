import Image from "next/image"
import { useState } from "react"
import DefaultProfile from "../../public/icons/defaultProfile.jpg"
import { EditIcon, PostsIcon, SavedIcon, TaggedIcon } from "../../public/icons/icons"
import EditPopUp from "../../public/shared/EditPopUp"
import Sidebar from "../../public/shared/Sidebar"

function AccountPage() {
    const [isEdit, setIsEdit] = useState(false)

    const handleEditPopUp = () => {
        setIsEdit(!isEdit)
    }

    return(
        <div className="flex">
            <div> <Sidebar/> </div>
            <div className = {isEdit ? "block" : "hidden"}>
                <EditPopUp handleClose = { handleEditPopUp }/>
            </div>

            <div className="flex flex-col w-full pb-[10px] pt-[40px]">
                <div className="h-[30%] flex border-b-[1px] mx-[30px]">
                    <div className=" w-[290px] h-[150px] px-[20px] flex justify-center">
                        <Image  
                            className="w-[150px] h-[150px] text-center"
                            src={DefaultProfile} 
                        />
                    </div>
                    <div>
                        <div className="flex items-center mb-[30px]">
                            <p className="text-[20px] mr-[20px]">nphggg11</p>
                            <div className="bg-[#efefef] mr-[10px] rounded py-[7px] px-[16px] font-semibold text-[14px]">
                                Edit Profile 
                            </div>
                            <div 
                                className="cursor-pointer"
                                onClick={handleEditPopUp}
                            >
                                {EditIcon}
                            </div>
                        </div>
                        <div className="flex">
                            <p className="mr-[40px]">0 posts</p>
                            <p className="mr-[40px]">0 followers</p>
                            <p className="mr-[40px]">168 following</p>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center text-[#8e8e8e] font-semibold">
                    <div className="flex items-center w-[60px] h-[50px] mr-[50px] border-t-[1px] border-black">
                        <div className="text-[15px]">
                            {PostsIcon}
                        </div>
                        <p className="ml-[5px] text-[13px] ">POSTS</p>
                    </div>
                    <div className="flex items-center w-[60px] h-[50px] mr-[50px] border-t-[1px] border-black">
                        <div className="text-[15px]">
                            {SavedIcon}
                        </div>
                        <p className="ml-[5px] text-[13px] ">SAVED</p>
                    </div>
                    <div className="flex items-center w-[70px] h-[50px] border-t-[1px] border-black">
                        <div className="text-[15px]">
                            {TaggedIcon}
                        </div>
                        <p className="ml-[5px] text-[13px] ">TAGGED</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default AccountPage