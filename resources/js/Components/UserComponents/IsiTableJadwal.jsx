const IsiTableJadwal = ({ jadwalSholat, tanggal }) => {
    const jadwal = jadwalSholat;

    return jadwal.jadwal.map((value, index) => {
        const isTanggalSama = index === tanggal - 1;
        return (
            <tr
                key={index}
                className={
                    isTanggalSama
                        ? "bg-[#B4DA3E] font-bold"
                        : index % 2 === 0
                        ? "bg-gray-200"
                        : "bg-white"
                }
            >
                <td className="text-center font-bold py-2">{index + 1}</td>
                <td className="text-center ">{value.imsak}</td>
                <td className="text-center">{value.subuh}</td>
                <td className="text-center">{value.terbit}</td>
                <td className="text-center">{value.dhuha}</td>
                <td className="text-center">{value.dzuhur}</td>
                <td className="text-center">{value.ashar}</td>
                <td className="text-center">{value.maghrib}</td>
                <td className="text-center">{value.isya}</td>
            </tr>
        );
    });
};

export default IsiTableJadwal;
