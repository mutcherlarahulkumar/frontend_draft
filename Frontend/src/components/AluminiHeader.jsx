export default function AluminiHeader(){
    return(
        <header className="p-4 flex justify-between">
            <div className="font-extrabold text-[#b68233]">AlumNex</div>
            <div className="">
                <button className="mx-2 bg-transparent hover:bg-[#d89c4c] text-[#b68233] font-semibold hover:text-white py-2 px-4 border border-[#D4B990] hover:border-transparent rounded">See Startup Ideas</button>
                <button className="mx-2 bg-transparent hover:bg-[#d89c4c] text-[#b68233] font-semibold hover:text-white py-2 px-4 border border-[#D4B990] hover:border-transparent rounded">My Session</button>
        </div>
    </header>
    )
}