import React from 'react';

import TopBar from "@/components/TopBar/TopBar.jsx";
import NavMenu from "@/components/NavMenu/NavMenu.jsx";
import GoogleMap from "@/components/GoogleMap/GoogleMap.jsx";
import Footer from "@/components/Footer/Footer.jsx";

const Layout = async ({children, params}) => {

    return <>
        <TopBar/>
        <NavMenu/>
        {children}
        <Footer/>
    </>;
};

export default Layout;