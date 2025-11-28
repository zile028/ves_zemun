import React from 'react';
import Hero from "@/components/Hero/Hero.jsx";

import Document from "@/components/Documents/Document.jsx";
import {filePath} from "@/utils/helperFunctions.js";
import {StudyData} from "@/server_actions/Study";

const StudyLevelPage = async ({params}) => {
    let {level} = await params;
    let study = await StudyData(level);
    return (<>
            <Hero title={["Студије"]} subtitle={study.level} image={filePath("hero_study.jpg")}/>
            <section className="documents container py">
                {study.studyPrograms.map((program, index) => {
                    return <article key={index}>
                        <h3 className="title-line"><span>{program.title}</span></h3>
                        <div className="subdocuments">
                            {program.atachment.length > 0 && program.atachment.map((item, index) => {
                                return <Document item={item} key={index}/>;
                            })}
                        </div>
                    </article>;
                })}
            </section>
        </>
    );
};

export default StudyLevelPage;
