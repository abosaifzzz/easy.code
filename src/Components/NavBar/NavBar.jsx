import { Link } from "react-router-dom";
import logo from "../../assets/logo@2x.png";
// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";

export default function NavBar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);


    const handleToggle = () => {
        setIsOpen(!isOpen);
    };


    const handleNav = () => {
        if (window.scrollY > 50) {
            setIsScrolled(true);
        } else {
            setIsScrolled(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleNav);

        return () => {
            window.removeEventListener("scroll", handleNav);
        };
    }, []);

    return (
        <nav
            dir="rtl"
            className="bg-white  z-10 shadow-lg fixed w-full rounded-b-2xl"
        >
            <div
                className={`w-4/5 z-10 flex flex-wrap items-center justify-between max-w-screen-xl px-4 mx-auto ${isScrolled ? "py-1" : "py-2"} transition-all duration-300`}
            >
                <Link className=" flex items-center">
                    <img
                        src={logo}
                        className={`${isScrolled ? "lg:w-16 w-10 h-10 lg:h-16" : "lg:w-24 w-14 lg:h-20 h-14"} mr-3 transition-all duration-300`}
                        alt="Landwind Logo"
                    />
                </Link>

                <div className="flex items-center lg:order-2">
                    <Link to={"/"}>
                        <button className="icon p-2 px-4 rounded-md bg-[#22ACE6]">

                            <p className="m-0 kufi hello z-10">سجل الأن</p>

                        </button>
                    </Link>

                    <button
                        onClick={handleToggle}
                        className="inline-flex mr-3 items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                        aria-controls="mobile-menu-2"
                        aria-expanded={isOpen}
                    >
                        <span className="sr-only">Open main menu</span>
                        {!isOpen ? (
                            <svg
                                className="w-6 h-6"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        ) : (
                            <svg
                                className="w-6 h-6"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        )}
                    </button>
                </div>
                <div
                    className={`w-full lg:flex lg:w-auto lg:order-1 ${isOpen ? "block" : "hidden"
                        }`}
                    id="mobile-menu-2"
                >




                    <ul
                        className={`nav-ul font-medium flex lg:flex-row flex-col items-start lg:mt-0 ${isOpen ? "block" : "flex"
                            }`}
                    >
                        <li><Link to={'/home'} className="menu text-xl cairo font-medium ">الرئيسية</Link> </li>
                        <li><Link to={"/about"} className="menu text-xl cairo font-medium ">نبذة عننا</Link> </li>
                        <li><Link to={"/programs"} className="menu text-xl cairo font-medium ">البرامج</Link></li>
                        <li><Link className="menu text-xl cairo font-medium ">الأنظمة</Link></li>
                        <li><Link className="menu text-xl cairo font-medium ">اراء عملائنا </Link></li>
                        <li><Link className="menu text-xl cairo font-medium ">تواصل معنا</Link></li>






                    </ul>
                </div>
            </div>
        </nav>
    );
}
