import Image from "next/image"
import DefaultProfile from "../../public/icons/defaultProfile.jpg"

function AccountPage() {
    return(
        <div className="mx-[40px] flex pt-[40px]">
            <div className="px-[30px] flex border-b-[1px] w-full pb-[10px]">
                <div className="flex mr-[30px]">
                    <div className=" w-[290px] h-[150px] px-[20px] flex justify-center">
                        <Image  
                            className="w-[150px] h-[150px] text-center"
                            src={DefaultProfile} 
                        />
                    </div>
                </div>

                <div>
                    <div className="flex items-center w-[620px] mb-[30px]">
                        <p className="text-[20px] mr-[20px]">nphggg11</p>
                        <div className="bg-[#efefef] mr-[10px] rounded py-[7px] px-[16px] font-semibold text-[14px]">
                            Edit Profile 
                        </div>
                        <div className="bg-[#efefef] rounded">
                            Icon
                        </div>
                    </div>
                    <div className="flex">
                        <p className="mr-[40px]">0 posts</p>
                        <p className="mr-[40px]">0 followers</p>
                        <p className="mr-[40px]">168 following</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AccountPage