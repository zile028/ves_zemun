import React from 'react';
import Link from "next/link.js";
import {filePath} from "@/utils/helperFunctions.js";

const Logo = () => {
    return (
        <div className="logo">
            <Link href={"/"}>
                <img src={filePath("logo-white.png")}
                     style={{objectFit: "contain", display: "block", height: "60px", width: "auto"}}
                     alt={"logo"}
                />
            </Link>
        </div>
    );
};

export default Logo;
