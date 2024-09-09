import React, { useState } from 'react'
import home from "../../assets/home.png"
import qoutes from "../../assets/qoutes.png"
import qoutes2 from "../../assets/qoutes2.png"
import systems from "../../assets/systems.png"
import systems2 from "../../assets/systems2.png"





export default function AboutUs() {
    const [activeTab, setActiveTab] = useState("suppliers-accounts");

    const tabClasses = (tabName) =>
        `cursor-pointer py-2 px-4   md:text-2xl text-[1rem] cairo font-medium ${activeTab === tabName
            ? "border-b-2 border-[#20617c]"
            : "text-[#20617c] bg-white"
        } `;
    return (<>
        <div className="about mt-28">
            <div className="first p-8 md:flex bg-blue-200 bg-opacity-20  w-full">
                <div className="left md:hidden ">
                    <img src={home} alt="" />

                </div>
                <div dir='rtl' className="right flex justify-center items-center md:w-1/2">
                    <p className='md:text-5xl text-3xl cairo font-bold'>Easy Code - أيزي كود</p>

                </div>
                <div className="left md:flex hidden w-1/2">
                    <img src={home} alt="" />

                </div>

            </div>
            <div dir='rtl' className="second mt-5 py-7 md:px-28 px-6">
                <img src={qoutes} alt="" />
                <p dir='rtl' className='cairo md:text-2xl text-[0.8rem] font-medium'>ﻣﺆﺳﺴــﺔ اﻟﻜﻮد اﻟﺴــﻬﻞ ﻟﺘﻘﻨﻴﻪ ﻧﻈﻢ اﻟﻤﻌﻠﻮﻣﺎت  ﺗﺄﺳﺴــﺖ ﻓﻰ ﺑﺪاﻳﺔ 2004، ﺑﺈﺳــﻢ وردة الغروب
                    ﻟﻠﺒﺮﻣﺠﻴــﺎت وﻫــﻲ ﺷــﺮﻛﺔ ﺳــﻌﻮدﻳﺔ وﺗﺤﻮﻟــﺖ اﻟــﻰ ﻣﺆﺳﺴــﺔ اﻟﻜــﻮد اﻟﺴــﻬﻞ ﻟﺘﻘﻨﻴــﻪ ﻧﻈــﻢ
                    اﻟﻤﻌﻠﻮﻣﺎت  ﻓﻲ نهاية عام 2018.
                    وﻫــﻲ ﻣــﻦ اﻟﻤﺆﺳﺴــﺎت اﻟﻤﺘﺨﺼﺼــﺔ ﻓــﻰ ﺗﺼﻤﻴــﻢ و اعداد أﻧﻈﻤــﺔ وﺑﺮاﻣــﺞ اﻟﺤﺎﺳــﺐ اﻵﻟــﻰ وﺗﻌﺘﺒــﺮ
                    ﻣــﻦ اﻟﻤﺆﺳﺴــﺎت اﻟﻤﺘﻤﻴــﺰة ﻓــﻰ ﻫــﺬا اﻟﻤﺠــﺎل ﻟﻘﺪرﺗﻬــﺎ ﻋﻠــﻰ ﺗﻄﺒﻴــﻖ الدورات اﻟﻤﺴــﺘﻨﺪﻳﺔ ﻋﻠـــﻰ
                    ﻣﺨﺘﻠﻒ درجات اﻟﺼﻌﻮﺑﺔ والتعقيد.
                    وﺑﺮﻣﺠﺘﻬــﺎ ﺑصورة ﻣﺒﺴــﻄﻪ ﺗﺴــﻬﻞ اﺳــﺘﺨﺪاﻣﻬﺎ وﺧﺎﺻــﺔ ﻟﻤــﻦ ﻟــﻢ ﻳﺴــﺒﻖ ﻟــﻪ اﺳــﺘﺨﺪﺎﻣ اﻟﺤﺎﺳــﺐ
                    اﻵﻟــﻰ ﻣــﻦ ﻗﺒــﻞ ﻛﺬﻟــﻚ ﻋﻤــﻞ ﺟﻤﻴــﻊ اﻟﺘﻄﺒﻴﻘــﺎت ﻣــﻦ دﻳﺴــﻚ ﺗــﻮب وﻛﻼوﺩ وﻣﻮﺑﺎﻳــﻞ اﺑﻠﻜﻴﺸــﻦ
                    وﻏﻴﺮة اﻟﻜﺜﻴﺮ والكثير . </p>
                <div className="end-qoute flex justify-end">                 <img src={qoutes2} alt="" />
                </div>


            </div>


            <div dir='rtl' className="third md:px-28 px-4">
                <p className='md:text-3xl text-xl cairo font-bold text-blue-500'>رؤيتنا</p>
                <p className='md:text-xl text-[0.8rem] text-gray-700 md:leading-9 messiri md:font-[400] font-medium md:w-4/5'>

                    رؤيتنا أن نكون الرواد في تقديم حلول ERP المتكاملة التي تساهم في تطوير الأعمال السعودية. نسعى لتحقيق ذلك من خلال تقديم برامج مبتكرة تعزز من الكفاءة التشغيلية وتدعم التحول الرقمي، بما يتوافق مع رؤية المملكة 2030. نحن ملتزمون بتقديم حلول تقنية متقدمة تلبي احتياجات السوق المحلي وتساعد الشركات على تحقيق أهدافها بكفاءة وفعالية.

                    نهدف إلى دعم الأعمال في تحسين عملياتها وتحقيق أقصى استفادة من الموارد من خلال أنظمة ERP متكاملة تسهم في تبسيط الإجراءات وتسهيل إدارة الأعمال. نحن نؤمن بأهمية الابتكار والتكنولوجيا في تعزيز القدرة التنافسية للشركات، ونسعى دائمًا لتقديم حلول تكنولوجية تسهم في تعزيز النمو المستدام والتطور المستمر في السوق السعودي.

                    بفضل فريقنا المتخصص وخبراتنا الواسعة في مجال التقنية، نعمل على توفير حلول مخصصة تلبي احتياجات كل عميل، مما يساهم في تحقيق رؤيتهم الإستراتيجية وتعزيز أدائهم العام.
                </p>

                <p className='md:text-3xl text-xl cairo font-bold text-blue-500'>رسالتنا</p>
                <p className='md:text-xl text-[0.8rem] text-gray-700 md:leading-9 messiri md:font-[400] font-medium md:w-4/5'>
                    نحن في أيزي كود نقدم حلولاً مناسبة لمختلف الشركات، بغض النظر عن اختلاف احتياجاتهم أو قدراتهم المالية. نحن ملتزمون بتقديم حلول برمجية مصممة خصيصًا لتلبية احتياجات عملائنا الفردية، مما يتيح لهم الاستفادة القصوى من التكنولوجيا المتقدمة لتحقيق أهدافهم.

                    فريقنا المتخصص يعمل على فهم متعمق لاحتياجات كل عميل، مما يمكننا من تقديم حلول مخصصة تتماشى مع متطلبات أعمالهم الفريدة. نحن نركز على تقديم حلول مرنة وقابلة للتطوير، مما يضمن أن برامجنا يمكنها التكيف مع التغيرات والتحديات التي قد تواجه الشركات على مر الزمن.

                    بالإضافة إلى ذلك، نحن نلتزم بتوفير دعم استثنائي على مدار الساعة لضمان نجاح عملائنا في كل خطوة. نقدم تدريبًا شاملاً وفريق دعم فني محترف جاهز لمساعدتهم في حل أي مشاكل قد تطرأ. نحن نؤمن بأهمية بناء شراكات طويلة الأمد مع عملائنا من خلال تقديم خدماتنا بجودة عالية واهتمام دقيق بأدق التفاصيل.

                    من خلال حلولنا البرمجية المبتكرة والدعم المستمر، نسعى لتحقيق النجاح المشترك وتمكين عملائنا من تحقيق مزايا تنافسية مستدامة في سوق العمل المتغير.
                </p>

            </div>

            <div className="fourth md:p-8 p-2 md:flex bg-blue-200 bg-opacity-20  w-full">


                <div className="left md:w-1/2">
                    <img className='md:w-4/5' src={systems} alt="" />

                </div>
                <div dir='rtl' className="right flex flex-col justify-center p-10 md:w-1/2">
                    <p className='cairo md:text-5xl text-xl text-blue-900 font-bold md:font-semibold'>المواصفات العامة للأنظمة</p>
                    <div className="line md:w-96 w-64    h-1 text-white bg-[#339ecc]">

                    </div>
                    <p className='md:text-2xl text-[1.1rem] messiri'>تهدف جميع الأنظمة إلى تسجيل ومتابعة ومراقبة حركة الشركة أو المصنع أو المؤسسة في مختلف مجالات العمل من خلال بيانات سحابية، وكذلك شبكة كمبيوتر تدعم العمليات. هذه الأنظمة تعمل بواسطة برامج متكاملة تغطي كافة الاحتياجات التشغيلية، مع الالتزام بمعايير قانون العمل في المملكة العربية السعودية.</p>
                </div>

            </div>
            <div className="fifth p-8 px-2 md:px-14">

                <div dir='rtl' className="options md:flex  gap-7 w-full p-5 md:px-10">
                    <div className="option md:w-1/2">
                        <p className='text-white p-1 px-2 m-0 cairo w-fit md:text-2xl text-lg mt-3 font-medium bg-[#339ECC] '>تأمين النظام</p>
                        <p className='messiri m-0 mt-3 md:text-lg text-[1rem]'>بحيث لا يستطيع أي شخص اختراق النظام أو الحصول على أي بيانات منه، يتم تطبيق أعلى معايير الأمان والحماية. تعتمد الأنظمة على تقنيات التشفير المتقدمة لضمان سرية البيانات وحمايتها من التهديدات الإلكترونية. يتم تفعيل إجراءات متعددة لمراقبة الأمان بشكل دوري،</p>


                    </div>
                    <div className="option md:w-1/2">
                        <p className='text-white p-1 px-2 m-0 cairo w-fit md:text-2xl text-lg mt-3 font-medium bg-[#339ECC] '>تطبيق ضريبة القيمة المضافة </p>
                        <p className='messiri m-0 mt-3 md:text-lg text-[1rem]'>إمكانية تطبيق ضريبة القيمة المضافة تلقائيًا وإعدادات العملاء والموردين بنسبهم سواء كانوا محليين أو مصدرين أو من دول مجلس التعاون الخليجي، مع القدرة على تغيير نسب الضريبة على الأصناف أو إلغائها حسب مقتضيات تغيير سياسة المملكة في نسب وأنواع الضريبة.</p>


                    </div>


                </div>
                <div dir='rtl' className="options md:flex  gap-7 w-full p-5 md:px-10">
                    <div className="option md:w-1/2">
                        <p className='text-white p-1 px-2 m-0 cairo w-fit md:text-2xl text-lg mt-3 font-medium bg-[#339ECC] '>الفاتورة الألكترونية و اقرار الفحص</p>
                        <p className='messiri m-0 mt-3 md:text-lg text-[1rem]'>الفاتورة الإلكترونية تشمل تقديم جميع الفواتير والمعاملات بشكل رقمي، مع الربط مع هيئة الزكاة لضمان الامتثال الكامل للمتطلبات القانونية، مثل التقارير الضريبية وتسجيل المعاملات التجارية. يتيح هذا الربط إمكانية الفحص الآلي والدقيق للفواتير من قبل الجهات المختصة، مما يعزز الشفافية ويقلل من الأخطاء اليدوية ويضمن الالتزام بالقوانين المحلية، مما يسهل على الشركات إدارة بياناتها المالية بفعالية وامتثال.</p>


                    </div>
                    <div className="option md:w-1/2">
                        <p className='text-white p-1 px-2 m-0 cairo w-fit md:text-2xl text-lg mt-3 font-medium bg-[#339ECC] '>التكامل التام بين جميع الأنظمة </p>
                        <p className='messiri m-0 mt-3 md:text-lg text-[1rem]'>حيث يتم تجنب تكرار إدخال أي بيانات في أكثر من نظام، مما يضمن تدفق البيانات بسلاسة وكفاءة عبر جميع الأنظمة دون الحاجة إلى إعادة إدخالها. هذا يقلل من الأخطاء ويوفر الوقت والجهد، مع ضمان تكامل المعلومات ودقتها في جميع الأقسام.</p>


                    </div>


                </div>
                <div dir='rtl' className="options md:flex  gap-7 w-full p-5 md:px-10">
                    <div className="option md:w-1/2">
                        <p className='text-white p-1 px-2 m-0 cairo w-fit md:text-2xl text-lg mt-3 font-medium bg-[#339ECC] '>سهولة الاستخدام</p>
                        <p className='messiri m-0 mt-3 md:text-lg text-[1rem]'> حيث لا تتطلب الخبرة السابقة في استخدام الكمبيوتر للعاملين الذين سيقومون بتشغيل النظام. يتميز النظام بواجهة مستخدم بسيطة ومباشرة، مما يسمح لأي شخص، بغض النظر عن مستوى مهاراته التقنية، بتشغيله بسهولة وكفاءة.</p>


                    </div>
                    <div className="option md:w-1/2">
                        <p className='text-white p-1 px-2 m-0 cairo w-fit md:text-2xl text-lg mt-3 font-medium bg-[#339ECC] '>إمكانية التحكم</p>
                        <p className='messiri m-0 mt-3 md:text-lg text-[1rem]'> إمكانية التحكم في تحديد الاختصاصات والصلاحيات على مستوى كل مستخدم بشكل فردي وعلى مستوى كل نظام، بما يتيح مرونة عالية في إدارة الأدوار والمسؤوليات داخل المؤسسة.







                        </p>


                    </div>


                </div>





            </div>

            <div className="sixth p-6 md:flex bg-blue-200 bg-opacity-20  w-full">
                <div className="left md:hidden flex">
                    <img className='' src={systems2} alt="" />

                </div>


                <div dir='rtl' className="right flex flex-col justify-center md:p-6 p-3 md:w-1/2">
                    <p className='cairo md:text-4xl text-lg text-blue-900 font-bold md:font-semibold'>ﻟﻤﺎذا اﻟﻜﻮد اﻟﺴﻬﻞ ﻟﺘﻘﻨﻴﻪ ﻧﻈﻢ اﻟﻤﻌﻠﻮﻣﺎت
                    </p>
                    <div className="line md:w-96  w-64   h-1 text-white bg-[#339ecc]">

                    </div>
                    <div className="why-reason flex gap-2  mt-5">
                        <span><img className='w-11' src={qoutes} alt="" /></span>
                        <span className='cairo font-medium text-[0.8rem] md:text-[1rem]'>ﻟﻜﻮﻧﻬﺎ ﻣﻦ أﻗﺪم وﺃﻛﺜﺮ اﻟﻤﺆﺳﺴﺎت ﺗﻤﻴّﺰاً ﻓﻲ ﻣﺠﺎل أﻧﻈﻤﺔ اﻟﺤﺎﺳﺐ اﻵﻟﻲ، ﺗﺘﻤﺘﻊ ﺑﺨﺒﺮة ﻋﺮﻳﻘﺔ وﺳﺠﻞ ﻣﻤﻴّﺰ ﻓﻲ ﺗﻘﺪﻳﻢ ﺣﻠﻮل ﺑﺮﻣﺠﻴﺔ ﻣﺘﻜﺎﻣﻠﺔ.</span>

                    </div>
                    <div className="why-reason flex gap-2  mt-5">
                        <span><img className='w-14' src={qoutes} alt="" /></span>
                        <span className='cairo font-medium text-[0.8rem] md:text-[1rem]'>ﻷﻧــﻚ ﺳــﺘﺘﻌﺎﻣﻞ ﻣــﻊ ﻓﻨﻴﻴــﻦ ﻣﺘﺨَﺼﺼﻴﻦ ﻓﻲ ﻣﺠﺎﻻت اﻟﺒﺮﻣَﺠَﺔ، وﺍﻟﺘﺮﻛِيب، وﺍﻟﺘﺪرِيب، وﺧِﺪﻣَﺔ اﻟﻌﻤﻼء، كُلٌّ ﺑِتَخَصُّصِهِ، فَسَتَحْصُلُ عَلَى دعمِ مِهْنِيٍّ مُمَيَّز يُلَبِّي جميعَ احتياجاتِكَ بفعالية.</span>

                    </div>
                    <div className="why-reason flex gap-2  mt-5">
                        <span><img className='w-20' src={qoutes} alt="" /></span>
                        <span className='cairo font-medium text-[0.8rem] md:text-[1rem]'> ولأنك ستتحصل على دعم فني متميز، فستكون مزودًا بدليل شامل للمستخدم، يتضمن شرحًا وافيًا للطريقة المناسبة للتعامل مع الأنظمة. هذا يضمن أنك ستحصل على المساعدة التي تحتاجها لاستخدام الأنظمة بسرعة وبدون الحاجة للرجوع إلى الشركة.</span>

                    </div>
                    <div className="why-reason flex gap-2  mt-5">
                        <span><img className='w-16' src={qoutes} alt="" /></span>
                        <span className='cairo font-medium text-[0.8rem] md:text-[1rem]'> وأخيرًا، نظرًا لوجود قاعدة عملاء كبيرة تعتمد على برامجنا في إدارة شؤونها اليومية المالية والإدارية، فإنك ستكون جزءًا من شبكة واسعة من الشركات التي تحقق نجاحًا تامًا باستخدام حلولنا.

                        </span>

                    </div>
                </div>
                <div className="left md:flex hidden w-1/2">
                    <img className='w-4/5' src={systems2} alt="" />

                </div>

            </div>


            <div className="sivnth   md:p-12 md:px-24 p-3 flex flex-col items-center">

                <p className="m-0 py-6 text-center md:text-4xl text-3xl font-semibold cairo text-[#339ecc] ">
                    انظمتنا التقنية{" "}
                </p>
                <div dir="rtl" className="w-full">
                    <div className="flex border-b border-gray-200 py-3  ">
                        <div
                            className={tabClasses("suppliers-accounts")}
                            onClick={() => setActiveTab("suppliers-accounts")}
                        >
                            المورديين
                        </div>
                        <div
                            className={tabClasses("clients-accounts")}
                            onClick={() => setActiveTab("clients-accounts")}
                        >
                            العملاء
                        </div>
                        <div
                            className={tabClasses("finance-accounts")}
                            onClick={() => setActiveTab("clients-accounts")}
                        >
                            المالية
                        </div>
                        <div
                            className={tabClasses("storage-accounts")}
                            onClick={() => setActiveTab("clients-accounts")}
                        >
                            المخازن
                        </div>
                    </div>

                    <div className="p-4 mt-4  bg-white  rounded-md">
                        {activeTab === "suppliers-accounts" && (
                            <div>
                                <p className="alexandria md:text-4xl text-2xl font-semibold text-blue-600">
                                    حسابات المورديين
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
                                        تفاصيل أكثر
                                    </button>
                                </div>
                            </div>
                        )}
                        {activeTab === "clients-accounts" && (
                            <div>
                                <p className="alexandria md:text-4xl text-2xl font-semibold text-blue-600">
                                    حسابات العملاء
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
                                        تفاصيل أكثر
                                    </button>
                                </div>
                            </div>
                        )}
                        {activeTab === "finance-accounts" && (
                            <div>
                                <p className="alexandria md:text-4xl text-2xl font-semibold text-blue-600">
                                    الحسابات المالية
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
                                        تفاصيل أكثر
                                    </button>
                                </div>
                            </div>
                        )}
                        {activeTab === "final-bussiness" && (
                            <div>
                                <p className="alexandria md:text-4xl text-2xl font-semibold text-blue-600">
                                    نظام المخازن
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
                                        تفاصيل أكثر
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>



        </div>



    </>
    )
}
