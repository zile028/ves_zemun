"use client";
import React from 'react';
import {useTranslation} from "react-i18next";
import Image from "next/image";

const Hero = ({image, title, subtitle = "", children}) => {
    const {t} = useTranslation();

    const titleLines = typeof title === "string" ? t(title, {returnObjects: true}) : title;

    return (
        <header className="hero hero-home position-relative">
            <div className="hero-overlay"></div>
            <div className="hero-home-bg position-absolute w-100 h-100">
                {/*IMAGE*/}
                <Image className="img-fluid" src={image} fill={true}
                       style={{objectFit: "cover", objectPosition: "center"}} quality={75} alt={"hero home"}
                       priority={true}
                       unoptimized={true}
                />
            </div>
            <div className="hero-home-text position-relative">
                <div className="container">
                    {/*TITLE*/}
                    <h1>{titleLines.map((line, index) => {
                        return <span key={index}>{line}</span>;
                    })}</h1>
                    {/*SUBTITLE*/}
                    {subtitle && <p>{t(subtitle)}</p>}
                    {/*CTA*/}
                    {children}

                </div>
            </div>
        </header>
    );
};

export default Hero;
