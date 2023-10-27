import { Link } from "@inertiajs/react";

const Feature = () => {
    return (
        <div className="flex justify-center ">
            <div className=" h-28 sm:h-32 shadow-xl w-full sm:w-[90%] rounded-xl p-3 flex justify-center sm:bg-gray-100">
                <a href="/jadwal-sholat">
                    <div className="feature-item bg-white w-20 h-full rounded-lg shadow-lg mr-3 grid grid-rows-2">
                        <div className="icon flex justify-center pt-6">
                            <i className="fa-regular fa-calendar fa-xl sm:fa-2xl"></i>
                        </div>
                        <div className="title text-center text-xs sm:text-sm font-bold flex justify-center items-center">
                            Jadwal Sholat
                        </div>
                    </div>
                </a>
                <a href="/doa">
                    <div className="feature-item bg-white w-20 h-full rounded-lg shadow-lg mr-3 grid grid-rows-2 ">
                        <div className="icon flex justify-center pt-6 ">
                            <i className="fa-solid fa-book-quran fa-xl"></i>
                        </div>
                        <div className="title text-center text-xs sm:text-sm font-bold flex justify-center items-center">
                            Doa Doa
                        </div>
                    </div>
                </a>
            </div>
        </div>
    );
};

export default Feature;
