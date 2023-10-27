import Footer from "@/Components/UserComponents/Footer";
import Navbar from "@/Components/UserComponents/Navbar";

const Doa = () => {
    return (
        <div className="doa-doa flex flex-col">
            <div className="navbar">
                <Navbar />
            </div>

            <div className="body h-[500px] mt-16">Ini body</div>

            <div className="footer">
                <Footer />
            </div>
        </div>
    );
};

export default Doa;
