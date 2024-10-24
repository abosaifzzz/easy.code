import React from "react";
import finance1 from "../../assets/programs-icons/finance1.png";
import client from "../../assets/programs-icons/client.png";
import buyes from "../../assets/programs-icons/buyes.png";
import drayeb from "../../assets/programs-icons/drayeb.gif";
import dot from "../../assets/programs-icons/dot.png";
import windows from "../../assets/windows.png";
import reportss from "../../assets/reportss.png";
import suppliers from "../../assets/suppliers.png";
// import invoic from "../../assets/invoic.png";
import fin from "../../assets/fin1.png";
import cli from "../../assets/cli.png";
import su from "../../assets/su.png";
import ware from "../../assets/ware.png";
import empl from "../../assets/empl.png";
import store from "../../assets/store.png";
import cafe from "../../assets/cafe.png";
import app1 from "../../assets/app1.png";
import app2 from "../../assets/app2.png";
import app3 from "../../assets/app3.png";
import estkdam from "../../assets/estkdam.png";
import barber from "../../assets/barber.png";

import sup from "../../assets/sup.png";
import sup2 from "../../assets/sup2.png";
import sup3 from "../../assets/sup3.png";
import supqr from "../../assets/supqr.png";
import purchase from "../../assets/purchase.png";
import purchase1 from "../../assets/purchase1.png";
import purchase2 from "../../assets/purchase2.png";
import purchase4 from "../../assets/purchase4.png";
import purchase5 from "../../assets/purchase5.png";
import purchase6 from "../../assets/purchase6.png";
import purchase7 from "../../assets/purchase7.png";
import suppayment from "../../assets/suppayment.png";
import warehouse2 from "../../assets/warehouse2.png";
import warehouse3 from "../../assets/warehouse3.png";
import warehouse4 from "../../assets/warehouse4.png";
import warehouse5 from "../../assets/warehouse5.png";
import warehouse6 from "../../assets/warehouse6.png";
import sales from "../../assets/saless.png";
import sales2 from "../../assets/sales2.png";
import salee from "../../assets/salee.png";
import pur from "../../assets/pur.png";
// import  from "../../assets/.png";
// import 2 from "../../assets/2.png";
import price from "../../assets/price.png";
import report from "../../assets/report.png";
import representative from "../../assets/representative.png";
import modules from "../../assets/modules.png";
import barcode from "../../assets/barcode.png";
import responsive from "../../assets/responsive.png";
import finance from "../../assets/finance.png";
import periods from "../../assets/periods.png";
import invoice from "../../assets/invoice.png";
import invoices2 from "../../assets/invoices2.png";

import shapes from "../../assets/shapes.png";
import represent from "../../assets/represent.png";
import shape6 from "../../assets/shape6.svg";
import salaries from "../../assets/salaries.png";
import reports from "../../assets/reports.png";
import customers from "../../assets/customers.png";
import supervise from "../../assets/supervise.png";
import qr from "../../assets/qr.png";
import emp from "../../assets/emp.png";
import emp2 from "../../assets/emp2.png";
import emp3 from "../../assets/emp3.png";
import emp4 from "../../assets/emp4.png";
import emp5 from "../../assets/emp5.png";
import pos1 from "../../assets/pos1.png";
import pos2 from "../../assets/pos2.png";
import pos3 from "../../assets/pos3.png";
import pos4 from "../../assets/pos4.png";
import pos5 from "../../assets/pos5.png";
import pos6 from "../../assets/pos6.png";
import res1 from "../../assets/res1.png";
import cust from "../../assets/cust.png";
import cust1 from "../../assets/cust1.png";
import cust2 from "../../assets/cust2.png";
import cust3 from "../../assets/cust3.png";
import cust4 from "../../assets/cust4.png";
import cust5 from "../../assets/cust5.png";
import cust6 from "../../assets/cust6.png";
import trans from "../../assets/trans.png";
import trans1 from "../../assets/trans1.png";
import trans2 from "../../assets/trans2.png";
import trans3 from "../../assets/trans3.png";
import trans4 from "../../assets/trans4.png";
import trans5 from "../../assets/trans5.png";
import trans6 from "../../assets/trans6.png";



import saudi from "../../assets/saudi.png";
import factory from "../../assets/factory.png";
import recipe from "../../assets/recipe.png";
import export2 from "../../assets/export2.png";
import warehouse20 from "../../assets/warehouse20.png";
import warehouse21 from "../../assets/warehouse21.png";
import employees from "../../assets/employees.png";
import biotmen from "../../assets/biotmen.png";
import truck2 from "../../assets/truck2.png";


