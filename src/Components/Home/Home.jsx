import React, { useState } from 'react'
import { useEffect } from 'react';
import { Link } from 'react-router-dom'
import { width } from '@fortawesome/free-brands-svg-icons/fa42Group';
import budget from "../../assets/budget.png"
import boxes from "../../assets/boxes.png"
import receipt from "../../assets/receipt.png"
import custom from "../../assets/customs-clearance.png"
import exchange from "../../assets/exchange.png"
import installment from "../../assets/installment.png"




import arrow from "../../assets/up.png"
import truee from "../../assets/true.png"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


import man from "../../assets/man.png"
export default function Home() {
    const [isOpen, setIsOpen] = useState(false);
    const [hasAnimated, setHasAnimated] = useState(false);

    useEffect(() => {
        // Set a timeout to remove the animation class after it has finished
        const timer = setTimeout(() => {
            setHasAnimated(true);
        }, 5500); // This will ensure the class is applied on mount

        // Cleanup the timer if the component unmounts
        return () => clearTimeout(timer);
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
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
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
                    <div className="earning4 -rotate-2 absolute rounded-lg  flex  justify-center items-center  left-0   lg:left-1/3 top-72 mt-9 w-56 h-48 ">
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
                    className="float-button bg-bl200 bg-opacity-60 rounded-full w-16 h-16 m-4 flex items-center justify-center cursor-pointer shadow-xl"
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
            <div className="second pt-6 bg-[#91a8c8]">

                <p className='m-0 py-6 text-center text-3xl font-semibold kufi text-white '>كل هذا و اكثر بين يديك </p>
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
                    <button className='bg-blue-900 text-white p-2 px-4 text-lg kufi font-medium rounded-md my-5'>تصفح برامجنا</button>

                </div>


            </div>
            <div className="third bg-white">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia nostrum earum vel repudiandae quo, rem perspiciatis esse voluptatum sunt architecto, saepe ullam dicta! Id eveniet quam est perspiciatis voluptates dolorum reprehenderit maxime hic obcaecati, nisi veritatis a voluptatibus. Vel distinctio quos nobis illum doloremque, error inventore saepe dolore expedita culpa repudiandae a accusamus, laborum esse explicabo in quod nemo ad odit quas ex repellat. Cupiditate vel dolores ratione! Voluptate eveniet nemo veritatis ipsam obcaecati suscipit? Minima, fuga commodi! Blanditiis quaerat eveniet, voluptas nulla repellat non? Voluptas aspernatur aut incidunt, consequatur laborum reiciendis rerum mollitia animi laudantium temporibus consequuntur quasi vel unde et, suscipit iusto eligendi inventore itaque eos, dicta quidem ullam dolor earum. Laborum aut aperiam quasi corrupti ratione, dolor repudiandae exercitationem iure molestias, soluta minus nemo dolore voluptatibus ab a sequi quae architecto dolorem earum harum velit, ea cupiditate! Rem, tempora corrupti, quis ratione perferendis culpa beatae impedit illo consectetur animi, adipisci magnam distinctio natus eius odit soluta laborum unde? Corporis nam expedita inventore doloribus itaque harum cupiditate reiciendis tempora. Blanditiis excepturi nesciunt iste corporis ipsa odit nihil numquam. Repellat, id incidunt unde voluptates eaque exercitationem ea commodi ex pariatur, sapiente nam quod at! Numquam, dolorem repudiandae earum itaque sit debitis vero tenetur eius quam sed nemo, similique optio? Necessitatibus, reprehenderit temporibus! Aperiam error perspiciatis laudantium, unde iste, sint quis quos dicta dolorum culpa similique sed eius sunt commodi repellat autem in qui aut expedita repellendus necessitatibus enim. Qui quae autem quas officiis deserunt repellendus, perferendis laboriosam ipsum quisquam veniam natus accusantium nam! Quae assumenda recusandae veritatis pariatur nostrum alias eaque amet veniam at ab suscipit harum unde, eum iure consequatur deserunt? Ipsum magni ullam suscipit harum incidunt provident laudantium? Labore, animi consequuntur odio consequatur aperiam quaerat laborum blanditiis aspernatur cumque minima perspiciatis eaque eius deleniti consectetur maiores reiciendis dicta atque. Doloremque perspiciatis debitis cumque. Minima dicta temporibus eius voluptatum maxime nostrum amet culpa id, officia nulla fuga ab nihil corrupti veritatis repellat ipsa tempora. Tenetur repudiandae non nobis error recusandae? Aliquam, veniam? Aut fuga provident sequi corporis voluptatibus tempore veniam, porro asperiores explicabo recusandae cumque sapiente. Sunt voluptates ullam velit, amet odit corrupti doloribus dignissimos itaque? Dignissimos non esse rerum sapiente expedita odio ipsum adipisci dolor eligendi exercitationem distinctio nesciunt temporibus maxime illo sunt itaque nisi mollitia voluptates, maiores quo alias delectus quam aut recusandae. Aliquam, at. Cum, vero quidem. Ex corrupti vero ducimus aperiam voluptatem tempora quam earum dolorem veniam iusto provident tenetur ea ullam sed, atque qui neque, facere commodi, molestiae voluptate accusamus. Nam laboriosam iusto ab ipsa earum asperiores voluptas repellendus dicta, deleniti possimus porro velit iure ullam minima odio maiores nulla iste tempora fugit. Esse qui, sit vel eum quia eaque accusamus earum ad exercitationem fugit cumque pariatur ab maxime, nihil sunt est fuga aliquid. Omnis numquam fugit voluptatibus blanditiis neque asperiores nesciunt debitis odit! Suscipit esse ab officia culpa autem pariatur sapiente veritatis dolorem, deserunt omnis doloremque provident quo! Vero deleniti optio nobis animi fuga delectus est? Iure alias tempora voluptatibus explicabo! Quaerat rerum culpa eveniet magni assumenda exercitationem, dicta suscipit sit ab, omnis, impedit sint inventore autem? Distinctio obcaecati voluptatum in aliquid officiis vel impedit vitae molestiae magnam, soluta tenetur quasi molestias. Excepturi distinctio et delectus quos incidunt autem ipsum iure soluta sint velit laudantium at odio facilis beatae quod ad sequi molestias expedita rerum vitae, dolor omnis. Ea natus id, quaerat dolorem ad porro fugit magni est. Atque obcaecati voluptatibus nulla quas soluta ducimus culpa esse libero at ratione nisi quaerat architecto officiis optio ipsa animi voluptates, nihil consectetur, enim deleniti nostrum magni similique distinctio debitis? Soluta nihil blanditiis molestias itaque voluptatibus quidem atque mollitia ipsam, aperiam ab reprehenderit veritatis voluptatum pariatur. Facere repudiandae provident distinctio, dolorem culpa officia ea ex, vel sapiente reprehenderit obcaecati. Aperiam impedit nulla, necessitatibus voluptates error aspernatur! Aliquid aliquam neque accusamus rerum molestias dignissimos quas voluptatibus. At similique dolor recusandae quas, rem quidem ducimus incidunt, quis accusantium praesentium vero vitae. Sunt quibusdam dolores quas ex, ratione numquam quos libero atque, necessitatibus, saepe tempore quo praesentium aliquam doloribus nobis est ullam fugit laboriosam totam excepturi consectetur eaque impedit rerum? Dolore soluta in aliquid nihil esse eligendi natus ex ea quo rem. Nobis aperiam suscipit, dolore optio minus quasi quam ullam aut ipsa, commodi dolor molestias corporis. Atque expedita est fugit ex maxime facere sed explicabo delectus. Corrupti dolorum quo, aperiam doloremque dicta cum omnis consequuntur nostrum rerum asperiores voluptas ipsam obcaecati non odio fuga ut. Itaque modi molestias possimus optio ratione labore sit in, eum earum nihil quibusdam. Ea animi doloribus excepturi eaque, harum ullam laboriosam, nulla consequatur totam tempora debitis vel repellat quia? Sit, nemo unde. Aut laudantium illum omnis commodi quisquam earum, itaque sint ab iure id error dolore facilis soluta dolor cum. Unde veritatis amet voluptatum. Officiis, molestiae quod quia at illo odit amet quisquam dignissimos nihil deleniti maxime et ea incidunt qui cum earum facilis? Corporis non placeat possimus aut, aperiam voluptate excepturi quidem laudantium. Temporibus consequatur amet officia atque ratione minus a iste facere corrupti beatae asperiores libero suscipit dignissimos tempora in repudiandae ipsam nemo, voluptatum modi provident tenetur. Culpa vel exercitationem cumque neque! Quas, aspernatur deleniti fugit ut maiores ea quasi veniam! Molestiae quia sapiente modi sequi cum eius commodi officiis, excepturi facilis. Doloribus cum, commodi magnam minima explicabo deleniti labore similique voluptates vel, quisquam fugit. Tempora voluptate dolorem nisi pariatur, sequi praesentium expedita hic quidem, fuga magni sit dicta placeat sint voluptatem quisquam neque qui alias. Fugiat non quisquam, beatae molestias placeat amet cum numquam iste esse in alias et repellendus laborum inventore quidem temporibus blanditiis. Ipsa alias provident numquam natus doloremque commodi corrupti aliquam quis? Repellat, mollitia omnis numquam facere nemo consequuntur molestias similique maiores. Perspiciatis possimus assumenda corrupti omnis. Beatae consectetur id maxime dolorum earum impedit quos illo eius! Iure praesentium autem incidunt explicabo, voluptatem amet, voluptas quod tempore cumque reprehenderit beatae consequuntur. Nulla eum fuga laudantium suscipit cumque quisquam molestias consequatur explicabo dolorem, iusto libero nam enim, beatae recusandae autem voluptates nesciunt officia. Velit voluptates vitae quam.



            </div>




        </div>
    )
}
