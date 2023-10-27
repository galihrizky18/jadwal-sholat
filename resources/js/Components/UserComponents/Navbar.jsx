import { Link } from "@inertiajs/react";
import { useState } from "react";

const Navbar = ({scrollToCategory}) => {

    const [isOpen, setIsOpen] = useState(false);

    const handleDropDownMenuProfile = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <div className="navbar-user fixed z-20 bg-white w-full flex flex-row justify-between h-16 items-center px-2 sm:px-10 border-b border-black">
                <div className="logo text-sm sm:text-xl font-bold">
                    Garix Jadwal Sholat
                </div>
                <div className="menu hidden sm:block mr-10">
                    <ul className="flex flex-row gap-10">
                        <Link href="/">
                            <li className="">Home</li>
                        </Link>
                        <Link onClick={() => scrollToCategory(357)}>
                            <li >Feature</li>
                        </Link>
                        <Link>
                            <li>Contact Us</li>
                        </Link>
                    </ul>
                </div>

                <div
                    className="div border border-black sm:hidden"
                    id="burger-icon"
                    onClick={handleDropDownMenuProfile}
                >
                    <i className="fa-solid fa-bars fa-lg m-5"></i>
                </div>
            </div>

            {/* Profile In Android View */}
            <div className="sm:hidden ">
                <div
                    className={`${
                        isOpen ? "block" : "hidden"
                    }  border border-black`}
                >
                    <div className="fixed z-20 top-[4.5rem] w-28 right-6 rounded-lg bg-white flex flex-col p-3 justify-center items-center gap-2">
                        <button className="text-sm">Home</button>
                        <button className="text-sm">Feature</button>
                        <button className="text-sm">Contact Us</button>
                    </div>
                </div>
            </div>

        </>
    );
};

export default Navbar;
