
function EditPopUp( {handleClose} ) {
    return(
        <div 
            className="fixed w-screen h-screen top-0 left-0 bottom-0 right-0 bg-[rgba(35,35,35,0.16)] bg-opacity-90 flex justify-center items-center drop-shadow-2xl shadow-2xl"
            onClick={handleClose}
        >
            <div 
                className="w-[440px] bg-white rounded-xl cursor-pointer"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="h-[50px] text-center flex justify-center items-center border-b-[1px]">Change password</div>
                <div className="h-[50px] text-center flex justify-center items-center border-b-[1px]">QR Code</div>
                <div className="h-[50px] text-center flex justify-center items-center border-b-[1px]">Apps and Websites</div>
                <div className="h-[50px] text-center flex justify-center items-center border-b-[1px]">Notifications</div>
                <div className="h-[50px] text-center flex justify-center items-center border-b-[1px]">Privacy and security</div>
                <div className="h-[50px] text-center flex justify-center items-center border-b-[1px]">Supervision</div>
                <div className="h-[50px] text-center flex justify-center items-center border-b-[1px]">Login activity</div>
                <div className="h-[50px] text-center flex justify-center items-center border-b-[1px]">Emails from Instagram</div>
                <div className="h-[50px] text-center flex justify-center items-center border-b-[1px]">Report a problem</div>
                <div className="h-[50px] text-center flex justify-center items-center border-b-[1px]">Log Out</div>
                <div 
                    className="h-[50px] text-center flex justify-center items-center"
                    onClick={handleClose}
                >
                    Cancel
                </div>
            </div>
        </div>
    )
}

export default EditPopUp