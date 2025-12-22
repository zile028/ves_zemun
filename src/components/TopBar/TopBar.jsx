"use client";
import React from 'react';
import {FaPhoneSquareAlt} from "react-icons/fa";
import {FaEnvelope} from "react-icons/fa6";

const TopBar = () => {
    return <section className="topbar">
        <article className="container">
            <ul className="">
                <li className="text text-light-blue"><FaPhoneSquareAlt/><span>(+381) 63 102-37-03 </span></li>
                <li className="text text-light-blue"><FaEnvelope/><span>office@visoka-ekonomska.edu.rs</span></li>
            </ul>
        </article>

    </section>;
};

export default TopBar;
