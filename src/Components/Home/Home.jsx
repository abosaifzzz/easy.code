import React, { useRef, useState } from 'react'
import { useEffect } from 'react';
import { Link } from 'react-router-dom'
import { width } from '@fortawesome/free-brands-svg-icons/fa42Group';
import budget from "../../assets/budget.png"
import boxes from "../../assets/boxes.png"
import receipt from "../../assets/receipt.png"
import custom from "../../assets/customs-clearance.png"
import exchange from "../../assets/exchange.png"
import installment from "../../assets/installment.png"
import ReactPlayer from 'react-player'
import erp from "../../assets/erp.mp4"
import arrow from "../../assets/up.png"
import truee from "../../assets/true.png"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import man from "../../assets/man.png"
import devices from "../../assets/devices.png"
// import hours from "../../assets/24.png"
// import call from "../../team1.png"
import call from "../../assets/team1.png"
import online from "../../assets/online.png"









export default function Home() {
    const [isOpen, setIsOpen] = useState(false);
    const [hasAnimated, setHasAnimated] = useState(false);
    const playerRef = useRef(null);
    const [isInView, setIsInView] = useState(false);

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

        if (playerRef.current) {
            observer.observe(playerRef.current);
        }

        return () => {
            if (playerRef.current) {
                observer.unobserve(playerRef.current);
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

    return (
        <div>

            <div className="hero bg-gray-500 relative">
                <div className="background text flex flex-col items-center">
                    <ul>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                    {/* <div className="comp flex flex-col items-center absolute rounded-lg right-64 top-1/3 mt-9 w-48 h-48 bg-white animate-slideInFromBottomRight">
                        <img className='w-full' src={invest} alt="" />
                        <img className='w-1/2 absolute bottom-0' src={money} alt="" />
                    </div> */}
                    <div className="earning1 -rotate-12 absolute rounded-lg  flex  justify-center items-center   left-10  lg:left-64 top-44 lg:top-1/2 mt-9 w-56 h-48 ">
                        <img className='w-7 h-8 me-2' src={arrow} alt="" /> <span className=' rakkas-regular text-blue-950'>ارباح اليوم </span>

                    </div>
                    <div className="earning2 rotate-6 absolute rounded-lg  flex  justify-center items-center  right-1   lg:right-64 top-80 lg:top-80 mt-9 text-sm w-56 lg:h-48 ">
                        <span className=' rakkas-regular  text-blue-950'>% معدل الانتاج ۱۲۰   </span>

                    </div>
                    <div className="earning3 rotate-6 absolute rounded-lg  lg:flex hidden justify-center items-center     right-1/3 top-56 mt-9 w-56 h-48 ">
                        <span className=' rakkas-regular text-blue-950'>  عميل جديد </span>
                        <span className=' rakkas-regular text-blue-950 ms-2'>  ۳٥ </span>


                    </div>
                    <div className="earning4 -rotate-2 absolute rounded-lg  flex  justify-center items-center  left-0   lg:left-1/3 lg:top-56 top-72 mt-9 w-56 h-48 ">
                        <img className='w-7 h-8 me-2' src={truee} alt="" /> <span className=' rakkas-regular text-blue-950'>تقارير صرف </span>

                    </div>


                    <div className={`flex flex-col justify-center pt-40 ${hasAnimated ? '' : 'fade-in-scale'}`}>
                        <p className='lg:mb-6 m-0   lg:text-5xl md:text-4xl text-lg lg:font-normal font-medium px-3 text-center hala'>
                            ندير عملياتك، نرتب بياناتك، ونزيد إنتاجيتك
                        </p>
                        <h1 className='text-center alexandria lg:text-5xl md:text-4xl text-2xl'>
                            ! بسهولة وكفاءة
                        </h1>
                    </div>
                    <div className="img flex justify-center absolute bottom-0 animate-fromBottom">
                        <img className='lg:w-5/6 w-96 h-full' src={man} alt="" />
                    </div>
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
                                أهلا و سهلا , <span className="text-blue-300 kufi font-medium text-lg">محمد</span>
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
                            <p className="kufi my-2 font-medium">او تواصل معنا عبر الواتساب</p>
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
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                </div>
            </div>
            <div className="second pt-6 bg-gray-100">

                <p className='m-0 py-6 text-center text-4xl font-semibold cairo text-[#339ecc] '>كل هذا و اكثر بين يديك </p>
                <div className="slider-container py-7">
                    <Slider {...settings}>
                        <div className=' flex justify-center h-64 items-center gap-3'>
                            <div className="slide  h-full flex justify-center items-center  rounded-lg">
                                <div className="slide-card w-2/3 h-4/5 flex flex-col justify-center   rounded-lg    items-center bg-white   ">
                                    <div className="icon-slide p-4 w-20 h-20 bg-blue-200 bg-opacity-60 rounded-full">
                                        <img className='w-fit h-fit' src={budget} alt="" />
                                    </div>
                                    <p className='kufi font-bold text-lg'>ِشجرة الحسابات</p>


                                </div>

                            </div>

                        </div>
                        <div className=' flex justify-center h-64 items-center gap-3'>
                            <div className="slide  h-full flex justify-center items-center  rounded-lg">
                                <div className="slide-card w-2/3 h-4/5 flex flex-col justify-center   rounded-lg    items-center bg-white   ">
                                    <div className="icon-slide p-4 w-20 h-20 bg-blue-200 bg-opacity-60 rounded-full">
                                        <img className='w-fit h-fit' src={boxes} alt="" />
                                    </div>
                                    <p className='kufi font-bold text-lg'>الجرد المخزني</p>


                                </div>

                            </div>

                        </div> <div className=' flex justify-center h-64 items-center gap-3'>
                            <div className="slide  h-full flex justify-center items-center  rounded-lg">
                                <div className="slide-card w-2/3 h-4/5 flex flex-col justify-center   rounded-lg    items-center bg-white   ">
                                    <div className="icon-slide p-4 w-20 h-20 bg-blue-200 bg-opacity-60 rounded-full">
                                        <img className='w-fit h-fit' src={receipt} alt="" />
                                    </div>
                                    <p className='kufi font-bold text-lg'>الفاتورة الألكترونية</p>


                                </div>

                            </div>

                        </div> <div className=' flex justify-center h-64 items-center gap-3'>
                            <div className="slide  h-full flex justify-center items-center  rounded-lg">
                                <div className="slide-card w-2/3 h-4/5 flex flex-col justify-center   rounded-lg    items-center bg-white   ">
                                    <div className="icon-slide p-4 w-20 h-20 bg-blue-200 bg-opacity-60 rounded-full">
                                        <img className='w-fit h-fit' src={custom} alt="" />
                                    </div>
                                    <p className='kufi font-bold text-lg'>التخليص الجمركي</p>


                                </div>

                            </div>

                        </div> <div className=' flex justify-center h-64 items-center gap-3'>
                            <div className="slide  h-full flex justify-center items-center  rounded-lg">
                                <div className="slide-card w-2/3 h-4/5 flex flex-col justify-center   rounded-lg    items-center bg-white   ">
                                    <div className="icon-slide p-4 w-20 h-20 bg-blue-200 bg-opacity-60 rounded-full">
                                        <img className='w-fit h-fit' src={exchange} alt="" />
                                    </div>
                                    <p className='kufi font-bold text-lg'>تعدد العملات</p>


                                </div>

                            </div>

                        </div> <div className=' flex justify-center h-64 items-center gap-3'>
                            <div className="slide  h-full flex justify-center items-center  rounded-lg">
                                <div className="slide-card w-2/3 h-4/5 flex flex-col justify-center   rounded-lg    items-center bg-white   ">
                                    <div className="icon-slide p-4 w-20 h-20 bg-blue-200 bg-opacity-60 rounded-full">
                                        <img className='w-fit h-fit' src={installment} alt="" />
                                    </div>
                                    <p className='kufi font-bold text-lg'>ادارة التقسيط</p>


                                </div>

                            </div>

                        </div> <div className=' flex justify-center h-64 items-center gap-3'>
                            <div className="slide  h-full flex justify-center items-center  rounded-lg">
                                <div className="slide-card w-2/3 h-4/5 flex flex-col justify-center   rounded-lg    items-center bg-white   ">
                                    <div className="icon-slide p-4 w-20 h-20 bg-blue-200 bg-opacity-60 rounded-full">
                                        <img className='w-fit h-fit' src={budget} alt="" />
                                    </div>
                                    <p className='kufi font-bold text-lg'>ِشجرة الحسابات</p>


                                </div>

                            </div>

                        </div>




                    </Slider>
                </div>
                <div className="browse-our-programs flex justify-center">
                    <button className=' bg-[#339ecc] text-white p-2 px-4 text-lg kufi font-medium rounded-md my-5'>تصفح برامجنا</button>

                </div>


            </div>
            <div className="third bg-white lg:p-8 p-4">
                <div className="what-erp lg:flex p-8">
                    <div className="first-part lg:w-1/2" ref={playerRef}>
                        <ReactPlayer
                            url={erp} // path to your video in the public directory
                            width="100%"
                            height="100%"
                            playing={isInView} // Auto-play when in view
                            loop={true}
                            controls={false} // Ensure controls are hidden
                            playsinline={true} // Prevents fullscreen on mobile devices
                            config={{
                                file: {
                                    attributes: {
                                        controlsList: 'nodownload', // Disable download button
                                        playsInline: true, // Prevent full-screen on mobile devices
                                    },
                                },
                            }}
                            style={{ pointerEvents: "none" }} // Disables user interaction with the video
                        />
                    </div>
                    <div dir='rtl' className="second-part mt-5 lg:mt-0 lg:mx-5 mx-1 lg:w-1/2 ">
                        <p className='m-0 lg:text-5xl text-4xl mt-2 cairo font-semibold text-[#339ecc]'>نظام ERP متكامل </p>
                        <p className='m-0 lg:text-5xl text-4xl mt-4 cairo font-semibold '>  لأدارة جميع أعمالك</p>
                        <div className="line w-52 ms-2 mt-10  h-1 text-white bg-[#339ecc]">s</div>

                        <p className='lg:text-xl text-lg leading-8 m-0 mt-4 font-[300] alexandria'>تعد برامج الكود السهل المحاسبية برامج متكاملة تعمل علي توفير معاملات الامان لتكن في راحه تامة & حتى يمكنك الإعتماد علينا كليا.</p>
                        <div className="labels flex gap-4 mt-4">
                            <p className='m-0 text-sm cairo font-[500] '><span><i className="bg-[#627886] text-white p-1 rounded-full fa-solid fa-check"></i></span> تجربة مجانية</p>
                            <p className='m-0 text-sm cairo font-[500] '><span><i className="bg-[#627886] text-white p-1 rounded-full fa-solid fa-check"></i></span> أمن</p>
                            <p className='m-0 text-sm cairo font-[500] '><span><i className="bg-[#627886] text-white p-1 rounded-full fa-solid fa-check"></i></span> سريع </p>
                            <p className='m-0 text-sm cairo font-[500] '><span><i className="bg-[#627886] text-white p-1 rounded-full fa-solid fa-check"></i></span> زكي</p>

                        </div>
                        <button className='bg-[#339ecc] p-2 px-4 text-white rounded-md mt-16'>ابدأ الأستخدام الأن</button>





                    </div>
                </div>

            </div>
            <div className="fourth py-7 bg-gray-100">
                <p className='m-0 py-6 text-center text-4xl font-semibold cairo text-[#339ecc] '>لماذا حلولنا البرمجية هي الأفضل؟</p>

                <div className="why-our-programs my-9 lg:flex justify-evenly w-full">

                    <div className="reason mx-12 lg:mx-0 mt-3 flex flex-col  items-center text-gray-700 lg:w-1/4 h-96 bg-white rounded-xl shadow-lg">
                        <img className='lg:w-36 w-24 h-24 lg:h-36' src={devices} alt="" />
                        <p className='text-sm cairo font-medium text-blue-400 m-0 mt-3'>برامج متجاوبة </p>
                        <p className='text-2xl cairo font-semibold m-0 mt-2 text-blue-950 '>مناسب لجميع الأجهزة</p>
                        <p className='lg:text-[1.1rem] text-sm  leading-7 text-center kufi font-[350]'>حلول الكود السهل البرمجية تواكب احدث التطورات اولا باول فنحن نوفر تجربة سلسله لعملائنا ويمكنهم متابعة اعمالهم من خلال الجوال واللاب توب</p>


                    </div>
                    <div className="reason mx-12 lg:mx-0 mt-3 flex flex-col  items-center text-gray-700 lg:w-1/4 h-96 bg-white rounded-xl shadow-lg">
                        <img className='lg:w-36 w-24 h-24 lg:h-36' src={call} alt="" />
                        <p className='text-sm cairo font-medium text-blue-400 m-0 mt-3'>الدعم الفني
                        </p>
                        <p className='lg:text-2xl  cairo font-semibold m-0 mt-2 text-blue-950 '>درع الدعم الفني </p>
                        <p className='lg:text-[1.1rem] text-sm  px-3 leading-7 text-center kufi font-[350]'> فمن خلال فريق من المحترفين نتابع سير اعمال عملائنا ونوفر الدعم الفنيي فائق الجودة وفريق قادر علي التواصل لفهم استفساراتكم وحلحله جميع العقبات. </p>


                    </div>
                    <div className="reason mx-12 lg:mx-0 mt-3 flex flex-col  items-center text-gray-700 lg:w-1/4 h-96 bg-white rounded-xl shadow-lg">
                        <img className='lg:w-36 w-24 h-24 lg:h-36' src={online} alt="" />
                        <p className='text-sm cairo font-medium text-blue-400 m-0 mt-3'>يعمل اونلاين
                        </p>
                        <p className='lg:text-2xl cairo font-semibold m-0 mt-2 text-blue-950 '>تواصل دائم </p>
                        <p className='lg:text-[1.1rem] text-sm  leading-7 text-center kufi font-[350]'> ميزات الكود السهل السحابية تتيح لعملائها التواصل مع بياناتهم والتفاعل معها طوال الوقت لانها متوفرة اونلاين فتمكنهم من استخدامها 24 ساعة طوال ايام الاسبوع</p>


                    </div>


                </div>


            </div>


        </div>
    )
}
