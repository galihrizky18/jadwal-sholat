import React from "react";
import Navbar from "@/Components/UserComponents/Navbar";
import { Head } from "@inertiajs/react";
import Hero from "@/Components/UserComponents/Hero";
import Feature from "@/Components/UserComponents/Feature";
import DoaSection from "@/Components/UserComponents/DoaSection";
import Footer from "@/Components/UserComponents/Footer";
import { useEffect, useState } from "react";

const Dashboard = () => {
    const scrollToCategory = (offset, e) => {
        if (typeof window !== "undefined") {
            window.scrollTo({
                top: offset,
                behavior: "smooth",
            });
        }
    };

    return (
        <div className="dashboard">
            <Head title="Dashboard" />
            <Navbar scrollToCategory={scrollToCategory} />
            <Hero />

            <div
                id="feature"
                className="feature sm:absolute w-full sm:top-[90%] sm:z-10"
            >
                <Feature />
            </div>

            <div className="doa-section">
                <DoaSection />
            </div>

            <div className="isi h-[500px]"></div>

            <div id="footer" className="footer hidden sm:block">
                <Footer />
            </div>
        </div>
    );
};

export default Dashboard;
