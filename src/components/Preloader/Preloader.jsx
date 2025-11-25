"use client";
import React, {useEffect, useState} from 'react';
import "./style.css";
import {AnimatePresence, motion} from "framer-motion";
import {usePathname} from "next/navigation";

const variants = {
    init: {opacity: 0, transition: {duration: 0, ease: "linear"}},
    exit: {opacity: 0, transition: {duration: .3, ease: "linear"}},
    animate: {opacity: 1, transition: {duration: .3, ease: "linear"}}
};
const Preloader = () => {
    const [show, setShow] = useState(false);
    const pathname = usePathname();
    useEffect(() => {
        setShow(true);
        const timeout = setTimeout(() => {
            setShow(false);
        }, 2000);
        return () => clearTimeout(timeout);
    }, [pathname]);

    return (
        <AnimatePresence>
            {show && <motion.div
                initial={"init"}
                exit={"exit"}
                animate={"animate"}
                variants={variants}
                className="preloader"><span className="loader"><span
                className="loader-inner"></span></span></motion.div>}
        </AnimatePresence>
    );
};

export default Preloader;
