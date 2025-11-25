import {useState} from 'react';
import {AnimatePresence, motion} from 'framer-motion';
import Link from 'next/link';
import {FaArrowLeftLong, FaChevronDown} from 'react-icons/fa6';
import {LinkItem} from '@/components/NavMenu/NavMenu';

const variants = {
    hidden: {scaleY: 0, opacity: 1, overflow: 'hidden'},
    visible: {scaleY: 1, opacity: 1, overflow: 'hidden'},
    exit: {scaleY: 0, opacity: 1, overflow: 'hidden'}
};

const variantsSubmenu = {
    hidden: {height: 0, opacity: 1, overflow: 'hidden'},
    visible: {height: "auto", opacity: 1, overflow: 'hidden'},
    exit: {height: 0, opacity: 1, overflow: 'hidden'}
};

const MobileMenu = ({toggleMenuHandler, showMobileMenu, menuList}) => {
    const [openDropdown, setOpenDropdown] = useState(null);

    const handleDropdownToggle = (index) => {
        setOpenDropdown(prev => (prev === index ? null : index));
    };

    return (
        <AnimatePresence>
            {showMobileMenu && (
                <motion.div
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    transition={{duration: 0.3, ease: 'easeInOut'}}
                    variants={variants}
                    style={{transformOrigin: 'top center'}}
                    className="navbar-mobile"
                >
                    <ul>
                        <li onClick={toggleMenuHandler} className={"hoverText"}><FaArrowLeftLong/></li>
                        <li className="ignore">
                            <Link href="/" onClick={toggleMenuHandler}>Почетна</Link>
                        </li>
                        {menuList.map((item, index) => (
                            item.active && (
                                <li key={index} className={item.drop ? 'drop' : ''}>
                                    {!item.drop ? (
                                        <span>
                                        <LinkItem {...item} onCLick={toggleMenuHandler}/>
                                        </span>
                                    ) : (
                                        <>
                                            <span onClick={() => handleDropdownToggle(index)}
                                                  style={{cursor: 'pointer'}}>
                                                {item.label} <FaChevronDown/>
                                            </span>
                                            <AnimatePresence>
                                                {openDropdown === index && (
                                                    <motion.ul
                                                        initial="hidden"
                                                        animate="visible"
                                                        exit="exit"
                                                        variants={variantsSubmenu}
                                                        style={{transformOrigin: 'top center'}}
                                                    >
                                                        {item.submenu.map((sub, subIndex) => (
                                                            <li key={subIndex}>
                                                                <LinkItem path={sub.path || "#"} label={sub.label}
                                                                          onCLick={() => {
                                                                              toggleMenuHandler();
                                                                              setOpenDropdown(false);
                                                                          }}/>
                                                            </li>
                                                        ))}
                                                    </motion.ul>
                                                )}
                                            </AnimatePresence>
                                        </>
                                    )}
                                </li>
                            )
                        ))}
                    </ul>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default MobileMenu;
