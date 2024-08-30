import { Link } from "react-router-dom";
import logo from "../../assets/logo@2x.png";
import React, { useState, useEffect } from "react";

export default function NavBar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isClicked, setIsClicked] = useState(false);
    const [isClicked2, setIsClicked2] = useState(false);

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    const handleDropDown = () => {
        setIsClicked(!isClicked);

    };
    const handleDropDown2 = () => {
        setIsClicked2(!isClicked2);
    };

    const handleNav = () => {
        if (window.scrollY > 50) {
            setIsScrolled(true);
        } else {
            setIsScrolled(false);
        }
    };
    const handleMouseEnter = () => {
        setIsClicked(true);
    };

    const handleMouseLeave = () => {
        setIsClicked(false);
        setIsClicked2(false); // Optional: close nested dropdown on hover out
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
                className={`w-4/5   z-10 flex flex-wrap items-center justify-between max-w-screen-xl px-4 mx-auto ${isScrolled ? "py-1" : "py-2"
                    }`}
            >
                <a href="#" className="flex items-center">
                    <img src={logo} className="w-24 h-20 mr-3" alt="Landwind Logo" />
                </a>

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
                        className={` font-medium lg:flex-row lg:mt-0 ${isOpen ? "block" : "flex"
                            }`}
                    >
                        <Link className=" m-0 block w-full me-3  px-4 text-white bg-blue-400 rounded lg:bg-transparent lg:text-black lg:font-medium lg:p-0 dark:text-white"
                            aria-current="page" >




                            <p className="nav-item hover:bg-slate-100 rounded-md p-3">الرئيسية</p>

                        </Link>
                        <li className="w-full">
                            <a
                                href="#"
                                className="block w-full me-3 py-2 px-4 text-white bg-blue-400 rounded lg:bg-transparent lg:text-black lg:font-medium lg:p-0 dark:text-white"
                                aria-current="page"
                            >
                                <p className="nav-item hover:bg-slate-100 rounded-md p-3">المجتمع</p>
                            </a>
                        </li>

                        <li
                            className="w-full"
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                        >
                            <div
                                className="relative block w-full me-3 px-4 text-white bg-blue-400 rounded lg:bg-transparent lg:text-black lg:font-medium lg:p-0 dark:text-white"
                                aria-current="page"
                            >
                                <p
                                    onClick={handleDropDown}
                                    className="nav-item hover:bg-slate-100 rounded-md p-3 cursor-pointer"
                                >
                                    الحسابات
                                </p>

                                <div
                                    className={`drop w-40 p-5 rounded-md bg-white shadow-xl absolute top-2/3 mt-3 transition-all duration-300 ease-in-out transform ${isClicked
                                        ? "opacity-100 translate-y-0"
                                        : "opacity-0 -translate-y-4 pointer-events-none"
                                        }`}
                                >
                                    <ul>
                                        <li className="w-full">
                                            <div
                                                className="relative block w-full me-3 px-4 text-white bg-blue-400 rounded lg:bg-transparent lg:text-black lg:font-medium lg:p-0 dark:text-white"
                                                aria-current="page"
                                            >
                                                <p
                                                    onClick={handleDropDown2}
                                                    className="nav-item hover:bg-slate-100 rounded-md p-3 cursor-pointer"
                                                >
                                                    التعريفات
                                                </p>

                                                <div
                                                    className={`drop w-44 p-3 rounded-md bg-white shadow-lg bg-opacity-100 absolute -top-1 -right-[165%] mt-3 transition-all duration-300 ease-in-out transform ${isClicked2
                                                        ? "opacity-100 translate-x-0"
                                                        : "opacity-0 -translate-x-4 pointer-events-none"
                                                        }`}
                                                >
                                                    <ul>
                                                        <Link to={"/layout/accounting1"}>
                                                            <p className="nav-item hover:bg-slate-100 rounded-md p-3">الفترات المحاسبية</p>
                                                        </Link>
                                                        <li>
                                                            <p className="nav-item hover:bg-slate-100 rounded-md p-3">شجرة الحسابات</p>
                                                        </li>
                                                        <li>
                                                            <p className="nav-item hover:bg-slate-100 rounded-md p-3">شجرة مراكز التكلفة</p>
                                                        </li>
                                                    </ul>
                                                    <i className="absolute -left-1 top-0 fa-solid fa-chevron-left"></i>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="nav-item hover:bg-slate-100 rounded-md p-3">العمليات</li>
                                    </ul>
                                    <i className="absolute -top-2 fa-solid fa-chevron-up"></i>
                                </div>
                            </div>
                        </li>
                        <li className="w-full">
                            <a
                                href="#"
                                className="block w-full me-3 py-2 px-4 text-white bg-blue-400 rounded lg:bg-transparent lg:text-black lg:font-medium lg:p-0 dark:text-white"
                                aria-current="page"
                            >
                                <p className="nav-item hover:bg-slate-100 rounded-md p-3">الأسعار</p>
                            </a>
                        </li>
                        <li className="w-full">
                            <a
                                href="#"
                                className="block w-full me-3 py-2 px-4 text-white bg-blue-400 rounded lg:bg-transparent lg:text-black lg:font-medium lg:p-0 dark:text-white"
                                aria-current="page"
                            >
                                <p className="nav-item hover:bg-slate-100 rounded-md p-3">التواصل</p>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
