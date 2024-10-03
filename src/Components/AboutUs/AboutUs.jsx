import React, { useEffect, useState } from "react";
import home from "../../assets/home.png";
import qoutes from "../../assets/qoutes.png";
import qoutes2 from "../../assets/qoutes2.png";
import systems from "../../assets/systems.png";
import systems2 from "../../assets/systems2.png";
import dot from "../../assets/dot.png";
import shape3 from "../../assets/shape3.png";
import programming from "../../assets/programming.png";
import callcenter from "../../assets/callcenter.png";
import customerservice from "../../assets/customerservice.png";
import Loading from "../Loading/Loading";





export default function AboutUs() {

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

    return (
        <>
            <div className="about mt-28">
                <div className="first p-8 md:flex bg-blue-200 bg-opacity-20  w-full">
                    <div className="left md:hidden ">
                        <img src={home} alt="" />
                    </div>
                    <div
                        dir="rtl"
                        className="right flex flex-col justify-center items-center md:w-1/2"
                    >
                        <p className="lg:text-5xl text-2xl text-blue-950 cairo font-[650]">
                            Easy Code - أيزي كود
                        </p>
                        <div className="line lg:w-96 md:w-72     h-1 text-white bg-[#339ecc]"></div>

                        <div className="line lg:w-96 md:w-72     h-1 text-white bg-[#339ecc]"></div>

                    </div>
                    <div className="left md:flex hidden lg:w-1/2 md:h-2/3">
                        <img src={home} alt="" />
                    </div>
                </div>
                <div dir="rtl" className="second mt-5 py-7 lg:px-28 md:px-16 px-6">
                    <img src={qoutes} alt="" />
                    <p dir="rtl" className="cairo lg:text-2xl md:text-lg text-[0.8rem] font-medium">
                        ﻣﺆﺳﺴــﺔ اﻟﻜﻮد اﻟﺴــﻬﻞ ﻟﺘﻘﻨﻴﻪ ﻧﻈﻢ اﻟﻤﻌﻠﻮﻣﺎت ﺗﺄﺳﺴــﺖ ﻓﻰ ﺑﺪاﻳﺔ 2004،
                        ﺑﺈﺳــﻢ وردة الغروب ﻟﻠﺒﺮﻣﺠﻴــﺎت وﻫــﻲ ﺷــﺮﻛﺔ ﺳــﻌﻮدﻳﺔ وﺗﺤﻮﻟــﺖ اﻟــﻰ
                        ﻣﺆﺳﺴــﺔ اﻟﻜــﻮد اﻟﺴــﻬﻞ ﻟﺘﻘﻨﻴــﻪ ﻧﻈــﻢ اﻟﻤﻌﻠﻮﻣﺎت ﻓﻲ نهاية عام 2018.
                        وﻫــﻲ ﻣــﻦ اﻟﻤﺆﺳﺴــﺎت اﻟﻤﺘﺨﺼﺼــﺔ ﻓــﻰ ﺗﺼﻤﻴــﻢ و اعداد أﻧﻈﻤــﺔ
                        وﺑﺮاﻣــﺞ اﻟﺤﺎﺳــﺐ اﻵﻟــﻰ وﺗﻌﺘﺒــﺮ ﻣــﻦ اﻟﻤﺆﺳﺴــﺎت اﻟﻤﺘﻤﻴــﺰة ﻓــﻰ
                        ﻫــﺬا اﻟﻤﺠــﺎل ﻟﻘﺪرﺗﻬــﺎ ﻋﻠــﻰ ﺗﻄﺒﻴــﻖ الدورات اﻟﻤﺴــﺘﻨﺪﻳﺔ ﻋﻠـــﻰ
                        ﻣﺨﺘﻠﻒ درجات اﻟﺼﻌﻮﺑﺔ والتعقيد. وﺑﺮﻣﺠﺘﻬــﺎ ﺑصورة ﻣﺒﺴــﻄﻪ ﺗﺴــﻬﻞ
                        اﺳــﺘﺨﺪاﻣﻬﺎ وﺧﺎﺻــﺔ ﻟﻤــﻦ ﻟــﻢ ﻳﺴــﺒﻖ ﻟــﻪ اﺳــﺘﺨﺪﺎﻣ اﻟﺤﺎﺳــﺐ اﻵﻟــﻰ
                        ﻣــﻦ ﻗﺒــﻞ ﻛﺬﻟــﻚ ﻋﻤــﻞ ﺟﻤﻴــﻊ اﻟﺘﻄﺒﻴﻘــﺎت ﻣــﻦ دﻳﺴــﻚ ﺗــﻮب وﻛﻼوﺩ
                        وﻣﻮﺑﺎﻳــﻞ اﺑﻠﻜﻴﺸــﻦ وﻏﻴﺮة اﻟﻜﺜﻴﺮ والكثير .{" "}
                    </p>
                    <div className="end-qoute flex justify-end">
                        {" "}
                        <img src={qoutes2} alt="" />
                    </div>
                </div>

                <div dir="rtl" className="third relative lg:px-28 md:px-16 px-4">
                    <div className="shape3 absolute -left-40 lg:-left-20 md:top-1/4 top-1/2">
                        <img className="lg:w-4/5 w-1/2" src={shape3} alt="" />
                    </div>
                    <p className="md:text-3xl text-xl cairo text-center font-bold text-[#339ecc]">
                        الرؤية و الرسالة
                    </p>

                    <p className="md:text-3xl text-xl messiri font-bold m-0 mb-2 text-blue-500">
                        رؤيتنا
                    </p>
                    <p className="lg:text-xl md:text-lg text-[0.8rem] text-gray-700 m-0 mb-4 md:leading-9 messiri lg:font-[400] md:font-[500] font-medium lg:w-4/5">
                        رؤيتنا أن نكون الرواد في تقديم حلول ERP المتكاملة التي تساهم في
                        تطوير الأعمال الس
                        عودية. نسعى لتحقيق ذلك من خلال تقديم برامج مبتكرة
                        تعزز من الكفاءة التشغيلية وتدعم التحول الرقمي، بما يتوافق مع رؤية
                        المملكة 2030. نحن ملتزمون بتقديم حلول تقنية متقدمة تلبي احتياجات
                        السوق المحلي وتساعد الشركات على تحقيق أهدافها بكفاءة وفعالية. نهدف
                        إلى دعم الأعمال في تحسين عملياتها وتحقيق أقصى استفادة من الموارد من
                        خلال أنظمة ERP متكاملة تسهم في تبسيط الإجراءات وتسهيل إدارة الأعمال.
                        نحن نؤمن بأهمية الابتكار والتكنولوجيا في تعزيز القدرة التنافسية
                        للشركات، ونسعى دائمًا لتقديم حلول تكنولوجية تسهم في تعزيز النمو
                        المستدام والتطور المستمر في السوق السعودي. بفضل فريقنا المتخصص
                        وخبراتنا الواسعة في مجال التقنية، نعمل على توفير حلول مخصصة تلبي
                        احتياجات كل عميل، مما يساهم في تحقيق رؤيتهم الإستراتيجية وتعزيز
                        أدائهم العام.
                    </p>

                    <p className="md:text-3xl text-xl messiri font-bold m-0 mb-2 text-blue-500">
                        رسالتنا
                    </p>
                    <p className="lg:text-xl md:text-lg text-[0.8rem] text-gray-700 m-0 mb-4 md:leading-9 messiri lg:font-[400] md:font-[500] font-medium lg:w-4/5">
                        نحن في أيزي كود نقدم حلولاً مناسبة لمختلف الشركات، بغض النظر عن
                        اختلاف احتياجاتهم
                        أو قدراتهم المالية. نحن ملتزمون بتقديم حلول برمجية
                        مصممة خصيصًا لتلبية احتياجات عملائنا الفردية، مما يتيح لهم الاستفادة
                        القصوى من التكنولوجيا المتقدمة لتحقيق أهدافهم. فريقنا المتخصص يعمل
                        على فهم متعمق لاحتياجات كل عميل، مما يمكننا من تقديم حلول مخصصة
                        تتماشى مع متطلبات أعمالهم الفريدة. نحن نركز على تقديم حلول مرنة
                        وقابلة للتطوير، مما يضمن أن برامجنا يمكنها التكيف مع التغيرات
                        والتحديات التي قد تواجه الشركات على مر الزمن. بالإضافة إلى ذلك، نحن
                        نلتزم بتوفير دعم استثنائي على مدار الساعة لضمان نجاح عملائنا في كل
                        خطوة. نقدم تدريبًا شاملاً وفريق دعم فني محترف جاهز لمساعدتهم في حل
                        أي مشاكل قد تطرأ. نحن نؤمن بأهمية بناء شراكات طويلة الأمد مع عملائنا
                        من خلال تقديم خدماتنا بجودة عالية واهتمام دقيق بأدق التفاصيل. من
                        خلال حلولنا البرمجية المبتكرة والدعم المستمر، نسعى لتحقيق النجاح
                        المشترك وتمكين عملائنا من تحقيق مزايا تنافسية مستدامة في سوق العمل
                        المتغير.
                    </p>
                </div>


                <div dir="rtl" className="tenth flex flex-col justify-center items-center">
                    <p className="text-4xl cairo font-semibold">تواصل معنا</p>
                    <div className="contact w-4/5 mx-auto mb-7 rounded-lg p-5 bg-blue-200 bg-opacity-20">
                        <p className="almarai font-semibold text-lg md:text-2xl">فريق ايزي كود في خدمتك علي مدار الـ24 ساعة</p>
                        <div className="name-email md:flex gap-3">
                            <div className=" md:w-1/2">
                                <div className="name-label kufi text-xl mb-2">
                                    الأسم <span className="text-3xl cairo font-semibold text-blue-600">*</span>
                                </div>
                                <input className="w-full h-10 rounded-md border border-gray-400  0" type="text" />
                            </div>
                            <div className="email md:w-1/2">
                                <div className="name-label  mb-2 kufi text-xl">
                                    البريد الالكتروني <span className="text-3xl cairo font-semibold text-blue-600">*</span>
                                </div>
                                <input className="w-full  h-10 rounded-md border border-gray-400  " type="email" />
                            </div>

                        </div>
                        <div className="address-phone  mt-3 md:flex gap-3">
                            <div className="address md:w-1/2">
                                <div className="address-label mb-2  ">
                                    <span className="kufi text-xl">رقم الهاتف</span> <span className="text-3xl cairo font-semibold text-blue-600">*</span>
                                </div>
                                <input className="w-full h-10 rounded-md border border-gray-400  0" type="text" />
                            </div>
                            <div className="phone md:w-1/2">
                                <div className="phone-label  mb-2 kufi text-xl">
                                    <span className="kufi text-xl">العنوان</span> <span className="text-3xl cairo font-semibold text-blue-600">*</span>
                                </div>
                                <input className="w-full  h-10 rounded-md border border-gray-400  " type="email" />
                            </div>

                        </div>
                        <div className="message">
                            <div className="message-label mb-2 mt-3">
                                <span className="kufi text-xl">أخبرنا بكل ما تريد</span>
                            </div>
                            <input className="h-28 w-full  rounded-md border border-gray-400" type="text" name="" id="" />

                        </div>

                        <button type="submit"
                            className="relative float-end flex items-center px-8 py-3 overflow-hidden cairo text-lg font-medium transition-all bg-blue-500 shadow-2xl mt-6 rounded-md group"
                        >
                            <span
                                className="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-blue-700 rounded group-hover:-mr-4 group-hover:-mt-4"
                            >
                                <span
                                    className="absolute top-0 right-0 w-5 h-5 rotate-45 shadow-xl translate-x-1/2 -translate-y-1/2 bg-white"
                                ></span>
                            </span>
                            <span
                                className="absolute bottom-0 rotate-180 left-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-blue-700 rounded group-hover:-ml-4 group-hover:-mb-4"
                            >
                                <span
                                    className="absolute top-0 right-0 w-5 h-5 shadow-2xl rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"
                                ></span>
                            </span>
                            <span
                                className="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full bg-blue-600 rounded-md group-hover:translate-x-0"
                            ></span>
                            <span
                                className="relative w-full text-left text-lg text-white transition-colors duration-200 ease-in-out group-hover:text-white"
                            >ارسل الأن</span>

                        </button>




                    </div>

                </div>
            </div>
        </>
    );
}
