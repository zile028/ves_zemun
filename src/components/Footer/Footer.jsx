"use client";
import React from 'react';
import Logo from "@/components/Logo/Logo.jsx";
import {FaHome} from "react-icons/fa";
import {FaClock, FaEnvelope, FaPhone} from "react-icons/fa6";
import BottomBar from "@/components/BottpmBar/BottomBar.jsx";

const Footer = () => {
    return (
        <footer className="footer">
            <article className="container py">
                <div className="row">
                    <div className="col-md-6">
                        <div className="d-flex mb-4 align-items-center">
                            <Logo/>
                            <h2 className="text-light ms-3 text-uppercase fw-bold">ВИСОКА ЕКОНОМСКА ШКОЛА
                                СТРУКОВНИХ СТУДИЈА</h2>
                        </div>
                        <p className="text-light">Одлучити о томе где наставити школовање после средње школе или где се
                            дошколовати уз рад,
                            једна је од највећих животних одлука. Она ће пресудно утицати на ваш даљи живот. Ми Вам
                            помажемо да стекнете неопходна знања и квалификације које су потребне за успех у
                            каријери.</p>
                    </div>
                    <div className="col-md-6">
                        <div className="d-flex align-items-center align-items-md-end flex-column w-100">
                            <div>
                                <h2 className="text-light text-uppercase fw-bold mb-5">Контакт</h2>
                                <ul className="text-light lh-lg">
                                    <li>
                                        <FaHome/>
                                        <span className="ms-3">11080 Београд, ул. Градски парк 2</span>
                                    </li>
                                    <li>
                                        <FaPhone/>
                                        <span className="ms-3">(+381) 63 102-37-03</span>
                                    </li>
                                    <li className="ignore">
                                        <FaEnvelope/>
                                        <span className="ms-3">office@visoka-ekonomska.edu.rs</span>
                                    </li>
                                    <li>
                                        <FaClock/>
                                        <span className="ms-3">Радно време: 09:00 - 17:00</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </article>
            <article className="container">
                <BottomBar/>
            </article>
        </footer>
    );
};

export default Footer;
