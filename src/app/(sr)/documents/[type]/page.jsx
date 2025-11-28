import Document from "@/components/Documents/Document.jsx";
import {GetActs} from "@/server_actions/Documents";

const DocumentsPage = async ({params}) => {
    const {type} = await params;
    const documents = await GetActs(type);
    return (
        <section className="documents container py">
            {documents.map((doc, index) => {
                return <article key={index}>
                    <h3 className="title-line"><span>{doc.category}</span></h3>
                    <div className="subdocuments">
                        {doc.documents.map((item, index) => {
                            return <Document item={item} key={index}/>;
                        })}
                    </div>
                </article>;
            })}
        </section>
    );
};

export default DocumentsPage;
