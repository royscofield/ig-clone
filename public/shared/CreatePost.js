import {MediaIcon} from "../icons/icons"

function CreatePost( {handleCreatePost} ) {
    return(
        <div 
            className="fixed w-screen h-screen top-0 left-0 bottom-0 right-0 bg-[rgba(35,35,35,0.16)] bg-opacity-90 flex justify-center items-center drop-shadow-2xl shadow-2xl"
            onClick={handleCreatePost}
        >

            <div className="absolute right-[10px] top-[10px] text-white text-[20px] font-semibold cursor-pointer">
                X
            </div>

            <div 
                className="w-[400px] h-[440px] bg-white rounded-xl"
                onClick={(e) => e.stopPropagation()}
            >

                <div className="h-[10%] flex items-center justify-center border-b-[1px] border-slate-300 font-semibold">
                    Create new post
                </div>
                <div className="h-[90%] flex flex-col items-center justify-center">
                    <div className="mb-[20px]">
                        {MediaIcon} 
                    </div>
                    <div className="mb-[10px] text-[22px]">Drag photos and videos here</div>
                    <input type="file" id="uploadBtn" className="hidden"/>
                    <label htmlFor="uploadBtn" className="w-[200px] cursor-pointer text-center py-[5px] bg-[#0095f6] hover:bg-[#1877f2] text-white font-semibold rounded-lg">
                        Select from computer
                    </label>
                </div>
            </div>

        </div>
    )
}

export default CreatePost