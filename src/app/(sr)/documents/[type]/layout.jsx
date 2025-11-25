import React from 'react';
import Hero from "@/components/Hero/Hero.jsx";
import Button from "@/components/Button/Button.jsx";
import {filePath} from "@/utils/helperFunctions.js";

const DocumentsLayout = async ({children, params}) => {
    let {type} = await params;
    return (
        <>
            <Hero image={filePath("hero_documents.jpg")} title={`documents.${type}.hero.title`}/>
            {children}
        </>
    );
};

export default DocumentsLayout;
