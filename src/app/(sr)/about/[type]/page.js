import React from 'react';
import {AboutStaffType} from "@/server_actions/About";
import {filePath} from "@/utils/helperFunctions";
import Hero from "@/components/Hero/Hero";
import avatar from "@/assets/images/avatar.png";
import Image from "next/image";

const AboutTypePage = async ({params}) => {
    let {type} = await params;
    const data = await AboutStaffType(type);
    console.log(data);
    return (
        <>
            <Hero image={filePath("hero_documents.jpg")} title={`about.${type}`}/>
            <section className="documents container py">
                {data.map((category, index) => {
                    return <article key={index}>
                        <h3 className="title-line"><span>{category.title}</span></h3>
                        <div className="subdocuments">
                            {category.member.map((member, index) => {
                                return <div key={index} className="card atachmentDocument py-3">
                                    <div>
                                        <Image src={avatar} style={{width: "auto", height: "200px"}} alt="avatar"/>
                                    </div>
                                    <div>
                                        <h4>{member.firstName}<br/>{member.lastName}</h4>
                                        {member.title && <p>{member.title}</p>}
                                    </div>
                                </div>;
                            })}
                        </div>
                    </article>;
                })}


            </section>
        </>
    );
};

export default AboutTypePage;
