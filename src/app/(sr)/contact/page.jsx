import React from 'react';
import Hero from "@/components/Hero/Hero.jsx";
import {filePath} from "@/utils/helperFunctions.js";
import ContactInfo from "@/components/Contact/ContactInfo.jsx";
import ContactForm from "@/components/Contact/ContactForm.jsx";

export const dynamic = 'force-dynamic';

const ContactPage = () => {
    return (
        <>
            <Hero title={["Контактирајте нас"]} image={filePath("hero_contact.jpg")}/>
            <section className="contactPage container py row">
                <ContactInfo/>
                <ContactForm/>
            </section>
        </>
    );
};

export default ContactPage;
