import React from 'react';
import Hero from "@/components/Hero/Hero.jsx";
import AboutInfo from "@/components/AboutInfo/AboutInfo.jsx";
import StudyLevelCards from "@/components/Study/StudyLevelCards.jsx";
import {studyData} from "@/data/studyData.js";
import {filePath} from "@/utils/helperFunctions.js";
import GoogleMap from "@/components/GoogleMap/GoogleMap";

export const dynamic = 'force-dynamic';

const Page = async () => {
    return (
        <>
            <Hero image={filePath("hero_home.jpg")} title={"home.hero.title"}>
            </Hero>
            <AboutInfo/>
            <StudyLevelCards studyData={studyData}/>
            <GoogleMap/>
        </>
    );
};

export default Page;
