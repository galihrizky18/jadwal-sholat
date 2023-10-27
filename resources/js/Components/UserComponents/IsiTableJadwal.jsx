const IsiTableJadwal = ({jadwalSholat}) => {

    const jadwal = jadwalSholat.jadwal;

    return jadwal.map((value, index)=>{
        return (
            <tr key={index} className={(index%2)? 'bg-gray-200' : 'bg-white'}>
                <td className="text-center font-bold py-2">{index + 1}</td>
                <td className="text-center">{value.imsak}</td>
                <td className="text-center">{value.subuh}</td>
                <td className="text-center">{value.terbit}</td>
                <td className="text-center">{value.dhuha}</td>
                <td className="text-center">{value.dzuhur}</td>
                <td className="text-center">{value.ashar}</td>
                <td className="text-center">{value.maghrib}</td>
                <td className="text-center">{value.isya}</td>
            </tr>
        )
    })
}

export default IsiTableJadwal