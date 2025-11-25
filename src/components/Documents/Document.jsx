"use client";
import React from 'react';
import {FaDownload} from "react-icons/fa6";
import {ButtonLink} from "@/components/Button/Button.jsx";
import {filePath} from "@/utils/helperFunctions.js";

const Document = ({item}) => {
    return (
        <div className="card atachmentDocument">
            <div>
                <p>{item.subtitle}</p>
            </div>
            <div>
                <h4>{item.title}</h4>
            </div>
            <div>
                <ButtonLink href={filePath(item.src)}>
                    <FaDownload/><span>Преузми</span>
                </ButtonLink>
            </div>
        </div>
    );
};

export default Document;
