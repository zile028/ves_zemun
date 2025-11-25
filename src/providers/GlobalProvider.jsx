"use client";
import React, {useEffect} from 'react';
import {appWithTranslation} from "next-i18next";
import "@/i18n.js";


const GlobalProvider = ({children}) => {

    return (
        <>
            {children}
        </>
    );
};

export default appWithTranslation(GlobalProvider);