"use client";
import React from 'react';

const GoogleMap = () => {
    return (
        <section className="container-fluid p-0">
            <iframe
                style={{
                    width: "100%",
                    display: "block"
                }}
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d20687.5111014778!2d20.410482000000002!3d44.840684!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475a65a5bb499fcd%3A0x3c906167614861b4!2sVisoka%20poslovna%20%C5%A1kola%20strukovnih%20studija%20%C4%8Ca%C4%8Dak%2C%20Beograd!5e1!3m2!1ssr!2srs!4v1754637424022!5m2!1ssr!2srs"
                height="450" allowFullScreen={true} loading={"lazy"}
                referrerPolicy="no-referrer-when-downgrade"></iframe>
        </section>
    );
};

export default GoogleMap;
