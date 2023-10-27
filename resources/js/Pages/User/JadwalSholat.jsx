import { Head } from "@inertiajs/react";
import Footer from "@/Components/UserComponents/Footer";
import Navbar from "@/Components/UserComponents/Navbar";
import { Select, initTE } from "tw-elements";
import { useEffect, useState } from "react";
import { axiosInstance } from "../../../lib/axios";
import IsiTableJadwal from "@/Components/UserComponents/IsiTableJadwal";

const JadwalSholat = () => {
    initTE({ Select });

    const [jadwalSholat, setJadwalSholat] = useState([]);
    const [kotas, setKotas] = useState([]);

    const semuaKota = async () => {
        try {
            
            const kotas = await axiosInstance.get('/sholat/kota/semua');
            setKotas(kotas);

        } catch (error) {
            console.log(error);
        }
    }
    const cekIdKota = async (kota) => {
        try {
            const cek = await axiosInstance.get('/sholat/kota/cari/'+kota);
            fetchJadwalSholat(cek.data.data[0].id);
            
        } catch (error) {
            console.log(error);
        }
    }
    const fetchJadwalSholat = async (idKota)=> {

        try {
            const resultFetch = await axiosInstance.get("/sholat/jadwal/"+idKota+"/2021/06");
            setJadwalSholat(resultFetch.data.data);
            console.log(resultFetch.data.data);
            
        } catch (error) {
            console.log(error)
        }
    }

    const handleInputKota = async () => {
        const kota = document.getElementById('inputKota').value;
        cekIdKota(kota);
    }

    useEffect(()=>{
        semuaKota()
    }, []);

    return (
        <div className="jadwal-sholat flex flex-col justify-between">
            <Head title="Jadwal Sholat" />
            <div className="navbar">
                <Navbar />
            </div>
 
            <div className="body bg-white mt-20 sm:mb-4 rounded-lg shadow-lg sm:mx-4 p-4 ">
                <div className="judul">
                    <span className="text-xl font-bold">Jadwal Sholat</span>
                </div>

                <div className="tables ml-[8rem] sm:ml-0 sm:w-full flex flex-col justify-center items-center p-0 sm:p-5 ">
                    <div className="tbl border border-black">
                        <table className=" w-[390px] sm:w-[800px]">
                            <thead className="text-white">
                                <tr className="flex justify-center bg-green-700 font-bold text-xl">
                                    <td colSpan="3">Jadwal Sholat {(jadwalSholat.lokasi)?jadwalSholat.lokasi : ''}</td>
                                </tr>
                                <tr className="flex justify-center bg-green-700 font-bold text-2xl">
                                    <td colSpan="3">September 2023</td>
                                </tr>
                                <tr className="flex justify-center bg-green-500 font-bold text-lg">
                                    <th className="w-28 flex justify-center items-center">
                                        <i className="fa-solid fa-arrow-left fa-lg" style={{color: '#fff'}}></i>
                                    </th>
                                    <th className="w-full ">
                                        <span>Pilih Kota :</span>
                                        <div className="option mx-5 mb-3">
                                            <select data-te-select-init className="font-bold" id="inputKota" onChange={()=>{handleInputKota()}}>
                                                <option value="1" className="font-bold">--Pilih Kota--</option>
                                                <option value="palembang" className="font-bold">Palembang</option>
                                                <option value="jakarta" className="font-bold">Jakarta</option>
                                            </select>
                                        </div>
                                    </th>
                                    <th className="w-28 flex justify-center items-center">
                                        <i className="fa-solid fa-arrow-right fa-lg" style={{color: '#fff'}}></i>
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

                                    {(jadwalSholat.lokasi)?<IsiTableJadwal jadwalSholat={jadwalSholat} />:""}
                                    
                    
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
