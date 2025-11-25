import React from 'react';
import Hero from "@/components/Hero/Hero.jsx";
import AboutInfo from "@/components/AboutInfo/AboutInfo.jsx";
import StudyLevelCards from "@/components/Study/StudyLevelCards.jsx";
import {studyData} from "@/data/studyData.js";
import {ButtonLink} from "@/components/Button/Button.jsx";
import {filePath} from "@/utils/helperFunctions.js";

export const dynamic = 'force-dynamic';

const Page = async () => {
    return (
        <>
            <Hero image={filePath("hero_home.jpg")} title={"home.hero.title"}>
                <ButtonLink className={""} href={"/application"}>Конкурс за пријем у радни однос</ButtonLink>
            </Hero>
            <AboutInfo/>
            <StudyLevelCards studyData={studyData}/>
        </>
    );
};

export default Page;
