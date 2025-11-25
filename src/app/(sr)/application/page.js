import Hero from "@/components/Hero/Hero";
import ApplicationContent from "@/components/Application/ApplicationContent";
import {filePath} from "@/utils/helperFunctions";

export const dynamic = 'force-dynamic';
const ApplicationPage = () => {
    return (
        <>
            <Hero title={["Конкурс"]} image={filePath("hero_contact.jpg")}/>
            <ApplicationContent/>
        </>
    );
};


export default ApplicationPage;