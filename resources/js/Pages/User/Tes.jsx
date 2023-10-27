import { useState } from "react";

const Tes = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        setIsOpen(!isOpen); // Mengubah status isOpen sesuai dengan klik sebelumnya
    };

    return (
        <div className="Tes w-full bg-blue-800 justify-center flex h-20 items-center">
            <div
                className="tes text-white"
                onClick={handleClick}
                style={{ cursor: "pointer" }}
            >
                Tombol
            </div>

            <div className={`dropdown ${isOpen ? "block" : "hidden"}`}>
                <div
                    className="absolute top-[100px] border border-black w-40 h-56 flex flex-col justify-center gap-5"
                    id="dropdown"
                >
                    <div className="menu border border-black ">Home</div>
                    <div className="menu border border-black ">Home</div>
                    <div className="menu border border-black ">Home</div>
                </div>
            </div>
        </div>
    );
};

export default Tes;
