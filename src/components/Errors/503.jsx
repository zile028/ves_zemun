"use client";
import React from 'react';
import img_503 from "@/assets/images/error_503.png";
import Image from "next/image";
import {ButtonLink} from "@/components/Button/Button.jsx";
import {useTranslation} from "react-i18next";

const Error_503 = ({title}) => {
    const {t} = useTranslation("errors");
    return (
        <>
            <section className="error-503 container py">
                <article>
                    <h1>Дошло је до грешке</h1>
                    <p>Поштовани, извињавамо се али страница je још увек у припреми, молимо Вас покушајте касније или за
                        више информација нас контактирајте.</p>
                    <ButtonLink href={"/"}>Почетна</ButtonLink>
                </article>
                <article>
                    <Image src={img_503} alt={"error 503"}/>
                </article>
            </section>
        </>
    );
};

export default Error_503;
