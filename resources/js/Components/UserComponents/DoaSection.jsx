import { Carousel, initTE } from "tw-elements";

const classNameContainer =
    "doa h-full px-5 sm:px-10 bg-gray-200 flex flex-col sm:flex-row  sm:items-center justify-between";

const DoaSection = () => {
    initTE({ Carousel });
    return (
        <div className="doa h-[500px]">
            <div
                id="carouselExampleControls"
                className="relative h-full"
                data-te-carousel-init
                data-te-ride="carousel"
            >
                {/* <!--Carousel items--> */}
                <div className="relative w-full h-full overflow-hidden after:clear-both after:block after:content-[''] ">
                    {/* <!--First item--> */}
                    <div
                        className="h-full relative float-left -mr-[100%] w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
                        data-te-carousel-item
                        data-te-carousel-active
                    >
                        {/* <img
                            src="https://mdbcdn.b-cdn.net/img/new/slides/041.webp"
                            className="block w-full"
                            alt="Wild Landscape"
                        /> */}
                        <div className={`${classNameContainer} py-20`}>
                            <div className="sumber leading-[6rem] sm:leading-0 text-7xl sm:w-[800px] text-center ">
                                Surah Al Qasas ayat 24
                            </div>
                            <div>
                                <div className="latin text-3xl font-bold text-center">
                                    "Rabbi innii limaa anzalta ilayya min
                                    khairin faqiir"
                                </div>
                                <div className="artinya flex flex-wrap text-xl mt-3 font-extralight text-center">
                                    Ya Tuhanku, sesungguhnya aku sangat
                                    memerlukan sesuatu kebaikan (makanan) yang
                                    Engkau turunkan kepadaku
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* <!--Second item--> */}
                    <div
                        className="h-full relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
                        data-te-carousel-item
                    >
                        <div className={`${classNameContainer} py-2`}>
                            <div className=" sm:w-[900px]">
                                <div className="latin text-center text-xl sm:text-3xl flex-wrap font-bold">
                                    "Allaahumma 'aafinii badanii, allaahumma
                                    'aafinii fii sama 'ii, allahumma 'aafinii
                                    fii basharii. Allaahumma innii a'uudzu bika
                                    minal kufri wal faqri. Allaahumma innii
                                    a'uudzu bika min 'adzaabil qabri la ilaaha
                                    illaa anta"
                                </div>
                                <div className="artinya flex flex-wrap text-lg sm:text-xl mt-3 font-extralight">
                                    Ya Allah, sembuhkanlah badanku. Ya Allah,
                                    sembuhkanlah pendengaranku. Ya Allah,
                                    sembuhkanlah penglihatanku. Ya Allah, aku
                                    berlindung kepada-Mu dari kekafiran dan
                                    kefakiran. Ya Allah, aku berlindung
                                    kepada-Mu dari siksa kubur, tiada Tuhan
                                    selain engkau.
                                </div>
                            </div>
                            <div className="sumber leading-[6rem] sm:leading-0 text-7xl flex text-center ">
                                Doa Memohon Kesembuhan
                            </div>
                        </div>
                    </div>

                    {/* <!--Third item--> */}
                    <div
                        className="h-full relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
                        data-te-carousel-item
                    >
                        <div className={`${classNameContainer} py-16`}>
                            <div className="sumber text-7xl sm:w-[800px] leading-[6rem] text-center">
                                Doa Mohon Ampunan
                            </div>
                            <div>
                                <div className="latin text-3xl font-bold">
                                    "Allahummagh-firlii khothii-atii wa jahlii
                                    wa isrofii fii amrii wa maa anta a’lamu bihi
                                    minni."
                                </div>
                                <div className="artinya flex flex-wrap text-xl mt-3 font-extralight">
                                    Ya Allah, ampunilah kesalahan, kebodohan dan
                                    keterlaluanku dalam segala urusan, dan
                                    ampuni pula segala dosa yang Engkau lebih
                                    mengetahui daripada aku.
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* <!--fourth item--> */}
                    <div
                        className="h-full relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
                        data-te-carousel-item
                    >
                        <div className={`${classNameContainer} py-12`}>
                            <div className=" sm:w-[900px]">
                                <div className="latin text-3xl font-bold">
                                    "Rabbana atina fiddunya hasanatan wa fil
                                    akhirati hasanatan waqina 'adzaban nar"
                                </div>
                                <div className="artinya flex flex-wrap text-xl mt-3 font-extralight">
                                    Ya Tuhan, berilah kami kebaikan di dunia dan
                                    kebaikan di akhirat, serta selamatkanlah
                                    kami dari siksa neraka.
                                </div>
                            </div>
                            <div className="sumber text-7xl flex text-center ">
                                Doa Keselamatan Dunia Akhirat
                            </div>
                        </div>
                    </div>
                </div>

                {/* <!--Carousel controls - prev item--> */}
                <button
                    className="absolute bottom-0 left-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
                    type="button"
                    data-te-target="#carouselExampleControls"
                    data-te-slide="prev"
                >
                    <span className="inline-block h-8 w-8">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="h-6 w-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M15.75 19.5L8.25 12l7.5-7.5"
                            />
                        </svg>
                    </span>
                    <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
                        Previous
                    </span>
                </button>
                {/* <!--Carousel controls - next item--> */}
                <button
                    className="absolute bottom-0 right-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
                    type="button"
                    data-te-target="#carouselExampleControls"
                    data-te-slide="next"
                >
                    <span className="inline-block h-8 w-8">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="h-6 w-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M8.25 4.5l7.5 7.5-7.5 7.5"
                            />
                        </svg>
                    </span>
                    <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
                        Next
                    </span>
                </button>
            </div>
        </div>
    );
};

export default DoaSection;
