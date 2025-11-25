import React from 'react';
import {ButtonLink} from "@/components/Button/Button.jsx";
import {filePath} from "@/utils/helperFunctions.js";

const StudyLevelCards = ({studyData}) => {
    return (
        <section className="studyLevelsCard container py">
            <article>
                <h2 className="title text-center">Студије</h2>
            </article>
            <article className="grid">
                {Object.keys(studyData).map((item, index) => {
                    let levelItem = studyData[item];
                    return <div key={index} className="">
                        <div className="card text-bg-dark">
                            <img src={filePath(levelItem.thumbnail)} alt=""/>
                            <div className="card-img-overlay">
                                <h3 className="card-title">{levelItem.level}</h3>
                                <ul>
                                    <li>{levelItem.duration}</li>
                                    <li>{levelItem.espb} ESPB</li>
                                </ul>
                                <ButtonLink href={`/study/${item}`}>
                                    Детаљније
                                </ButtonLink>
                            </div>
                        </div>
                    </div>;
                })}
            </article>
        </section>
    );
};

export default StudyLevelCards;
