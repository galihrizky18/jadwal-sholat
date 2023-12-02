import { Head } from "@inertiajs/react";
import Footer from "@/Components/UserComponents/Footer";
import Navbar from "@/Components/UserComponents/Navbar";
import { useEffect, useState } from "react";
import { axiosInstance } from "../../../lib/axios";
import IsiTableJadwal from "@/Components/UserComponents/IsiTableJadwal";
import Select from "react-select";

const JadwalSholat = () => {
    const [jadwalSholat, setJadwalSholat] = useState([]);
    const [Kotas, setKotas] = useState([]);
    const [countBulan, setCountBulan] = useState();
    const [selectedKota, setSelectedKota] = useState();

    const tanggalHariIni = new Date();
    const bulan = parseInt(tanggalHariIni.getMonth() + 1);
    const tanggal = tanggalHariIni.getDate();

    const namaBulan = [
        "Januari",
        "Februari",
        "Maret",
        "April",
        "Mei",
        "Juni",
        "Juli",
        "Agustus",
        "September",
        "Oktober",
        "November",
        "Desember",
    ];

    const semuaKota = async () => {
        try {
            const kota = await axiosInstance.get("/sholat/kota/semua");
            const result = kota.data.map((data) => {
                return {
                    value: data.id,
                    label: data.lokasi,
                };
            });

            setKotas(result);
        } catch (error) {
            console.log(error);
        }
    };

    const handleJadwalSholat = async (idKota, bulan) => {
        const jadwal = await axiosInstance.get(
            `/sholat/jadwal/${idKota}/2023/${bulan}`
        );
        setJadwalSholat(jadwal.data.data);
        setSelectedKota(idKota);
    };

    useEffect(() => {
        semuaKota();
        setCountBulan(bulan);
    }, []);

    useEffect(() => {
        if (selectedKota) {
            handleJadwalSholat(selectedKota, countBulan);
        }
    }, [countBulan]);

    return (
        <div className="jadwal-sholat flex flex-col justify-between text-black">
            <Head title="Jadwal Sholat" />
            <div className="navbar">
                <Navbar />
            </div>

            <div className="body bg-white mt-5 sm:mb-4 rounded-lg shadow-lg sm:mx-4 p-4 ">
                <div className="judul">
                    <span className="text-xl font-bold">Jadwal Sholat</span>
                </div>

                <div className="tables ml-[8rem] sm:ml-0 sm:w-full flex flex-col justify-center items-center p-0 sm:p-5 ">
                    <div className="tbl border border-black">
                        <table className=" w-[390px] sm:w-[800px]">
                            <thead className="text-white">
                                <tr className="flex justify-center bg-green-700 font-bold text-xl">
                                    <td colSpan="3">Jadwal Sholat </td>
                                </tr>
                                <tr className="flex justify-center bg-green-700 font-bold text-2xl">
                                    <td colSpan="3">
                                        {namaBulan[countBulan - 1]} 2023
                                    </td>
                                </tr>
                                <tr className="flex justify-center bg-green-500 font-bold text-lg">
                                    <th className="w-28 flex justify-center items-center ">
                                        {/* Arrow Left */}
                                        <i
                                            className={`fa-solid ${
                                                countBulan < 2
                                                    ? "hidden"
                                                    : "flex"
                                            } fa-arrow-left fa-lg w-full h-full  items-center justify-center cursor-pointer`}
                                            style={{ color: "#fff" }}
                                            onClick={() => {
                                                setCountBulan(countBulan - 1);
                                            }}
                                        ></i>
                                    </th>
                                    <th className="w-full ">
                                        <span>Pilih Kota :</span>
                                        <div className="option"></div>
                                        <Select
                                            options={Kotas}
                                            placeholder="--- Pilih Kota ---"
                                            onChange={(e) => {
                                                setSelectedKota(e.value);
                                                handleJadwalSholat(
                                                    e.value,
                                                    countBulan
                                                );
                                            }}
                                            styles={{
                                                placeholder: (
                                                    baseStyles,
                                                    state
                                                ) => ({
                                                    ...baseStyles,
                                                    color: "gray",
                                                }),
                                                menuList: (
                                                    baseStyles,
                                                    state
                                                ) => ({
                                                    ...baseStyles,
                                                    color: "black",
                                                }),
                                            }}
                                        />
                                    </th>
                                    <th className="w-28 flex justify-center items-center ">
                                        {/* Arrow Right */}
                                        <i
                                            className={`fa-solid ${
                                                countBulan > 11
                                                    ? "hidden"
                                                    : "flex"
                                            } fa-arrow-right fa-lg w-full h-full  items-center justify-center cursor-pointer`}
                                            style={{ color: "#fff" }}
                                            onClick={() => {
                                                setCountBulan(countBulan + 1);
                                            }}
                                        ></i>
                                    </th>
                                </tr>
                            </thead>
                        </table>

                        {/* table Body */}
                        <div className="overflow-x-auto">
                            <table className="sm:w-[800px] ">
                                <tbody>
                                    <tr className="text-white bg-green-700">
                                        <th className="py-2">Tanggal</th>
                                        <th>Imsyak</th>
                                        <th>Shubuh</th>
                                        <th>Terbit</th>
                                        <th>Dhuha</th>
                                        <th>Dzuhur</th>
                                        <th>Ashr</th>
                                        <th>Maghrib</th>
                                        <th>Isya</th>
                                    </tr>

                                    {/* isi dari Table */}

                                    {jadwalSholat.daerah ? (
                                        <IsiTableJadwal
                                            jadwalSholat={jadwalSholat}
                                            tanggal={tanggal}
                                        />
                                    ) : (
                                        ""
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

            <div className="footer hidden sm:block">
                <Footer />
            </div>
        </div>
    );
};

export default JadwalSholat;
