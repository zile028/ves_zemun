import React from 'react';
import {documentsData} from "@/data/documentsData.js";
import Document from "@/components/Documents/Document.jsx";

const DocumentsPage = async ({params}) => {
    const {type} = await params;
    const documents = documentsData[type];
    return (
        <section className="documents container py">
            {documents.length > 0 ? documents.map((doc, index) => {
                return <article key={index}>
                    <h3 className="title-line"><span>{doc.category}</span></h3>
                    <div className="subdocuments">
                        {doc.documents.map((item, index) => {
                            return <Document item={item} key={index}/>;
                        })}
                    </div>
                </article>;
            }) : <article>
                <p className="py"><span>Тренутно нема објављених распореда</span></p>

            </article>}
        </section>
    );
};

export default DocumentsPage;
