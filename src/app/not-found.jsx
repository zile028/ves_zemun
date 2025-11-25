import React from 'react';
import Link from "next/link.js";
import TopBar from "@/components/TopBar/TopBar.jsx";
import NavMenu from "@/components/NavMenu/NavMenu.jsx";
import Footer from "@/components/Footer/Footer.jsx";

export const dynamic = 'force-dynamic';

const NotFound = () => {
    return (
        <>
            <TopBar/>
            <NavMenu/>
            <h2>Страница није пронађена</h2>
            <Link href={"/"}>Почетна</Link>
            <Footer/>
        </>
    );
};

export default NotFound;
