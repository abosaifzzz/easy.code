import React, { useEffect, useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
import logo from "../../assets/logo@2x.png";
import shape from "../../assets/graph.png";
import Loading from '../Loading/Loading';

export default function Layout2() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const [isSidebarVisible, setIsSidebarVisible] = useState(false);

    // Function to toggle sidebar visibility
    const toggleSidebar = () => {
        setIsSidebarVisible(!isSidebarVisible);
        console.log("clicked");

    };
    const [activeIndex, setActiveIndex] = useState(null); // State to track which menu is open
    const handleSubDrop = (index) => {
        // If the clicked item is already open, close it. Otherwise, open it.
        setActiveIndex(activeIndex === index ? null : index);
    };

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 1000); // 2 seconds delay for the loading spinner

        return () => clearTimeout(timer); // Cleanup the timer
    }, []);

    if (isLoading) {
        return <Loading />;
    }

    return (<>
        <div dir='rtl' className="acounting1 relative bg-slate-100 pb-10 flex min-h-screen  ">
            <div className="shape z-[0] absolute flex justify-center inset-0 items-center">
                <img className='w-2/5 opacity-25' src={shape} alt="" />

            </div>

            <div dir='rtl' className={`fixed-bar fixed top-0 left-0 right-0 h-full  z-40 transition-transform ${isSidebarVisible ? 'translate-x-0' : 'translate-x-full'}`}>
                <div className="x absolute z-20 top-7 left-7">
                    <button onClick={toggleSidebar} className='bg-blue-300 text-black rounded-full p-2 px-3'><i class="fa-solid fa-x"></i></button>


                </div>
                <div className="shape   absolute z-10 flex justify-center   top-24 left-0 items-center">
                    <img className='w-40 h-36 opacity-25' src={shape} alt="" />
                </div>
                <div className="shape   absolute z-10 flex justify-center  bottom-0 left-1/2 items-center">
                    <img className='w-60 h-52 opacity-25' src={shape} alt="" />

                </div>

                <div className="bars flex overflow-y-auto h-full bg-slate-100  z-30  shadow-xl w-full">
                    <div className='small-bar lg:w-1/4  w-full '>
                        <div className="logo flex justify-center my-4">
                            <img className='lg:w-1/3 md:w-1/6 w-32' src={logo} alt="" />

                        </div>
                        <div className="uls flex">
                            <ul className='ps-3'>
                                <li>
                                    {/* List items */}
                                    <Link className='font-semibold kufi' to={"/"}>
                                        <div className="kufi text-xl font-bold pt-3 p-2 cursor-pointer">

                                            <i className="fa-solid fa-house-chimney-user me-3  text-[#22ACE6]"></i>
                                            الصفحة الرئيسية


                                        </div>
                                    </Link>

                                </li>
                                <li>
                                    {/* List items */}
                                    <Link className='font-semibold kufi' to={"/"}>
                                        <div className="kufi text-xl font-bold pt-3 p-2 cursor-pointer">

                                            <i class="fa-regular fa-id-badge me-3 text-[#22ACE6]"></i>
                                            بروفايل الكود السهل


                                        </div>
                                    </Link>

                                </li>
                                <li>
                                    {/* List items */}
                                    <Link className='font-semibold kufi' to={"/"}>
                                        <div className="kufi text-xl font-bold pt-3 p-2 cursor-pointer">

                                            <i class="fa-solid fa-shapes me-3 text-[#22ACE6]"></i>
                                            البرامج


                                        </div>
                                    </Link>

                                </li>

                                <li>
                                    {/* List items */}
                                    <Link className='font-semibold kufi' to={"/"}>
                                        <div className="kufi text-xl font-bold pt-3 p-2 cursor-pointer">

                                            <i class="fa-brands fa-stack-overflow me-3 text-[#22ACE6]"></i>                                            الوظائف


                                        </div>
                                    </Link>

                                </li>



                            </ul>


                        </div>
                        <div className="line w-52 ms-5 mt-5  h-[0.9px] text-white bg-slate-950">s</div>
                        <div className="uls ">
                            <ul className='ps-3'>
                                <li>
                                    {/* List items */}
                                    <Link className='font-medium readex-pr' to={"/"}>
                                        <div className="readex-pro text-lg font-bold  ps-6 pt-3 cursor-pointer">


                                            المدونة
                                        </div>
                                    </Link>

                                </li>
                                <li>
                                    {/* List items */}
                                    <Link className='font-semibold readex-pro ' to={"/"}>
                                        <div className="readex-pro text-lg font-bold  ps-6 pt-3 cursor-pointer">


                                            مقالات حسابية

                                        </div>
                                    </Link>

                                </li>
                                <li>
                                    {/* List items */}
                                    <Link className='font-semibold readex-pro ' to={"/"}>
                                        <div className="readex-pro text-lg   ps-6 pt-3 cursor-pointer">


                                            الدعم الفني

                                        </div>
                                    </Link>

                                </li>





                            </ul>


                        </div>
                    </div>

                    <div className="big-bar   lg:w-3/4 lg:block hidden h-fit relative bg-slate-50   p-10 ">

                        <div className="cols z-[10]   flex gap-4">
                            <div className="column w-1/4">
                                <p className='kufi font-bold my-4 text-2xl'>تعريفات اساسية</p>
                                <ul>
                                    <li className="alexandria p-2 text-[17px] text-slate-700 font-medium">تعريف الشركات</li>
                                    <li className="alexandria p-2 text-[17px] text-slate-700 font-medium">تعريف الفروع</li>
                                    <li className="alexandria p-2 text-[17px] text-slate-700 font-medium">تعريف العملات</li>


                                </ul>
                            </div>
                            <div className="column w-1/4">
                                <p className='kufi font-bold my-4 text-2xl' >الصلاحيات</p>

                                <ul>
                                    <li className="alexandria p-2 text-[17px] text-slate-700 font-medium">مجموعات المستخدمين</li>
                                    <li className="alexandria p-2 text-[17px] text-slate-700 font-medium">تعريف المستخدمين</li>
                                    <li className="alexandria p-2 text-[17px] text-slate-700 font-medium">صلاحيات مجموعات المستخدمين</li>
                                    <li className="alexandria p-2 text-[17px] text-slate-700 font-medium">صلاحيات الترحيل و فك الترحيل</li>
                                    <li className="alexandria p-2 text-[17px] text-slate-700 font-medium">صلاحيات الصناديق و البنوك</li>


                                </ul>
                            </div>
                            <div className="column w-1/4">
                                <p className='kufi font-bold my-4 text-2xl' >الاعدادات</p>

                                <ul>
                                    <li className="alexandria p-2 text-[17px] text-slate-700 font-medium">اعدادات الترقيم</li>
                                    <li className="alexandria p-2 text-[17px] text-slate-700 font-medium">تعريف السندات </li>
                                    <li className="alexandria p-2 text-[17px] text-slate-700 font-medium">تعريف الفواتير </li>
                                    <li className="alexandria p-2 text-[17px] text-slate-700 font-medium">اعدادات الحسابات</li>


                                </ul>
                            </div>
                            <div className="column w-1/4">
                                <p className='kufi font-bold my-4 text-2xl' >الحسابات</p>

                                <ul>
                                    <li className="alexandria p-2 text-[17px] text-black font-semibold">التعريفات
                                        <ul>
                                            <Link to={"/layout/accounting1"}>
                                                <li onClick={toggleSidebar} className="alexandria p-2 text-[17px] text-slate-700 font-medium">الفترات المحاسبية </li>

                                            </Link>
                                            <Link to={"/layout/accounting2"}>
                                                <li onClick={toggleSidebar} className="alexandria p-2 text-[17px] text-slate-700 font-medium">شجرة الحسابات </li>

                                            </Link>
                                            <li className="alexandria p-2 text-[17px] text-slate-700 font-medium">شجرة مراكز التكلفة </li>


                                        </ul>
                                    </li>
                                    <li className="alexandria p-2 text-[17px] text-black font-semibold">العمليات
                                        <ul>

                                            <li className="alexandria p-2 text-[17px] text-slate-700 font-medium">الارصدة الافتتاحية للحسابات</li>
                                            <li className="alexandria p-2 text-[17px] text-slate-700 font-medium">قيود اليومية</li>

                                        </ul>
                                    </li>


                                </ul>
                            </div>


                        </div>
                        <div className="cols z-[10]   flex gap-4">
                            <div className="column w-1/4">
                                <p className='kufi font-bold my-4 text-2xl' >السندات</p>

                                <ul>

                                    <li className="alexandria p-2 text-[17px] text-black font-semibold">العمليات
                                        <ul>

                                            <li className="alexandria p-2 text-[17px] text-slate-800 font-medium">الصناديق
                                                <ul>

                                                    <li className="alexandria p-2 text-[17px] text-slate-700 font-medium">سند قبض نقدية</li>


                                                </ul>
                                            </li>

                                            <li className="alexandria p-2 text-[17px] text-slate-800 font-medium">البنوك
                                                <ul>

                                                    <li className="alexandria p-2 text-[17px] text-slate-700 font-medium">سند  ايداع بنكي</li>
                                                    <li className="alexandria p-2 text-[17px] text-slate-700 font-medium">سند سحبي بنكي </li>


                                                </ul>
                                            </li>
                                        </ul>
                                    </li>


                                </ul>
                            </div>
                            <div className="column w-1/4">
                                <p className='kufi font-bold my-4 text-2xl' >تقارير الحسابات</p>

                                <ul>
                                    <li className="alexandria p-2 text-[17px] text-slate-700 font-medium">كشف حساب  </li>
                                    <li className="alexandria p-2 text-[17px] text-slate-700 font-medium">حركة حساب </li>
                                    <li className="alexandria p-2 text-[17px] text-slate-700 font-medium">ارصدة الحسابات </li>
                                    <li className="alexandria p-2 text-[17px] text-slate-700 font-medium">ميزان المراجعة </li>
                                    <li className="alexandria p-2 text-[17px] text-slate-700 font-medium">قائمة الدخل</li>


                                </ul>
                            </div>
                            <div className="column w-1/4">
                                <p className='kufi font-bold my-4 text-2xl' >تقارير المخازن</p>

                                <ul>
                                    <li className="alexandria p-2 text-[17px] text-slate-700 font-medium">تقارير المبيعات</li>
                                    <li className="alexandria p-2 text-[17px] text-slate-700 font-medium">تقارير المشتريات  </li>
                                    <li className="alexandria p-2 text-[17px] text-slate-700 font-medium">العملاء  </li>
                                    <li className="alexandria p-2 text-[17px] text-slate-700 font-medium">الموردين </li>
                                    <li className="alexandria p-2 text-[17px] text-slate-700 font-medium">تقارير الاصناف  </li>
                                    <li className="alexandria p-2 text-[17px] text-slate-700 font-medium">الضرائب </li>


                                </ul>
                            </div>
                            <div className="column w-1/4">
                                <p className='kufi font-bold my-4 text-2xl' >شؤون الموظفيين</p>

                                <ul>
                                    <li className="alexandria p-2 text-[17px] text-slate-700 font-medium"> بيانات الموظفيين</li>
                                    <li className="alexandria p-2 text-[17px] text-slate-700 font-medium">تقارير انتدابات الموظفين  </li>
                                    <li className="alexandria p-2 text-[17px] text-slate-700 font-medium">تقرير جزاءات الموظفين  </li>



                                </ul>
                            </div>


                        </div>

                    </div>
                </div>




            </div>





            <div className="sidebar z-[5] flex flex-col shadow-xl items-center w-20 h-screen fixed  text-slate-600 bg-cyan-50 rounded">

                <button onClick={toggleSidebar} className="open-bar absolute rounded-e-xl text-black z-[5] top-[45%] right-20 p-4 "
                ><i class="fa-solid fa-bars"></i></button>


                <Link to={'/home'} className="flex items-center justify-center mt-3" href="#">
                    <img className='w-12 h-12' src={logo} alt="" />
                </Link>

                <div className="flex flex-col items-center mt-3 border-t border-gray-700">
                    <a className="flex  items-center justify-center w-16 h-16 mt-auto hover:bg-blue-500 hover:text-white"
                        href="#">
                        <svg className="w-6 h-6 stroke-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </a>
                    <Link to={"/home"} className="flex items-center justify-center w-12 h-12 mt-2 rounded hover:bg-blue-500 hover:text-white" href="#">
                        <svg className="w-6 h-6 stroke-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                        </svg>
                    </Link>
                    <a className="flex items-center justify-center w-12 h-12 mt-2 rounded hover:bg-blue-500 hover:text-white" href="#">
                        <svg className="w-6 h-6 stroke-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </a>
                    <a className="flex items-center justify-center w-12 h-12 mt-2 hover:text-gray-200 hover:bg-blue-500 rounded" href="#">
                        <svg className="w-6 h-6 stroke-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                    </a>


                </div>
                <div className="flex flex-col items-center mt-2 border-t border-gray-700">
                    <a className="flex items-center justify-center w-12 h-12 mt-2 rounded hover:bg-blue-500 hover:text-white" href="#">
                        <svg className="w-6 h-6 stroke-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                    </a>
                    <a className="flex items-center justify-center w-12 h-12 mt-2 rounded hover:bg-blue-500 hover:text-white" href="#">
                        <svg className="w-6 h-6 stroke-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                        </svg>
                    </a>
                    <a className="relative flex items-center justify-center w-12 h-12 mt-2 rounded hover:bg-blue-500 hover:text-white"
                        href="#">
                        <svg className="w-6 h-6 stroke-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                        </svg>
                        <span className="absolute top-0 left-0 w-2 h-2 mt-2 ml-2 bg-indigo-500 rounded-full"></span>
                    </a>
                </div>
                <a className="flex items-center justify-center w-12 h-12 mt-2 rounded hover:bg-blue-500 hover:text-white" href="#">
                    <svg className="w-6 h-6 stroke-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2" />
                    </svg>
                </a>
            </div>



            <div className="content z-[1]  w-full   ">
                <nav className='nav-2 w-[90%] fixed z-50 ms-24  shadow-md flex justify-between items-center  mt-2 p-5 rounded-xl '>

                    <div className='flex items-center'>
                        <img className="inline-block w-8 h-8 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""></img>
                        <p className='m-0 ms-2 kufi font-semibold'> <span className='text-blue-400 kufi font-semibold'>اهلاّ وسهلا ,</span>محمد ابوسيف  </p>


                    </div>

                    <div className="branch">


                        <div className="relative inline-block text-left">
                            <div>
                                <button
                                    type="button"
                                    className="inline-flex rounded-lg w-32 justify-center gap-x-1.5 bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                                    id="menu-button"
                                    aria-expanded={isOpen}
                                    aria-haspopup="true"
                                    onClick={toggleDropdown}
                                >
                                    الفرع
                                    <svg
                                        className={`-mr-1 h-5 w-5 text-gray-400 transform ${isOpen ? 'rotate-180' : 'rotate-0'}`}
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                        aria-hidden="true"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </button>
                            </div>

                            {isOpen && (
                                <div dir='rtl'
                                    className="branches absolute left-0 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                                    role="menu"
                                    aria-orientation="vertical"
                                    aria-labelledby="menu-button"
                                    tabIndex="-1"
                                >
                                    <div dir='rtl' className="py-1" role="none">
                                        <a
                                            href="#"
                                            className="block px-4 py-2 text-sm text-gray-700"
                                            role="menuitem"
                                            tabIndex="-1"
                                            id="menu-item-0"
                                        >
                                            انجاز للتخليص الجمركي
                                        </a>
                                        <a
                                            href="#"
                                            className="block px-4 py-2 text-sm text-gray-700"
                                            role="menuitem"
                                            tabIndex="-1"
                                            id="menu-item-1"
                                        >
                                            branch 1
                                        </a>
                                    </div>
                                </div>
                            )}
                        </div>

                    </div>



                </nav>
                <div className="outlet w-4/5 mx-auto">
                    <Outlet></Outlet>

                </div>

                <footer >
                    <div class="container mx-auto p-0 md:p-8 xl:px-0">
                        <div class="mx-auto max-w-7xl px-6  pt-16">
                            <div class="xl:grid xl:grid-cols-3 xl:gap-8">
                                <div class="space-y-4">
                                    <div>
                                        <a href="/">
                                            <div class="flex items-center space-x-2 text-2xl font-medium">
                                                <span>
                                                    <img src={logo} alt="AI Logo"
                                                        width="64" height="64" class="w-16"></img>
                                                </span>
                                            </div>

                                        </a>
                                    </div>
                                    <div class="max-w-md pr-16 text-md text-blue-900">نسعى جاهدين لتطوير برامج محاسبية مبتكرة, بتوظيف أحدث التقنيات والأدوات


                                    </div>
                                    <div class="flex space-x-2">
                                        <a href="" target="_blank" class="text-blue-600 hover:text-blue-600">
                                            <span class="sr-only">Linkedin</span><svg fill="currentColor" viewBox="0 0 24 24"
                                                class="h-6 w-6" aria-hidden="true">
                                                <path fill-rule="evenodd"
                                                    d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                                                    clip-rule="evenodd"></path>
                                            </svg>
                                        </a>
                                        <a href="" target="_blank" class="text-blue-600 hover:text-gray-200">
                                            <span class="sr-only">Twitter</span><svg fill="currentColor" viewBox="0 0 24 24"
                                                class="h-6 w-6" aria-hidden="true">
                                                <path
                                                    d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84">
                                                </path>
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                                <div class="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
                                    <div class="md:grid md:grid-cols-2 md:gap-8">
                                        <div>
                                            <h3 class="text-md font-semibold leading-6 text-blue-900"></h3>خريطة الموقع

                                            <ul role="list" class="mt-6 space-y-4">
                                                <li>
                                                    <a href="/aiplatform"
                                                        class="text-md leading-6 text-blue-950 hover:text-gray-50">برامج الكود السهل
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="/aialgorithms"
                                                        class="text-md leading-6 text-blue-950 hover:text-gray-50">برنامج الكلاود
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="/industryapplications"
                                                        class="text-md leading-6 text-blue-950 hover:text-gray-50">الفاينال بيزنس
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div class="mt-10 md:mt-0">
                                            <h3 class="text-md font-semibold leading-6 text-blue-950">مدونة الكود السهل
                                            </h3>
                                            <ul role="list" class="mt-6 space-y-4">
                                                <li>
                                                    <a href="/predictiveanalysis"
                                                        class="text-md leading-6 text-blue-950 hover:text-gray-50">
                                                        تكنولوجيا التخزين والتخزين السحابي
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="/customerexperience"
                                                        class="text-md leading-6 text-blue-950 hover:text-gray-50">
                                                        الفاتورة الإلكترونية والزكاة والدخل
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="/automation"
                                                        class="text-md leading-6 text-blue-950 hover:text-gray-50">عن القوائم المالية وتقارير المخازن
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="md:grid md:grid-cols-2 md:gap-8">
                                        <div>
                                            <h3 class="text-md font-semibold leading-6 text-blue-900">15,065,421
                                            </h3>
                                            <ul role="list" class="mt-6 space-y-4">
                                                <li>
                                                    <a href="/pricing"
                                                        class="text-md leading-6 text-blue-950 hover:text-gray-50">فاتورة إلكترونية

                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="/blog" class="text-md leading-6 text-blue-950 hover:text-gray-50">نقطة بيع

                                                    </a>
                                                </li>

                                            </ul>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div class="mt-16 border-t border-gray-400/30 pt-8 sm:mt-20 lg:mt-24">
                                <div class="text-md text-center text-blue-900">
                                    Copyright © 2024 .
                                    <span class="text-gray-50">♥</span> by Eng Mohamed Abo Saif
                                    <a rel="noopener" href="/">.
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>






            </div>








        </div >


    </>

    )
}
