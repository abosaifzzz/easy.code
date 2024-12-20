import React, { useRef, useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { width } from "@fortawesome/free-brands-svg-icons/fa42Group";
import pub from "../../assets/pub.png";
import box from "../../assets/box.png";
import inv from "../../assets/inv.png";
import custom from "../../assets/offi.png";

import exchange from "../../assets/coin.png";
import shepo from "../../assets/shepo.png";
import chart from "../../assets/chart.png";
import presentage from "../../assets/presentage.png";
import storagee from "../../assets/storagee.png";
import periods from "../../assets/periods.png";
import erp1 from "../../assets/erp1.png";
import sh2 from "../../assets/sh2.png";
import graph2 from "../../assets/graph2.png";


import logo from "../../assets/logo@2x.png";
import center2 from "../../assets/center2.png";
import res2 from "../../assets/res2.png";
import on from "../../assets/on.png";
import control from "../../assets/control.png";
import cor from "../../assets/cor.png";
import tech from "../../assets/tech.png";
import client1 from "../../assets/logos/1.png";
import client2 from "../../assets/logos/2.png";
import client3 from "../../assets/logos/3.png";
import client4 from "../../assets/logos/4.png";
import client5 from "../../assets/logos/5.png";
import client6 from "../../assets/logos/6.png";
import client7 from "../../assets/logos/7.png";
import client8 from "../../assets/logos/8.png";
import client9 from "../../assets/logos/9.png";
import client10 from "../../assets/logos/10.png";
import client11 from "../../assets/logos/11.png";
import client12 from "../../assets/logos/12.png";
import client13 from "../../assets/logos/13.png";
import client14 from "../../assets/logos/14.png";
import client15 from "../../assets/logos/15.png";








import installment from "../../assets/installment.png";
import shepa from "../../assets/shepa.png";
import tree from "../../assets/tree.png";


import ReactPlayer from "react-player";
import erp from "../../assets/erp.mp4";
import screen from "../../assets/scr.mp4";
import screen1 from "../../assets/screen.png";

import arrow from "../../assets/up.png";
import truee from "../../assets/true.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import man from "../../assets/man.png";
import workers2 from "../../assets/workers2.png";
import saudiman from "../../assets/saudiman2.png";
// import shp from "../../assets/shp.png";
import shapes from "../../assets/shapes.png";

import devices from "../../assets/devices.png";
// import hours from "../../assets/24.png"
// import call from "../../team1.png"
import call from "../../assets/team1.png";
import online from "../../assets/online.png";
import sales from "../../assets/sal.png";
import customer from "../../assets/clie.png";
import truck from "../../assets/suppp.png";
import warehouse from "../../assets/cen.png";
import connect from "../../assets/conn.png";
import shape from "../../assets/shape.png";
import shape3 from "../../assets/shape3.png";
import shape4 from "../../assets/shape4.png";
import bl from "../../assets/bl.png";
export default function Home() {
    const [isOpen, setIsOpen] = useState(false);
    const [hasAnimated, setHasAnimated] = useState(false);
    const playerRef = useRef(null);
    const playerRef2 = useRef(null); // Second video ref
    const programsRef = useRef(null)
    const [isInView, setIsInView] = useState(false);
    const [isInView2, setIsInView2] = useState(false); // Second video state
    const [activeTab, setActiveTab] = useState("final-bussiness");
    const [activeQuestion, setActiveQuestion] = useState("subscribe");

    const tabClasses = (tabName) =>
        `cursor-pointer py-2 px-4   md:text-2xl text-xl cairo font-medium ${activeTab === tabName
            ? "border-b-2 border-[#20617c]"
            : "text-[#20617c] bg-white"
        } `;
    const questionClasses = (questionName) =>
        `cursor-pointer py-2 px-2   md:text-xl text-[1rem] messiri font-[500] ${activeQuestion === questionName
            ? "border-b-2 border-[#20617c]"
            : "text-[#20617c] "
        } `;

    useEffect(() => {
        const timer = setTimeout(() => {
            setHasAnimated(true);
        }, 5500); // Adjust duration based on animation timing

        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsInView(entry.isIntersecting);
            },
            {
                threshold: 0.5, // Video is considered in view if 50% of it is visible
            }
        );
        const observer2 = new IntersectionObserver(
            ([entry]) => {
                setIsInView2(entry.isIntersecting);
            },
            {
                threshold: 0.5, // Video 2 is considered in view if 50% is visible
            }
        );

        if (playerRef.current) {
            observer.observe(playerRef.current);
        }
        if (playerRef2.current) {
            observer2.observe(playerRef2.current);
        }

        return () => {
            if (playerRef.current) {
                observer.unobserve(playerRef.current);
            }
            if (playerRef2.current) {
                observer2.unobserve(playerRef2.current);
            }
        };
    }, []);

    const toggleChat = () => {
        setIsOpen(!isOpen);
    };

    const settings = {
        dots: false,
        arrows: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 1500,
        speed: 6000,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };
    const slidesData = [
        { title: "الحسابات العامة", imgSrc: pub },
        { title: "الجرد المخزني", imgSrc: box },
        { title: "الفاتورة الألكترونية", imgSrc: inv },
        { title: "التخليص الجمركي", imgSrc: custom },
        { title: "تعدد العملات", imgSrc: exchange },
        { title: "الربط مع هيئة الزكاة", imgSrc: connect },
        { title: "مراكز التكلفة", imgSrc: warehouse },
        { title: "العملاء", imgSrc: customer },
        { title: "المبيعات", imgSrc: sales },
        { title: "الموردين", imgSrc: truck }
    ];

    return (
        <div>
            <div className="hero  relative">
                <div className="background  relative text flex flex-col items-center">
                    <ul>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>

                    {/* <div className="earning1 -rotate-12 absolute rounded-lg  flex  justify-center items-center   left-28  lg:left-64 top-64 lg:top-1/2 mt-9 w-56 h-48 ">
                        <img className="w-7 h-8 me-2" src={arrow} alt="" />{" "}
                        <span className=" rakkas-regular lg:text-[2.3rem] text-[2rem] text-blue-950">ارباح اليوم </span>
                    </div>
                    <div className="earning2 absolute rounded-lg  flex  justify-center items-center  right-0   lg:right-96 bottom-1/3 lg:bottom-52 mt-9 text-sm w-56 lg:h-48 ">
                        <span className=" rakkas-regular lg:text-[2.3rem] text-[1.6rem] text-blue-950">
                            % معدل الانتاج ۱۲۰{" "}
                        </span>
                    </div>

                    <div className="earning4 -rotate-2 absolute rounded-lg  flex  justify-center items-center  left-0   lg:left-1/3 lg:top-56 top-72 mt-9 w-56 h-48 ">
                        <img className="w-7 h-8 me-2" src={truee} alt="" />{" "}
                        <span className=" rakkas-regular lg:text-[2.3rem] text-[1.6rem] text-blue-950">تقارير صرف </span>
                    </div> */}

                    <div
                        className={`flex flex-col justify-center pt-40 ${hasAnimated ? "" : "fade-in-scale"
                            }`}
                    >
                        <p className="lg:mb-6 m-0 text-white  lg:text-5xl md:text-4xl text-[0.9rem] lg:font-normal font-bold px-3 text-center hala">
                            ندير عملياتك، نرتب بياناتك، ونزيد إنتاجيتك
                        </p>
                        <h1 className="easy text-center text-white alexandria lg:text-5xl md:text-4xl text-[1.3rem] lg:font-normal font-semibold text-2xl">
                            ! بسهولة وكفاءة
                        </h1>
                        <div className="start-button w-full flex justify-center ">
                            <button dir="rtl" className="start text-center p-2 px-4" ><span className="cairo text-lg">أبدأ الأستخدام </span></button>

                        </div>


                    </div>
                    {/* <div className="card-shape z-30 absolute top-2/3 right-64">
                        <div className="circle w-1/2 h-1/2 relative flex justify-center items-center bg-white shadow-md z-10">

                            <span className="z-10 text-4xl font-semibold">12</span>
                            <div className="circles absolute top-4 right-5 flex gap-1">
                                <div className="ci w-7 h-7 rounded-full flex justify-center items-center text-slate-400  bg-cyan-200"><i className="fa-solid fa-share"></i></div>
                                <div className="ci w-7 h-7 rounded-full flex justify-center items-center text-slate-400  bg-cyan-300"><i className="fa-solid fa-share rotate-180"></i></div>

                            </div>
                        </div>
                        <div className="circle w-1/2 h-1/2 z-10"> <img className="" src={storagee} /> </div>
                        <div className="card-shape-inner flex justify-center items-center">
                            <img className="w-5/6" src={chart} alt="" />


                        </div>
                    </div>
                    <div dir="rtl" className="ag-courses_item z-10 2xl:w-1/5 xl:w-1/6 rounded-lg absolute top-1/3 right-2/3">
                        <a className="ag-courses-item_link" href="#">
                            <div className="ag-courses-item_bg"></div>
                            <div className="ag-courses-item_title">
                                <div className="first flex justify-between items-center "><p className="cairo 2xl:text-2xl 2xl:text-red-500  xl:text-xl xl:text-green-400 lg:text-base font-semibold">المبلغ الأجمالي:</p>

                                    <div className="arr w-9 h-9 rounded-full flex justify-center items-center border">
                                        <i className="fa-solid fa-angle-left"></i>
                                    </div>
                                </div>

                            </div>
                            <div className="ag-courses-item_date-box">
                                <span className="cairo 2xl:text-2xl text-blue-100   ">SAR </span><span className="cairo text-3xl font-semibold " >680.</span><span className="cairo text-2xl text-blue-100">000 </span>
                            </div>
                        </a>
                    </div> */}

                    <div className="laptop   absolute 2xl:-bottom-40 xl:-bottom-40 lg:-bottom-40 md:-bottom-60 sm:-bottom-64 -bottom-52 ">
                        <img className="2xl:hidden xl:hidden lg:hidden md:block sm:block" src={periods} alt="" />
                        <div className="screen 2xl:block xl:block lg:block md:hidden  sm:hidden hidden 2xl:w-[890px] 2xl:h-[600px] xl:w-[1050px] xl:h-[600px] lg:w-[1050px] lg:h-[700px] md:w-[780px] md:h-[700px] w-0 h-0">
                            {/* <div className="header"><img src={screen} alt="" /></div> */}
                            <img className="rounded-md" src={erp1} alt="" />

                        </div>
                        <div className="keyboard"></div>
                    </div>

                    {/* <div className="img w-4/5 absolute -bottom-1/2"><img src={screen1} alt="" /></div> */}
                    {/* <div className="img flex justify-center absolute bottom-0 animate-fromBottom">
                        <img className="lg:w-11/12  w-96 h-full" src={saudiman} alt="" />
                    </div> */}
                </div>
            </div>

            <div className="fixed z-10 bottom-5 right-4 flex flex-col items-end">
                <div
                    className={`chat-container ${isOpen ? "open" : "closed"
                        } flex flex-col items-end transition-all duration-500`}
                >
                    <div
                        dir="rtl"
                        className="chat flex-1 pb-5 w-80 bg-white shadow-xl rounded-lg relative overflow-hidden"
                    >
                        <div className="bg-white border rounded flex items-center justify-center z-10">
                            <img
                                className="w-11 h-11 rounded-full ring-2 ring-white"
                                src="https://media.istockphoto.com/id/498529071/photo/arabian-business-man-working-on-laptop-at-his-office.jpg?s=612x612&w=0&k=20&c=Gp35R-tLgCMVP8D-bSDnulfEdWJRWlleqC7ThSruoUg="
                                alt=""
                            />
                            <p className="bg-gray-600 font-medium p-2 mt-8 ms-2 text-white kufi rounded-lg">
                                أهلا و سهلا ,{" "}
                                <span className="text-blue-300 kufi font-medium text-lg">
                                    محمد
                                </span>
                            </p>
                        </div>
                        <div className="bg-whiteborder border-t-0 rounded-t-none rounded-b flex flex-col space-y-2">
                            <div className="px-6 py-4 flex flex-col items-start gap-3">
                                <div className="font-semibold">أبدأ المحادثة معنا الان</div>
                                <div className="flex gap-11">
                                    <div className="flex flex-row -space-x-8">
                                        <img
                                            className="w-16 h-16 rounded-full border-2 border-white"
                                            src="https://media.istockphoto.com/id/1401473260/photo/late-20s-saudi-man-using-phone-in-desert.jpg?s=612x612&w=0&k=20&c=YMV91geDxGWw6vwyHKs86v-g3F02_lQPcPRHZuwdMdo="
                                            alt=""
                                        />
                                        <img
                                            className="w-16 h-16 rounded-full border-2 border-white"
                                            src="https://media.istockphoto.com/id/667834844/photo/dedication-and-technology-essential-for-getting-her-tasks-done.jpg?s=612x612&w=0&k=20&c=nhNrU--Fz-C5jQMmSV5LU_yra9AQ63nD72OLwK1txRo="
                                            alt=""
                                        />
                                    </div>
                                    <div className="flex flex-col justify-center">
                                        <div className="text-gray-400">نشط منذ 10 دقائق</div>
                                        <div className="flex flex-row items-center gap-1 font-semibold">
                                            <svg
                                                className="w-4 h-4 text-blue-700"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                                ></path>
                                            </svg>
                                            A few minutes
                                        </div>
                                    </div>
                                </div>
                                <button
                                    type="button"
                                    className="bg-blue-700 rounded-full text-white flex flex-row gap-2 py-3 px-5"
                                >
                                    ارسل لنا رسالة الأن
                                    <svg
                                        className="w-5 h-5 transform rotate-90"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                                        ></path>
                                    </svg>
                                </button>
                            </div>
                        </div>
                        <div className="whatsapp text-center">
                            <p className="kufi my-2 font-medium">
                                او تواصل معنا عبر الواتساب
                            </p>
                            <button className="bg-green-500 p-2 px-4 rounded-xl text-white kufi font-semibold">
                                <i className="fa-brands fa-whatsapp"></i> ارسل الأن
                            </button>
                        </div>
                    </div>
                </div>

                <div
                    className="float-button bg-[#339ecc]  rounded-full w-16 h-16 m-4 flex items-center justify-center cursor-pointer shadow-xl"
                    onClick={toggleChat}
                >
                    <svg
                        className={`w-6 h-6 text-white transform transition-transform duration-500 ${isOpen ? "rotate-180" : ""
                            }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M19 9l-7 7-7-7"
                        ></path>
                    </svg>
                </div>
            </div>
            <div dir="rtl" className="second pt-6 bg-gray-100">
                <p className="md:text-4xl sm:text-3xl text-lg text-gray-700  w-full flex justify-center font-bold cairo">
                    {" "}
                    كل هذا واكثر
                    <span className="cairo md:text-4xl sm:text-3xl text-lg  ps-2 text-[#346dab] font-bold">
                        {" "}
                        بين يديك{" "}
                    </span>
                </p>
                <p className="cairo text-9xl w-full flex justify-center">
                    <span className="h-1.5 w-10 bg-black me-1 rounded-lg">.</span>{" "}
                    <span className="h-1.5 w-2 bg-[#346dab] rounded-lg ms-1">.</span>
                    <span className="h-1.5 w-2 bg-[#346dab] rounded-lg ms-1">
                        .
                    </span>{" "}
                    <span className="h-1.5 w-2 bg-[#346dab] rounded-lg ms-1">.</span>{" "}
                </p>

                <div className="slider-container py-7">
                    <Slider {...settings}>
                        {slidesData.map((slide, index) => (
                            <div key={index} className="flex justify-center h-64 items-center gap-3">
                                <div className="slide h-full flex justify-center items-center rounded-lg">
                                    <div className="slide-card shadow-lg w-2/3 h-4/5 flex flex-col justify-center rounded-lg items-center bg-white">
                                        <div className="icon-slide p-4 w-20 h-20 bg-slate-200 bg-opacity-60 rounded-full">
                                            <img className="w-full" src={slide.imgSrc} alt={slide.title} />
                                        </div>
                                        <p className="kufi font-bold text-lg">{slide.title}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
                <div className="browse-our-programs flex justify-center">
                    <button onClick={() => {
                        programsRef.current?.scrollIntoView({
                            behavior: 'smooth'

                        })

                    }} className=" bg-[#339ecc] text-white p-2 px-4 text-lg kufi font-medium rounded-md my-5">
                        تصفح برامجنا
                    </button>
                </div>
            </div>
            <div className="third relative overflow-hidden  bg-white lg:p-8 p-2">
                <div className="bg-shape z-[1] flex justify-end  absolute opacity-15 right-0 left-0   "><img className="w-4/6" src={sh2} alt="" /></div>
                <div className="what-erp relative z-[2]  lg:flex p-8">
                    <div className="first-part lg:w-1/2" ref={playerRef}>
                        <ReactPlayer
                            url={erp}
                            width="100%"
                            height="100%"
                            playing={isInView}
                            loop={true}
                            controls={false}
                            playsinline={true}
                            config={{
                                file: {
                                    attributes: {
                                        controlsList: "nodownload",
                                        playsInline: true,
                                    },
                                },
                            }}
                            style={{ pointerEvents: "none" }}
                        />
                    </div>
                    <div
                        dir="rtl"
                        className="second-part mt-5 lg:mt-0 lg:mx-5 mx-1 lg:w-1/2 "
                    >
                        <p className="m-0 lg:text-5xl text-3xl mt-2 cairo font-semibold text-[#339ecc]">
                            نظام ERP متكامل{" "}
                        </p>
                        <p className="m-0 lg:text-5xl text-3xl mt-4 cairo font-semibold ">
                            {" "}
                            لأدارة جميع أعمالك
                        </p>
                        <div className="line w-52 ms-2 mt-10  h-1 text-white bg-[#339ecc]">
                            s
                        </div>

                        <p className="lg:text-xl text-lg leading-8 m-0 mt-4 font-[300] alexandria">
                            تعد برامج الكود السهل المحاسبية برامج متكاملة تعمل علي توفير
                            معاملات الامان لتكن في راحه تامة & حتى يمكنك الإعتماد علينا كليا.
                        </p>
                        <div className="labels flex md:gap-4 gap-0.5 mt-4">
                            <p className="m-0 text-sm cairo font-[500] ">
                                <span>
                                    <i className="bg-[#627886] text-white p-1 rounded-full fa-solid fa-check"></i>
                                </span>{" "}
                                تجربة مجانية
                            </p>
                            <p className="m-0 text-sm cairo font-[500] ">
                                <span>
                                    <i className="bg-[#627886] text-white p-1 rounded-full fa-solid fa-check"></i>
                                </span>{" "}
                                أمن
                            </p>
                            <p className="m-0 text-sm cairo font-[500] ">
                                <span>
                                    <i className="bg-[#627886] text-white p-1 rounded-full fa-solid fa-check"></i>
                                </span>{" "}
                                سريع{" "}
                            </p>
                            <p className="m-0 text-sm cairo font-[500] ">
                                <span>
                                    <i className="bg-[#627886] text-white p-1 rounded-full fa-solid fa-check"></i>
                                </span>{" "}
                                زكي
                            </p>
                        </div>
                        <button className="bg-[#339ecc] p-2 px-4 text-white rounded-md mt-16">
                            ابدأ الأستخدام الأن
                        </button>
                    </div>
                </div>
            </div>
            <div dir="rtl" className="fourth overflow-hidden relative px-20 py-7 bg-gray-100">

                <div className="shapes  absolute md:-right-60 -right-32   w-1/4 bottom-0">
                    <img className="w-44 " src={shapes} alt="" />
                </div>
                <div className="shapes  absolute md:-left-16 left-0  w-1/4 top-1/6">
                    <img className="w-44" src={shapes} alt="" />
                </div>
                {/* <p className="m-0 py-6 text-center lg:text-4xl md:text-3xl text-2xl font-semibold cairo text-[#339ecc] ">
                    لماذا حلولنا البرمجية هي الأفضل؟
                </p>

                <div className="why-our-programs my-9 lg:flex md:flex-row flex flex-col md:gap-3   md:justify-evenly items-center w-full">
                    <div className="reason lg:mx-12  mt-3 flex flex-col  items-center text-gray-700 lg:w-1/4 md:w-1/4 w-2/3  bg-white rounded-xl shadow-lg">
                        <img className="lg:w-36 w-24 h-24 lg:h-36" src={call} alt="" />
                        <p className="text-sm cairo font-medium text-blue-400 m-0 mt-3">
                            الدعم الفني{" "}
                        </p>
                        <p className="lg:text-2xl md:text-lg text-xl cairo font-semibold m-0 mt-2 text-blue-950 ">
                            {" "}
                            درع الدعم الفني{" "}
                        </p>
                        <p className="lg:text-[1.1rem] md:text-[0.8rem] text-sm font-medium mx-2  leading-7 text-center kufi md:font-[350]">
                            فمن خلال فريق من المحترفين نتابع سير اعمال عملائنا ونوفر الدعم
                            الفنيي فائق الجودة وفريق قادر علي التواصل لفهم استفساراتكم وحل
                            جميع العقبات.
                        </p>
                    </div>
                    <div className="reason lg:mx-12  mt-3 flex flex-col  items-center text-gray-700 lg:w-1/4 md:w-1/4 w-2/3  bg-white rounded-xl shadow-lg">
                        <img className="lg:w-36 w-24 h-24 lg:h-36" src={devices} alt="" />
                        <p className="text-sm cairo font-medium text-blue-400 m-0 mt-3">
                            درع الدعم الفني{" "}
                        </p>
                        <p className="lg:text-2xl md:text-lg text-xl cairo font-semibold m-0 mt-2 text-blue-950 ">
                            مناسب لجميع الأجهزة
                        </p>
                        <p className="lg:text-[1.1rem] md:text-[0.8rem] text-sm font-medium mx-2  leading-7 text-center kufi md:font-[350]">
                            حلول الكود السهل البرمجية تواكب احدث التطورات اولا باول فنحن نوفر
                            تجربة سلسله لعملائنا ويمكنهم متابعة اعمالهم من خلال الجوال واللاب
                            توب
                        </p>
                    </div>
                    <div className="reason lg:mx-12  mt-3 flex flex-col  items-center text-gray-700 lg:w-1/4 md:w-1/4 w-2/3  bg-white rounded-xl shadow-lg">
                        <img className="lg:w-36 w-24 h-24 lg:h-36" src={online} alt="" />
                        <p className="text-sm cairo font-medium text-blue-400 m-0 mt-3">
                            يعمل اونلاين{" "}
                        </p>
                        <p className="lg:text-2xl md:text-lg text-xl cairo font-semibold m-0 mt-2 text-blue-950 ">
                            تواصل دائم
                        </p>
                        <p className="lg:text-[1.1rem] md:text-[0.8rem] text-sm font-medium mx-2  leading-7 text-center kufi md:font-[350]">
                            ميزات الكود السهل السحابية تتيح لعملائها التواصل مع بياناتهم
                            والتفاعل معها طوال الوقت لانها متوفرة اونلاين فتمكنهم من استخدامها
                            24 ساعة طوال ايام الاسبوع
                        </p>
                    </div>
                </div> */}

                <p className="md:text-4xl sm:text-3xl text-lg text-gray-700  w-full flex justify-center font-bold cairo">
                    {" "}

                    لماذا حلولنا البرمجية
                    <span className="cairo md:text-4xl sm:text-3xl text-lg  ps-2 text-[#346dab] font-bold">
                        {" "}
                        هي الأفضل؟
                    </span>
                </p>
                <p className="cairo text-9xl w-full flex justify-center">
                    <span className="h-1.5 w-10 bg-black me-1 rounded-lg">.</span>{" "}
                    <span className="h-1.5 w-2 bg-[#346dab] rounded-lg ms-1">.</span>
                    <span className="h-1.5 w-2 bg-[#346dab] rounded-lg ms-1">
                        .
                    </span>{" "}
                    <span className="h-1.5 w-2 bg-[#346dab] rounded-lg ms-1">.</span>{" "}
                </p>

                <div className="first-row flex lg:flex-row flex-col gap-3">
                    <div className="reason1  lg:w-1/3 w-full  lg:h-96  flex items-end  ">
                        <div className="data h-fit lg:bg-transparent py-3 bg-white lg:shadow-none shadow-lg rounded-md  px-9 flex flex-col justify-center items-center w-full lg:h-60">

                            <img className=" w-24 h-24  " src={center2} alt="" />
                            <p className="text-sm cairo font-medium text-blue-400 m-0 mt-3">
                                الدعم الفني{" "}
                            </p>
                            <p className=" md:text-lg text-xl cairo font-semibold m-0  text-blue-950 ">
                                {" "}
                                درع الدعم الفني{" "}
                            </p>
                            <p className=" md:text-[1rem] m-0 font-[400] text-gray-700  almarai mx-2  leading-7 text-center kufi ">
                                فمن خلال فريق من المحترفين نتابع سير اعمال عملائنا ونوفر الدعم
                                الفني فائق الجودة وفريق قادر علي التواصل لفهم استفساراتكم وحلها
                            </p>

                        </div>
                    </div>
                    <div className="reason1  lg:w-1/3 w-full  lg:h-96  flex items-center  ">
                        <div className="data h-fit lg:bg-transparent py-3 bg-white lg:shadow-none shadow-lg rounded-md  px-9 flex flex-col justify-center items-center w-full lg:h-60">

                            <img className=" w-24 h-24 " src={res2} alt="" />
                            <p className="text-sm cairo font-medium text-blue-400 m-0 mt-3">
                                متواجب مع الجميع{" "}
                            </p>
                            <p className=" md:text-lg text-xl cairo font-semibold m-0  text-blue-950 ">
                                {" "}
                                مناسب لجميع الأجهزة
                            </p>
                            <p className=" md:text-[1rem] m-0 font-[400] text-gray-700  almarai mx-2  leading-7 text-center kufi ">
                                حلول الكود السهل البرمجية تواكب احدث التطورات اولا باول فنحن نوفر
                                تجربة سلسله لعملائنا ويمكنهم متابعة اعمالهم من خلال الجوال واللاب
                                توب
                            </p>

                        </div>
                    </div>
                    <div className="reason1  lg:w-1/3 w-full  lg:h-96  flex items-end  ">
                        <div className="data h-fit lg:bg-transparent py-3 bg-white lg:shadow-none shadow-lg rounded-md  px-9 flex flex-col justify-center items-center w-full lg:h-60">

                            <img className=" w-24 h-24 " src={on} alt="" />
                            <p className="text-sm cairo font-medium text-blue-400 m-0 mt-3">
                                يعمل اونلاين{" "}
                            </p>
                            <p className=" md:text-lg text-xl cairo font-semibold m-0  text-blue-950 ">
                                {" "}
                                تواصل دائم
                            </p>
                            <p className=" md:text-[1rem] m-0 font-[400] text-gray-700  almarai mx-2  leading-7 text-center kufi ">
                                ميزات الكود السهل السحابية تتيح لعملائها التواصل مع بياناتهم
                                والتفاعل معها طوال الوقت لانها متوفرة اونلاين فتمكنهم من استخدامها
                                24 ساعة طوال ايام الاسبوع
                            </p>

                        </div>
                    </div>
                </div>
                <div className="second-row relative  flex my-3 rounded-md lg:border-0 border-blue-300 border-4 lg:flex-row justify-center ">
                    <div className="shape absolute -top-32 lg:flex hidden justify-center  z-[1] opacity-45 "><img className="w-11/12 " src={shepa} alt="" /></div>

                    <div className="comp-logo  w-1/3 flex justify-center items-center h-56  ">
                        <img src={logo} className=" z-[2]" alt="" />

                    </div>
                </div>
                <div className="third-row flex lg:flex-row flex-col gap-3">
                    <div className="reason1  lg:w-1/3 w-full  lg:h-96  flex items-start  ">
                        <div className="data h-fit lg:bg-transparent py-3 bg-white lg:shadow-none shadow-lg rounded-md  px-9 flex flex-col justify-center items-center w-full lg:h-60">

                            <img className=" w-24 h-24 " src={cor} alt="" />
                            <p className="text-sm cairo font-medium text-blue-400 m-0 mt-3">
                                تعاون مستمر
                            </p>
                            <p className=" md:text-lg text-xl cairo font-semibold m-0  text-blue-950 ">
                                {" "}
                                تحسين التعاون                            </p>
                            <p className=" md:text-[1rem] m-0 font-[400] text-gray-700  almarai mx-2  leading-7 text-center kufi ">
                                بفضل التكامل المركزي للبيانات والعمليات، تسهم أنظمة ERP في تعزيز التعاون بين الأقسام المتنوعة، مما يضمن توافر المعلومات نفسها للجميع، ويساعدهم على العمل معًا بفعالية أكبر.
                            </p>

                        </div>
                    </div>
                    <div className="reason1  lg:w-1/3 w-full  lg:h-96  flex items-center  ">
                        <div className="data h-fit lg:bg-transparent py-3 bg-white lg:shadow-none shadow-lg rounded-md  px-9 flex flex-col justify-center items-center w-full lg:h-60">

                            <img className=" w-24 h-24 " src={tech} alt="" />
                            <p className="text-sm cairo font-medium text-blue-400 m-0 mt-3">
                                رقمنة الشركات                            </p>
                            <p className=" md:text-lg text-xl cairo font-semibold m-0  text-blue-950 ">
                                {" "}
                                التحول الرقمي
                            </p>
                            <p className=" md:text-[1rem] m-0 font-[400] text-gray-700  almarai mx-2  leading-7 text-center kufi ">
                                يُعتبر التحول الرقمي من أبرز المبادرات التي تبنتها العديد من المؤسسات أو تعمل على تنفيذها، وربما يكون الأهم بينها.

                            </p>

                        </div>
                    </div>
                    <div className="reason1  lg:w-1/3 w-full  lg:h-96  flex items-start  ">
                        <div className="data h-fit lg:bg-transparent py-3 bg-white lg:shadow-none shadow-lg rounded-md  px-9 flex flex-col justify-center items-center w-full lg:h-60">

                            <img className=" w-24 h-24 " src={control} alt="" />
                            <p className="text-sm cairo font-medium text-blue-400 m-0 mt-3">
                                التحكم الكامل                            </p>
                            <p className=" md:text-lg text-xl cairo font-semibold m-0  text-blue-950 ">
                                {" "}
                                حساب الادمن{" "}
                            </p>
                            <p className=" md:text-[1rem] m-0 font-[400] text-gray-700  almarai mx-2  leading-7 text-center kufi ">
                                كافة الصلاحيات بشكل مطلق يمكنك فتحها ومنعها والتحكم بمنتهي السلاسه والدقة ايضا.


                            </p>

                        </div>
                    </div>
                </div>




            </div>
            <div dir="rtl" className="fifth relative">
                <div className="shape absolute left-96 top-14 z-[-1] opacity-30 "><img className="" src={shepa} alt="" /></div>
                <p className="md:text-4xl sm:text-3xl text-lg text-gray-700  w-full flex justify-center font-bold cairo">
                    {" "}
                    من
                    <span className="cairo md:text-4xl sm:text-3xl text-lg  ps-2 text-[#346dab] font-bold">
                        {" "}
                        نحن؟
                    </span>
                </p>
                <p className="cairo text-9xl w-full flex justify-center">
                    <span className="h-1.5 w-10 bg-black me-1 rounded-lg">.</span>{" "}
                    <span className="h-1.5 w-2 bg-[#346dab] rounded-lg ms-1">.</span>
                    <span className="h-1.5 w-2 bg-[#346dab] rounded-lg ms-1">
                        .
                    </span>{" "}
                    <span className="h-1.5 w-2 bg-[#346dab] rounded-lg ms-1">.</span>{" "}
                </p>


                <div className="we w-full md:flex md:p-8 px-8  pb-16 ">


                    <div className="right md:w-1/2" ref={playerRef2}>
                        <ReactPlayer
                            url={screen}
                            width="100%"
                            height="100%"
                            playing={isInView2}
                            loop={true}
                            controls={false}
                            playsinline={true}
                            config={{
                                file: {
                                    attributes: {
                                        controlsList: "nodownload",
                                        playsInline: true,
                                    },
                                },
                            }}
                            style={{ pointerEvents: "none" }}
                        />
                    </div>
                    <div dir="rtl" className="left md:w-1/2 md:p-5   ">
                        <p className="cairo font-bold text-2xl">عن " <span className="text-[#339ecc] cairo font-bold text-2xl">ايزي كود</span> "</p>
                        <p className="kufi md:text-[1.1rem] text-sm leading-7 font-medium md:w-5/6">شركة "إيزي كود" هي شركة متخصصة في تقديم حلول برمجية متكاملة وابتكارية تهدف إلى تبسيط العمليات التجارية وتحسين الكفاءة الرقمية للشركات. تسعى "إيزي كود" إلى تطوير تطبيقات برمجية تلبي احتياجات العملاء عبر توفير حلول ذكية ومرنة تساعد على تعزيز الأداء وتحقيق أهداف النمو. تتضمن خدمات الشركة تصميم وتطوير مواقع الويب، تطبيقات الهواتف الذكية، أنظمة تخطيط موارد المؤسسات (ERP)، وغيرها من الأنظمة المخصصة التي تسهم في التحول الرقمي للمؤسسات بمختلف قطاعاتها. تعتمد الشركة على أحدث التقنيات والمعايير العالمية لضمان جودة وفعالية الحلول المقدمة.</p>
                        <button className="p-2 px-6 bg-[#339ecc] text-white rounded-md cairo font-medium">


                            <Link to={"/about"} className="text-white cairo text-lg">
                                اعرف أكثر
                            </Link>


                        </button>
                    </div>

                </div>
            </div>

            <div className="fifth p-7 pb-14 flex gap-6 bg-[#1a4e64]">
                <div className="why-easy md:w-2/3 w-full">
                    <p
                        dir="rtl"
                        className=" md:text-[2.8rem] text-2xl pt-5 text-white cairo font-semibold"
                    >
                        لماذا سأختار ايزي كود ؟
                    </p>
                    <p
                        dir="rtl"
                        className="text-gray-100 font-[300] alexandria md:text-lg text-[1rem] leading-7 lg:pe-72 md:pe-14 pt-5"
                    >
                        ﻣﺆﺳﺴــﺔ اﻟﻜﻮد اﻟﺴــﻬﻞ ﻟﺘﻘﻨﻴﻪ ﻧﻈﻢ اﻟﻤﻌﻠﻮﻣﺎت ﺗﺄﺳﺴــﺖ ﻓﻰ 2004 وﻫــﻲ
                        ﻣــﻦ اﻟﻤﺆﺳﺴــﺎت اﻟﻤﺘﺨﺼﺼــﺔ ﻓــﻰ ﺗﺼﻤﻴــﻢ و اعداد أﻧﻈﻤــﺔ وﺑﺮاﻣــﺞ
                        اﻟﺤﺎﺳــﺐ اﻵﻟــﻰ وﺗﻌﺘﺒــﺮ ﻣــﻦ اﻟﻤﺆﺳﺴــﺎت اﻟﻤﺘﻤﻴــﺰة ﻓــﻰ ﻫــﺬا
                        اﻟﻤﺠــﺎل ﻟﻘﺪرﺗﻬــﺎ ﻋﻠــﻰ ﺗﻄﺒﻴــﻖ اﻟــﺪوﺭﺎﺗ اﻟﻤﺴــﺘﻨﺪﻳﺔ ﻋﻠـــﻰ ﻣﺨﺘﻠﻒ
                        دﺭﺟﺎت اﻟﺼﻌﻮﺑﺔ وﺍﻟﺘﻌﻘﻴﺪ.
                    </p>

                    <div
                        dir="rtl"
                        className="message md:flex-row flex flex-col items-center gap-3"
                    >
                        <div className="view lg:w-1/3 w-full  rounded-xl lg:p-8 md:p-4 p-5 border border-blue-400 ">
                            <i className="lg:text-5xl text-3xl text-blue-400 fa-solid fa-eye"></i>
                            <p className="lg:text-3xl md:text-xl text-4xl m-0 py-2 text-white cairo font-semibold">
                                {" "}
                                رؤيتنا
                            </p>
                            <p className=" text-gray-100  m-0 py-2 cairo leading-7 font-medium">
                                رؤﻳﺘﻨــﺎ أن نكون الرواد في تقديم حلول ERP المتكاملة التي تساهم
                                في تطوير الأعمال السعودية، من خلال تقديم برامج مبتكرة تعزز من
                                الكفاءة التشغيلية وتدعم التحول الرقمي بما يتوافق مع رؤية المملكة
                                2030
                            </p>
                        </div>
                        <div className="our-message lg:w-1/3 w-full rounded-xl lg:p-8 md:p-4 p-5 bg-blue-500 ">
                            <i className="lg:text-5xl md:text-3xl text-3xl text-[#1a4e64] fa-solid fa-spa"></i>
                            <p className="lg:text-3xl md:text-xl text-4xl m-0 py-2 text-white cairo font-semibold">
                                {" "}
                                رسالتنا
                            </p>
                            <p className=" text-gray-100   m-0 py-2 cairo leading-7 font-medium">
                                {" "}
                                نحن في ايزي كود نوفر حلولًا مناسبة لمختلف الشركات، بغض النظر عن
                                اختلاف احتياجاتهم، وقدراتهم المالية و ملتزمون بتقديم حلول برمجية
                                مصممة خصيصًا لتلبية احتياجات عملائنا، مع توفير دعم استثنائي يضمن
                                نجاحهم في كل خطوة.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="shape md:w-1/3 w-0">
                    <img
                        className="lg:w-2/4 md:w-4/5"
                        src="https://swift-books.net/wp-content/uploads/2024/02/Illustration-05.png"
                        alt=""
                    />
                </div>
            </div>
            <div ref={programsRef} className="sixth overflow-hidden  relative md:p-12 md:px-24 p-3 flex flex-col items-center">
                <div className="shape3 absolute left-0 md:top-1/4 top-1/2">
                    <img className="lg:w-4/5 w-1/2" src={shape3} alt="" />
                </div>
                <div className="shape3 absolute flex justify-end -bottom-10 right-0 ">
                    <img className="lg:w-4/5 w-1/2" src={shepo} alt="" />
                </div>

                <p dir="rtl" className="md:text-4xl sm:text-3xl text-lg text-gray-700  w-full flex justify-center font-bold cairo">
                    {" "}
                    برامجنا{" "}
                    <span className="cairo md:text-4xl sm:text-3xl text-lg  ps-2 text-[#346dab] font-bold">
                        {" "}
                        المحاسبية{" "}
                    </span>
                </p>
                <p dir="rtl" className="cairo text-9xl w-full flex justify-center">
                    <span className="h-1.5 w-10 bg-black me-1 rounded-lg">.</span>{" "}
                    <span className="h-1.5 w-2 bg-[#346dab] rounded-lg ms-1">.</span>
                    <span className="h-1.5 w-2 bg-[#346dab] rounded-lg ms-1">
                        .
                    </span>{" "}
                    <span className="h-1.5 w-2 bg-[#346dab] rounded-lg ms-1">.</span>{" "}
                </p>

                <div dir="rtl" className="w-full">
                    <div className="flex border-b border-gray-200 py-3  ">
                        <div
                            className={tabClasses("final-bussiness")}
                            onClick={() => setActiveTab("final-bussiness")}
                        >
                            الفاينال بيزنس
                        </div>
                        <div
                            className={tabClasses("cloud-bussiness")}
                            onClick={() => setActiveTab("cloud-bussiness")}
                        >
                            كلاود بيزنس
                        </div>
                    </div>

                    <div className="p-4 mt-4  bg-white  rounded-md">
                        {activeTab === "final-bussiness" && (
                            <div>
                                <p className="alexandria md:text-4xl text-2xl font-semibold text-blue-600">
                                    برنامج الفاينال بيزنس
                                </p>
                                <p className="md:font-semibold md:text-base font-medium  text-[0.8rem]  kufi  m-0 text-gray-500">
                                    احد اهم و اقدم حلولنا البرمجية في المملكة العربية السعودية
                                </p>
                                <p className="md:text-lg text-[1.1rem] m-0 mt-2 cairo font-medium  lg:me-96 md:me-12 leading-6  md:leading-8">
                                    برنامج شامل لإدارة كافة معاملاتك المالية، من الحسابات والمخازن
                                    إلى التخليص الجمركي والمصانع وإدارة البيتومين وشؤون الموظفين.
                                    يتضمن أيضًا نقاط البيع وتطبيقات موبايل، مع إمكانية استخراج
                                    التقارير المالية والميزانية وقائمة الدخل. يتميز البرنامج
                                    بواجهة استخدام سهلة، بحيث تعلمك كيفية التعامل مع شاشة واحدة
                                    كيفية التعامل مع باقي الشاشات.
                                </p>
                                <div className="more-details flex justify-center mt-11">
                                    <button className="bg-[#339ecc] rounded-md   p-2 px-6 text-white cairo text-lg">
                                        <Link to={"/final"} className="text-white cairo text-lg">
                                            تفاصيل أكثر
                                        </Link>
                                    </button>
                                </div>
                            </div>
                        )}
                        {activeTab === "cloud-bussiness" && (
                            <div>
                                <p className="alexandria md:text-4xl text-2xl font-semibold text-blue-600">
                                    برنامج كلاود بيزنس
                                </p>
                                <p className="md:font-semibold md:text-base font-medium  text-[0.8rem]  kufi  m-0 text-gray-500">
                                    {" "}
                                    يدير فروعك فى انحاء المملكه والعالم لتعمل من اى مكان ولا يشترط
                                    شبكه داخليه فقط انترنت
                                </p>
                                <p className="md:text-lg text-[1.1rem] m-0 mt-2 cairo font-medium  lg:me-96 md:me-12 leading-6  md:leading-8">
                                    نظام إدارة متكامل عبر الإنترنت يتيح سهولة في الوصول وإدارة
                                    البيانات بفعالية وكفاءة عالية. يتميز بصلاحيات دقيقة وقوية
                                    للتحكم الكامل في الوصول، مع إمكانية تعديل الأسعار وخصائصها حسب
                                    الحاجة. يوفر النظام خيارات لتحديد صلاحيات المستخدمين لفترات
                                    محددة أو بشكل دائم، ويدعم التكامل مع أنظمة أخرى لتعزيز
                                    الكفاءة. يعمل بكفاءة على بيئات تشغيل متنوعة مثل Windows،
                                    ويتميز بواجهة استخدام بسيطة وسهلة للتعلم، مما يجعله خيارًا
                                    مثاليًا لإدارة شاملة وفعالة.
                                </p>
                                <div className="more-details flex justify-center mt-11">
                                    <button className="bg-[#339ecc] rounded-md   p-2 px-6 text-white cairo text-lg">

                                        <Link to={"/final"} className="text-white cairo text-lg">
                                            تفاصيل أكثر
                                        </Link>

                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <div className="ad1 w-full h-1/3">
                <div className="ad1-content w-full flex flex-col justify-center items-center h-full bg-[#339ECC] bg-opacity-45">

                    <p className="cairo lg:text-7xl md:text-5xl text-3xl font-semibold text-white">بوابتك الأولي لأرباحك المستهدفة</p>
                    <div className="start-button w-full flex justify-center ">
                        <button dir="rtl" className="start text-center p-2 px-4" ><span className="cairo text-lg">أبدأ الأستخدام </span></button>

                    </div>
                </div>


            </div>
            <div className="sivnth relative lg:pt-12 lg:px-12 md:p-2   ">
                <div className="shape5 opacity-10 flex justify-end  absolute   right-0 bottom-0 ">
                    <img src={sh2} className="w-4/5 z-[1]" alt="" />
                </div>
                <div className="main-questions relative z-[2] lg:w-4/5 md:w-full  lg:mx-auto">
                    <p dir="rtl" className="md:text-4xl sm:text-3xl text-lg text-gray-700 w-full flex justify-center font-bold cairo">
                        {" "}
                        اسئلة العملاء{" "}
                        <span className="cairo md:text-4xl sm:text-3xl text-lg  ps-2 text-[#346dab] font-bold">
                            {" "}
                            الشائعة{" "}
                        </span>
                    </p>
                    <p dir="rtl" className="cairo text-9xl w-full flex justify-center">
                        <span className="h-1.5 w-10 bg-black me-1 rounded-lg">.</span>{" "}
                        <span className="h-1.5 w-2 bg-[#346dab] rounded-lg ms-1">.</span>
                        <span className="h-1.5 w-2 bg-[#346dab] rounded-lg ms-1">
                            .
                        </span>{" "}
                        <span className="h-1.5 w-2 bg-[#346dab] rounded-lg ms-1">.</span>{" "}
                    </p>


                    <div dir="rtl" className="w-full">
                        <div className="flex justify-center border-b border-gray-200 py-3  ">
                            <div
                                className={questionClasses("subscribe")}
                                onClick={() => setActiveQuestion("subscribe")}
                            >
                                الأشتراك
                            </div>
                            <div
                                className={questionClasses("pay-points")}
                                onClick={() => setActiveQuestion("pay-points")}
                            >
                                نقاط البيع
                            </div>
                            <div
                                className={questionClasses("process")}
                                onClick={() => setActiveQuestion("process")}
                            >
                                التشغيل
                            </div>
                            <div
                                className={questionClasses("after-sale")}
                                onClick={() => setActiveQuestion("after-sale")}
                            >
                                ما بعد البيع
                            </div>
                        </div>

                        <div className="p-4 mt-4  md:pb-28 pb-20    rounded-md">
                            {activeQuestion === "subscribe" && (
                                <div className="">
                                    <div className="side-1  md:flex gap-3   ">
                                        <div className="question md:w-1/2">
                                            <p className="cairo m-0 lg:font-[700] md:font-[500] font-[700] mt-3 lg:text-xl text-lg">
                                                كيف يمكنني الاشتراك في برامج ايزي كود؟
                                            </p>
                                            <p className=" m-0 mt-3 messiri  lg:text-lg md:text-base text-[1rem] font-[400]">
                                                عن طريق الضغط علي زر الأشتراك و بعد تسجيل البيانات يقوم
                                                احد مسؤلين حدمة عملائنا بالتواصل معك
                                            </p>
                                        </div>
                                        <div className="question md:w-1/2 ">
                                            <p className="cairo m-0 lg:font-[700] md:font-[500] font-[700] mt-3 lg:text-xl text-lg">
                                                {" "}
                                                هل يمكنني تجربة البرنامج قبل الشراء؟
                                            </p>
                                            <p className=" m-0 mt-3 messiri  lg:text-lg md:text-base text-[1rem] font-[400]">
                                                نعم يمكنك ان تتميز بتجربة فريدة من نوعها عن طريق تجربة
                                                برامجنا الخاصة قبل الشراء و تتم عملية التجربة بعد
                                                التسجيل مباشرة
                                            </p>
                                        </div>
                                    </div>
                                    <div className="side-2 mt-6 md:flex gap-3   ">
                                        <div className="question md:w-1/2">
                                            <p className="cairo m-0 lg:font-[700] md:font-[500] font-[700] mt-3 lg:text-xl text-lg">
                                                {" "}
                                                هل يمكنني إلغاء الاشتراك في أي وقت؟
                                            </p>
                                            <p className=" m-0 mt-3 messiri  lg:text-lg md:text-base text-[1rem] font-[400]">
                                                نعم، يمكنك عدم تجديد الاشتراك بعد انتهائه في أي وقت دون أي رسوم إضافية.
                                            </p>
                                        </div>
                                        <div className="question md:w-1/2">
                                            <p className="cairo m-0 lg:font-[700] md:font-[500] font-[700] mt-3 lg:text-xl text-lg">
                                                {" "}
                                                ما هي تكاليف الاشتراك في برنامج إيزي كود؟                                            </p>
                                            <p className=" m-0 mt-3 messiri  lg:text-lg md:text-base text-[1rem] font-[400]">
                                                لدينا خطط اشتراك متنوعة تناسب مختلف احتياجات الشركات. يمكن الاطلاع على التفاصيل من خلال التواصل معنا                                            </p>
                                        </div>
                                    </div>
                                </div>
                            )}
                            {activeQuestion === "pay-points" && (
                                <div className="z-[2]">
                                    <div className="side-1  md:flex gap-3   ">
                                        <div className="question md:w-1/2">
                                            <p className="cairo m-0 lg:font-[700] md:font-[500] font-[700] mt-3 lg:text-xl text-lg">
                                                هل ايزي كود هيفدني في ظل وجود اكثر من فرع لشركتي؟
                                            </p>
                                            <p className=" m-0 mt-3 messiri  lg:text-lg md:text-base text-[1rem] font-[400]">
                                                بالتأكيد نحن نقدم برنامج الكلاود بيزنس احد حلولنا البرمجية يمكنك التحكم في فروعك فى انحاء المملكه والعالم لتعمل من اى مكان ولا يشترط شبكه داخليه فقط انترنت
                                            </p>
                                        </div>
                                        <div className="question md:w-1/2 ">
                                            <p className="cairo m-0 lg:font-[700] md:font-[500] font-[700] mt-3 lg:text-xl text-lg">
                                                {" "}
                                                هل استطيع استخدام البرنامج في حالة انقطاع خدمة الانترنت في أحد الفروع؟
                                            </p>
                                            <p className=" m-0 mt-3 messiri  lg:text-lg md:text-base text-[1rem] font-[400]">
                                                نعم يمكن للبرنامج العمل في حالة انقطاع التيار و مزامنة العمليات بعد عودة الخدمة
                                            </p>
                                        </div>
                                    </div>
                                    <div className="side-2 mt-6 md:flex gap-3   ">
                                        <div className="question md:w-1/2">
                                            <p className="cairo m-0 lg:font-[700] md:font-[500] font-[700] mt-3 lg:text-xl text-lg">
                                                {" "}
                                                اريد تقارير محاسبية لكل فرع علي حدا هل متوفر؟
                                            </p>
                                            <p className=" m-0 mt-3 messiri  lg:text-lg md:text-base text-[1rem] font-[400]">
                                                نعم تضمن برامج ايزي كود تقارير حسابية لكل فرع و تقارير لجميع الفروع و تقارير لفترة معينة من اختيارك
                                            </p>
                                        </div>

                                    </div>
                                </div>
                            )}
                            {activeQuestion === "process" && (
                                <div className="">
                                    <div className="side-1  md:flex gap-3   ">
                                        <div className="question md:w-1/2">
                                            <p className="cairo m-0 lg:font-[700] md:font-[500] font-[700] mt-3 lg:text-xl text-lg">
                                                ما هي اللغات التي تدعمها برامج ايزي كود؟

                                            </p>
                                            <p className=" m-0 mt-3 messiri  lg:text-lg md:text-base text-[1rem] font-[400]">
                                                ، البرنامج يدعم اللغة العربية والانجليزية بالكامل.


                                            </p>
                                        </div>
                                        <div className="question md:w-1/2 ">
                                            <p className="cairo m-0 lg:font-[700] md:font-[500] font-[700] mt-3 lg:text-xl text-lg">
                                                {" "}
                                                هل يمكنني ضبط البرنامج ليتناسب مع احتياجات شركتي؟
                                            </p>
                                            <p className=" m-0 mt-3 messiri  lg:text-lg md:text-base text-[1rem] font-[400]">
                                                نعم، برامج إيزي كود مرنة للغاية ويمكن تخصيصها بسهولة لتتوافق مع احتياجات شركتك ومتطلباتها الخاصة

                                            </p>
                                        </div>
                                    </div>
                                    <div className="side-2 mt-6 md:flex gap-3   ">
                                        <div className="question md:w-1/2">
                                            <p className="cairo m-0 lg:font-[700] md:font-[500] font-[700] mt-3 lg:text-xl text-lg">
                                                {" "}
                                                هل يتطلب برنامج إيزي كود أي مهارات تقنية خاصة؟
                                            </p>
                                            <p className=" m-0 mt-3 messiri  lg:text-lg md:text-base text-[1rem] font-[400]">
                                                لا، البرنامج يتميز بواجهة سهلة الاستخدام ولا يتطلب أي مهارات تقنية خاصة يكفي التعامل مع شاشة واحدة و ستصبح قادر علي التعامل مع جميع الشاشات


                                            </p>
                                        </div>
                                        <div className="question md:w-1/2">
                                            <p className="cairo m-0 lg:font-[700] md:font-[500] font-[700] mt-3 lg:text-xl text-lg">
                                                {" "}
                                                كيف يمكنني البدء باستخدام برنامج إيزي كود؟
                                            </p>
                                            <p className=" m-0 mt-3 messiri  lg:text-lg md:text-base text-[1rem] font-[400]">
                                                يمكنك البدء بسهولة بعد تواصلك معنا من خلال الضغط هنا

                                            </p>
                                        </div>
                                    </div>
                                </div>
                            )}
                            {activeQuestion === "after-sale" && (
                                <div className="">
                                    <div className="side-1  md:flex gap-3   ">
                                        <div className="question md:w-1/2">
                                            <p className="cairo m-0 lg:font-[700] md:font-[500] font-[700] mt-3 lg:text-xl text-lg">
                                                هل يتوفر دعم فني للبرنامج؟

                                            </p>
                                            <p className=" m-0 mt-3 messiri  lg:text-lg md:text-base text-[1rem] font-[400]">
                                                نعم، نقدم دعم فني متكامل على مدار الساعة لمساعدة المستخدمين في الإجابة على استفساراتهم وحل أي مشاكل تواجههم.



                                            </p>
                                        </div>
                                        <div className="question md:w-1/2 ">
                                            <p className="cairo m-0 lg:font-[700] md:font-[500] font-[700] mt-3 lg:text-xl text-lg">
                                                {" "}
                                                كيف يمكنني التواصل مع فريق الدعم؟

                                            </p>
                                            <p className=" m-0 mt-3 messiri  lg:text-lg md:text-base text-[1rem] font-[400]">
                                                يمكنك التواصل مع الدعم الفني من خلال ألضغط علي الزر الثابت في اسفل الصفحة او يمكنك الضغط هنا

                                            </p>
                                        </div>
                                    </div>
                                    <div className="side-2 mt-6 md:flex gap-3   ">
                                        <div className="question md:w-1/2">
                                            <p className="cairo m-0 lg:font-[700] md:font-[500] font-[700] mt-3 lg:text-xl text-lg">
                                                {" "}
                                                هل يتم تحديث البرنامج بانتظام؟

                                            </p>
                                            <p className=" m-0 mt-3 messiri  lg:text-lg md:text-base text-[1rem] font-[400]">
                                                نعم، نقوم بإصدار تحديثات دورية لضمان تقديم أفضل أداء وأحدث المميزات للمستخدمين.



                                            </p>
                                        </div>

                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
                <div dir="rtl" className="e-card w-5/6 md:h-70 playing">
                    <div className="image"></div>
                    <div className="wave2 lg:w-[1200px] md:w-[400px] w-[200px] lg:h-[700px] md:h-[700px] h-[300px]"></div>
                    <div className="wave2 lg:w-[1200px] md:w-[400px] w-[200px] lg:h-[700px] md:h-[700px] h-[300px]"></div>
                    <div className="wave2 lg:w-[1200px] md:w-[400px] w-[200px] lg:h-[700px] md:h-[700px] h-[300px]"></div>

                    <div className="infotop text-white">
                        <p className="lg:text-5xl md:text-6xl text-3xl p-4 cairo font-semibold">
                            خدمة ما بعد البيع؟
                        </p>
                        <p className="md:text-xl m-0  text-lg lg:w-1/2 md:w-2/3 font-medium text-slate-300 px-4 messiri">
                            تقدم الكود السهل خدمة الزيارة الميدانية للعملاء بهدف توفير الدعم الفني والتقني لهم في مواقعهم وتحسين استخدام البرامج وتعزيز علاقتها بعملائها
                        </p>
                        <button className="md:text-xl border text-lg  m-4 rounded-md  p-2 font-medium text-white px-4 cairo">اطلب زيارة</button>
                    </div>
                </div>

            </div>
            <div className="clients-logo bg-gray-50 relative overflow-hidden  lg:px-48     flex flex-col items-center pt-12">
                <div className="shape absolute flex justify-center top-0  h-full-right-7ht-0 w-full"><img className="   opacity-20 w-4/5 h-1/3 z-[1]" src={graph2} alt="" /></div>
                <p dir="rtl" className="md:text-4xl sm:text-3xl text-lg text-gray-700 w-full flex justify-center font-bold cairo">
                    {" "}
                    أكثر من +1000{" "}
                    <span className="cairo md:text-4xl sm:text-3xl text-lg  ps-2 text-[#346dab] font-bold">
                        {" "}
                        عميل سعيد{" "}
                    </span>
                </p>
                <p dir="rtl" className="cairo text-9xl w-full flex justify-center">
                    <span className="h-1.5 w-10 bg-black me-1 rounded-lg">.</span>{" "}
                    <span className="h-1.5 w-2 bg-[#346dab] rounded-lg ms-1">.</span>
                    <span className="h-1.5 w-2 bg-[#346dab] rounded-lg ms-1">
                        .
                    </span>{" "}
                    <span className="h-1.5 w-2 bg-[#346dab] rounded-lg ms-1">.</span>{" "}
                </p>
                <div className="logos pb-11 relative z-[2] grid grid-cols-2 md:grid-cols-3 lg:grid-cols-10 ">
                    <div className="client-logo  w-full h-40 flex items-center">
                        <img className="w-5/6 hover:saturate-200 hover:scale-110  h-3/5" src={client1} alt="" />
                    </div>
                    <div className="client-logo  w-full h-40 flex items-center">
                        <img className="w-5/6 hover:saturate-200 hover:scale-110  h-2/4" src={client2} alt="" />
                    </div>
                    <div className="client-logo  w-full h-40 flex items-center">
                        <img className="w-5/6 hover:saturate-200 hover:scale-110  h-2/4" src={client3} alt="" />
                    </div>
                    <div className="client-logo  w-full h-40 flex items-center">
                        <img className="w-5/6 hover:saturate-200 hover:scale-110  h-2/4" src={client4} alt="" />
                    </div>
                    <div className="client-logo  w-full h-40 flex items-center">
                        <img className="w-5/6 hover:saturate-200 hover:scale-110  h-2/4" src={client5} alt="" />
                    </div>
                    <div className="client-logo  w-full h-40 flex items-center">
                        <img className="w-5/6 hover:saturate-200 hover:scale-110  h-2/4" src={client6} alt="" />
                    </div>
                    <div className="client-logo  w-full h-40 flex items-center">
                        <img className="w-4/5 hover:saturate-200 hover:scale-110  h-2/5" src={client7} alt="" />
                    </div>
                    <div className="client-logo  w-full h-40 flex items-center">
                        <img className="w-5/6 hover:saturate-200 hover:scale-110  h-2/4" src={client8} alt="" />
                    </div>
                    <div className="client-logo  w-full h-40 flex items-center">
                        <img className="w-5/6 hover:saturate-200 hover:scale-110  h-2/5" src={client9} alt="" />
                    </div>
                    <div className="client-logo  w-full h-40 flex items-center">
                        <img className="w-5/6 hover:saturate-200 hover:scale-110  h-2/4" src={client10} alt="" />
                    </div>
                    <div className="client-logo  w-full h-40 flex items-center">
                        <img className="w-4/5 hover:saturate-200 hover:scale-110  h-2/5" src={client11} alt="" />
                    </div>
                    <div className="client-logo  w-full h-40 flex items-center">
                        <img className="w-5/6 hover:saturate-200 hover:scale-110  h-2/5" src={client12} alt="" />
                    </div>
                    <div className="client-logo  w-full h-40 flex items-center">
                        <img className="w-5/6 hover:saturate-200 hover:scale-110  h-2/5" src={client13} alt="" />
                    </div>
                    <div className="client-logo  w-full h-40 flex items-center">
                        <img className="w-5/6 hover:saturate-200 hover:scale-110  h-1/3" src={client14} alt="" />
                    </div>
                    <div className="client-logo  w-full h-40 flex items-center">
                        <img className="w-5/6 hover:saturate-200 hover:scale-110  h-2/5" src={client15} alt="" />
                    </div>


                </div>




            </div>
            <div className="eaghtth relative  md:px-7 px-1">
                <div className="shape5 opacity-10 flex justify-center  absolute   right-0 bottom-0 ">
                    <img src={sh2} className="w-4/5 z-[1]" alt="" />
                </div>

                <div className="card mb-4 z-[2] pt-7 flex flex-col justify-center items-center">


                    <div className="loader relative z-[2] lg:h-20 md:h-9 h-9  mt-6">
                        <div className="words">
                            <span className="word text-end me-3  flex justify-end items-end lg:text-5xl text-[1.3rem] md:text-3xl text-[#346dab] font-bold cairo">تجـاريـة</span>
                            <span className="word text-end me-3  flex justify-end items-end lg:text-5xl text-[1.3rem] md:text-3xl text-[#346dab] font-bold cairo">تجـاريـة</span>
                            <span className="word text-end me-3  flex justify-end items-end lg:text-5xl text-[1.3rem] md:text-3xl text-[#346dab] font-bold cairo">تكنولوجية</span>

                            <span className="word text-end me-3  flex justify-end items-end lg:text-5xl text-[1.3rem] md:text-3xl text-[#346dab] font-bold cairo">مقاولات</span>
                            <span className="word text-end me-3  flex justify-end items-end lg:text-5xl text-[1.3rem] md:text-3xl text-[#346dab] font-bold cairo">لوجستية</span>

                            <span className="word text-end me-3  flex justify-end items-end lg:text-5xl text-[1.3rem] md:text-3xl text-[#346dab] font-bold cairo">تجارية</span>
                            <span className="word text-end me-3  flex justify-end items-end lg:text-5xl text-[1.3rem] md:text-3xl text-[#346dab] font-bold cairo">عقارات</span>
                            <span className="word text-end me-3  flex justify-end items-end lg:text-5xl text-[1.3rem] md:text-3xl text-[#346dab] font-bold cairo">صناعية</span>

                        </div>
                        <span className="lg:text-5xl text-[1.3rem] m-0 md:text-3xl font-bold text-gray-700 cairo ">اياً كان مجال عمل شركتك</span>


                    </div>
                    <p className="lg:text-xl md:text-lg text-base text-center m-0 font-bold text-gray-500 messiri">برامج ايزي كود المحاسبية تناسب جميع مجالات العمل المختلفة</p>
                    <button onClick={() => { programsRef.current?.scrollIntoView({ behavior: 'smooth' }) }} className="text-blue-800 z-[2] hover:text-blue-500 cairo cursor-pointer m-0 mt-2 lg:text-lg md:text-lg text-base font-bold underline underline-offset-8"><i className="underline underline-offset-8 fa-solid fa-arrow-left"></i> تصفح برامجنا الأن</button>
                </div>

                <img className="w-full relative z-[2] md:h-full h-60" src={workers2} alt="" />



            </div>
        </div>
    );
}
