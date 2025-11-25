"use client";
import React, {useState} from 'react';
import Button from "@/components/Button/Button.jsx";
import {useFormik} from "formik";
import * as Yup from "yup";
import {SendMail} from "@/server_actions/SendMail.js";
import {toast} from "react-toastify";

const yupSchema = Yup.object().shape({
    fullName: Yup.string()
        .required('Име и презиме је обавезно')
        .min(2, 'Име мора имати најмање 2 карактера'),

    email: Yup.string()
        .email('Невалидан емаил')
        .required('Емаил је обавезан'),

    message: Yup.string()
        .required('Порука је обавезна')
        .min(10, 'Порука мора имати најмање 10 карактера')
});
const ContactForm = () => {
    const [isSend, setIsSend] = useState(false);
    const [loading, setLoading] = useState(false);

    const formik = useFormik({
        initialValues: {fullName: "", email: "", message: ""},
        validationSchema: yupSchema,
        onSubmit: async (values) => {
            setLoading(true);
            try {
                let res = await SendMail(values);
                console.log(res.success);
                toast("Успешно посата порука", {type: "success"});
                formik.resetForm();
            } catch (error) {
                toast("Неуспешно посата порука", {type: "error"});
                console.log("GRESKA", error.message);
            } finally {
                setLoading(false);
            }

        }
    });
    const showError = (name) => formik.touched[name] && formik.errors[name] ? <span>{formik.errors[name]}</span> : null;
    return (
        <article className="contactPage-form col-md-6">
            <h3 className="title">Пошаљи нам питање:</h3>
            <form className="row">
                <div className="col-md-12">
                    <div className="form-group">
                        <label className="form-label" htmlFor="fullName">Име и презиме {showError("fullName")}</label>
                        <input className="form-control" type="text" id="fullName" name="fullName"
                               onInput={formik.handleChange} value={formik.values.fullName}/>
                    </div>
                </div>
                <div className="col-md-12 mt-3">
                    <div className="form-group">
                        <label className="form-label" htmlFor="email">E-mail {showError("email")}</label>
                        <input className="form-control" type="email" id="email" name="email"
                               onInput={formik.handleChange} value={formik.values.email}/>
                    </div>
                </div>
                <div className="col-md-12 mt-3">
                    <div className="form-group">
                        <label className="form-label" htmlFor="message">Порука {showError("message")}</label>
                        <textarea className="form-control" id="message" name="message" onInput={formik.handleChange}
                                  value={formik.values.message}/>
                    </div>
                </div>
                <div className="col-md-12 mt-3">
                    {!loading && <Button label="Пошаљи" onClick={formik.handleSubmit} type={"button"}/>}
                </div>
            </form>
        </article>
    );
};

export default ContactForm;
