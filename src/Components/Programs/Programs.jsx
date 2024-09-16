import React from 'react'
import finance1 from "../../assets/programs-icons/finance1.png"
import client from "../../assets/programs-icons/client.png"
import buyes from "../../assets/programs-icons/buyes.png"
import drayeb from "../../assets/programs-icons/drayeb.gif"
import dot from "../../assets/programs-icons/dot.png"



export default function Programs() {
    return (<>
        <div dir='rtl' className="programs mt-36">

            <div className="e-card w-5/6 md:h-80 playing">
                <div className="image"></div>

                <div className="wave2 lg:w-[1200px] md:w-[400px] w-[200px] lg:h-[700px] md:h-[700px] h-[300px]"></div>
                <div className="wave2 lg:w-[1200px] md:w-[400px] w-[200px] lg:h-[700px] md:h-[700px] h-[300px]"></div>
                <div className="wave2 lg:w-[1200px] md:w-[400px] w-[200px] lg:h-[700px] md:h-[700px] h-[300px]"></div>


                <div className="infotop text-white">

                    <p className='lg:text-8xl md:text-6xl text-3xl p-4 cairo font-semibold'>كلاود بيزنس</p>
                    <p className='md:text-xl text-lg lg:w-1/2 md:w-2/3 font-medium text-slate-300 px-4 messiri'>يدير فروعك فى انحاء المملكه والعالم لتعمل من اى مكان ولا يشترط شبكه داخليه فقط انترنت</p>
                    <br />
                </div>
            </div>

            <div className="contains w-5/6 mb-9  mx-auto ">

                <p className='text-3xl font-semibold cairo'>محتويات البرنامج :</p>
                <div className="contains-data grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">

                    <div className="data-card   flex items-center gap-2 bg-slate-100   rounded-md">
                        <div className="data-icon w-1/5 p-1 bg-blue-900 rounded-md ">
                            <img className='w-full h-full' src={finance1} alt="" />
                        </div>
                        <p className='text-[1.1rem] m-0 p-1 font-semibold kufi'>الحسابات العامة</p>


                    </div>
                    <div className="data-card   flex items-center gap-2 bg-slate-100   rounded-md">
                        <div className="data-icon w-1/5 p-1 bg-blue-900 rounded-md ">
                            <img className='w-full h-full' src={client} alt="" />
                        </div>
                        <p className='text-[1.1rem] m-0 p-1 font-semibold kufi'>العملاء</p>


                    </div>
                    <div className="data-card   flex items-center gap-2 bg-slate-100   rounded-md">
                        <div className="data-icon w-1/5 p-1 bg-blue-900 rounded-md ">
                            <img className='w-full h-full' src={buyes} alt="" />
                        </div>
                        <p className='text-[1.1rem] m-0 p-1 font-semibold kufi'>المبيعات</p>


                    </div>

                    <div className="data-card   flex items-center gap-2 bg-slate-100   rounded-md">
                        <div className="data-icon w-1/5 p-1 bg-blue-900 rounded-md ">
                            <img className='w-full h-full' src={finance1} alt="" />
                        </div>
                        <p className='text-[1.1rem] m-0 p-1 font-semibold kufi'> مناديب المبيعات</p>


                    </div>
                    <div className="data-card   flex items-center gap-2 bg-slate-100   rounded-md">
                        <div className="data-icon w-1/5 p-1 bg-blue-900 rounded-md ">
                            <img className='w-full h-full' src={client} alt="" />
                        </div>
                        <p className='text-[1.1rem] m-0 p-1 font-semibold kufi'>المشتريات</p>


                    </div>
                    <div className="data-card   flex items-center gap-2 bg-slate-100   rounded-md">
                        <div className="data-icon w-1/5 p-1 bg-blue-900 rounded-md ">
                            <img className='w-full h-full' src={buyes} alt="" />
                        </div>
                        <p className='text-[1.1rem] m-0 p-1 font-semibold kufi'>المورديين</p>


                    </div>
                    <div className="data-card   flex items-center gap-2 bg-slate-100   rounded-md">
                        <div className="data-icon w-1/5 p-1 bg-blue-900 rounded-md ">
                            <img className='w-full h-full' src={finance1} alt="" />
                        </div>
                        <p className='text-[1.1rem] m-0 p-1 font-semibold kufi'> المخازن</p>


                    </div>
                    <div className="data-card   flex items-center gap-2 bg-slate-100   rounded-md">
                        <div className="data-icon w-1/5 p-1 bg-blue-900 rounded-md ">
                            <img className='w-full h-full' src={client} alt="" />
                        </div>
                        <p className='text-[1.1rem] m-0 p-1 font-semibold kufi'>شئون الموظفين</p>


                    </div>

                    <div className="data-card   flex items-center gap-2 bg-slate-100   rounded-md">
                        <div className="data-icon w-1/5 p-1 bg-blue-900 rounded-md ">
                            <img className='w-full h-full' src={buyes} alt="" />
                        </div>
                        <p className='text-[1.1rem] m-0 p-1 font-semibold kufi'>نقاط البيع</p>


                    </div>
                    <div className="data-card   flex items-center gap-2 bg-slate-100   rounded-md">
                        <div className="data-icon w-1/5 p-1 bg-blue-900 rounded-md ">
                            <img className='w-full h-full' src={finance1} alt="" />
                        </div>
                        <p className='text-[1.1rem] m-0 p-1 font-semibold kufi'> المطاعم و الكافيهات</p>


                    </div>
                    <div className="data-card   flex items-center gap-2 bg-slate-100   rounded-md">
                        <div className="data-icon w-1/5 p-1 bg-blue-900 rounded-md ">
                            <img className='w-full h-full' src={client} alt="" />
                        </div>
                        <p className='text-[1.1rem] m-0 p-1 font-semibold kufi'>M-App لمناديب المبيعات</p>


                    </div>
                    <div className="data-card   flex items-center gap-2 bg-slate-100   rounded-md">
                        <div className="data-icon w-1/5 p-1 bg-blue-900 rounded-md ">
                            <img className='w-full h-full' src={buyes} alt="" />
                        </div>
                        <p className='text-[1.1rem] m-0 p-1 font-semibold kufi'>M-App لأصحاب الشركات</p>


                    </div>
                    <div className="data-card   flex items-center gap-2 bg-slate-100   rounded-md">
                        <div className="data-icon w-1/5 p-1 bg-blue-900 rounded-md ">
                            <img className='w-full h-full' src={finance1} alt="" />
                        </div>
                        <p className='text-[1.1rem] m-0 p-1 font-semibold kufi'>M-App للعملاء</p>


                    </div>
                    <div className="data-card   flex items-center gap-2 bg-slate-100   rounded-md">
                        <div className="data-icon w-1/5 p-1 bg-blue-900 rounded-md ">
                            <img className='w-full h-full' src={client} alt="" />
                        </div>
                        <p className='text-[1.1rem] m-0 p-1 font-semibold kufi'>نظام الاستقدام</p>


                    </div>
                    <div className="data-card   flex items-center gap-2 bg-slate-100   rounded-md">
                        <div className="data-icon w-1/5 p-1 bg-blue-900 rounded-md ">
                            <img className='w-full h-full' src={buyes} alt="" />
                        </div>
                        <p className='text-[1.1rem] m-0 p-1 font-semibold kufi'>نظام التزيين و الحلاقة</p>


                    </div>
                    <div className="data-card   flex items-center gap-2 bg-slate-100   rounded-md">
                        <div className="data-icon w-1/5 p-1 bg-blue-900 rounded-md ">
                            <img className='w-full h-full' src={buyes} alt="" />
                        </div>
                        <p className='text-[1.1rem] m-0 p-1 font-semibold kufi'>مراكز التكلفة </p>


                    </div>


                </div>





            </div>
            <div className="drayeb bg-blue-200  bg-opacity-20 p-4 flex">
                <div className="drayeb-data lg:w-1/2 md:w-2/3 w-full md:p-11 p-8">
                    <p className='text-5xl m-0 messiri text-blue-500'>الضرائب</p>
                    <p className='cairo text-blue-950 m-0 mt-4 lg:text-lg text-base font-bold '><span><i className="text-blue-600 me-2  fa-solid fa-circle-notch"></i>    </span> اعدادات الضرايب للعملاء و المورديين و تحديد طبيعة كل منهما سواء داخلي او مصدر مستورد او دول مجلس تعاون خليجي لان النظام يحسب كل فئة بطريقة مختلفة حسب النظام السعودي
                    </p>
                    <p className='cairo text-blue-950 m-0 mt-4 lg:text-lg text-base font-bold '><span><i className="text-blue-600 me-2  fa-solid fa-circle-notch"></i>    </span> تحديد نسبة الضريبة لكل صنف و كذلك الاصناف المعفاة
                    </p>
                    <p className='cairo text-blue-950 m-0 mt-4 lg:text-lg text-base font-bold '><span><i className="text-blue-600 me-2  fa-solid fa-circle-notch"></i>    </span> الأقرار الضريبي و اقرار الفحص الخاص للمبيعات و المشتريات
                    </p>
                    <p className='cairo text-blue-950 m-0 mt-4 lg:text-lg text-base font-bold '><span><i className="text-blue-600 me-2  fa-solid fa-circle-notch"></i>    </span> الأقرار الضريبي علي مستوي الفرع او كامل الشركة و كذلك الفحص
                    </p>
                    <p className='cairo text-blue-950 m-0 mt-4 lg:text-lg text-base font-bold '><span><i className="text-blue-600 me-2  fa-solid fa-circle-notch"></i>    </span>  الفاتورة الالكترونية بشقيها
                    </p>
                    <p className='cairo text-blue-950 m-0 mt-4 lg:text-lg text-base font-bold '><span><i className="text-blue-600 me-2  fa-solid fa-circle-notch"></i>    </span>  الربط مع هيئة الزكاة بالمملكة العربية السعودية
                    </p>
                    <p className='cairo text-blue-950 m-0 mt-4 lg:text-lg text-base font-bold '><span><i className="text-blue-600 me-2  fa-solid fa-circle-notch"></i>    </span>  عمل اي نوع من انواع الضرائب
                    </p>



                </div>
                <div className="drayeb-img   lg:w-1/2 md:w-1/3 md:block hidden ">

                    <img className='w-4/5 mx-auto h-full' src={drayeb} alt="" />
                </div>


            </div>
            <div className="public">
                <p className='md:text-4xl text-2xl font-semibold text-center text-blue-500 cairo'>نبذة عامة عن البرنامج</p>
                <div className="public-data px-9 ">
                    <p className='messiri md:font-[1000] font-medium text-gray-600 md:text-lg text-base '>لا تكتمل الأنشطة التجارية دون نظام مبيعات فعال يدعم النمو ويساهم في زيادة الأرباح. يُعد برنامج الكلاود بيزنس برنامج مبيعات شامل، يسهل عمليات البيع ويوفر مزايا مثل قوائم الأسعار المتنوعة، وخصومات التأمين. كما يتيح إدارة فريق المبيعات من خلال متابعة العملاء وتقييم الأداء لضمان صرف العمولات. بالإضافة إلى ذلك، تقدم ايزي كود ميزات تسويقية مثل الخصومات و العروض،</p>
                    <p className='cairo  text-blue-950 m-0 mt-4 md:text-lg text-base font-[650] '><span><i className="text-blue-600 me-2  fa-solid fa-circle-notch"></i>    </span> البرنامج عبارة عن Desktop Application يعمل علي نظام Windows بجميع اصداراته و يعمل كشبكة داخلية او اون لاين Cloud & Client Server
                    </p>
                    <p className='cairo  text-blue-950 m-0 mt-4 md:text-lg text-base font-[650] '><span><i className="text-blue-600 me-2  fa-solid fa-circle-notch"></i>    </span> يعمل بنظام قواعد البيانات SQL Server الذي يتيح الامان التام للبيانات و سرعة الوصول اليها
                    </p>
                    <p className='cairo  text-blue-950 m-0 mt-4 md:text-lg text-base font-[650] '><span><i className="text-blue-600 me-2  fa-solid fa-circle-notch"></i>    </span> نظام صلاحيات دقيق و قوي للتحكم في الخيارات المتاحة لكل مستخدم بالنسبة لكل فرع في الفروع علي حدي او علي الشركة بأكملها
                    </p>

                    <p className='cairo  text-blue-950 m-0 mt-4 md:text-lg text-base font-[650] '><span><i className="text-blue-600 me-2  fa-solid fa-circle-notch"></i>    </span>صلاحيات المستخدم في تغير السعر و اعلي نسبة خصم للمستخدمين
                    </p>

                    <p className='cairo  text-blue-950 m-0 mt-4 md:text-lg text-base font-[650] '><span><i className="text-blue-600 me-2  fa-solid fa-circle-notch"></i>    </span> صلاحيات المستخدم لفترة محددة او مستديمة
                    </p>

                    <p className='cairo  text-blue-950 m-0 mt-4 md:text-lg text-base font-[650] '><span><i className="text-blue-600 me-2  fa-solid fa-circle-notch"></i>    </span> جميع الـ Modules مترابطة تلقائيا و يمكنك التعامل مع كل Module علي حدي
                    </p>

                    <p className='cairo  text-blue-950 m-0 mt-4 md:text-lg text-base font-[650] '><span><i className="text-blue-600 me-2  fa-solid fa-circle-notch"></i>    </span> البرنامج Fully Responsive حيث يمكنك التعامل معه عن طريق جميع احجام الشاشات (موبايل - تابلت - لابتوب )
                    </p>

                    <p className='cairo  text-blue-950 m-0 mt-4 md:text-lg text-base font-[650] '><span><i className="text-blue-600 me-2  fa-solid fa-circle-notch"></i>    </span> يمكنك عمل Export لجميع الملفات الي Excel PDF
                    </p>
                    <p className='cairo  text-blue-950 m-0 mt-4 md:text-lg text-base font-[650] '><span><i className="text-blue-600 me-2  fa-solid fa-circle-notch"></i>    </span> ادارة محترفة و دقيقة للفروع بحيث يمكنك متابعة العمليات التي تتم علي الفروع المختلفة من اي مكان بالعالم
                    </p>
                    <p className='cairo  text-blue-950 m-0 mt-4 md:text-lg text-base font-[650] '><span><i className="text-blue-600 me-2  fa-solid fa-circle-notch"></i>    </span> ارسال ايميلات و كذلك ارشفة كامل المستندات
                    </p>
                    <p className='cairo  text-blue-950 m-0 mt-4 md:text-lg text-base font-[650] '><span><i className="text-blue-600 me-2  fa-solid fa-circle-notch"></i>    </span>عمل فواتير مخزنية و فواتير خدمية و فواتير التصريف (الأمانات - الأرساليات)
                    </p>
                    <p className='cairo  text-blue-950 m-0 mt-4 md:text-lg text-base font-[650] '><span><i className="text-blue-600 me-2  fa-solid fa-circle-notch"></i>    </span> امكانية البيع شامل الضريبة او احتساب الضريبة بعد سعر البيع ايهما شئت
                    </p>
                    <p className='cairo  text-blue-950 m-0 mt-4 md:text-lg text-base font-[650] '><span><i className="text-blue-600 me-2  fa-solid fa-circle-notch"></i>    </span> امكانية العمل في حالة انقطاع خدمة الانترنت و كذلك نقل البيانات في حالة رجوع الخدمة
                    </p>
                    <p className='cairo  text-blue-950 m-0 mt-4 md:text-lg text-base font-[650] '><span><i className="text-blue-600 me-2  fa-solid fa-circle-notch"></i>    </span> الاضافات و الخصومات يمكن استخدامها في شتي انواع النظام
                    </p>





                </div>

            </div>



        </div>

    </>
    )
}
