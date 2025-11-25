import React from 'react';
import Link from "next/link.js";

export const Button = ({label, onClick, ...props}) => {
    return (
        <button className="cButton" onClick={onClick} {...props}>
            {label}
        </button>
    );
};

export const ButtonLink = ({label, href, children, className}) => {
    return <Link className={`cButton ${className}`} href={href}>{children}</Link>;
};

export default Button;