export default function CloudBussiness() {
    const cardData = [
        { title: "الحسابات العامة و مراكز التكلفة", description: "تدير المعاملات المالية وتتابع التكاليف بدقة لتحسين الأداء المالي.", imgSrc: fin },
        { title: "الـعـمـلاء", description: "تدير العلاقات مع العملاء وتحسن تجربة العميل وتعزز ولاءهم للشركة.", imgSrc: cli },
        { title: "المبيــعات", description: "تتابع العمليات البيعية وتحسن الإيرادات وتزيد من كفاءة الأداء التجاري.", imgSrc: sales2 },
        { title: "التخليص الجمركي ", description: "يدير إجراءات التخليص الجمركي، يتابع الشحنات، ويضمن الامتثال للمتطلبات القانونية.", imgSrc: salee },
        { title: "المشـتريـات", description: "تنظم عمليات الشراء، تضمن توافر المواد، وتحقق أفضل الأسعار.", imgSrc: pur },
        { title: "المــورديــن", description: "تدير العلاقات مع الموردين لضمان تدفق المواد بفعالية.", imgSrc: su },
        { title: "المـخازن", description: "تدير المخزون بدقة، تضمن توفر المواد، وتحسن الكفاءة.", imgSrc: ware },
        { title: "شئون الموظفين", description: "تدير شؤون الموظفين وتتابع الرواتب والإجازات وتحسن بيئة العمل.", imgSrc: empl },
        { title: "نقاط البيع", description: "تسهل عمليات البيع، تعزز تجربة العملاء، وتدير المعاملات المالية بفعالية.", imgSrc: store },
        { title: "المطاعم و الكافيهات", description: "تدير طلبات العملاء، تحسن الخدمة، وتتابع المخزون والعمليات اليومية بكفاءة.", imgSrc: cafe },
        { title: "موبايل ابليكاشن للمناديب", description: "يساعد المناديب في إدارة زيارات العملاء وتتبع المبيعات بكفاءة ومرونة.", imgSrc: app1 },
        { title: "موبايل ابليكاشن لأصحاب الشركات", description: "يمكن أصحاب الشركات من متابعة الأداء، إدارة العمليات واتخاذ القرارات بسهولة وفعالية.", imgSrc: app2 },
        { title: "موبايل ابليكاشن للعملاء", description: "يوفر للعملاء سهولة الوصول للخدمات، متابعة الطلبات والتواصل مع الشركة بفعالية.", imgSrc: app3 },
        { title: "مصانع البيوتمين", description: "يدير إنتاج البيوتمين، يتابع الجودة، ويضمن كفاءة عمليات التصنيع والامتثال.", imgSrc: biotmen },
        { title: "النقليات", description: "ينظم عمليات النقل، يتابع الشحنات، ويعزز كفاءة إدارة الأسطول واللوجستيات.", imgSrc: truck2 },
    ];
    return (
        <>
            <div dir="rtl" className="programs mt-36">
                <div className="e-card w-5/6 md:h-80 playing">
                    <div className="image"></div>
                    <div className="wave2 lg:w-[1200px] md:w-[400px] w-[200px] lg:h-[700px] md:h-[700px] h-[300px]"></div>
                    <div className="wave2 lg:w-[1200px] md:w-[400px] w-[200px] lg:h-[700px] md:h-[700px] h-[300px]"></div>
                    <div className="wave2 lg:w-[1200px] md:w-[400px] w-[200px] lg:h-[700px] md:h-[700px] h-[300px]"></div>

                    <div className="infotop text-white">
                        <p className="lg:text-8xl md:text-6xl text-3xl p-4 cairo font-semibold">
                            فاينال بيزنس
                        </p>
                        <p className="md:text-xl text-lg lg:w-1/2 md:w-2/3 font-medium text-slate-300 px-4 messiri">
                            يدير فروعك فى انحاء المملكه والعالم لتعمل من اى مكان ولا يشترط
                            شبكه داخليه فقط انترنت
                        </p>
                        <br />
                    </div>
                </div>

                <div className="contains w-full px-20  mb-9  mx-auto ">
                    <p className="md:text-4xl sm:text-3xl text-lg  w-full flex justify-center font-bold cairo">
                        {" "}
                        المميزات العامة{" "}
                        <span className="cairo md:text-4xl sm:text-3xl text-lg  ps-2 text-[#346dab] font-bold">
                            {" "}
                            للفاينال بيزنس{" "}
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

                    <div className="contains-data grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {cardData.map((card, index) => (
                            <div key={index} className="data-card hover:shadow-xl rounded-lg group flex gap-2 h-24">
                                <div className="icon-side w-1/4 flex justify-center items-center">
                                    <div className="iconn group-hover:bg-slate-200 w-20 h-20 rounded-full flex justify-center items-center bg-slate-100 shadow-xl">
                                        <img className="w-4/6" src={card.imgSrc} alt="" />
                                    </div>
                                </div>
                                <div className="card-data">
                                    <p className="text-lg group-hover:text-[#346dab] text-gray-700 mb-2 kufi font-semibold m-0">
                                        {card.title}
                                    </p>
                                    <p className="m-0 text-[0.9rem] text-gray-600 font-medium kufi">
                                        {card.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="drayeb lg:px-24 px-9 bg-blue-200  bg-opacity-20 p-4 flex">
                    <div className="drayeb-data lg:w-1/2 md:w-2/3 w-full md:p-11 p-8">
                        <span className="cairo md:text-5xl sm:text-3xl text-lg  ps-2 text-[#346dab] font-bold">
                            {" "}
                            الضرائب                        </span>
                        <p className="cairo text-9xl w-full flex ps-2">
                            <span className="h-1.5 w-10 bg-black me-1 rounded-lg">.</span>{" "}
                            <span className="h-1.5 w-2 bg-[#346dab] rounded-lg ms-1">.</span>
                            <span className="h-1.5 w-2 bg-[#346dab] rounded-lg ms-1">
                                .
                            </span>{" "}
                            <span className="h-1.5 w-2 bg-[#346dab] rounded-lg ms-1">.</span>{" "}
                        </p>
                        <div>
                            <p className="cairo text-blue-950 m-0 mt-4 lg:text-lg text-base font-bold ">
                                <span>
                                    <i className="text-blue-600 me-2  fa-solid fa-circle-notch"></i>
                                </span>{" "}
                                اعدادات الضرايب للعملاء والموردين وتحديد طبيعه كل منهما سواء داخلى او مصدر مستورد او دول مجلس تعاون خليجى لان النظام يحسب كل فئه بطريقه مختلفه حسب النظام السعودى
                            </p>
                            <p className="cairo text-blue-950 m-0 mt-4 lg:text-lg text-base font-bold ">
                                <span>
                                    <i className="text-blue-600 me-2  fa-solid fa-circle-notch"></i>
                                </span>{" "}
                                ثانيا تحديد نسبه الضريبه لكل صنف كذلك الأصناف المعفاه
                            </p>
                            <p className="cairo text-blue-950 m-0 mt-4 lg:text-lg text-base font-bold ">
                                <span>
                                    <i className="text-blue-600 me-2  fa-solid fa-circle-notch"></i>
                                </span>{" "}
                                الاقرار الضريبى واقرار الفحص الخاص للمبيعات والمشتريات
                            </p>
                            <p className="cairo text-blue-950 m-0 mt-4 lg:text-lg text-base font-bold ">
                                <span>
                                    <i className="text-blue-600 me-2  fa-solid fa-circle-notch"></i>
                                </span>{" "}
                                الاقرار الضريبى على مستوى الفرع او كامل الشركه كذلك الفحص
                            </p>
                            <p className="cairo text-blue-950 m-0 mt-4 lg:text-lg text-base font-bold ">
                                <span>
                                    <i className="text-blue-600 me-2  fa-solid fa-circle-notch"></i>
                                </span>{" "}
                                الفاتورة الالكترونيه بشقيها المبسطة والضريبيه الخاصه بعملائك
                            </p>
                            <p className="cairo text-blue-950 m-0 mt-4 lg:text-lg text-base font-bold ">
                                <span>
                                    <i className="text-blue-600 me-2  fa-solid fa-circle-notch"></i>
                                </span>{" "}
                                الربط مع الهيئه
                            </p>
                            <p className="cairo text-blue-950 m-0 mt-4 lg:text-lg text-base font-bold ">
                                <span>
                                    <i className="text-blue-600 me-2  fa-solid fa-circle-notch"></i>
                                </span>{" "}
                                عمل اى نوع من الضرلئب سواء للعملاء او الموردين
                            </p>
                            <p className="cairo text-blue-950 m-0 mt-4 lg:text-lg text-base font-bold ">
                                <span>
                                    <i className="text-blue-600 me-2  fa-solid fa-circle-notch"></i>
                                </span>{" "}
                                الربط والتكامل مع الهيئه
                            </p>
                        </div>

                    </div>
                    <div className="drayeb-img   lg:w-1/2 md:w-1/3 md:block hidden ">
                        <img className="w-4/5 mx-auto h-full" src={drayeb} alt="" />
                    </div>
                </div>
                <div className="public relative">
                    <p className="md:text-4xl sm:text-3xl text-lg  w-full flex justify-center font-bold cairo">
                        {" "}
                        لماذا برنامج الفاينال بيزنس هو
                        <span className="cairo md:text-4xl sm:text-3xl text-lg  ps-2 text-[#346dab] font-bold">
                            {" "}
                            الأختيار الأمثل؟{" "}
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
                    <div className="shape absolute -bottom-16 z-[-1]">
                        <img src={shape6} alt="" />
                    </div>
                    <div className="public-data  ">
                        <p className="messiri m-0 px-60 md:font-[1000] font-medium text-gray-500 md:text-lg text-base ">
                            برنامج Final Business يُعد أداة متكاملة تساهم في تحسين كفاءة العمليات التشغيلية، تقليل الأخطاء، ومتابعة الشحنات والمعاملات الجمركية بشكل يومي. كما أنه يوفر للشركات رؤية شاملة حول حساباتها المالية وحركة الأسطول، مما يعزز من قدرتها على اتخاذ قرارات استراتيجية بسرعة ودقة.







                        </p>

                        <div className="first px-20 w-full md:flex">
                            <div className="img md:w-1/2 flex justify-center">
                                <img className="w-4/5" src={windows} alt="" />
                            </div>
                            <div className="data md:w-1/2 flex flex-col justify-center">
                                <p className="cairo  text-blue-950 m-0 mt-4 md:text-lg text-base font-[650] ">
                                    <span>
                                        <i className="text-blue-600 me-2  fa-solid fa-circle-notch"></i>{" "}
                                    </span>{" "}يعمل البرنامج كتطبيق Windows يدعم التشغيل عبر الشبكة الداخلية وكذلك النظام السحابي (Cloud & Client Server).

                                </p>
                                <p className="cairo  text-blue-950 m-0 mt-4 md:text-lg text-base font-[650] ">
                                    <span>
                                        <i className="text-blue-600 me-2  fa-solid fa-circle-notch"></i>{" "}
                                    </span>{" "}البرنامج متوافق مع جميع إصدارات نظام تشغيل Windows.

                                </p>
                                <p className="cairo  text-blue-950 m-0 mt-4 md:text-lg text-base font-[650] ">
                                    <span>
                                        <i className="text-blue-600 me-2  fa-solid fa-circle-notch"></i>{" "}
                                    </span>{" "}
                                    يتيح الربط التلقائي بين جميع الموديولز، مع إمكانية تشغيل كل موديول بشكل مستقل.
                                </p>
                                <p className="cairo  text-blue-950 m-0 mt-4 md:text-lg text-base font-[650] ">
                                    <span>
                                        <i className="text-blue-600 me-2  fa-solid fa-circle-notch"></i>{" "}
                                    </span>
                                    يتميز البرنامج بسهولة الاستخدام، حيث تعمل جميع الشاشات بنفس الأسلوب وبشكل سلس وبسيط.
                                </p>
                            </div>
                        </div>
                        <div className="second lg:px-24 px-9 bg-blue-200 bg-opacity-20    w-full md:flex">
                            <div className="img md:w-1/2 md:hidden flex justify-center">
                                <img className="w-4/5" src={modules} alt="" />
                            </div>

                            <div className="data md:w-1/2 flex flex-col justify-center">
                                <p className="cairo  text-blue-950 m-0 mt-4 md:text-lg text-base font-[650] ">
                                    <span>
                                        <i className="text-blue-600 me-2  fa-solid fa-circle-notch"></i>{" "}
                                    </span>{" "}
                                    يحتفظ البرنامج بجميع الفواتير والسندات كأرشيف على الجهاز عند الطباعة.
                                </p>
                                <p className="cairo  text-blue-950 m-0 mt-4 md:text-lg text-base font-[650] ">
                                    <span>
                                        <i className="text-blue-600 me-2  fa-solid fa-circle-notch"></i>{" "}
                                    </span>{" "}
                                    يدعم البرنامج إنشاء فواتير مخزنية وفواتير خدمية.
                                </p>
                                <p className="cairo  text-blue-950 m-0 mt-4 md:text-lg text-base font-[650] ">
                                    <span>
                                        <i className="text-blue-600 me-2  fa-solid fa-circle-notch"></i>{" "}
                                    </span>{" "}
                                    يتيح البرنامج إمكانية تصدير البيانات إلى صيغ متعددة مثل Excel وPDF وغيرها.
                                </p>
                                <p className="cairo  text-blue-950 m-0 mt-4 md:text-lg text-base font-[650] ">
                                    <span>
                                        <i className="text-blue-600 me-2  fa-solid fa-circle-notch"></i>{" "}
                                    </span>{" "}
                                    يدعم البرنامج تطبيق الضرائب المختلفة على الفواتير وفقًا للمتطلبات.
                                </p>

                            </div>
                            <div className="img md:w-1/2  hidden md:flex justify-center">
                                <img className="w-4/5" src={modules} alt="" />
                            </div>
                        </div>

                        <div className="third my-7 lg:px-24 px-9 w-full md:flex">
                            <div className="img md:w-1/2 flex justify-start ">
                                <img className="w-full " src={responsive} alt="" />
                            </div>
                            <div className="data md:w-1/2 flex flex-col justify-center ">
                                <p className="cairo  text-blue-950 m-0 mt-4 md:text-lg text-base font-[650] ">
                                    <span>
                                        <i className="text-blue-600 me-2  fa-solid fa-circle-notch"></i>{" "}
                                    </span>{" "}
                                    يمكن تخصيص أنواع مختلفة من الضرائب للعملاء والموردين وفقًا للسياسات.
                                </p>

                                <p className="cairo  text-blue-950 m-0 mt-4 md:text-lg text-base font-[650] ">
                                    <span>
                                        <i className="text-blue-600 me-2  fa-solid fa-circle-notch"></i>{" "}
                                    </span>{" "}
                                    يدعم البرنامج إنشاء وتطبيق أي نوع جديد من الضرائب حسب الحاجة.
                                </p>
                                <p className="cairo  text-blue-950 m-0 mt-4 md:text-lg text-base font-[650] ">
                                    <span>
                                        <i className="text-blue-600 me-2  fa-solid fa-circle-notch"></i>{" "}
                                    </span>{" "}
                                    يتيح البرنامج خيارات متعددة لطرق السداد، مع إمكانية إضافة طرق جديدة بسهولة.
                                </p>

                                <p className="cairo  text-blue-950 m-0 mt-4 md:text-lg text-base font-[650] ">
                                    <span>
                                        <i className="text-blue-600 me-2  fa-solid fa-circle-notch"></i>{" "}
                                    </span>
                                    يدعم البرنامج إضافة الخصومات على فواتير المبيعات والمشتريات وتخصيصها حسب الحاجة.
                                </p>

                            </div>
                        </div>
                    </div>
                </div>
                <div className="public-accounting  w-full relative overflow-hidden ">
                    <div className="shapes absolute md:-right-16 -right-10 z-[-1] w-1/4 top-1/2">
                        <img src={shapes} alt="" />
                    </div>
                    <div className="shapes absolute md:-left-16 left-0 z-[-1] w-1/4 top-3/4">
                        <img src={shapes} alt="" />
                    </div>

                    <div className="heroo md:flex p-8 lg:px-24 px-9 bg-blue-200 bg-opacity-20 mt-9">
                        <div className="hero-img md:w-1/2 md:hidden flex justify-center">
                            <img className="lg:w-4/5 w-3/5  " src={finance} alt="" />
                        </div>
                        <div className="hero-data flex flex-col justify-center md:w-1/2">
                            <span className="cairo md:text-4xl sm:text-3xl text-lg  ps-2 text-[#346dab] font-bold">
                                {" "}
                                الحسابات العامة و مراكز التكلفة                        </span>
                            <p className="cairo text-9xl w-full flex ps-2">
                                <span className="h-1.5 w-10 bg-black me-1 rounded-lg">.</span>{" "}
                                <span className="h-1.5 w-2 bg-[#346dab] rounded-lg ms-1">.</span>
                                <span className="h-1.5 w-2 bg-[#346dab] rounded-lg ms-1">
                                    .
                                </span>{" "}
                                <span className="h-1.5 w-2 bg-[#346dab] rounded-lg ms-1">.</span>{" "}
                            </p>
                            <p className="lg:text-lg text-gray-600 font-bold text-lg messiri">
                                الحسابات العامة ومراكز التكلفة يمثلان أساسًا مهمًا في أي نظام
                                مالي متكامل. يهدف هذا الجزء إلى توفير أدوات لإدارة ومتابعة
                                الحسابات الرئيسية والفرعية للشركة بشكل دقيق ومنظم، مع تخصيص
                                مراكز تكلفة تساهم في توزيع المصروفات والإيرادات على المشاريع
                                والأنشطة المختلفة. سيمكنك هذا النظام من التحكم الكامل في
                                العمليات المالية وتحليل الأداء المالي بطريقة مبسطة وفعالة، مما
                                يسهل عملية اتخاذ القرارات الاستراتيجية بناءً على بيانات موثوقة
                                ودقيقة.
                            </p>
                        </div>
                        <div className="hero-img md:w-1/2 md:flex hidden justify-center">
                            <img className="w-4/5 " src={finance} alt="" />
                        </div>
                    </div>
                    <div className="third my-12 lg:px-24 px-9 w-full md:flex">
                        <div className="img md:w-1/3 flex justify-center ">
                            <img className="w-2/3  " src={periods} alt="" />
                        </div>
                        <div className="data md:w-1/2 flex flex-col justify-center ">
                            <p className="cairo  text-blue-950 m-0 mt-4 md:text-lg text-base font-[650] ">
                                <span>
                                    <i className="text-blue-600 me-2  fa-solid fa-circle-notch"></i>{" "}
                                </span>{" "}
                                إنشاء عدد غير محدود من الفترات المالية والتعامل معها بسهولة بغض
                                النظر عن الفترة المحددة.
                            </p>

                            <p className="cairo  text-blue-950 m-0 mt-4 md:text-lg text-base font-[650] ">
                                <span>
                                    <i className="text-blue-600 me-2  fa-solid fa-circle-notch"></i>{" "}
                                </span>{" "}
                                إمكانية ترقيم القيود والسندات (منفصل أو متصل) على مستوى كل فترة
                                أو جميع الفترات.
                            </p>
                            <p className="cairo  text-blue-950 m-0 mt-4 md:text-lg text-base font-[650] ">
                                <span>
                                    <i className="text-blue-600 me-2  fa-solid fa-circle-notch"></i>{" "}
                                </span>{" "}
                                إغلاق الفترات المالية شهريًا أو سنويًا تلقائيًا دون الحاجة إلى
                                تدخل المستخدم.
                            </p>

                            <p className="cairo  text-blue-950 m-0 mt-4 md:text-lg text-base font-[650] ">
                                <span>
                                    <i className="text-blue-600 me-2  fa-solid fa-circle-notch"></i>{" "}
                                </span>
                                دليل حسابات متوافق مع متطلبات الهيئة المالية.
                            </p>
                            <p className="cairo  text-blue-950 m-0 mt-4 md:text-lg text-base font-[650] ">
                                <span>
                                    <i className="text-blue-600 me-2  fa-solid fa-circle-notch"></i>{" "}
                                </span>{" "}
                                إمكانية تعديل آخر رقم في دليل الحسابات حسب حجم الشركة وعدد
                                العملاء وضخامة دليل الحسابات.
                            </p>
                            <p className="cairo  text-blue-950 m-0 mt-4 md:text-lg text-base font-[650] ">
                                <span>
                                    <i className="text-blue-600 me-2  fa-solid fa-circle-notch"></i>{" "}
                                </span>{" "}
                                تقسيم دليل الحسابات النهائي إلى رئيسي، فرعي، وعمليات.
                            </p>
                        </div>
                    </div>
                    <div className="fourth my-12 lg:px-24 px-9 w-full md:flex">
                        <div className="data md:w-1/2 flex flex-col justify-center ">
                            <p className="cairo  text-blue-950 m-0 mt-4 md:text-lg text-base font-[650] ">
                                <span>
                                    <i className="text-blue-600 me-2  fa-solid fa-circle-notch"></i>{" "}
                                </span>{" "}
                                إنشاء عدد غير محدود من الفترات المالية والتعامل معها بسهولة بغض
                                النظر عن الفترة المحددة.
                            </p>

                            <p className="cairo  text-blue-950 m-0 mt-4 md:text-lg text-base font-[650] ">
                                <span>
                                    <i className="text-blue-600 me-2  fa-solid fa-circle-notch"></i>{" "}
                                </span>{" "}
                                إمكانية ترقيم القيود والسندات (منفصل أو متصل) على مستوى كل فترة
                                أو جميع الفترات.
                            </p>
                            <p className="cairo  text-blue-950 m-0 mt-4 md:text-lg text-base font-[650] ">
                                <span>
                                    <i className="text-blue-600 me-2  fa-solid fa-circle-notch"></i>{" "}
                                </span>{" "}
                                إغلاق الفترات المالية شهريًا أو سنويًا تلقائيًا دون الحاجة إلى
                                تدخل المستخدم.
                            </p>

                            <p className="cairo  text-blue-950 m-0 mt-4 md:text-lg text-base font-[650] ">
                                <span>
                                    <i className="text-blue-600 me-2  fa-solid fa-circle-notch"></i>{" "}
                                </span>
                                دليل حسابات متوافق مع متطلبات الهيئة المالية.
                            </p>
                            <p className="cairo  text-blue-950 m-0 mt-4 md:text-lg text-base font-[650] ">
                                <span>
                                    <i className="text-blue-600 me-2  fa-solid fa-circle-notch"></i>{" "}
                                </span>{" "}
                                إمكانية تعديل آخر رقم في دليل الحسابات حسب حجم الشركة وعدد
                                العملاء وضخامة دليل الحسابات.
                            </p>
                            <p className="cairo  text-blue-950 m-0 mt-4 md:text-lg text-base font-[650] ">
                                <span>
                                    <i className="text-blue-600 me-2  fa-solid fa-circle-notch"></i>{" "}
                                </span>{" "}
                                تقسيم دليل الحسابات النهائي إلى رئيسي، فرعي، وعمليات.
                            </p>
                        </div>
                        <div className="img md:w-1/2 flex justify-center ">
                            <img className="w-4/5 " src={invoice} alt="" />
                        </div>
                    </div>
                    <div className="fivth my-12 px-9 w-full md:flex">
                        <div className="img md:w-1/2 flex justify-center ">
                            <img className="w-full" src={salaries} alt="" />
                        </div>

                        <div className="data md:w-1/2 flex flex-col justify-center ">
                            <p className="cairo  text-blue-950 m-0 mt-4 md:text-sm text-base font-[750] ">
                                <span>
                                    <i className="text-blue-600 me-2  fa-solid fa-circle-notch"></i>{" "}
                                </span>{" "}
                                إدارة سندات القبض والصرف ومتابعتها سواء للبنوك أو للخزائن أو
                                الحسابات الجارية وغيرها
                            </p>

                            <p className="cairo  text-blue-950 m-0 mt-4 md:text-sm text-base font-[750] ">
                                <span>
                                    <i className="text-blue-600 me-2  fa-solid fa-circle-notch"></i>{" "}
                                </span>{" "}
                                إدارة العمليات المحاسبية تلقائيًا من خلال إنشاء القيود وترحيلها
                                وتوزيعها على مراكز التكلفة المختلفة.
                            </p>
                            <p className="cairo  text-blue-950 m-0 mt-4 md:text-sm text-base font-[750] ">
                                <span>
                                    <i className="text-blue-600 me-2  fa-solid fa-circle-notch"></i>{" "}
                                </span>{" "}
                                العمل على عدد غير محدود من العملات وتغيير قيمها لكل سجل بشكل
                                ديناميكي.
                            </p>

                            <p className="cairo  text-blue-950 m-0 mt-4 md:text-sm text-base font-[750] ">
                                <span>
                                    <i className="text-blue-600 me-2  fa-solid fa-circle-notch"></i>{" "}
                                </span>
                                تطبيق سياسة توزيع المراكز وتحديد مراكز التكلفة.
                            </p>

                            <p className="cairo  text-blue-950 m-0 mt-4 md:text-sm text-base font-[750] ">
                                <span>
                                    <i className="text-blue-600 me-2  fa-solid fa-circle-notch"></i>{" "}
                                </span>{" "}
                                مقارنه بين شهر وشهر او فترة وفترة او سنه ماليه والأخرى
                            </p>
                            <p className="cairo  text-blue-950 m-0 mt-4 md:text-sm text-base font-[750] ">
                                <span>
                                    <i className="text-blue-600 me-2  fa-solid fa-circle-notch"></i>{" "}
                                </span>{" "}
                                إنشاء قيد لكل مستند، حيث يتم إنشاء سجل تلقائي لكل قيد يومي من
                                الفواتير (مبيعات، مشتريات، سندات قبض، سندات صرف) في الصناديق أو
                                البنوك أو الحسابات الجارية وغيرها.
                            </p>
                            <p className="cairo  text-blue-950 m-0 mt-4 md:text-sm text-base font-[750] ">
                                <span>
                                    <i className="text-blue-600 me-2  fa-solid fa-circle-notch"></i>{" "}
                                </span>{" "}
                                إنشاء قيود دورية بشكل دوري ومنظم.
                            </p>
                            <p className="cairo  text-blue-950 m-0 mt-4 md:text-sm text-base font-[750] ">
                                <span>
                                    <i className="text-blue-600 me-2  fa-solid fa-circle-notch"></i>{" "}
                                </span>{" "}
                                إنشاء عدد غير محدود من حسابات البنوك والصناديق والمصروفات
                                والحسابات الجارية، وإنشاء سندات قبض وصرف لكل منها بدقة
                                واحترافية.
                            </p>
                            <p className="cairo  text-blue-950 m-0 mt-4 md:text-sm text-base font-[750] ">
                                <span>
                                    <i className="text-blue-600 me-2  fa-solid fa-circle-notch"></i>{" "}
                                </span>{" "}
                                تقارير ضخمة ومفصلة عن العمليات المالية والمستندية.
                            </p>
                        </div>
                    </div>
                    <div className="fourth my-12 lg:px-24 px-9 w-full md:flex">
                        <div className="img md:w-1/2 md:hidden flex justify-center ">
                            <img className="w-full " src={reports} alt="" />
                        </div>

                        <div className="data md:w-1/2 flex flex-col justify-center ">
                            <p className="cairo  text-blue-950 m-0 mt-4 md:text-lg text-base font-[650] ">
                                <span>
                                    <i className="text-blue-600 me-2  fa-solid fa-circle-notch"></i>{" "}
                                </span>{" "}
                                الحصول على تقارير مستندية مفصلة ومقارنتها بالتقارير المحاسبية،
                                حيث يمكن العمل بالسياسة المستندية والمالية معًا.
                            </p>

                            <p className="cairo  text-blue-950 m-0 mt-4 md:text-lg text-base font-[650] ">
                                <span>
                                    <i className="text-blue-600 me-2  fa-solid fa-circle-notch"></i>{" "}
                                </span>{" "}
                                تقديم عدد كبير من التقارير المتخصصة، الإجمالية والتفصيلية، التي
                                تغطي كافة أجزاء البرنامج، مما يتيح اتخاذ القرارات المناسبة في
                                الوقت المناسب.
                            </p>


                            <p className="cairo  text-blue-950 m-0 mt-4 md:text-lg text-base font-[650] ">
                                <span>
                                    <i className="text-blue-600 me-2  fa-solid fa-circle-notch"></i>{" "}
                                </span>
                                تقارير الحسابات العامة تشمل: (تقارير المراجعة، التقارير
                                الختامية، تقارير مراكز التكلفة).
                            </p>
                            <p className="cairo  text-blue-950 m-0 mt-4 md:text-lg text-base font-[650] ">
                                <span>
                                    <i className="text-blue-600 me-2  fa-solid fa-circle-notch"></i>{" "}
                                </span>{" "}
                                تقارير الأرباح والخسائر وقائمة الدخل.
                            </p>
                            <p className="cairo  text-blue-950 m-0 mt-4 md:text-lg text-base font-[650] ">
                                <span>
                                    <i className="text-blue-600 me-2  fa-solid fa-circle-notch"></i>{" "}
                                </span>{" "}
                                إجراء جرد دوري ومستمر مع إنشاء قيودهما باحترافية
                            </p>
                            <p className="cairo  text-blue-950 m-0 mt-4 md:text-lg text-base font-[650] ">
                                <span>
                                    <i className="text-blue-600 me-2  fa-solid fa-circle-notch"></i>{" "}
                                </span>{" "}
                                إعداد النظام للتحكم الكامل بجميع أجزائه والعمل بسهولة وسلاسة.
                            </p>
                        </div>
                        <div className="img md:w-1/2 md:flex hidden justify-center ">
                            <img className="w-full " src={reports} alt="" />
                        </div>
                    </div>
                </div>
                <div className="clients relative overflow-hidden">
                    <div className="shapes absolute md:-right-16 -right-10 z-[-1] w-1/4 top-1/2">
                        <img src={shapes} alt="" />
                    </div>
                    <div className="shapes absolute md:-left-16 left-0 z-[-1] w-1/4 top-3/4">
                        <img src={shapes} alt="" />
                    </div>

                    <div className="clients-hero lg:px-24 px-9 w-full lg:flex bg-blue-200 bg-opacity-20">
                        <div className="hero-img flex justify-center lg:w-1/2">
                            <img className="lg:w-4/5" src={customers} alt="" />
                        </div>

                        <div className="hero-data flex flex-col justify-center lg:w-1/2">
                            <span className="cairo md:text-5xl sm:text-3xl text-lg  ps-2 text-[#346dab] font-bold">
                                {" "}
                                العملاء                        </span>
                            <p className="cairo text-9xl w-full flex ps-2">
                                <span className="h-1.5 w-10 bg-black me-1 rounded-lg">.</span>{" "}
                                <span className="h-1.5 w-2 bg-[#346dab] rounded-lg ms-1">.</span>
                                <span className="h-1.5 w-2 bg-[#346dab] rounded-lg ms-1">
                                    .
                                </span>{" "}
                                <span className="h-1.5 w-2 bg-[#346dab] rounded-lg ms-1">.</span>{" "}
                            </p>
                            <p className="text-base font-bold text-gray-600 leading-6 pe-14 kufi">
                                في هذا القسم، سيتم تقديم نظام إدارة العملاء الذي يتيح للشركات
                                تنظيم بيانات العملاء بسهولة وكفاءة. يشمل النظام تصنيفات العملاء،
                                قنوات التسويق، وطرق الدفع، مع إمكانية تخصيص الضرائب وفقًا لموقع
                                العميل سواء كان محليًا أو دوليًا. كما يدعم النظام إنشاء عميل
                                رئيسي مع فروع متعددة، وربط العملاء تلقائيًا بدليل الحسابات.
                                بالإضافة إلى ذلك، يمكن استخراج تقارير شاملة عن العملاء تشمل
                                الفواتير، المرتجعات، وأرصدة الحسابات، مما يساعد في تحسين إدارة
                                العلاقة مع العملاء بشكل عام.
                            </p>
                        </div>
                    </div>
                    <div className="third my-12 lg:px-24 px-9 w-full md:flex">
                        <div className="data md:w-1/2 flex flex-col justify-center ">
                            <p className="cairo  text-blue-950 m-0 mt-4 md:text-lg text-base font-[650] ">
                                <span>
                                    <i className="text-blue-600 me-2  fa-solid fa-circle-notch"></i>{" "}
                                </span>{" "}
                                إدارة العملاء بشكل احترافي: إمكانية إدارة العملاء بطرق متقدمة
                                واحترافية.
                            </p>


                            <p className="cairo  text-blue-950 m-0 mt-4 md:text-lg text-base font-[650] ">
                                <span>
                                    <i className="text-blue-600 me-2  fa-solid fa-circle-notch"></i>{" "}
                                </span>{" "}
                                تصنيفات العملاء: تنظيم العملاء ضمن تصنيفات مختلفة حسب الحاجة.
                            </p>

                            <p className="cairo  text-blue-950 m-0 mt-4 md:text-lg text-base font-[650] ">
                                <span>
                                    <i className="text-blue-600 me-2  fa-solid fa-circle-notch"></i>{" "}
                                </span>{" "}
                                أنشطة العملاء: متابعة الأنشطة المختلفة التي يقوم بها العملاء.
                            </p>
                            <p className="cairo  text-blue-950 m-0 mt-4 md:text-lg text-base font-[650] ">
                                <span>
                                    <i className="text-blue-600 me-2  fa-solid fa-circle-notch"></i>{" "}
                                </span>{" "}
                                قنوات التسويق: إمكانية ربط العملاء بقنوات التسويق المختلفة.
                            </p>
                        </div>
                        <div className="img md:w-1/2 flex justify-center ">
                            <img className="w-4/5  " src={supervise} alt="" />
                        </div>
                    </div>
                    <div className="fivth my-12 lg:px-24 px-9 w-full md:flex">
                        <div className="img md:w-1/2 flex justify-center ">
                            <img className="w-3/5" src={qr} alt="" />
                        </div>

                        <div className="data md:w-1/2 flex flex-col justify-center ">
                            <p className="cairo  text-blue-950 m-0 mt-4 md:text-lg text-base font-[650] ">
                                <span>
                                    <i className="text-blue-600 me-2  fa-solid fa-circle-notch"></i>{" "}
                                </span>{" "}
                                QR Code للعملاء: توفير رمز استجابة سريع (QR) يحتوي على بيانات
                                العنوان الوطني والرقم الضريبي للعميل.
                            </p>

                            <p className="cairo  text-blue-950 m-0 mt-4 md:text-lg text-base font-[650] ">
                                <span>
                                    <i className="text-blue-600 me-2  fa-solid fa-circle-notch"></i>{" "}
                                </span>{" "}
                                تحديد مستوى العميل: إمكانية ربط العميل على مستوى الشركة بأكملها
                                أو على مستوى فرع محدد، بناءً على الاختيار.
                            </p>


                            <p className="cairo  text-blue-950 m-0 mt-4 md:text-lg text-base font-[650] ">
                                <span>
                                    <i className="text-blue-600 me-2  fa-solid fa-circle-notch"></i>{" "}
                                </span>{" "}
                                كشف حساب العميل: كشف حساب تجميعي وتفصيلي، تقرير تسديدات
                                الفواتير، أعمار الديون لفواتير المبيعات، وكشف حساب العميل حسب
                                العملة، بالإضافة إلى أرصدة العملاء.
                            </p>
                            <p className="cairo  text-blue-950 m-0 mt-4 md:text-lg text-base font-[650] ">
                                <span>
                                    <i className="text-blue-600 me-2  fa-solid fa-circle-notch"></i>{" "}
                                </span>{" "}
                                ربط العملاء بدليل الحسابات تلقائيًا: إمكانية ربط العميل تلقائيًا
                                بدليل الحسابات المناسب له.
                            </p>
                        </div>
                    </div>

                    <div className="third my-12 lg:px-24 px-9 w-full md:flex">
                        <div className="data md:w-1/2 flex flex-col justify-center ">


                            <p className="cairo  text-blue-950 m-0 mt-4 md:text-lg text-base font-[650] ">
                                <span>
                                    <i className="text-blue-600 me-2  fa-solid fa-circle-notch"></i>{" "}
                                </span>{" "}
                                إمكانية إنشاء عميل رئيسي مع عملاء فرعيين (مثال: العثيم رئيسي
                                وفرعي العثيم فرع العليا، العثيم فرع الشفا).
                            </p>
                            <p className="cairo  text-blue-950 m-0 mt-4 md:text-lg text-base font-[650] ">
                                <span>
                                    <i className="text-blue-600 me-2  fa-solid fa-circle-notch"></i>{" "}
                                </span>{" "}
                                اتاحة الكثير من طرق دفع العملاء
                            </p>

                            <p className="cairo  text-blue-950 m-0 mt-4 md:text-lg text-base font-[650] ">
                                <span>
                                    <i className="text-blue-600 me-2  fa-solid fa-circle-notch"></i>{" "}
                                </span>{" "}
                                ربط العميل بقائمة سعر محددة من قوائم النظام المنشأة.
                            </p>
                            <p className="cairo  text-blue-950 m-0 mt-4 md:text-lg text-base font-[650] ">
                                <span>
                                    <i className="text-blue-600 me-2  fa-solid fa-circle-notch"></i>{" "}
                                </span>{" "}
                                تقارير العملاء على مستوى الشركة أو الفرع.
                            </p>
                        </div>
                        <div className="img md:w-1/2 flex justify-center ">
                            <img className="w-4/5  " src={saudi} alt="" />
                        </div>
                    </div>

                </div>
                <div className="sales">
                    <div className="sales-hero w-full lg:px-24 px-9 lg:flex bg-blue-200 bg-opacity-20">
                        <div className="hero-img flex justify-center lg:w-1/2">
                            <img className="lg:w-4/5" src={sales} alt="" />
                        </div>

                        <div className="hero-data flex flex-col justify-center lg:w-1/2">
                            <span className="cairo md:text-5xl sm:text-3xl text-lg  ps-2 text-[#346dab] font-bold">
                                {" "}
                                المبيعات                        </span>
                            <p className="cairo text-9xl w-full flex ps-2">
                                <span className="h-1.5 w-10 bg-black me-1 rounded-lg">.</span>{" "}
                                <span className="h-1.5 w-2 bg-[#346dab] rounded-lg ms-1">.</span>
                                <span className="h-1.5 w-2 bg-[#346dab] rounded-lg ms-1">
                                    .
                                </span>{" "}
                                <span className="h-1.5 w-2 bg-[#346dab] rounded-lg ms-1">.</span>{" "}
                            </p>
                            <p className="text-base font-bold text-gray-600 pe-14 kufi">
                                {" "}
                                قسم المبيعات هو جزء حيوي في أي شركة، حيث يوفر حلولاً متكاملة
                                لإدارة عمليات البيع بفعالية. يشمل القسم إعداد الفواتير
                                الإلكترونية، وإصدار فواتير مبيعات خاضعة لسياسات التسعير
                                المعتمدة، وإمكانية ربط الفواتير بالمخازن المختلفة. كما يتيح
                                إدارة عمليات البيع على مستوى الشركة أو الفروع، مع دعم لخيارات
                                مثل حجز البضائع، السحب على المكشوف، وإضافة الخصومات. بالإضافة
                                إلى ذلك، يوفر تقارير مفصلة للمبيعات والإدارة، مما يساعد في اتخاذ
                                القرارات المناسبة وتحسين الأداء.
                            </p>
                        </div>
                    </div>
                    <div className="third my-12 lg:px-24 px-9 w-full md:flex">
                        <div className="data md:w-1/2 flex flex-col justify-center ">
                            <p className="cairo  text-blue-950 m-0 mt-4  text-base font-[700] ">
                                <span>
                                    <i className="text-blue-600 me-2  fa-solid fa-circle-notch"></i>{" "}
                                </span>{" "}
                                الفاتورة الإلكترونية: نظام يتيح إنشاء وتقديم الفواتير بشكل
                                إلكتروني وفقًا للمعايير القانونية والمحاسبية الحديثة، مما يسهم
                                في تسهيل عمليات التدقيق والامتثال.
                            </p>

                            <p className="cairo  text-blue-950 m-0 mt-4  text-base font-[700] ">
                                <span>
                                    <i className="text-blue-600 me-2  fa-solid fa-circle-notch"></i>{" "}
                                </span>{" "}
                                إمكانية إعداد أنماط فواتير مبيعات خاضعة لسياسات التسعير: يتيح
                                إنشاء فواتير مبيعات مخصصة بناءً على سياسات التسعير المحددة
                                مسبقًا، مما يساعد على تحقيق مرونة في تقديم العروض للعملاء.
                            </p>
                            <p className="cairo  text-blue-950 m-0 mt-4  text-base font-[700] ">
                                <span>
                                    <i className="text-blue-600 me-2  fa-solid fa-circle-notch"></i>{" "}
                                </span>{" "}
                                إصدار فواتير على مستوى الشركة أو الفروع: يمكن إعداد الفواتير
                                وفقًا لنطاق الشركة بأكملها أو تخصيصها لفرع معين، مما يسمح بإدارة
                                مركزية أو لامركزية حسب الحاجة.
                            </p>

                            <p className="cairo  text-blue-950 m-0 mt-4  text-base font-[700] ">
                                <span>
                                    <i className="text-blue-600 me-2  fa-solid fa-circle-notch"></i>{" "}
                                </span>{" "}
                                ربط الفواتير بمخزن أو أكثر: يتيح هذا الربط تتبع المخزون بدقة
                                وربط كل فاتورة بمخزن محدد أو عدة مخازن لضمان إدارة فعالة
                                للموارد.
                            </p>
                            <p className="cairo  text-blue-950 m-0 mt-4  text-base font-[700] ">
                                <span>
                                    <i className="text-blue-600 me-2  fa-solid fa-circle-notch"></i>{" "}
                                </span>{" "}
                                اختيار المخازن في نفس الفاتورة: يمكن تحديد مخازن متعددة ضمن
                                فاتورة واحدة، مما يتيح مرونة أكبر في إدارة المخزون وتلبية
                                الطلبات المتنوعة.
                            </p>
                        </div>
                        <div className="img md:w-1/2 flex justify-center ">
                            <img className="w-4/5  " src={invoices2} alt="" />
                        </div>
                    </div>
                    <div className="fivth my-12 lg:px-24 px-9 w-full md:flex">
                        <div className="img md:w-1/2 flex justify-center ">
                            <img className="w-4/5" src={invoices2} alt="" />
                        </div>

                        <div className="data md:w-1/2 flex flex-col justify-center ">
                            <p className="cairo  text-blue-950 m-0 mt-4  text-base font-[700] ">
                                <span>
                                    <i className="text-blue-600 me-2  fa-solid fa-circle-notch"></i>{" "}
                                </span>{" "}
                                فواتير مبيعات تؤثر في المخازن: الفواتير التي تؤدي إلى تعديل
                                المخزون الفعلي بعد إتمام عملية البيع، بما في ذلك خصم الكميات من
                                المخازن.
                            </p>

                            <p className="cairo  text-blue-950 m-0 mt-4  text-base font-[700] ">
                                <span>
                                    <i className="text-blue-600 me-2  fa-solid fa-circle-notch"></i>{" "}
                                </span>{" "}
                                فواتير مبيعات لا تؤثر في المخازن (فواتير خدمية): تخص هذه
                                الفواتير خدمات لا تؤثر على المخزون، مثل الخدمات الاستشارية أو
                                الصيانة.
                            </p>

                            <p className="cairo  text-blue-950 m-0 mt-4  text-base font-[700] ">
                                <span>
                                    <i className="text-blue-600 me-2  fa-solid fa-circle-notch"></i>{" "}
                                </span>
                                السداد على الفواتير بفواتير مبيعات متعددة السدادات: يدعم النظام
                                تعدد طرق السداد على الفواتير، بما في ذلك النقد، الفيزا، الشبكات
                                وغيرها..
                            </p>
                            <p className="cairo  text-blue-950 m-0 mt-4  text-base font-[700] ">
                                <span>
                                    <i className="text-blue-600 me-2  fa-solid fa-circle-notch"></i>{" "}
                                </span>
                                الإضافات والخصومات على الفواتير: إمكانية إضافة أو خصم مبالغ
                                معينة أو نسبة مئوية مباشرة على الفواتير لتحسين إدارة التسعير
                                والترويج.
                            </p>
                        </div>
                    </div>
                    <div className="third my-12 lg:px-24 px-9 w-full md:flex">
                        <div className="data md:w-1/2 flex flex-col justify-center ">
                            <p className="cairo  text-blue-950 m-0 mt-4 md:text-lg text-base font-[650] ">
                                <span>
                                    <i className="text-blue-600 me-2  fa-solid fa-circle-notch"></i>{" "}
                                </span>{" "}
                                استخدام الباركود أو اختيار الصنف برقم أو عبر الإدخال: دعم النظام
                                لإدخال المنتجات بواسطة ماسح الباركود أو بإدخال رقم الصنف أو
                                بالاختيار اليدوي، مما يسهل عمليات البيع.
                            </p>

                            <p className="cairo  text-blue-950 m-0 mt-4 md:text-lg text-base font-[650] ">
                                <span>
                                    <i className="text-blue-600 me-2  fa-solid fa-circle-notch"></i>{" "}
                                </span>{" "}
                                حجز بضاعة: إمكانية حجز المنتجات لفترة محددة لعملاء معينين، مع
                                الحفاظ على سجل للمنتجات المحجوزة حتى استكمال العملية.
                            </p>


                            <p className="cairo  text-blue-950 m-0 mt-4 md:text-lg text-base font-[650] ">
                                <span>
                                    <i className="text-blue-600 me-2  fa-solid fa-circle-notch"></i>{" "}
                                </span>{" "}
                                الخصم بالقيمة أو النسبة: يمكن تطبيق الخصم على المنتجات بشكل
                                مباشر، إما عبر خصم قيمة ثابتة أو نسبة مئوية، حسب سياسات التسعير.
                            </p>
                            <p className="cairo  text-blue-950 m-0 mt-4 md:text-lg text-base font-[650] ">
                                <span>
                                    <i className="text-blue-600 me-2  fa-solid fa-circle-notch"></i>{" "}
                                </span>{" "}
                                عمل خصم على مستوى الصنف ويؤثر في الضريبة: إمكانية تطبيق خصم على
                                مستوى المنتج المحدد، بحيث يتأثر حساب الضريبة بشكل صحيح بعد تطبيق
                                الخصم.
                            </p>
                        </div>
                        <div className="img md:w-1/2 flex justify-center ">
                            <img className="w-3/5  " src={barcode} alt="" />
                        </div>
                    </div>
                    <div className="fivth my-12 lg:px-24 px-9 w-full md:flex">
                        <div className="img md:w-1/2 flex justify-center ">
                            <img className="w-4/5" src={price} alt="" />
                        </div>

                        <div className="data md:w-1/2 flex flex-col justify-center ">
                            <p className="cairo  text-blue-950 m-0 mt-4 md:text-lg text-base font-[650] ">
                                <span>
                                    <i className="text-blue-600 me-2  fa-solid fa-circle-notch"></i>{" "}
                                </span>{" "}
                                عرض سعر: يتيح إصدار عروض أسعار مخصصة للعملاء قبل إتمام عملية
                                البيع، مما يعزز من تجربة العميل ويزيد من فرص إتمام الصفقات.
                            </p>

                            <p className="cairo  text-blue-950 m-0 mt-4 md:text-lg text-base font-[650] ">
                                <span>
                                    <i className="text-blue-600 me-2  fa-solid fa-circle-notch"></i>{" "}
                                </span>{" "}
                                فواتير مبيعات لا تؤثر في المخازن (فواتير خدمية): تخص هذه
                                الفواتير خدمات لا تؤثر على المخزون، مثل الخدمات الاستشارية أو
                                الصيانة.
                            </p>
                            <p className="cairo  text-blue-950 m-0 mt-4 md:text-lg text-base font-[650] ">
                                <span>
                                    <i className="text-blue-600 me-2  fa-solid fa-circle-notch"></i>{" "}
                                </span>{" "}
                                مرتجعات مبيعات (كريديت نوت): نظام لإدارة المرتجعات من العملاء
                                بشكل سلس، مع إصدار كريديت نوت لتعويض العميل عن المنتجات
                                المرتجعة.
                            </p>

                            <p className="cairo  text-blue-950 m-0 mt-4 md:text-lg text-base font-[650] ">
                                <span>
                                    <i className="text-blue-600 me-2  fa-solid fa-circle-notch"></i>{" "}
                                </span>{" "}
                                مرتجعات مبيعات تؤثر في المخازن: هذه المرتجعات تؤدي إلى إعادة
                                المنتجات إلى المخزون الفعلي عند استلامها من العميل.
                            </p>
                            <p className="cairo  text-blue-950 m-0 mt-4 md:text-lg text-base font-[650] ">
                                <span>
                                    <i className="text-blue-600 me-2  fa-solid fa-circle-notch"></i>{" "}
                                </span>{" "}
                                مرتجعات مبيعات لا تؤثر في المخازن (فواتير خدمية): تخص المرتجعات
                                المرتبطة بالخدمات التي لا تؤثر على المخزون مثل الخدمات المقدمة
                                أو العقود الاستشارية.
                            </p>
                        </div>
                    </div>
                    <div className="third my-12 lg:px-24 px-9 w-full md:flex">
                        <div className="data md:w-1/2 flex flex-col justify-center ">
                            <p className="cairo  text-blue-950 m-0 mt-4 md:text-lg text-base font-[650] ">
                                <span>
                                    <i className="text-blue-600 me-2  fa-solid fa-circle-notch"></i>{" "}
                                </span>{" "}
                                تقارير المبيعات: يتيح النظام إنشاء تقارير مبيعات شاملة لتحليل
                                الأداء الشهري أو السنوي، ومتابعة تحقيق الأهداف.
                            </p>

                            <p className="cairo  text-blue-950 m-0 mt-4 md:text-lg text-base font-[650] ">
                                <span>
                                    <i className="text-blue-600 me-2  fa-solid fa-circle-notch"></i>{" "}
                                </span>{" "}
                                التقارير الإدارية وتقارير المبيعات: تشمل التقارير المولدة بيانات
                                إدارية مهمة وتحليلات تفصيلية للمبيعات، مما يدعم اتخاذ القرارات
                                الإدارية على مستوى أعلى.
                            </p>
                            <p className="cairo  text-blue-950 m-0 mt-4 md:text-lg text-base font-[650] ">
                                <span>
                                    <i className="text-blue-600 me-2  fa-solid fa-circle-notch"></i>{" "}
                                </span>{" "}
                                ضبط التكلفة على فواتير المبيعات: يمكن تعديل وتحديد التكلفة
                                الفعلية للمنتجات في الفواتير، مما يساعد في حساب الأرباح والخسائر
                                بدقة.
                            </p>

                            <p className="cairo  text-blue-950 m-0 mt-4 md:text-lg text-base font-[650] ">
                                <span>
                                    <i className="text-blue-600 me-2  fa-solid fa-circle-notch"></i>{" "}
                                </span>
                                الإضافات والخصومات على الفواتير: إمكانية إضافة أو خصم مبالغ
                                معينة أو نسبة مئوية مباشرة على الفواتير لتحسين إدارة التسعير
                                والترويج.
                            </p>
                        </div>
                        <div className="img md:w-1/2 flex justify-center ">
                            <img className="w-3/5  " src={report} alt="" />
                        </div>
                    </div>
                </div>

                <div className="suppliers">
                    <div className="suppliers-hero lg:px-24 px-9 w-full lg:flex bg-blue-200 bg-opacity-20">
                        <div className="hero-img flex justify-center lg:w-1/2">
                            <img className="w-4/5 " src={sup} alt="" />
                        </div>

                        <div className="hero-data flex flex-col justify-center lg:w-1/2">
                            <p className="text-5xl font-semibold cairo m-0 text-blue-400">
                                {" "}
                                الموردين{" "}
                            </p>
                            <p className="text-sm font-bold text-gray-600x pe-14 kufi">
                                يُعتبر قسم الموردين من الأقسام الحيوية في أي مؤسسة، حيث يلعب
                                دورًا محوريًا في تنظيم عمليات الشراء والتوريد وضمان توفر المواد
                                والخدمات اللازمة لاستمرارية العمليات التشغيلية. يسعى هذا القسم
                                إلى بناء علاقات قوية ومستدامة مع الموردين المحليين والدوليين، مع
                                مراعاة الجودة، الأسعار، والالتزام بالمواعيد. من خلال نظام إدارة
                                الموردين الفعّال، يتم تحقيق التكامل بين عمليات التوريد والحسابات
                                المالية لضمان سير العمل بسلاسة وكفاءة، بالإضافة إلى تقديم تقارير
                                دقيقة تساعد في اتخاذ القرارات الاستراتيجية المتعلقة بالمشتريات
                                والعلاقات مع الموردين.
                            </p>
                        </div>
                    </div>
                    <div className="third my-12 lg:px-24 px-9 w-full md:flex">
                        <div className="data md:w-1/2 flex flex-col justify-center ">
                            <p className="cairo text-blue-950 m-0 mt-4 md:text-lg text-base font-[650]">
                                <span>
                                    <i className="text-blue-600 me-2 fa-solid fa-circle-notch"></i>
                                </span>
                                إمكانية إدارة الموردين بشكل احترافي وفعال.
                            </p>

                            <p className="cairo text-blue-950 m-0 mt-4 md:text-lg text-base font-[650]">
                                <span>
                                    <i className="text-blue-600 me-2 fa-solid fa-circle-notch"></i>
                                </span>
                                اختيار نوع المورد (محلي أو خارجي) مع احتساب الضريبة المناسبة لكل
                                نوع.
                            </p>

                            <p className="cairo text-blue-950 m-0 mt-4 md:text-lg text-base font-[650]">
                                <span>
                                    <i className="text-blue-600 me-2 fa-solid fa-circle-notch"></i>
                                </span>
                                تصنيفات شاملة لتصنيف الموردين حسب الفئات المختلفة.
                            </p>

                            <p className="cairo text-blue-950 m-0 mt-4 md:text-lg text-base font-[650]">
                                <span>
                                    <i className="text-blue-600 me-2 fa-solid fa-circle-notch"></i>
                                </span>
                                إمكانية إنشاء مورد رئيسي يندرج تحته عدة عملاء فرعيين، مثال:
                                "العثيم" كمورد رئيسي، و"العثيم فرع العليا" و"العثيم فرع الشفا"
                                كعملاء فرعيين.
                            </p>
                        </div>
                        <div className="img md:w-1/2 flex justify-center ">
                            <img className="w-4/5  " src={sup2} alt="" />
                        </div>
                    </div>
                    <div className="fivth my-12 lg:px-24 px-9 w-full md:flex">
                        <div className="img md:w-1/2 flex justify-center ">
                            <img className="w-4/5" src={supqr} alt="" />
                        </div>

                        <div className="data md:w-1/2 flex flex-col justify-center ">
                            <p className="cairo text-blue-950 m-0 mt-4 md:text-lg text-base font-[650]">
                                <span>
                                    <i className="text-blue-600 me-2 fa-solid fa-circle-notch"></i>
                                </span>
                                الربط التلقائي للموردين بدليل الحسابات المالي.
                            </p>

                            <p className="cairo text-blue-950 m-0 mt-4 md:text-lg text-base font-[650]">
                                <span>
                                    <i className="text-blue-600 me-2 fa-solid fa-circle-notch"></i>
                                </span>
                                إدراج رمز QR للموردين يتضمن بيانات العنوان الوطني والرقم
                                الضريبي.
                            </p>
                            <p className="cairo text-blue-950 m-0 mt-4 md:text-lg text-base font-[650]">
                                <span>
                                    <i className="text-blue-600 me-2 fa-solid fa-circle-notch"></i>
                                </span>
                                اختيار نوع المورد (محلي أو خارجي) مع احتساب الضريبة المناسبة لكل
                                نوع.
                            </p>
                        </div>
                    </div>
                    <div className="third my-12 lg:px-24 px-9 w-full md:flex">
                        <div className="data md:w-1/2 flex flex-col justify-center ">
                            <p className="cairo text-blue-950 m-0 mt-4 md:text-lg text-base font-[650]">
                                <span>
                                    <i className="text-blue-600 me-2 fa-solid fa-circle-notch"></i>
                                </span>
                                طرق دفع متعددة للموردين.
                            </p>

                            <p className="cairo text-blue-950 m-0 mt-4 md:text-lg text-base font-[650]">
                                <span>
                                    <i className="text-blue-600 me-2 fa-solid fa-circle-notch"></i>
                                </span>
                                إمكانية تسجيل المورد كعميل في نفس الوقت.
                            </p>

                            <p className="cairo text-blue-950 m-0 mt-4 md:text-lg text-base font-[650]">
                                <span>
                                    <i className="text-blue-600 me-2 fa-solid fa-circle-notch"></i>
                                </span>
                                يركز على كيفية معالجة المدفوعات المالية وتسهيل عملية التعامل مع
                                الموردين سواء كانوا موردين فقط أو يجمعون بين صفة العميل والمورد.{" "}
                            </p>
                        </div>
                        <div className="img md:w-1/2 flex justify-center ">
                            <img className="w-4/5  " src={suppayment} alt="" />
                        </div>
                    </div>
                    <div className="fivth my-12 px-9 w-full md:flex">
                        <div className="img md:w-1/2 flex justify-center ">
                            <img className="w-4/5" src={sup3} alt="" />
                        </div>

                        <div className="data md:w-1/2 flex flex-col justify-center ">
                            <p className="cairo text-blue-950 m-0 mt-4 md:text-lg text-base font-[650]">
                                <span>
                                    <i className="text-blue-600 me-2 fa-solid fa-circle-notch"></i>
                                </span>
                                إدارة أنشطة الموردين بكل سهولة.
                            </p>

                            <p className="cairo text-blue-950 m-0 mt-4 md:text-lg text-base font-[650]">
                                <span>
                                    <i className="text-blue-600 me-2 fa-solid fa-circle-notch"></i>
                                </span>
                                تقارير شاملة للموردين على مستوى الشركة أو الفروع.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="payments">
                    <div className="payment-hero w-full lg:px-24 px-9 lg:flex bg-blue-200 bg-opacity-20">
                        <div className="hero-img flex justify-center lg:w-1/2">
                            <img className="w-4/5 " src={purchase} alt="" />
                        </div>

                        <div className="hero-data flex flex-col justify-center lg:w-1/2">
                            <span className="cairo md:text-5xl sm:text-3xl text-lg  ps-2 text-[#346dab] font-bold">
                                {" "}
                                المشتريات                        </span>
                            <p className="cairo text-9xl w-full flex ps-2">
                                <span className="h-1.5 w-10 bg-black me-1 rounded-lg">.</span>{" "}
                                <span className="h-1.5 w-2 bg-[#346dab] rounded-lg ms-1">.</span>
                                <span className="h-1.5 w-2 bg-[#346dab] rounded-lg ms-1">
                                    .
                                </span>{" "}
                                <span className="h-1.5 w-2 bg-[#346dab] rounded-lg ms-1">.</span>{" "}
                            </p>
                            <p className="text-sm font-bold text-gray-600 pe-14 kufi">
                                يُعد قسم المشتريات من الأقسام الأساسية داخل أي مؤسسة، حيث يضطلع
                                بمسؤولية إدارة عملية شراء المواد والخدمات اللازمة لضمان سير
                                العمليات التشغيلية بكفاءة وفعالية. يعمل هذا القسم على اختيار
                                الموردين المناسبين، وإتمام الصفقات التجارية، وضمان توافر المواد
                                بالجودة المطلوبة وفي الوقت المحدد. كما يساهم في تحسين الأداء
                                المالي من خلال التفاوض على أفضل الأسعار وشروط الدفع، ومتابعة
                                الفواتير والمرتجعات، بالإضافة إلى تنفيذ سياسات الشراء والخصومات
                                التي تتوافق مع أهداف المؤسسة. بفضل دوره المحوري، يسهم قسم
                                المشتريات في تحقيق التوازن بين توفير التكاليف وتلبية احتياجات
                                العمل، مما يعزز من تنافسية المؤسسة واستدامتها في السوق.
                            </p>
                        </div>
                    </div>
                    <div className="third my-12 lg:px-24 px-9 w-full md:flex">
                        <div className="data md:w-1/2 flex flex-col justify-center ">
                            <p className="cairo text-blue-950 m-0 mt-4 md:text-lg text-base font-[650]">
                                <span>
                                    <i className="text-blue-600 me-2 fa-solid fa-circle-notch"></i>
                                </span>
                                إمكانية إنشاء أنماط فواتير للمشتريات والمرتجعات.
                            </p>

                            <p className="cairo text-blue-950 m-0 mt-4 md:text-lg text-base font-[650]">
                                <span>
                                    <i className="text-blue-600 me-2 fa-solid fa-circle-notch"></i>
                                </span>
                                إعداد أنماط فواتير المشتريات على مستوى الشركة أو الفروع.
                            </p>

                            <p className="cairo text-blue-950 m-0 mt-4 md:text-lg text-base font-[650]">
                                <span>
                                    <i className="text-blue-600 me-2 fa-solid fa-circle-notch"></i>
                                </span>
                                ربط الفواتير بمخزن واحد أو أكثر.
                            </p>

                            <p className="cairo text-blue-950 m-0 mt-4 md:text-lg text-base font-[650]">
                                <span>
                                    <i className="text-blue-600 me-2 fa-solid fa-circle-notch"></i>
                                </span>
                                اختيار المخازن المختلفة ضمن نفس الفاتورة.
                            </p>

                        </div>
                        <div className="img md:w-1/2 flex justify-center ">
                            <img className="w-4/5  " src={purchase1} alt="" />
                        </div>
                    </div>

                    <div className="third my-12 lg:px-24 px-9 w-full md:flex">
                        <div className="data md:w-1/2 flex flex-col justify-center ">
                            <p className="cairo text-blue-950 m-0 mt-4 md:text-lg text-base font-[650]">
                                <span>
                                    <i className="text-blue-600 me-2 fa-solid fa-circle-notch"></i>
                                </span>
                                فواتير المشتريات التي تؤثر على المخازن.
                            </p>

                            <p className="cairo text-blue-950 m-0 mt-4 md:text-lg text-base font-[650]">
                                <span>
                                    <i className="text-blue-600 me-2 fa-solid fa-circle-notch"></i>
                                </span>
                                فواتير المشتريات التي لا تؤثر على المخازن (فواتير خدمات).
                            </p>



                            <p className="cairo text-blue-950 m-0 mt-4 md:text-lg text-base font-[650]">
                                <span>
                                    <i className="text-blue-600 me-2 fa-solid fa-circle-notch"></i>
                                </span>
                                مرتجعات المشتريات (كريدت نوت) وتأثيرها على المخازن.
                            </p>

                            <p className="cairo text-blue-950 m-0 mt-4 md:text-lg text-base font-[650]">
                                <span>
                                    <i className="text-blue-600 me-2 fa-solid fa-circle-notch"></i>
                                </span>
                                مرتجعات المشتريات التي لا تؤثر على المخازن (كريدت نوت).
                            </p>
                        </div>
                        <div className="img md:w-1/2 flex justify-center ">
                            <img className="w-4/5  " src={purchase4} alt="" />
                        </div>
                    </div>
                    <div className="fivth my-12 px-9 w-full md:flex">
                        <div className="img md:w-1/2 flex justify-center ">
                            <img className="w-4/5" src={purchase5} alt="" />
                        </div>

                        <div className="data md:w-1/2 flex flex-col justify-center ">
                            <p className="cairo text-blue-950 m-0 mt-4 md:text-lg text-base font-[650]">
                                <span>
                                    <i className="text-blue-600 me-2 fa-solid fa-circle-notch"></i>
                                </span>
                                السداد المتعدد لفواتير المبيعات (نقدًا، فيزا، شبكة، وغيرها).
                            </p>

                            <p className="cairo text-blue-950 m-0 mt-4 md:text-lg text-base font-[650]">
                                <span>
                                    <i className="text-blue-600 me-2 fa-solid fa-circle-notch"></i>
                                </span>
                                إمكانية إضافة الخصومات والإضافات على الفواتير.
                            </p>
                            <p className="cairo text-blue-950 m-0 mt-4 md:text-lg text-base font-[650]">
                                <span>
                                    <i className="text-blue-600 me-2 fa-solid fa-circle-notch"></i>
                                </span>
                                تطبيق الخصومات على مستوى الصنف مع تأثيره على الضريبة.
                            </p>
                            <p className="cairo text-blue-950 m-0 mt-4 md:text-lg text-base font-[650]">
                                <span>
                                    <i className="text-blue-600 me-2 fa-solid fa-circle-notch"></i>
                                </span>
                                الخصم يمكن أن يكون بنسبة أو بقيمة ثابتة.
                            </p>
                        </div>
                    </div>
                    <div className="third my-12 px-9 w-full md:flex">
                        <div className="data md:w-1/2 flex flex-col justify-center ">
                            <p className="cairo text-blue-950 m-0 mt-4 md:text-lg text-base font-[650]">
                                <span>
                                    <i className="text-blue-600 me-2 fa-solid fa-circle-notch"></i>
                                </span>
                                استخدام الباركود أو إدخال الصنف عن طريق الضغط على "Enter" أو
                                باستخدام رقم الصنف.
                            </p>


                        </div>
                        <div className="img md:w-1/2 flex justify-center ">
                            <img className="w-4/5  " src={purchase6} alt="" />
                        </div>
                    </div>
                    <div className="fivth my-12 px-9 w-full md:flex">
                        <div className="img md:w-1/2 flex justify-center ">
                            <img className="w-4/5" src={purchase7} alt="" />
                        </div>

                        <div className="data md:w-1/2 flex flex-col justify-center ">
                            <p className="cairo text-blue-950 m-0 mt-4 md:text-lg text-base font-[650]">
                                <span>
                                    <i className="text-blue-600 me-2 fa-solid fa-circle-notch"></i>
                                </span>
                                توفر تقارير شاملة للمشتريات.
                            </p>

                            <p className="cairo text-blue-950 m-0 mt-4 md:text-lg text-base font-[650]">
                                <span>
                                    <i className="text-blue-600 me-2 fa-solid fa-circle-notch"></i>
                                </span>
                                تتضمن التقارير تقارير إدارية وتقارير المشتريات.
                            </p>

                        </div>
                    </div>
                </div>
                <div className="warehouses relative overflow-hidden">
                    <div className="shapes absolute md:-right-16 -right-10 z-[-1] w-1/4 top-1/2">
                        <img src={shapes} alt="" />
                    </div>
                    <div className="shapes absolute md:-left-16 left-0 z-[-1] w-1/4 top-3/4">
                        <img src={shapes} alt="" />
                    </div>

                    <div className="payment-hero lg:px-24 px-9 w-full lg:flex bg-blue-200 bg-opacity-20">
                        <div className="hero-img flex justify-center lg:w-1/2">
                            <img className="w-4/5 " src={warehouse2} alt="" />
                        </div>

                        <div className="hero-data flex flex-col justify-center lg:w-1/2">
                            <span className="cairo md:text-5xl sm:text-3xl text-lg  ps-2 text-[#346dab] font-bold">
                                {" "}
                                المخازن                        </span>
                            <p className="cairo text-9xl w-full flex ps-2">
                                <span className="h-1.5 w-10 bg-black me-1 rounded-lg">.</span>{" "}
                                <span className="h-1.5 w-2 bg-[#346dab] rounded-lg ms-1">.</span>
                                <span className="h-1.5 w-2 bg-[#346dab] rounded-lg ms-1">
                                    .
                                </span>{" "}
                                <span className="h-1.5 w-2 bg-[#346dab] rounded-lg ms-1">.</span>{" "}
                            </p>
                            <p className="text-sm  font-bold text-gray-600 pe-14 kufi">
                                يُعد قسم المشتريات من الأقسام الأساسية داخل أي مؤسسة، حيث قسم
                                المخازن هو القسم المسؤول عن إدارة وتنظيم عمليات التخزين والجرد
                                والتوزيع للمواد والمنتجات داخل المؤسسة. يضمن هذا القسم توافر
                                المخزون بالكمية والجودة المطلوبة، ويتابع عمليات الصرف والإضافة،
                                كما يهتم بإدارة سياسات الأسعار، الخصومات، وتواريخ الصلاحية.
                                يساهم قسم المخازن في الحفاظ على تدفق المنتجات بكفاءة وتوفير
                                المعلومات الضرورية لاتخاذ قرارات الشراء والبيع. المؤسسة
                                واستدامتها في السوق.
                            </p>
                        </div>
                    </div>
                    <div className="third my-12 lg:px-24 px-9 w-full md:flex">
                        <div className="data md:w-1/2 flex flex-col justify-center ">
                            <p className="cairo text-blue-950 m-0 mt-4  text-base font-[700]">
                                <span>
                                    <i className="text-blue-600 me-2 fa-solid fa-circle-notch"></i>
                                </span>
                                إذن صرف مخزني: يُستخدم لإصدار إذن صرف مخزني يتيح إخراج المنتجات
                                أو المواد من المخزن بناءً على الطلبات أو احتياجات الأقسام
                                المختلفة، مع توثيق الكميات والتفاصيل بدقة.
                            </p>

                            <p className="cairo text-blue-950 m-0 mt-4  text-base font-[700]">
                                <span>
                                    <i className="text-blue-600 me-2 fa-solid fa-circle-notch"></i>
                                </span>
                                إذن إضافة مخزني: يتم إصدار إذن إضافة مخزني عند استلام المنتجات
                                أو المواد الجديدة، مما يتيح إدخالها إلى المخزن وتسجيل الكميات
                                والبيانات بشكل منظم لضمان التتبع الفعّال.
                            </p>

                            <p className="cairo text-blue-950 m-0 mt-4  text-base font-[700]">
                                <span>
                                    <i className="text-blue-600 me-2 fa-solid fa-circle-notch"></i>
                                </span>
                                تجميع الأصناف: عملية تجميع الأصناف تهدف إلى دمج المنتجات أو
                                المواد المتشابهة في وحدات أكبر، مما يسهل التحكم في المخزون
                                وإعداد عمليات الشحن أو التوزيع بشكل أكثر كفاءة.
                            </p>

                            <p className="cairo text-blue-950 m-0 mt-4  text-base font-[700]">
                                <span>
                                    <i className="text-blue-600 me-2 fa-solid fa-circle-notch"></i>
                                </span>
                                تفكيك الأصناف: تُستخدم عملية تفكيك الأصناف لفصل المنتجات أو
                                المواد إلى وحدات أصغر حسب الحاجة، مما يسهل عملية التخزين
                                والاستخدام المستقبلي بناءً على متطلبات العمل.
                            </p>


                        </div>
                        <div className="img md:w-1/2 flex justify-center ">
                            <img className="w-4/5  " src={warehouse3} alt="" />
                        </div>
                    </div>
                    <div className="fivth my-12 lg:px-24 px-9 w-full md:flex">
                        <div className="img md:w-1/2 flex justify-center ">
                            <img className="w-4/5" src={warehouse4} alt="" />
                        </div>

                        <div className="data md:w-1/2 flex flex-col justify-center ">




                            <p className="cairo text-blue-950 m-0 mt-4  text-base font-[700]">
                                <span>
                                    <i className="text-blue-600 me-2 fa-solid fa-circle-notch"></i>
                                </span>
                                قوائم الجرد: تُعد قوائم الجرد أدوات أساسية في قسم المخازن، حيث
                                تساعد في تسجيل كافة الأصناف والكميات الموجودة بشكل دوري أو عند
                                الحاجة، لضمان دقة البيانات ومطابقتها مع السجلات المحاسبية
                                والإدارية.
                            </p>
                        </div>
                    </div>
                    <div className="third my-12 lg:px-24 px-9 w-full md:flex">
                        <div className="data md:w-1/2 flex flex-col justify-center ">
                            <p className="cairo text-blue-950 m-0 mt-4  text-base font-[700]">
                                <span>
                                    <i className="text-blue-600 me-2 fa-solid fa-circle-notch"></i>
                                </span>
                                تسوية الجرد: تهدف عملية تسوية الجرد إلى ضبط الكميات الفعلية
                                للأصناف الموجودة في المخزن مقارنةً بالسجلات المحاسبية، وذلك من
                                أجل تحديد أي اختلافات أو فروقات وضمان دقة البيانات المخزنية.
                            </p>





                            <p className="cairo text-blue-950 m-0 mt-4  text-base font-[700]">
                                <span>
                                    <i className="text-blue-600 me-2 fa-solid fa-circle-notch"></i>
                                </span>
                                سياسة الوارد أولاً يصرف أولاً: تعتمد سياسة "الوارد أولاً يصرف
                                أولاً" على صرف المخزون وفق ترتيب استلامه، حيث تُستخدم الأصناف
                                الأقدم أولاً، مما يضمن إدارة المخزون بطريقة تمنع تراكم المنتجات
                                القديمة وتجنب تلفها.
                            </p>
                        </div>
                        <div className="img md:w-1/2 flex justify-center ">
                            <img className="w-4/5  " src={warehouse5} alt="" />
                        </div>
                    </div>
                    <div className="fivth my-12 lg:px-24 px-9 w-full md:flex">
                        <div className="img md:w-1/2 flex justify-center ">
                            <img className="w-4/5" src={warehouse6} alt="" />
                        </div>

                        <div className="data md:w-1/2 flex flex-col justify-center ">
                            <p className="cairo text-blue-950 m-0 mt-4 md:text-lg text-base font-[650]">
                                <span>
                                    <i className="text-blue-600 me-2 fa-solid fa-circle-notch"></i>
                                </span>
                                جرد دوري ومستمر مع إنشاء القيود بشكل احترافي.
                            </p>

                            <p className="cairo text-blue-950 m-0 mt-4 md:text-lg text-base font-[650]">
                                <span>
                                    <i className="text-blue-600 me-2 fa-solid fa-circle-notch"></i>
                                </span>
                                إعدادات الدورة المستندية مهما كانت طبيعة العمل، لكل فرع مستقل أو
                                الشركة بأكملها.
                            </p>
                            <p className="cairo text-blue-950 m-0 mt-4 md:text-lg text-base font-[650]">
                                <span>
                                    <i className="text-blue-600 me-2 fa-solid fa-circle-notch"></i>
                                </span>
                                إضافات وخصومات على كافة الفواتير.
                            </p>
                            <p className="cairo text-blue-950 m-0 mt-4 md:text-lg text-base font-[650]">
                                <span>
                                    <i className="text-blue-600 me-2 fa-solid fa-circle-notch"></i>
                                </span>
                                سياسة الخصومات على الأصناف قبل الضريبة وبعد الضريبة.
                            </p>
                        </div>
                    </div>
                    <div className="third my-12 lg:px-24 px-9 w-full md:flex">
                        <div className="data md:w-2/3 flex flex-col justify-center ">
                            <p className="cairo text-blue-950 m-0 mt-4 md:text-lg text-base font-[650]">
                                <span>
                                    <i className="text-blue-600 me-2 fa-solid fa-circle-notch"></i>
                                </span>
                                إنشاء شجرة أصناف ضخمة ومتخصصة مع إمكانية إنشاء أكثر من سعر
                                وسياسة أسعار لكل صنف.
                            </p>

                            <p className="cairo text-blue-950 m-0 mt-4 md:text-lg text-base font-[650]">
                                <span>
                                    <i className="text-blue-600 me-2 fa-solid fa-circle-notch"></i>
                                </span>
                                التحويلات المخزنية بين مخازن الفروع المختلفة أو في نفس الفرع.
                            </p>
                            <p className="cairo text-blue-950 m-0 mt-4 md:text-lg text-base font-[650]">
                                <span>
                                    <i className="text-blue-600 me-2 fa-solid fa-circle-notch"></i>
                                </span>
                                اعتماد التحويلات الصادرة والواردة من المخازن.
                            </p>
                        </div>
                        <div className="img md:w-1/2 flex justify-center ">
                            <img className="w-4/5  " src={factory} alt="" />
                        </div>
                    </div>
                    <div className="fivth my-12 lg:px-24 px-9 w-full md:flex">
                        <div className="img md:w-1/2 flex justify-center ">
                            <img className="w-4/5" src={recipe} alt="" />
                        </div>

                        <div className="data md:w-1/2 flex flex-col justify-center ">
                            <p className="cairo text-blue-950 m-0 mt-4 md:text-lg text-base font-[650]">
                                <span>
                                    <i className="text-blue-600 me-2 fa-solid fa-circle-notch"></i>
                                </span>
                                إعدادات الدورة المستندية لكل فرع مستقل أو الشركة بأكملها.
                            </p>



                        </div>
                    </div>
                    <div className="third my-12 lg:px-24 px-9 w-full md:flex">
                        <div className="data md:w-2/3 flex flex-col justify-center ">
                            <p className="cairo text-blue-950 m-0 mt-4 md:text-lg text-base font-[650]">
                                <span>
                                    <i className="text-blue-600 me-2 fa-solid fa-circle-notch"></i>
                                </span>
                                إمكانية تخصيص شاشات البرنامج وإضافة أنماط خاصة حسب احتياجات
                                الشركة.
                            </p>



                        </div>
                        <div className="img md:w-1/2 flex justify-center ">
                            <img className="w-4/5  " src={export2} alt="" />
                        </div>
                    </div>
                    <div className="fivth my-12 lg:px-24 px-9 w-full md:flex">
                        <div className="img md:w-1/2 flex justify-center ">
                            <img className="w-4/5" src={warehouse20} alt="" />
                        </div>

                        <div className="data md:w-1/2 flex flex-col justify-center ">




                            <p className="cairo text-blue-950 m-0 mt-4 md:text-lg text-base font-[650]">
                                <span>
                                    <i className="text-blue-600 me-2 fa-solid fa-circle-notch"></i>
                                </span>
                                إدارة المبيعات والعملاء ومرتجعات المبيعات ومتابعة مديونية
                                العملاء وسداداتهم.
                            </p>
                        </div>
                    </div>
                    <div className="third my-12 lg:px-24 px-9 w-full md:flex">
                        <div className="data md:w-1/2 flex flex-col justify-center ">
                            <p className="cairo text-blue-950 m-0 mt-4 md:text-lg text-base font-[650]">
                                <span>
                                    <i className="text-blue-600 me-2 fa-solid fa-circle-notch"></i>
                                </span>
                                إدارة المشتريات والموردين، بما في ذلك مرتجعات المشتريات ومتابعة
                                المديونية للموردين والسداد لهم.
                            </p>

                            <p className="cairo text-blue-950 m-0 mt-4 md:text-lg text-base font-[650]">
                                <span>
                                    <i className="text-blue-600 me-2 fa-solid fa-circle-notch"></i>
                                </span>
                                تسوية الجرد للمخازن وتحديد الكمية الفعلية ومقارنتها بالكمية
                                الدفترية لتحديد العجز والزيادة.
                            </p>
                            <p className="cairo text-blue-950 m-0 mt-4 md:text-lg text-base font-[650]">
                                <span>
                                    <i className="text-blue-600 me-2 fa-solid fa-circle-notch"></i>
                                </span>
                                تقارير كاملة ومفصلة للعملاء والموردين، مع تحليل أعمار الديون
                                والأرصدة والإجماليات.
                            </p>
                        </div>
                        <div className="img md:w-1/2 flex justify-center ">
                            <img className="w-4/5  " src={warehouse21} alt="" />
                        </div>
                    </div>
                </div>
                <div className="customs-clearance">
                    <div className="custom-hero lg:px-24 px-9 w-full lg:flex bg-blue-200 bg-opacity-20">
                        <div className="hero-img flex justify-center lg:w-1/2">
                            <img className="lg:w-full" src={cust} alt="" />
                        </div>

                        <div className="hero-data flex flex-col justify-center lg:w-1/2">
                            <span className="cairo md:text-5xl sm:text-3xl text-lg  ps-2 text-[#346dab] font-bold">
                                {" "}
                                التخليص الجمركي                        </span>
                            <p className="cairo text-9xl w-full flex ps-2">
                                <span className="h-1.5 w-10 bg-black me-1 rounded-lg">.</span>{" "}
                                <span className="h-1.5 w-2 bg-[#346dab] rounded-lg ms-1">.</span>
                                <span className="h-1.5 w-2 bg-[#346dab] rounded-lg ms-1">
                                    .
                                </span>{" "}
                                <span className="h-1.5 w-2 bg-[#346dab] rounded-lg ms-1">.</span>{" "}
                            </p>
                            <p className="text-base font-bold text-gray-600 pe-14 kufi">
                                نظام التخليص الجمركي الذي نقدمه للعملاء هو نظام متكامل يعمل عبر الإنترنت، مصمم لتبسيط وتسهيل جميع إجراءات التخليص الجمركي بشكل فعال ودقيق. يوفر النظام أدوات شاملة لمتابعة المعاملات الجمركية من البداية حتى النهاية، بدءًا من استلام البضائع من المصدر، مرورًا بوكلاء الشحن، وحتى وصول البضائع إلى المستودع.
                            </p>
                        </div>
                    </div>
                    <div className="third my-12 lg:px-24 px-9 w-full md:flex">
                        <div className="data md:w-1/2 flex flex-col justify-center ">
                            <p className="cairo  text-blue-950 m-0 mt-4 md:text-lg text-base font-[650] ">
                                <span>
                                    <i className="text-blue-600 me-2  fa-solid fa-circle-notch"></i>{" "}
                                </span>
                                البرنامج يعمل عبر الإنترنت ويربط جميع فروعك بشكل مباشر.                            </p>

                            <p className="cairo  text-blue-950 m-0 mt-4 md:text-lg text-base font-[650] ">
                                <span>
                                    <i className="text-blue-600 me-2  fa-solid fa-circle-notch"></i>{" "}
                                </span>
                                البرنامج يقدم خدمات الإقرار الضريبي والفاتورة الإلكترونية تلقائيًا.                            </p>
                            <p className="cairo  text-blue-950 m-0 mt-4 md:text-lg text-base font-[650] ">
                                <span>
                                    <i className="text-blue-600 me-2  fa-solid fa-circle-notch"></i>{" "}
                                </span>
                                إمكانية متابعة الأعمال مباشرةً من أي مكان في العالم.                            </p>

                            <p className="cairo  text-blue-950 m-0 mt-4 md:text-lg text-base font-[650] ">
                                <span>
                                    <i className="text-blue-600 me-2  fa-solid fa-circle-notch"></i>{" "}
                                </span>
                                إمكانية عمل ميزانية على مستوى الفرع أو الشركة ككل.                            </p>
                            <p className="cairo  text-blue-950 m-0 mt-4 md:text-lg text-base font-[650] ">
                                <span>
                                    <i className="text-blue-600 me-2  fa-solid fa-circle-notch"></i>{" "}
                                </span>
                                وفر تقارير شاملة للعملاء، قوائم الدخل، الميزانيات، وموازين المراجعة                            </p>
                        </div>
                        <div className="img md:w-1/2 flex justify-center ">
                            <img className="w-4/5  " src={cust1} alt="" />
                        </div>
                    </div>
                    <div className="fivth my-12 lg:px-24 px-9 w-full md:flex">
                        <div className="img md:w-1/2 flex justify-center ">
                            <img className="w-4/5" src={cust2} alt="" />
                        </div>

                        <div className="data md:w-1/2 flex flex-col justify-center ">
                            <p className="cairo  text-blue-950 m-0 mt-4 md:text-lg text-base font-[650] ">
                                <span>
                                    <i className="text-blue-600 me-2  fa-solid fa-circle-notch"></i>{" "}
                                </span>{" "}
                                تشمل مراكز التكلفة، إعداد الميزانيات، قوائم الدخل، وحسابات موازين المراجعة.                            </p>

                            <p className="cairo  text-blue-950 m-0 mt-4 md:text-lg text-base font-[650] ">
                                <span>
                                    <i className="text-blue-600 me-2  fa-solid fa-circle-notch"></i>{" "}
                                </span>{" "}
                                تقارير يومية، تقارير الحسابات الرئيسية، تقارير ميزانية مجمعة وتفصيلية.                            </p>
                            <p className="cairo  text-blue-950 m-0 mt-4 md:text-lg text-base font-[650] ">
                                <span>
                                    <i className="text-blue-600 me-2  fa-solid fa-circle-notch"></i>{" "}
                                </span>{" "}
                                إنشاء صناديق للجمارك (صادر ووارد) مع إمكانية إدارة إيرادات الجمارك.                            </p>



                        </div>
                    </div>
                    <div className="third my-12 lg:px-24 px-9 w-full md:flex">
                        <div className="data md:w-1/2 flex flex-col justify-center ">
                            <p className="cairo  text-blue-950 m-0 mt-4 md:text-lg text-base font-[650] ">
                                <span>
                                    <i className="text-blue-600 me-2  fa-solid fa-circle-notch"></i>{" "}
                                </span>
                                يشمل المنافذ البرية، البحرية، والطيران.

                            </p>

                            <p className="cairo  text-blue-950 m-0 mt-4 md:text-lg text-base font-[650] ">
                                <span>
                                    <i className="text-blue-600 me-2  fa-solid fa-circle-notch"></i>{" "}
                                </span>
                                تتبع جميع مراحل المعاملات من المصدر، وكلاء الشحن، والجمارك، وصولاً للمستودع.

                            </p>
                            <p className="cairo  text-blue-950 m-0 mt-4 md:text-lg text-base font-[650] ">
                                <span>
                                    <i className="text-blue-600 me-2  fa-solid fa-circle-notch"></i>{" "}
                                </span>
                                إمكانية ضبط التحزيرات الخاصة بالأرضيات، غرامات شهادة المنشأ، وفواتير الشحن.

                            </p>

                            <p className="cairo  text-blue-950 m-0 mt-4 md:text-lg text-base font-[650] ">
                                <span>
                                    <i className="text-blue-600 me-2  fa-solid fa-circle-notch"></i>{" "}
                                </span>
                                إرسال تحديثات المعاملات عبر البريد الإلكتروني للعملاء.
                            </p>
                            <p className="cairo  text-blue-950 m-0 mt-4 md:text-lg text-base font-[650] ">
                                <span>
                                    <i className="text-blue-600 me-2  fa-solid fa-circle-notch"></i>{" "}
                                </span>
                                تتبع حركة المعاملات لكل معقب، سواء كانت منتهية أو تحت الإجراء أو مؤرشفة.
                            </p>
                        </div>
                        <div className="img md:w-1/2 flex justify-center ">
                            <img className="w-4/5  " src={cust3} alt="" />
                        </div>
                    </div>
                    <div className="fivth my-12 lg:px-24 px-9 w-full md:flex">
                        <div className="img md:w-1/2 flex justify-center ">
                            <img className="w-4/5" src={cust4} alt="" />
                        </div>

                        <div className="data md:w-1/2 flex flex-col justify-center ">
                            <p className="cairo  text-blue-950 m-0 mt-4 md:text-lg text-base font-[650] ">
                                <span>
                                    <i className="text-blue-600 me-2  fa-solid fa-circle-notch"></i>{" "}
                                </span>{" "}
                                إدارة بيانات السائقين، السيارات، والمستودعات.
                            </p>
                            <p className="cairo  text-blue-950 m-0 mt-4 md:text-lg text-base font-[650] ">
                                <span>
                                    <i className="text-blue-600 me-2  fa-solid fa-circle-notch"></i>{" "}
                                </span>{" "}
                                متابعة حركة التأمينات، واسترداد الحاويات.
                            </p>
                            <p className="cairo  text-blue-950 m-0 mt-4 md:text-lg text-base font-[650] ">
                                <span>
                                    <i className="text-blue-600 me-2  fa-solid fa-circle-notch"></i>{" "}
                                </span>{" "}
                                تحديث يومي لكل معاملة مع إرسال التقارير عبر البريد الإلكتروني.
                            </p>
                            <p className="cairo  text-blue-950 m-0 mt-4 md:text-lg text-base font-[650] ">
                                <span>
                                    <i className="text-blue-600 me-2  fa-solid fa-circle-notch"></i>{" "}
                                </span>{" "}
                                متابعة شاملة لكل المعاملات من المصدر إلى المستودع.
                            </p>

                        </div>
                    </div>
                    <div className="third my-12 lg:px-24 px-9 w-full md:flex">
                        <div className="data md:w-1/2 flex flex-col justify-center ">
                            <p className="cairo  text-blue-950 m-0 mt-4 md:text-lg text-base font-[650] ">
                                <span>
                                    <i className="text-blue-600 me-2  fa-solid fa-circle-notch"></i>{" "}
                                </span>

                                يحتوي البرنامج علي تقارير شاملة عن كل عميل ومعاملة.
                            </p>

                            <p className="cairo  text-blue-950 m-0 mt-4 md:text-lg text-base font-[650] ">
                                <span>
                                    <i className="text-blue-600 me-2  fa-solid fa-circle-notch"></i>{" "}
                                </span>
                                يحتوي علي حسابات عامة تشمل حسابات الأرباح والخسائر، مراكز التكلفة، وكشوف الحساب.
                            </p>
                            <p className="cairo  text-blue-950 m-0 mt-4 md:text-lg text-base font-[650] ">
                                <span>
                                    <i className="text-blue-600 me-2  fa-solid fa-circle-notch"></i>{" "}
                                </span>
                                إمكانية التواصل مع العملاء والشركات المصدرة عبر البريد الإلكتروني.

                            </p>

                            <p className="cairo  text-blue-950 m-0 mt-4 md:text-lg text-base font-[650] ">
                                <span>
                                    <i className="text-blue-600 me-2  fa-solid fa-circle-notch"></i>{" "}
                                </span>
                                تنبيهات التأخير المتعلقة بأرضيات الجمارك ووكيل الشحن.

                            </p>

                        </div>
                        <div className="img md:w-1/2 flex justify-center ">
                            <img className="w-4/5  " src={cust5} alt="" />
                        </div>
                    </div>
                    <div className="fivth my-12 lg:px-24 px-9 w-full md:flex">
                        <div className="img md:w-1/2 flex justify-center ">
                            <img className="w-4/5" src={cust6} alt="" />
                        </div>

                        <div className="data md:w-1/2 flex flex-col justify-center ">
                            <p className="cairo  text-blue-950 m-0 mt-4 md:text-lg text-base font-[650] ">
                                <span>
                                    <i className="text-blue-600 me-2  fa-solid fa-circle-notch"></i>{" "}
                                </span>{" "}
                                امكانية اضافة اعدادات مخصصة و إمكانية تخصيص إعدادات البرنامج وفقاً لحاجة العميل.

                            </p>
                            <p className="cairo  text-blue-950 m-0 mt-4 md:text-lg text-base font-[650] ">
                                <span>
                                    <i className="text-blue-600 me-2  fa-solid fa-circle-notch"></i>{" "}
                                </span>{" "}
                                إمكانية تعديل تصميم الفواتير وفقًا لرغبة العميل

                            </p>
                            <p className="cairo  text-blue-950 m-0 mt-4 md:text-lg text-base font-[650] ">
                                <span>
                                    <i className="text-blue-600 me-2  fa-solid fa-circle-notch"></i>{" "}
                                </span>{" "}
                                تقارير مخصصة لمتابعة الفواتير، بوالص الشحن، ومتابعة المعاملات الجمركية.                            </p>


                        </div>
                    </div>





                </div>
                <div className="hr">
                    <div className="hr-hero lg:px-24 px-9 w-full lg:flex bg-blue-200 bg-opacity-20">
                        <div className="hero-img flex justify-center lg:w-1/2">
                            <img className="lg:w-4/5" src={employees} alt="" />
                        </div>

                        <div className="hero-data flex flex-col justify-center lg:w-1/2">
                            <span className="cairo md:text-5xl sm:text-3xl text-lg  ps-2 text-[#346dab] font-bold">
                                {" "}
                                شئون الموظفيين
                            </span>
                            <p className="cairo text-9xl w-full flex ps-2">
                                <span className="h-1.5 w-10 bg-black me-1 rounded-lg">.</span>{" "}
                                <span className="h-1.5 w-2 bg-[#346dab] rounded-lg ms-1">.</span>
                                <span className="h-1.5 w-2 bg-[#346dab] rounded-lg ms-1">
                                    .
                                </span>{" "}
                                <span className="h-1.5 w-2 bg-[#346dab] rounded-lg ms-1">.</span>{" "}
                            </p>
                            <p className="text-sm font-bold text-gray-600 pe-14 kufi">
                                قسم شؤون الموظفين هو أحد الأقسام الحيوية في أي منظمة أو شركة،
                                حيث يختص بإدارة وتنظيم كافة الأمور المتعلقة بالموظفين. يتولى هذا
                                القسم مهاماً متعددة تشمل متابعة الوثائق الرسمية، كالإقامة
                                والتأمين، إلى جانب إدارة الرواتب والبدلات والإجازات والترقيات.
                                كما يهتم بإعداد عقود العمل، تسجيل الحضور والغياب، وتنظيم
                                الإجراءات الإدارية مثل الإجازات والجزاءات والمكافآت. يهدف قسم
                                شؤون الموظفين إلى ضمان تنظيم وتسهيل سير العمل بما يتماشى مع
                                سياسات الشركة وتحقيق رضا الموظفين وتعزيز بيئة العمل الإيجابية..
                            </p>
                        </div>
                    </div>
                    <div className="third my-12 lg:px-24 px-9 w-full md:flex">
                        <div className="data md:w-1/2 flex flex-col justify-center ">
                            <p className="cairo  text-blue-950 m-0 mt-4 md:text-lg text-base font-[650] ">
                                <span>
                                    <i className="text-blue-600 me-2  fa-solid fa-circle-notch"></i>{" "}
                                </span>
                                متابعة صلاحية الوثائق الهامة مثل الإقامة، جوازات السفر،
                                والتأمينات، مع إرسال تحذيرات قبل انتهاء صلاحيتها.
                            </p>

                            <p className="cairo  text-blue-950 m-0 mt-4 md:text-lg text-base font-[650] ">
                                <span>
                                    <i className="text-blue-600 me-2  fa-solid fa-circle-notch"></i>{" "}
                                </span>
                                إدارة المستندات وحفظ نسخ أرشيفية، مع تحذيرات بخصوص تاريخ
                                الانتهاء.
                            </p>
                            <p className="cairo  text-blue-950 m-0 mt-4 md:text-lg text-base font-[650] ">
                                <span>
                                    <i className="text-blue-600 me-2  fa-solid fa-circle-notch"></i>{" "}
                                </span>
                                توثيق مباشرة العمل لأول مرة أو بعد العودة من الإجازات.
                            </p>

                            <p className="cairo  text-blue-950 m-0 mt-4 md:text-lg text-base font-[650] ">
                                <span>
                                    <i className="text-blue-600 me-2  fa-solid fa-circle-notch"></i>{" "}
                                </span>
                                إعداد وتجديد عقود العمل لكل موظف وفق شروطه الخاصة. .
                            </p>
                            <p className="cairo  text-blue-950 m-0 mt-4 md:text-lg text-base font-[650] ">
                                <span>
                                    <i className="text-blue-600 me-2  fa-solid fa-circle-notch"></i>{" "}
                                </span>
                                تسجيل حالات الموظفين المختلفة، مثل الإجازة، الغياب، أو الهروب.
                            </p>
                        </div>
                        <div className="img md:w-1/2 flex justify-center ">
                            <img className="w-4/5  " src={emp} alt="" />
                        </div>
                    </div>
                    <div className="fivth my-12 lg:px-24 px-9 w-full md:flex">
                        <div className="img md:w-1/2 flex justify-center ">
                            <img className="w-4/5" src={emp2} alt="" />
                        </div>

                        <div className="data md:w-1/2 flex flex-col justify-center ">
                            <p className="cairo  text-blue-950 m-0 mt-4 md:text-lg text-base font-[650] ">
                                <span>
                                    <i className="text-blue-600 me-2  fa-solid fa-circle-notch"></i>{" "}
                                </span>{" "}
                                إعداد قيود استحقاق الرواتب والمستحقات مثل التأمينات، الإجازات،
                                ونهاية الخدمة.{" "}
                            </p>

                            <p className="cairo  text-blue-950 m-0 mt-4 md:text-lg text-base font-[650] ">
                                <span>
                                    <i className="text-blue-600 me-2  fa-solid fa-circle-notch"></i>{" "}
                                </span>{" "}
                                تحديد سياسات الرواتب وفقًا للكادر الوظيفي.
                            </p>
                            <p className="cairo  text-blue-950 m-0 mt-4 md:text-lg text-base font-[650] ">
                                <span>
                                    <i className="text-blue-600 me-2  fa-solid fa-circle-notch"></i>{" "}
                                </span>{" "}
                                ربط الرواتب بأنظمة الصناديق أو البنوك المختلفة.
                            </p>

                            <p className="cairo  text-blue-950 m-0 mt-4 md:text-lg text-base font-[650] ">
                                <span>
                                    <i className="text-blue-600 me-2  fa-solid fa-circle-notch"></i>{" "}
                                </span>{" "}
                                إدارة الرواتب من حيث الإضافات والحسميات.
                            </p>
                            <p className="cairo  text-blue-950 m-0 mt-4 md:text-lg text-base font-[650] ">
                                <span>
                                    <i className="text-blue-600 me-2  fa-solid fa-circle-notch"></i>{" "}
                                </span>
                                صرف الرواتب الشهرية والمستحقات المالية الأخرى مثل نهاية الخدمة
                                وبدل السكن.
                            </p>
                        </div>
                    </div>
                    <div className="third my-12 lg:px-24 px-9 w-full md:flex">
                        <div className="data md:w-1/2 flex flex-col justify-center ">
                            <p className="cairo  text-blue-950 m-0 mt-4 md:text-lg text-base font-[650] ">
                                <span>
                                    <i className="text-blue-600 me-2  fa-solid fa-circle-notch"></i>{" "}
                                </span>
                                تسجيل البيانات الأساسية للموظفين مثل المؤهلات الدراسية، الأقسام،
                                مواقع العمل، الجنسيات، والمدن.
                            </p>

                            <p className="cairo  text-blue-950 m-0 mt-4 md:text-lg text-base font-[650] ">
                                <span>
                                    <i className="text-blue-600 me-2  fa-solid fa-circle-notch"></i>{" "}
                                </span>
                                إنشاء سيرة ذاتية شاملة لكل موظف وحفظ بياناته في نظام أرشفة.
                            </p>
                            <p className="cairo  text-blue-950 m-0 mt-4 md:text-lg text-base font-[650] ">
                                <span>
                                    <i className="text-blue-600 me-2  fa-solid fa-circle-notch"></i>{" "}
                                </span>
                                إدارة بيانات المرافقين المرتبطين بالموظفين.
                            </p>

                            <p className="cairo  text-blue-950 m-0 mt-4 md:text-lg text-base font-[650] ">
                                <span>
                                    <i className="text-blue-600 me-2  fa-solid fa-circle-notch"></i>{" "}
                                </span>
                                تسجيل بيانات الكوادر الوظيفية مثل الإدارات، الأقسام، الكفلاء،
                                وخطوط النقل.
                            </p>
                            <p className="cairo  text-blue-950 m-0 mt-4 md:text-lg text-base font-[650] ">
                                <span>
                                    <i className="text-blue-600 me-2  fa-solid fa-circle-notch"></i>{" "}
                                </span>
                                إضافة التعريفات الخاصة بالبدلات والحسميات والإجازات.
                            </p>
                        </div>
                        <div className="img md:w-1/2 flex justify-center ">
                            <img className="w-4/5  " src={emp3} alt="" />
                        </div>
                    </div>
                    <div className="fivth my-12 lg:px-24 px-9 w-full md:flex">
                        <div className="img md:w-1/2 flex justify-center ">
                            <img className="w-4/5" src={emp4} alt="" />
                        </div>

                        <div className="data md:w-1/2 flex flex-col justify-center ">
                            <p className="cairo  text-blue-950 m-0 mt-4 md:text-lg text-base font-[650] ">
                                <span>
                                    <i className="text-blue-600 me-2  fa-solid fa-circle-notch"></i>{" "}
                                </span>{" "}
                                إدارة الإجراءات الإدارية مثل الإجازات، الانتداب، الجزاءات،
                                المكافآت، والإنذارات.
                            </p>

                            <p className="cairo  text-blue-950 m-0 mt-4 md:text-lg text-base font-[650] ">
                                <span>
                                    <i className="text-blue-600 me-2  fa-solid fa-circle-notch"></i>{" "}
                                </span>{" "}
                                تسجيل ترقيات الموظفين وإجراءات النقل بين الأقسام.
                            </p>
                            <p className="cairo  text-blue-950 m-0 mt-4 md:text-lg text-base font-[650] ">
                                <span>
                                    <i className="text-blue-600 me-2  fa-solid fa-circle-notch"></i>{" "}
                                </span>{" "}
                                تحديد سياسات الاستقطاعات والإضافات والمكافآت.
                            </p>

                            <p className="cairo  text-blue-950 m-0 mt-4 md:text-lg text-base font-[650] ">
                                <span>
                                    <i className="text-blue-600 me-2  fa-solid fa-circle-notch"></i>{" "}
                                </span>{" "}
                                متابعة وتنفيذ المعاملات بين الإدارات والأقسام المختلفة.
                            </p>
                            <p className="cairo  text-blue-950 m-0 mt-4 md:text-lg text-base font-[650] ">
                                <span>
                                    <i className="text-blue-600 me-2  fa-solid fa-circle-notch"></i>{" "}
                                </span>
                                إعداد التقارير الخاصة بشؤون الموظفين والمعاملات الإدارية.
                            </p>
                        </div>
                    </div>
                    <div className="third my-12 lg:px-24 px-9 w-full md:flex">
                        <div className="data md:w-1/2 flex flex-col justify-center ">
                            <p className="cairo  text-blue-950 m-0 mt-4 md:text-lg text-base font-[650] ">
                                <span>
                                    <i className="text-blue-600 me-2  fa-solid fa-circle-notch"></i>{" "}
                                </span>
                                إدارة التأمينات الاجتماعية للموظفين السعوديين والمقيمين.
                            </p>

                            <p className="cairo  text-blue-950 m-0 mt-4 md:text-lg text-base font-[650] ">
                                <span>
                                    <i className="text-blue-600 me-2  fa-solid fa-circle-notch"></i>{" "}
                                </span>
                                متابعة التواريخ الهامة مثل تواريخ الاستحقاق أو انتهاء العقود.
                            </p>
                            <p className="cairo  text-blue-950 m-0 mt-4 md:text-lg text-base font-[650] ">
                                <span>
                                    <i className="text-blue-600 me-2  fa-solid fa-circle-notch"></i>{" "}
                                </span>
                                إدارة سلف الموظفين وصرف المستحقات الشهرية.
                            </p>

                            <p className="cairo  text-blue-950 m-0 mt-4 md:text-lg text-base font-[650] ">
                                <span>
                                    <i className="text-blue-600 me-2  fa-solid fa-circle-notch"></i>{" "}
                                </span>
                                صرف المستحقات المالية للإجازات ونهاية الخدمة.
                            </p>
                            <p className="cairo  text-blue-950 m-0 mt-4 md:text-lg text-base font-[650] ">
                                <span>
                                    <i className="text-blue-600 me-2  fa-solid fa-circle-notch"></i>{" "}
                                </span>
                                إعداد تقارير مالية دورية تتعلق بشؤون الموظفين.
                            </p>
                        </div>
                        <div className="img md:w-1/2 flex justify-center ">
                            <img className="w-4/5  " src={emp5} alt="" />
                        </div>
                    </div>
                </div>
                <div className="pos">
                    <div className="pos-hero lg:px-24 px-9 w-full lg:flex bg-blue-200 bg-opacity-20">
                        <div className="hero-img flex justify-center lg:w-1/2">
                            <img className="lg:w-4/5" src={pos1} alt="" />
                        </div>

                        <div className="hero-data flex flex-col justify-center lg:w-1/2">
                            <span className="cairo md:text-5xl sm:text-3xl text-lg  ps-2 text-[#346dab] font-bold">
                                {" "}
                                نقاط البيع
                            </span>
                            <p className="cairo text-9xl w-full flex ps-2">
                                <span className="h-1.5 w-10 bg-black me-1 rounded-lg">.</span>{" "}
                                <span className="h-1.5 w-2 bg-[#346dab] rounded-lg ms-1">.</span>
                                <span className="h-1.5 w-2 bg-[#346dab] rounded-lg ms-1">
                                    .
                                </span>{" "}
                                <span className="h-1.5 w-2 bg-[#346dab] rounded-lg ms-1">.</span>{" "}
                            </p>
                            <p className="text-base font-bold text-gray-600 pe-14 kufi">
                                نظام نقاط البيع (POS) هو أداة حيوية لإدارة المبيعات في الشركات
                                والمتاجر، حيث يتيح للموظفين معالجة الفواتير والمدفوعات بسرعة
                                وفعالية. يتميز النظام بإمكانية العمل سواء عبر الإنترنت أو بدون
                                اتصال (أوفلاين)، مما يوفر مرونة كبيرة في مختلف البيئات
                                التشغيلية. عند توفر الاتصال، يمكن تصدير جميع البيانات بشكل
                                تلقائي إلى السيرفر وتحديثها بشكل مستمر، مما يضمن الحفاظ على جميع
                                العمليات والتفاصيل التجارية بأمان وسلاسة، سواء عند تنفيذ
                                المبيعات أو مراجعة البيانات.
                            </p>
                        </div>
                    </div>
                    <div className="third my-12 lg:px-24 px-9 w-full md:flex">
                        <div className="data md:w-1/2 flex flex-col justify-center ">
                            <p className="cairo  text-blue-950 m-0 mt-4 md:text-lg text-base font-[650] ">
                                <span>
                                    <i className="text-blue-600 me-2  fa-solid fa-circle-notch"></i>{" "}
                                </span>
                                إنشاء الفواتير المبسطة بما يتوافق مع متطلبات الهيئة.
                            </p>

                            <p className="cairo  text-blue-950 m-0 mt-4 md:text-lg text-base font-[650] ">
                                <span>
                                    <i className="text-blue-600 me-2  fa-solid fa-circle-notch"></i>{" "}
                                </span>
                                إمكانية تعليق الفواتير لإتمامها لاحقًا.
                            </p>
                            <p className="cairo  text-blue-950 m-0 mt-4 md:text-lg text-base font-[650] ">
                                <span>
                                    <i className="text-blue-600 me-2  fa-solid fa-circle-notch"></i>{" "}
                                </span>
                                البحث عن الفواتير السابقة وإعادة طباعتها عند الحاجة.
                            </p>

                            <p className="cairo  text-blue-950 m-0 mt-4 md:text-lg text-base font-[650] ">
                                <span>
                                    <i className="text-blue-600 me-2  fa-solid fa-circle-notch"></i>{" "}
                                </span>
                                حذف الفواتير المعلقة عند إغلاق نقطة البيع.
                            </p>
                            <p className="cairo  text-blue-950 m-0 mt-4 md:text-lg text-base font-[650] ">
                                <span>
                                    <i className="text-blue-600 me-2  fa-solid fa-circle-notch"></i>{" "}
                                </span>
                                تخصيص تصميم الفاتورة وفقًا لرغبات المستخدم.
                            </p>
                        </div>
                        <div className="img md:w-1/2 flex justify-center ">
                            <img className="w-full  " src={pos2} alt="" />
                        </div>
                    </div>
                    <div className="fivth my-12 lg:px-24 px-9 w-full md:flex">
                        <div className="img md:w-1/2 flex justify-center ">
                            <img className="w-4/5" src={pos3} alt="" />
                        </div>

                        <div className="data md:w-1/2 flex flex-col justify-center ">
                            <p className="cairo  text-blue-950 m-0 mt-4 md:text-lg text-base font-[650] ">
                                <span>
                                    <i className="text-blue-600 me-2  fa-solid fa-circle-notch"></i>{" "}
                                </span>{" "}
                                إضافة وتعريف المستخدمين في النظام.
                            </p>

                            <p className="cairo  text-blue-950 m-0 mt-4 md:text-lg text-base font-[650] ">
                                <span>
                                    <i className="text-blue-600 me-2  fa-solid fa-circle-notch"></i>{" "}
                                </span>{" "}
                                ربط المستخدم بالصندوق، البنك، والمخزن لإدارة المعاملات المالية.
                            </p>
                            <p className="cairo  text-blue-950 m-0 mt-4 md:text-lg text-base font-[650] ">
                                <span>
                                    <i className="text-blue-600 me-2  fa-solid fa-circle-notch"></i>{" "}
                                </span>{" "}
                                منح الصلاحيات الإدارية للمشرفين والأدمن للتحكم في إغلاق اليومية.
                            </p>

                            <p className="cairo  text-blue-950 m-0 mt-4 md:text-lg text-base font-[650] ">
                                <span>
                                    <i className="text-blue-600 me-2  fa-solid fa-circle-notch"></i>{" "}
                                </span>{" "}
                                إتاحة إغلاق اليومية في أي وقت مع إمكانية تغيير المستخدمين.
                            </p>
                            <p className="cairo  text-blue-950 m-0 mt-4 md:text-lg text-base font-[650] ">
                                <span>
                                    <i className="text-blue-600 me-2  fa-solid fa-circle-notch"></i>{" "}
                                </span>
                                تخصيص الصلاحيات لكل فرع أو مستخدم بناءً على المهام الموكلة لهم.
                            </p>
                        </div>
                    </div>
                    <div className="third my-12 lg:px-24 px-9 w-full md:flex">
                        <div className="data md:w-1/2 flex flex-col justify-center ">
                            <p className="cairo  text-blue-950 m-0 mt-4 md:text-lg text-base font-[650] ">
                                <span>
                                    <i className="text-blue-600 me-2  fa-solid fa-circle-notch"></i>{" "}
                                </span>
                                دعم طرق دفع متعددة مثل البطاقات البنكية، الشبكات، والنقد.
                            </p>

                            <p className="cairo  text-blue-950 m-0 mt-4 md:text-lg text-base font-[650] ">
                                <span>
                                    <i className="text-blue-600 me-2  fa-solid fa-circle-notch"></i>{" "}
                                </span>
                                السماح بالدفع الجزئي باستخدام وسائل دفع مختلفة في نفس المعاملة.
                            </p>
                            <p className="cairo  text-blue-950 m-0 mt-4 md:text-lg text-base font-[650] ">
                                <span>
                                    <i className="text-blue-600 me-2  fa-solid fa-circle-notch"></i>{" "}
                                </span>
                                حساب العجز المالي في نقطة البيع والتعامل معه.
                            </p>

                            <p className="cairo  text-blue-950 m-0 mt-4 md:text-lg text-base font-[650] ">
                                <span>
                                    <i className="text-blue-600 me-2  fa-solid fa-circle-notch"></i>{" "}
                                </span>
                                حساب الزيادات المالية الناتجة عن المبيعات أو العمليات.
                            </p>
                            <p className="cairo  text-blue-950 m-0 mt-4 md:text-lg text-base font-[650] ">
                                <span>
                                    <i className="text-blue-600 me-2  fa-solid fa-circle-notch"></i>{" "}
                                </span>
                                إرسال تنبيه عبر البريد الإلكتروني في حال وجود عجز مالي.
                            </p>
                        </div>
                        <div className="img md:w-1/2 flex justify-center ">
                            <img className="w-4/5  " src={pos4} alt="" />
                        </div>
                    </div>
                    <div className="fivth my-12 lg:px-24 px-9 w-full md:flex">
                        <div className="img md:w-1/2 flex justify-center ">
                            <img className="w-4/5" src={pos5} alt="" />
                        </div>

                        <div className="data md:w-1/2 flex flex-col justify-center ">
                            <p className="cairo  text-blue-950 m-0 mt-4 md:text-lg text-base font-[650] ">
                                <span>
                                    <i className="text-blue-600 me-2  fa-solid fa-circle-notch"></i>{" "}
                                </span>{" "}
                                إعداد خيارات الطباعة بما يتناسب مع احتياجات المستخدم.
                            </p>

                            <p className="cairo  text-blue-950 m-0 mt-4 md:text-lg text-base font-[650] ">
                                <span>
                                    <i className="text-blue-600 me-2  fa-solid fa-circle-notch"></i>{" "}
                                </span>{" "}
                                تحديد عدد النسخ المطلوب طباعتها لكل فاتورة.
                            </p>
                            <p className="cairo  text-blue-950 m-0 mt-4 md:text-lg text-base font-[650] ">
                                <span>
                                    <i className="text-blue-600 me-2  fa-solid fa-circle-notch"></i>{" "}
                                </span>{" "}
                                طباعة ملخص يومي عند إغلاق نقطة البيع لكل مستخدم.
                            </p>

                            <p className="cairo  text-blue-950 m-0 mt-4 md:text-lg text-base font-[650] ">
                                <span>
                                    <i className="text-blue-600 me-2  fa-solid fa-circle-notch"></i>{" "}
                                </span>{" "}
                                إنشاء مجموعات أصناف مخصصة لكل فرع أو مستخدم وتحديد ما يظهر لكل
                                منهم.
                            </p>
                        </div>
                    </div>
                    <div className="third my-12 lg:px-24 px-9 w-full md:flex">
                        <div className="data md:w-1/2 flex flex-col justify-center ">
                            <p className="cairo  text-blue-950 m-0 mt-4 md:text-lg text-base font-[650] ">
                                <span>
                                    <i className="text-blue-600 me-2  fa-solid fa-circle-notch"></i>{" "}
                                </span>
                                استخدام الباركود أو شاشة اللمس (تاتش) لعرض المجموعات أو البحث عن
                                المنتجات.
                            </p>

                            <p className="cairo  text-blue-950 m-0 mt-4 md:text-lg text-base font-[650] ">
                                <span>
                                    <i className="text-blue-600 me-2  fa-solid fa-circle-notch"></i>{" "}
                                </span>
                                معالجة المرتجعات للمنتجات والمبيعات.
                            </p>
                            <p className="cairo  text-blue-950 m-0 mt-4 md:text-lg text-base font-[650] ">
                                <span>
                                    <i className="text-blue-600 me-2  fa-solid fa-circle-notch"></i>{" "}
                                </span>
                                ربط النظام بالصندوق والبنك لضمان العمليات المالية المتكاملة.
                            </p>

                            <p className="cairo  text-blue-950 m-0 mt-4 md:text-lg text-base font-[650] ">
                                <span>
                                    <i className="text-blue-600 me-2  fa-solid fa-circle-notch"></i>{" "}
                                </span>
                                إمكانية تصدير واستيراد البيانات بين النظام والسيرفر سواء كان
                                النظام متصلاً بالإنترنت أو يعمل بدون اتصال.
                            </p>
                        </div>
                        <div className="img md:w-1/2 flex justify-center ">
                            <img className="w-4/5  " src={pos6} alt="" />
                        </div>
                    </div>
                </div>
                <div className="resturant">
                    <div className="resturant-hero lg:px-24 px-9 w-full lg:flex bg-blue-200 bg-opacity-20">
                        <div className="hero-img flex justify-center lg:w-1/2">
                            <img className="lg:w-4/5" src={res1} alt="" />
                        </div>

                        <div className="hero-data flex flex-col justify-center lg:w-1/2">
                            <span className="cairo md:text-5xl sm:text-3xl text-lg  ps-2 text-[#346dab] font-bold">
                                {" "}
                                نظام المطاعم
                            </span>
                            <p className="cairo text-9xl w-full flex ps-2">
                                <span className="h-1.5 w-10 bg-black me-1 rounded-lg">.</span>{" "}
                                <span className="h-1.5 w-2 bg-[#346dab] rounded-lg ms-1">.</span>
                                <span className="h-1.5 w-2 bg-[#346dab] rounded-lg ms-1">
                                    .
                                </span>{" "}
                                <span className="h-1.5 w-2 bg-[#346dab] rounded-lg ms-1">.</span>{" "}
                            </p>
                            <p className="text-base font-bold text-gray-600 pe-14 kufi">
                                نظام المطاعم الذي نقدمه هو حل شامل لإدارة عمليات المطاعم بكفاءة
                                وسهولة. يوفر النظام إمكانيات متقدمة لتنظيم الفواتير، طرق الدفع
                                المتعددة، وإدارة المستخدمين والصلاحيات. كما يدعم تقسيم الأصناف
                                والمجموعات وربطها بالمطابخ، بالإضافة إلى إدارة الصالات
                                والطاولات. يهدف النظام إلى تبسيط العمليات اليومية وتحسين تجربة
                                العملاء من خلال تقديم حلول مبتكرة لإدارة المطاعم بشكل احترافي
                                ومرن.
                            </p>
                        </div>
                    </div>
                    <div className="third my-12 lg:px-24 px-9 w-full md:flex">
                        <div className="data md:w-1/2 flex flex-col justify-center ">
                            <p className="cairo  text-blue-950 m-0 mt-4 md:text-lg text-base font-[650] ">
                                <span>
                                    <i className="text-blue-600 me-2  fa-solid fa-circle-notch"></i>{" "}
                                </span>
                                إصدار الفاتورة المبسطة وفقًا لاشتراطات الهيئة.
                            </p>

                            <p className="cairo  text-blue-950 m-0 mt-4 md:text-lg text-base font-[650] ">
                                <span>
                                    <i className="text-blue-600 me-2  fa-solid fa-circle-notch"></i>{" "}
                                </span>
                                إمكانية تعليق الفواتير لإتمامها لاحقًا.
                            </p>
                            <p className="cairo  text-blue-950 m-0 mt-4 md:text-lg text-base font-[650] ">
                                <span>
                                    <i className="text-blue-600 me-2  fa-solid fa-circle-notch"></i>{" "}
                                </span>
                                البحث عن الفواتير السابقة وإعادة طباعتها عند الحاجة.
                            </p>

                            <p className="cairo  text-blue-950 m-0 mt-4 md:text-lg text-base font-[650] ">
                                <span>
                                    <i className="text-blue-600 me-2  fa-solid fa-circle-notch"></i>{" "}
                                </span>
                                حذف الفواتير المعلقة عند إغلاق نقطة البيع.
                            </p>
                            <p className="cairo  text-blue-950 m-0 mt-4 md:text-lg text-base font-[650] ">
                                <span>
                                    <i className="text-blue-600 me-2  fa-solid fa-circle-notch"></i>{" "}
                                </span>
                                تصميم الفاتورة وتحديد عدد النسخ المطبوع حسب الرغبة.
                            </p>
                        </div>
                        <div className="img md:w-1/2 flex justify-center ">
                            <img className="w-4/5  " src={pos2} alt="" />
                        </div>
                    </div>
                    <div className="fivth my-12 lg:px-24 px-9 w-full md:flex">
                        <div className="img md:w-1/2 flex justify-center ">
                            <img className="w-4/5" src={pos3} alt="" />
                        </div>

                        <div className="data md:w-1/2 flex flex-col justify-center ">
                            <p className="cairo  text-blue-950 m-0 mt-4 md:text-lg text-base font-[650] ">
                                <span>
                                    <i className="text-blue-600 me-2  fa-solid fa-circle-notch"></i>{" "}
                                </span>{" "}
                                إضافة وتعريف المستخدمين في النظام.
                            </p>

                            <p className="cairo  text-blue-950 m-0 mt-4 md:text-lg text-base font-[650] ">
                                <span>
                                    <i className="text-blue-600 me-2  fa-solid fa-circle-notch"></i>{" "}
                                </span>{" "}
                                ربط المستخدم بالصندوق، البنك، والمخزن لإدارة المعاملات المالية.
                            </p>
                            <p className="cairo  text-blue-950 m-0 mt-4 md:text-lg text-base font-[650] ">
                                <span>
                                    <i className="text-blue-600 me-2  fa-solid fa-circle-notch"></i>{" "}
                                </span>{" "}
                                منح الصلاحيات الإدارية للمشرفين والأدمن للتحكم في إغلاق اليومية.
                            </p>

                            <p className="cairo  text-blue-950 m-0 mt-4 md:text-lg text-base font-[650] ">
                                <span>
                                    <i className="text-blue-600 me-2  fa-solid fa-circle-notch"></i>{" "}
                                </span>{" "}
                                إتاحة إغلاق اليومية في أي وقت مع إمكانية تغيير المستخدمين.
                            </p>
                            <p className="cairo  text-blue-950 m-0 mt-4 md:text-lg text-base font-[650] ">
                                <span>
                                    <i className="text-blue-600 me-2  fa-solid fa-circle-notch"></i>{" "}
                                </span>
                                إعطاء المستخدمين خيارات الدفع المتاحة مثل الشبكة، الفيزا، أو
                                النقد.
                            </p>
                        </div>
                    </div>
                    <div className="third my-12 lg:px-24 px-9 w-full md:flex">
                        <div className="data md:w-1/2 flex flex-col justify-center ">
                            <p className="cairo  text-blue-950 m-0 mt-4 md:text-lg text-base font-[650] ">
                                <span>
                                    <i className="text-blue-600 me-2  fa-solid fa-circle-notch"></i>{" "}
                                </span>
                                دعم طرق دفع متعددة مثل البطاقات البنكية، الشبكات، والنقد.
                            </p>

                            <p className="cairo  text-blue-950 m-0 mt-4 md:text-lg text-base font-[650] ">
                                <span>
                                    <i className="text-blue-600 me-2  fa-solid fa-circle-notch"></i>{" "}
                                </span>
                                السماح بالدفع الجزئي باستخدام وسائل دفع مختلفة في نفس المعاملة.
                            </p>
                            <p className="cairo  text-blue-950 m-0 mt-4 md:text-lg text-base font-[650] ">
                                <span>
                                    <i className="text-blue-600 me-2  fa-solid fa-circle-notch"></i>{" "}
                                </span>
                                حساب العجز المالي في نقطة البيع والتعامل معه.
                            </p>

                            <p className="cairo  text-blue-950 m-0 mt-4 md:text-lg text-base font-[650] ">
                                <span>
                                    <i className="text-blue-600 me-2  fa-solid fa-circle-notch"></i>{" "}
                                </span>
                                إرسال بريد إلكتروني تلقائي في حال وجود عجز مالي.
                            </p>
                            <p className="cairo  text-blue-950 m-0 mt-4 md:text-lg text-base font-[650] ">
                                <span>
                                    <i className="text-blue-600 me-2  fa-solid fa-circle-notch"></i>{" "}
                                </span>
                                طباعة ملخص يومي عند إغلاق نقطة البيع لكل مستخدم.
                            </p>
                        </div>
                        <div className="img md:w-1/2 flex justify-center ">
                            <img className="w-4/5  " src={pos4} alt="" />
                        </div>
                    </div>
                    <div className="fivth my-12 lg:px-24 px-9 w-full md:flex">
                        <div className="img md:w-1/2 flex justify-center ">
                            <img className="w-4/5" src={pos5} alt="" />
                        </div>

                        <div className="data md:w-1/2 flex flex-col justify-center ">
                            <p className="cairo  text-blue-950 m-0 mt-4 md:text-lg text-base font-[650] ">
                                <span>
                                    <i className="text-blue-600 me-2  fa-solid fa-circle-notch"></i>{" "}
                                </span>{" "}
                                إنشاء مجموعات الأصناف وتحديد ما يظهر لكل فرع أو مستخدم.
                            </p>

                            <p className="cairo  text-blue-950 m-0 mt-4 md:text-lg text-base font-[650] ">
                                <span>
                                    <i className="text-blue-600 me-2  fa-solid fa-circle-notch"></i>{" "}
                                </span>{" "}
                                استخدام الباركود أو شاشة اللمس (تاتش) لعرض المجموعات أو البحث عن
                                المنتجات.
                            </p>
                            <p className="cairo  text-blue-950 m-0 mt-4 md:text-lg text-base font-[650] ">
                                <span>
                                    <i className="text-blue-600 me-2  fa-solid fa-circle-notch"></i>{" "}
                                </span>{" "}
                                تقسيم مجموعات الأصناف وربطها حسب المطبخ.
                            </p>

                            <p className="cairo  text-blue-950 m-0 mt-4 md:text-lg text-base font-[650] ">
                                <span>
                                    <i className="text-blue-600 me-2  fa-solid fa-circle-notch"></i>{" "}
                                </span>{" "}
                                إجراء المرتجعات للمنتجات.
                            </p>
                            <p className="cairo  text-blue-950 m-0 mt-4 md:text-lg text-base font-[650] ">
                                <span>
                                    <i className="text-blue-600 me-2  fa-solid fa-circle-notch"></i>{" "}
                                </span>{" "}
                                استخدام الجرد المستمر لضمان إدارة المخزون.
                            </p>
                        </div>
                    </div>
                    <div className="third my-12 lg:px-24 px-9 w-full md:flex">
                        <div className="data md:w-1/2 flex flex-col justify-center ">
                            <p className="cairo  text-blue-950 m-0 mt-4 md:text-lg text-base font-[650] ">
                                <span>
                                    <i className="text-blue-600 me-2  fa-solid fa-circle-notch"></i>{" "}
                                </span>
                                تعريف الصالات في النظام.
                            </p>

                            <p className="cairo  text-blue-950 m-0 mt-4 md:text-lg text-base font-[650] ">
                                <span>
                                    <i className="text-blue-600 me-2  fa-solid fa-circle-notch"></i>{" "}
                                </span>
                                تعريف أرقام الطاولات لكل صالة.
                            </p>
                            <p className="cairo  text-blue-950 m-0 mt-4 md:text-lg text-base font-[650] ">
                                <span>
                                    <i className="text-blue-600 me-2  fa-solid fa-circle-notch"></i>{" "}
                                </span>
                                إخراج الطاولات من الخدمة للصيانة.
                            </p>

                            <p className="cairo  text-blue-950 m-0 mt-4 md:text-lg text-base font-[650] ">
                                <span>
                                    <i className="text-blue-600 me-2  fa-solid fa-circle-notch"></i>{" "}
                                </span>
                                حذف أو نقل الطلبات من طاولة إلى أخرى.
                            </p>
                            <p className="cairo  text-blue-950 m-0 mt-4 md:text-lg text-base font-[650] ">
                                <span>
                                    <i className="text-blue-600 me-2  fa-solid fa-circle-notch"></i>{" "}
                                </span>
                                تقسيم المطابخ حسب المجموعات المرتبطة.
                            </p>
                        </div>
                        <div className="img md:w-1/2 flex justify-center ">
                            <img className="w-4/5  " src={pos4} alt="" />
                        </div>
                    </div>
                    <div className="fivth my-12 lg:px-24 px-9 w-full md:flex">
                        <div className="img md:w-1/2 flex justify-center ">
                            <img className="w-4/5" src={pos5} alt="" />
                        </div>

                        <div className="data md:w-1/2 flex flex-col justify-center ">
                            <p className="cairo  text-blue-950 m-0 mt-4 md:text-lg text-base font-[650] ">
                                <span>
                                    <i className="text-blue-600 me-2  fa-solid fa-circle-notch"></i>{" "}
                                </span>{" "}
                                تعريف مقدمي الخدمة في الصالات والمطاعم.
                            </p>

                            <p className="cairo  text-blue-950 m-0 mt-4 md:text-lg text-base font-[650] ">
                                <span>
                                    <i className="text-blue-600 me-2  fa-solid fa-circle-notch"></i>{" "}
                                </span>{" "}
                                تقسيم المطابخ بناءً على المجموعات والأصناف.
                            </p>
                            <p className="cairo  text-blue-950 m-0 mt-4 md:text-lg text-base font-[650] ">
                                <span>
                                    <i className="text-blue-600 me-2  fa-solid fa-circle-notch"></i>{" "}
                                </span>{" "}
                                طباعة ريسبت في كل مطبخ حسب الطلب.
                            </p>

                            <p className="cairo  text-blue-950 m-0 mt-4 md:text-lg text-base font-[650] ">
                                <span>
                                    <i className="text-blue-600 me-2  fa-solid fa-circle-notch"></i>{" "}
                                </span>{" "}
                                إدارة وتعديل الطلبات في الطاولات بناءً على احتياجات الزبائن.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="transportation">
                    <div className="transportation-hero lg:px-24 px-9 w-full lg:flex bg-blue-200 bg-opacity-20">
                        <div className="hero-img flex justify-center lg:w-1/2">
                            <img className="lg:w-4/5" src={trans} alt="" />
                        </div>

                        <div className="hero-data flex flex-col justify-center lg:w-1/2">
                            <span className="cairo md:text-5xl sm:text-3xl text-lg  ps-2 text-[#346dab] font-bold">
                                {" "}
                                نظام النقليات
                            </span>
                            <p className="cairo text-9xl w-full flex ps-2">
                                <span className="h-1.5 w-10 bg-black me-1 rounded-lg">.</span>{" "}
                                <span className="h-1.5 w-2 bg-[#346dab] rounded-lg ms-1">.</span>
                                <span className="h-1.5 w-2 bg-[#346dab] rounded-lg ms-1">
                                    .
                                </span>{" "}
                                <span className="h-1.5 w-2 bg-[#346dab] rounded-lg ms-1">.</span>{" "}
                            </p>
                            <p className="text-base font-bold text-gray-600 pe-14 kufi">
                                برنامج النقليات الذي نقدمه هو نظام متكامل يساعد على إدارة جميع عمليات النقل وإدارة الحسابات المتعلقة بها بكل سهولة وفعالية. تم تصميم البرنامج ليلبي احتياجات الشركات التي تعتمد على أسطول سيارات لنقل البضائع، ويتيح متابعة دقيقة للعمليات من البداية وحتى تسليم الشحنات للعملاء.
                            </p>
                        </div>
                    </div>
                    <div className="third my-12 lg:px-24 px-9 w-full md:flex">
                        <div className="data md:w-1/2 flex flex-col justify-center ">
                            <p className="cairo  text-blue-950 m-0 mt-4 md:text-lg text-base font-[650] ">
                                <span>
                                    <i className="text-blue-600 me-2  fa-solid fa-circle-notch"></i>{" "}
                                </span>

                                البرنامج يدير جميع عملياتك وحساباتك بشكل كامل.

                            </p>

                            <p className="cairo  text-blue-950 m-0 mt-4 md:text-lg text-base font-[650] ">
                                <span>
                                    <i className="text-blue-600 me-2  fa-solid fa-circle-notch"></i>{" "}
                                </span>

                                حساب الإيرادات والمصروفات والأرباح بشكل دوري أو سنوي.

                            </p>
                            <p className="cairo  text-blue-950 m-0 mt-4 md:text-lg text-base font-[650] ">
                                <span>
                                    <i className="text-blue-600 me-2  fa-solid fa-circle-notch"></i>{" "}
                                </span>
                                إعداد تقارير مالية شاملة تشمل الميزانية وقائمة الدخل.
                            </p>

                            <p className="cairo  text-blue-950 m-0 mt-4 md:text-lg text-base font-[650] ">
                                <span>
                                    <i className="text-blue-600 me-2  fa-solid fa-circle-notch"></i>{" "}
                                </span>
                                الربط والتكامل مع الهيئة لإصدار الفاتورة الإلكترونية.
                            </p>

                        </div>
                        <div className="img md:w-1/2 flex justify-center ">
                            <img className="w-4/5  " src={trans1} alt="" />
                        </div>
                    </div>
                    <div className="fivth my-12 lg:px-24 px-9 w-full md:flex">
                        <div className="img md:w-1/2 flex justify-center ">
                            <img className="w-4/5" src={trans2} alt="" />
                        </div>

                        <div className="data md:w-1/2 flex flex-col justify-center ">
                            <p className="cairo  text-blue-950 m-0 mt-4 md:text-lg text-base font-[650] ">
                                <span>
                                    <i className="text-blue-600 me-2  fa-solid fa-circle-notch"></i>{" "}
                                </span>{" "}
                                تعريف كامل لأسطول السيارات (الموديلات، الألوان، الأنواع).
                            </p>

                            <p className="cairo  text-blue-950 m-0 mt-4 md:text-lg text-base font-[650] ">
                                <span>
                                    <i className="text-blue-600 me-2  fa-solid fa-circle-notch"></i>{" "}
                                </span>{" "}
                                إدارة الصيانة الدورية للسيارات (الزيت، الكفرات، الرخص).
                            </p>
                            <p className="cairo  text-blue-950 m-0 mt-4 md:text-lg text-base font-[650] ">
                                <span>
                                    <i className="text-blue-600 me-2  fa-solid fa-circle-notch"></i>{" "}
                                </span>{" "}
                                تحذيرات بقرب انتهاء صلاحيات الوثائق الخاصة بالسائقين ورخص التشغيل.
                            </p>

                            <p className="cairo  text-blue-950 m-0 mt-4 md:text-lg text-base font-[650] ">
                                <span>
                                    <i className="text-blue-600 me-2  fa-solid fa-circle-notch"></i>{" "}
                                </span>{" "}
                                متابعة الحمولة منذ التحميل وحتى الوصول والتسليم.
                            </p>

                        </div>
                    </div>
                    <div className="third my-12 lg:px-24 px-9 w-full md:flex">
                        <div className="data md:w-1/2 flex flex-col justify-center ">
                            <p className="cairo  text-blue-950 m-0 mt-4 md:text-lg text-base font-[650] ">
                                <span>
                                    <i className="text-blue-600 me-2  fa-solid fa-circle-notch"></i>{" "}
                                </span>

                                حساب المسافة داخل المدينة وبين المدن لتحديد تكلفة النقل لكل عميل.

                            </p>

                            <p className="cairo  text-blue-950 m-0 mt-4 md:text-lg text-base font-[650] ">
                                <span>
                                    <i className="text-blue-600 me-2  fa-solid fa-circle-notch"></i>{" "}
                                </span>

                                متابعة خط سير السيارة وتحريكها بين المدن والفروع.

                            </p>
                            <p className="cairo  text-blue-950 m-0 mt-4 md:text-lg text-base font-[650] ">
                                <span>
                                    <i className="text-blue-600 me-2  fa-solid fa-circle-notch"></i>{" "}
                                </span>
                                إصدار فواتير التسليم للعميل يومية، أسبوعية أو شهرية.
                            </p>

                            <p className="cairo  text-blue-950 m-0 mt-4 md:text-lg text-base font-[650] ">
                                <span>
                                    <i className="text-blue-600 me-2  fa-solid fa-circle-notch"></i>{" "}
                                </span>
                                تحديد أسعار النقل بناءً على المسافات والمدينة.
                            </p>

                        </div>
                        <div className="img md:w-1/2 flex justify-center ">
                            <img className="w-4/5  " src={trans3} alt="" />
                        </div>
                    </div>
                    <div className="fivth my-12 lg:px-24 px-9 w-full md:flex">
                        <div className="img md:w-1/2 flex justify-center ">
                            <img className="w-4/5" src={trans4} alt="" />
                        </div>

                        <div className="data md:w-1/2 flex flex-col justify-center ">
                            <p className="cairo  text-blue-950 m-0 mt-4 md:text-lg text-base font-[650] ">
                                <span>
                                    <i className="text-blue-600 me-2  fa-solid fa-circle-notch"></i>{" "}
                                </span>{" "}
                                تعريف العملاء وأماكن تسليمهم.
                            </p>

                            <p className="cairo  text-blue-950 m-0 mt-4 md:text-lg text-base font-[650] ">
                                <span>
                                    <i className="text-blue-600 me-2  fa-solid fa-circle-notch"></i>{" "}
                                </span>{" "}
                                إعداد قوائم أسعار مخصصة لكل عميل سواء داخل المدينة أو خارجها.
                            </p>
                            <p className="cairo  text-blue-950 m-0 mt-4 md:text-lg text-base font-[650] ">
                                <span>
                                    <i className="text-blue-600 me-2  fa-solid fa-circle-notch"></i>{" "}
                                </span>{" "}
                                متابعة الطلبات لكل عميل من التحميل إلى التسليم.
                            </p>

                            <p className="cairo  text-blue-950 m-0 mt-4 md:text-lg text-base font-[650] ">
                                <span>
                                    <i className="text-blue-600 me-2  fa-solid fa-circle-notch"></i>{" "}
                                </span>{" "}
                                إعداد تقارير كاملة عن الطلبيات لكل عميل والمندوبين.
                            </p>

                        </div>
                    </div>
                    <div className="third my-12 lg:px-24 px-9 w-full md:flex">
                        <div className="data md:w-1/2 flex flex-col justify-center ">
                            <p className="cairo  text-blue-950 m-0 mt-4 md:text-lg text-base font-[650] ">
                                <span>
                                    <i className="text-blue-600 me-2  fa-solid fa-circle-notch"></i>{" "}
                                </span>

                                إدارة عهد السائقين والموظفين (متابعة العمولات والعهد).

                            </p>

                            <p className="cairo  text-blue-950 m-0 mt-4 md:text-lg text-base font-[650] ">
                                <span>
                                    <i className="text-blue-600 me-2  fa-solid fa-circle-notch"></i>{" "}
                                </span>

                                تحذيرات بقرب انتهاء إقامات السائقين ورخص القيادة.

                            </p>
                            <p className="cairo  text-blue-950 m-0 mt-4 md:text-lg text-base font-[650] ">
                                <span>
                                    <i className="text-blue-600 me-2  fa-solid fa-circle-notch"></i>{" "}
                                </span>
                                متابعة السائقين والموظفين المرتبطين بكل طلبية.
                            </p>

                            <p className="cairo  text-blue-950 m-0 mt-4 md:text-lg text-base font-[650] ">
                                <span>
                                    <i className="text-blue-600 me-2  fa-solid fa-circle-notch"></i>{" "}
                                </span>
                                تقارير حول أداء السائقين وعدد الطلبيات التي تم تسليمها.
                            </p>

                        </div>
                        <div className="img md:w-1/2 flex justify-center ">
                            <img className="w-4/5  " src={trans5} alt="" />
                        </div>
                    </div>
                    <div className="fivth my-12 lg:px-24 px-9 w-full md:flex">
                        <div className="img md:w-1/2 flex justify-center ">
                            <img className="w-4/5" src={trans6} alt="" />
                        </div>

                        <div className="data md:w-1/2 flex flex-col justify-center ">
                            <p className="cairo  text-blue-950 m-0 mt-4 md:text-lg text-base font-[650] ">
                                <span>
                                    <i className="text-blue-600 me-2  fa-solid fa-circle-notch"></i>{" "}
                                </span>{" "}
                                تقارير تفصيلية عن كل عميل بما في ذلك المدن وأماكن التسليم.
                            </p>

                            <p className="cairo  text-blue-950 m-0 mt-4 md:text-lg text-base font-[650] ">
                                <span>
                                    <i className="text-blue-600 me-2  fa-solid fa-circle-notch"></i>{" "}
                                </span>{" "}
                                تقارير عن الطلبيات والمندوبين على مستوى المصانع والفروع.
                            </p>
                            <p className="cairo  text-blue-950 m-0 mt-4 md:text-lg text-base font-[650] ">
                                <span>
                                    <i className="text-blue-600 me-2  fa-solid fa-circle-notch"></i>{" "}
                                </span>{" "}
                                تقارير شاملة للحسابات المالية وحركة التدفقات النقدية.
                            </p>

                            <p className="cairo  text-blue-950 m-0 mt-4 md:text-lg text-base font-[650] ">
                                <span>
                                    <i className="text-blue-600 me-2  fa-solid fa-circle-notch"></i>{" "}
                                </span>{" "}
                                تقارير متابعة الطلبيات اليومية والشهرية.
                            </p>

                        </div>
                    </div>


                </div>

            </div>
        </>
    );
}
