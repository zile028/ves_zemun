"use client";
import React, {createContext, useEffect, useState} from 'react';
import Link from "next/link.js";
import {menuList} from "@/components/NavMenu/menu.js";
import Logo from "@/components/Logo/Logo.jsx";
import {FaHome} from "react-icons/fa";
import useWindowSize from "@/hooks/useWindowSize";
import {FaBars} from "react-icons/fa6";
import MobileMenu from "@/components/NavMenu/MobileMenu";

const ToggleMenuContext = createContext(null);

const NavMenu = () => {
    const {innerWidth} = useWindowSize();
    const [showMobileMenu, setShowMobileMenu] = useState(false);
    useEffect(() => {
        if (innerWidth > 767) {
            setShowMobileMenu(false);
        }
    }, [innerWidth]);
    const toggleMenuHandler = () => {
        setShowMobileMenu(!showMobileMenu);
    };
    return (<ToggleMenuContext.Provider value={{showMobileMenu, setShowMobileMenu, toggleMenuHandler}}>
            <nav className="navbar">
                <div className="container">
                    <div className="navbar-logo">
                        <Logo/>
                    </div>
                    <div className="navbar-menu">
                        <ul>
                            <li className="ignore icon"><Link href={"/"}><FaHome/></Link></li>
                            {innerWidth > 767 ? menuList.map((item, index) => {
                                return item.active && <li key={index} className={item.drop ? "drop" : ""}>{item.drop ?
                                    <SubMenu {...item}/> :
                                    <LinkItem {...item}/>}</li>;
                            }) : <li onClick={toggleMenuHandler} className="menu-bar icon"><FaBars/></li>}
                        </ul>
                        {<MobileMenu menuList={menuList} toggleMenuHandler={toggleMenuHandler}
                                     showMobileMenu={showMobileMenu}/>}
                    </div>
                </div>
            </nav>
        </ToggleMenuContext.Provider>
    );
};

export const SubMenu = ({label, submenu, onClick = null}) => {
    return <>
        <span>{label}</span>
        <ul>
            {submenu.map((item, index) => <li key={index}><LinkItem  {...item} onCLick={onClick}/></li>)}
        </ul>
    </>;
};

export const LinkItem = ({path, label, onCLick = null}) => {
    return <Link href={path} onClick={onCLick}>{label}</Link>;
};

export default NavMenu;
