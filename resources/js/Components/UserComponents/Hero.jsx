import HeroImage from "../../../../public/asset/mosque.jpg";
import QuotesHero from "./QuotesHero";

const Hero = () => {
    return (
        <div className="hero h-[100vh]">
            <img
                src={HeroImage}
                alt=""
                className="object-cover w-full h-full "
            />
            <div className="kutipan absolute inset-0 flex items-center justify-center bg-black bg-opacity-60 text-white">
                <QuotesHero />
            </div>
        </div>
    );
};

export default Hero;
