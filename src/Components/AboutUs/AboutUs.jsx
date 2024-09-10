import React, { useState } from "react";
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





export default function AboutUs() {
    const [activeTab, setActiveTab] = useState("suppliers-accounts");
    const [activeTab2, setActiveTab2] = useState("human-resources");

    const tabClasses2 = (tabName2) =>
        `cursor-pointer py-2 px-4   md:text-2xl text-[1rem] cairo font-medium ${activeTab2 === tabName2
            ? "border-b-2 border-[#20617c]"
            : "text-[#20617c] bg-white"
        } `;
    const tabClasses = (tabName) =>
        `cursor-pointer py-2 px-4   md:text-2xl text-[1rem] cairo font-medium ${activeTab === tabName
            ? "border-b-2 border-[#20617c]"
            : "text-[#20617c] bg-white"
        } `;
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
                    <div className="shape3 absolute -left-20 md:top-1/4 top-1/2">
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

                <div className="fourth md:p-8 p-2 md:flex bg-blue-200 bg-opacity-20  w-full">
                    <div className="left lg:w-1/2 px-4 ">
                        <img className="lg:w-4/5" src={systems} alt="" />
                    </div>
                    <div
                        dir="rtl"
                        className="right  flex flex-col justify-center  lg:p-10 lg:w-1/2"
                    >
                        <p className="cairo lg:text-5xl md:text-2xl text-xl text-blue-900 font-bold lg:font-semibold">
                            المواصفات العامة للأنظمة
                        </p>
                        <div className="line lg:w-96 md:w-72 w-64    h-1 text-white bg-[#339ecc]"></div>
                        <p className="lg:text-2xl md:text-base text-[1.1rem] messiri">
                            تهدف جميع الأنظمة إلى تسجيل ومتابعة ومراقبة حركة الشركة أو المصنع
                            أو المؤسسة في مخت
                            لف مجالات العمل من خلال بيانات سحابية، وكذلك شبكة
                            كمبيوتر تدعم العمليات. هذه الأنظمة تعمل بواسطة برامج متكاملة تغطي
                            كافة الاحتياجات التشغيلية، مع الالتزام بمعايير قانون العمل في
                            المملكة العربية السعودية.
                        </p>
                    </div>
                </div>
                <div className="fifth p-8 px-2 lg:px-14 md:px-3">
                    <div dir="rtl" className="options md:flex  gap-7 w-full lg:p-5 p-3 lg:px-10 px-4">
                        <div className="option md:w-1/2">
                            <p className="text-white p-1 px-2 m-0 cairo w-fit lg:text-2xl md:text-xl text-lg mt-3 font-medium bg-[#339ECC] ">
                                تأمين النظام
                            </p>
                            <p className="messiri m-0 mt-3 lg:text-lg md:text-[1.1rem] text-[1rem]">
                                بحيث لا يستطيع أي شخص اختراق النظام أو الحصول على أي بيانات منه،
                                يتم تطبيق أعلى معايير الأمان والحماية. تعتمد الأنظمة على تقنيات
                                التشفير المتقدمة لضمان سرية البيانات وحمايتها من التهديدات
                                الإلكترونية. يتم تفعيل إجراءات متعددة لمراقبة الأمان بشكل دوري،
                            </p>
                        </div>
                        <div className="option md:w-1/2">
                            <p className="text-white p-1 px-2 m-0 cairo w-fit lg:text-2xl md:text-xl text-lg mt-3 font-medium bg-[#339ECC] ">
                                تطبيق ضريبة القيمة المضافة{" "}
                            </p>
                            <p className="messiri m-0 mt-3 lg:text-lg md:text-[1.1rem] text-[1rem]">
                                إمكانية تطبيق ضريبة القيمة المضافة تلقائيًا وإعدادات العملاء
                                والموردين بنسبهم سواء كانوا محليين أو مصدرين أو من دول مجلس
                                التعاون الخليجي، مع القدرة على تغيير نسب الضريبة على الأصناف أو
                                إلغائها حسب مقتضيات تغيير سياسة المملكة في نسب وأنواع الضريبة.
                            </p>
                        </div>
                    </div>
                    <div dir="rtl" className="options md:flex  gap-7 w-full lg:p-5 p-3 lg:px-10 px-4">
                        <div className="option md:w-1/2">
                            <p className="text-white p-1 px-2 m-0 cairo w-fit lg:text-2xl md:text-xl text-lg mt-3 font-medium bg-[#339ECC] ">
                                الفاتورة الألكترونية و اقرار الفحص
                            </p>
                            <p className="messiri m-0 mt-3 lg:text-lg md:text-[1.1rem] text-[1rem]">
                                الفاتورة الإلكترونية تشمل تقديم جميع الفواتير والمعاملات بشكل
                                رقمي، مع الربط مع هيئة الزكاة لضمان الامتثال الكامل للمتطلبات
                                القانونية، مثل التقارير الضريبية وتسجيل المعاملات التجارية. يتيح
                                هذا الربط إمكانية الفحص الآلي والدقيق للفواتير من قبل الجهات
                                المختصة، مما يعزز الشفافية ويقلل من الأخطاء اليدوية ويضمن
                                الالتزام بالقوانين المحلية، مما يسهل على الشركات إدارة بياناتها
                                المالية بفعالية وامتثال.
                            </p>
                        </div>
                        <div className="option md:w-1/2">
                            <p className="text-white p-1 px-2 m-0 cairo w-fit lg:text-2xl md:text-xl text-lg mt-3 font-medium bg-[#339ECC] ">
                                التكامل التام بين جميع الأنظمة{" "}
                            </p>
                            <p className="messiri m-0 mt-3 lg:text-lg md:text-[1.1rem] text-[1rem]">
                                حيث يتم تجنب تكرار إدخال أي بيانات في أكثر من نظام، مما يضمن
                                تدفق البيانات بسلاسة وكفاءة عبر جميع الأنظمة دون الحاجة إلى
                                إعادة إدخالها. هذا يقلل من الأخطاء ويوفر الوقت والجهد، مع ضمان
                                تكامل المعلومات ودقتها في جميع الأقسام.
                            </p>
                        </div>
                    </div>
                    <div dir="rtl" className="options md:flex  gap-7 w-full lg:p-5 p-3 lg:px-10 px-4">
                        <div className="option md:w-1/2">
                            <p className="text-white p-1 px-2 m-0 cairo w-fit lg:text-2xl md:text-xl text-lg mt-3 font-medium bg-[#339ECC] ">
                                سهولة الاستخدام
                            </p>
                            <p className="messiri m-0 mt-3 lg:text-lg md:text-[1.1rem] text-[1rem]">
                                {" "}
                                حيث لا تتطلب الخبرة السابقة في استخدام الكمبيوتر للعاملين الذين
                                سيقومون بتشغيل النظام. يتميز النظام بواجهة مستخدم بسيطة ومباشرة،
                                مما يسمح لأي شخص، بغض النظر عن مستوى مهاراته التقنية، بتشغيله
                                بسهولة وكفاءة.
                            </p>
                        </div>
                        <div className="option md:w-1/2">
                            <p className="text-white p-1 px-2 m-0 cairo w-fit lg:text-2xl md:text-xl text-lg mt-3 font-medium bg-[#339ECC] ">
                                إمكانية التحكم
                            </p>
                            <p className="messiri m-0 mt-3 lg:text-lg md:text-[1.1rem] text-[1rem]">
                                {" "}
                                إمكانية التحكم في تحديد الاختصاصات والصلاحيات على مستوى كل
                                مستخدم بشكل فردي وعلى مستوى كل نظام، بما يتيح مرونة عالية في
                                إدارة الأدوار والمسؤوليات داخل المؤسسة.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="sixth lg:p-6 p-3 md:flex bg-blue-200 bg-opacity-20  w-full">
                    <div className="left md:hidden flex">
                        <img className="" src={systems2} alt="" />
                    </div>

                    <div
                        dir="rtl"
                        className="right flex flex-col justify-center lg:p-6 p-3 lg:w-1/2 md:w-2/3"
                    >
                        <p className="cairo lg:text-4xl md:text-2xl text-[1.1rem] text-blue-900 font-bold md:font-semibold">
                            ﻟﻤﺎذا اﻟﻜﻮد اﻟﺴﻬﻞ ﻟﺘﻘﻨﻴﻪ ﻧﻈﻢ اﻟﻤﻌﻠﻮﻣﺎت
                        </p>
                        <div className="line lg:w-96 md:w-72     h-1 text-white bg-[#339ecc]"></div>
                        <div className="why-reason flex gap-2  mt-5">
                            <span>
                                <img className="w-11" src={qoutes} alt="" />
                            </span>
                            <span className="cairo font-medium text-[0.9rem] md:text-[1rem]">
                                ﻟﻜﻮﻧﻬﺎ ﻣﻦ أﻗﺪم وﺃﻛﺜﺮ اﻟﻤﺆﺳﺴﺎت ﺗﻤﻴّﺰاً ﻓﻲ ﻣﺠﺎل أﻧﻈﻤﺔ اﻟﺤﺎﺳﺐ اﻵﻟﻲ،
                                ﺗﺘﻤﺘﻊ ﺑﺨﺒﺮة ﻋﺮﻳﻘﺔ وﺳﺠﻞ ﻣﻤﻴّﺰ ﻓﻲ ﺗﻘﺪﻳﻢ ﺣﻠﻮل ﺑﺮﻣﺠﻴﺔ ﻣﺘﻜﺎﻣﻠﺔ.
                            </span>
                        </div>
                        <div className="why-reason flex gap-2  mt-5">
                            <span>
                                <img className="w-14" src={qoutes} alt="" />
                            </span>
                            <span className="cairo font-medium text-[0.9rem] md:text-[1rem]">
                                ﻷﻧــﻚ ﺳــﺘﺘﻌﺎﻣﻞ ﻣــﻊ ﻓﻨﻴﻴــﻦ ﻣﺘﺨَﺼﺼﻴﻦ ﻓﻲ ﻣﺠﺎﻻت اﻟﺒﺮﻣَﺠَﺔ،
                                وﺍﻟﺘﺮﻛِيب، وﺍﻟﺘﺪرِيب، وﺧِﺪﻣَﺔ اﻟﻌﻤﻼء، كُلٌّ ﺑِتَخَصُّصِهِ،
                                فَسَتَحْصُلُ عَلَى دعمِ مِهْنِيٍّ مُمَيَّز يُلَبِّي جميعَ
                                احتياجاتِكَ بفعالية.
                            </span>
                        </div>
                        <div className="why-reason flex gap-2  mt-5">
                            <span>
                                <img className="w-20" src={qoutes} alt="" />
                            </span>
                            <span className="cairo font-medium text-[0.9rem] md:text-[1rem]">
                                {" "}
                                ولأنك ستتحصل على دعم فني متميز، فستكون مزودًا بدليل شامل
                                للمستخدم، يتضمن شرحًا وافيًا للطريقة المناسبة للتعامل مع
                                الأنظمة. هذا يضمن أنك ستحصل على المساعدة التي تحتاجها لاستخدام
                                الأنظمة بسرعة وبدون الحاجة للرجوع إلى الشركة.
                            </span>
                        </div>
                        <div className="why-reason flex gap-2  mt-5">
                            <span>
                                <img className="w-16" src={qoutes} alt="" />
                            </span>
                            <span className="cairo font-medium text-[0.9rem] md:text-[1rem]">
                                {" "}
                                وأخيرًا، نظرًا لوجود قاعدة عملاء كبيرة تعتمد على برامجنا في
                                إدارة شؤونها اليومية المالية والإدارية، فإنك ستكون جزءًا من شبكة
                                واسعة من الشركات التي تحقق نجاحًا تامًا باستخدام حلولنا.
                            </span>
                        </div>
                    </div>
                    <div className="left md:flex hidden lg:w-1/2 md:w-1/3">
                        <img className="w-4/5" src={systems2} alt="" />
                    </div>
                </div>

                <div className="sivnth   lg:p-12 md:p-8 lg:px-24 md:px-7 p-3 flex flex-col items-center">
                    <p className="m-0 py-6 text-center md:text-4xl text-3xl font-semibold cairo text-[#339ecc] ">
                        انظمتنا التقنية{" "}
                    </p>
                    <div dir="rtl" className="w-full">
                        <div className="flex border-b justify-center border-gray-200 py-3  ">
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
                                onClick={() => setActiveTab("finance-accounts")}
                            >
                                المالية
                            </div>
                            <div
                                className={tabClasses("storage-accounts")}
                                onClick={() => setActiveTab("storage-accounts")}
                            >
                                المخازن
                            </div>
                        </div>

                        <div className="p-4 mt-4  bg-white  rounded-md">
                            {activeTab === "suppliers-accounts" && (
                                <>
                                    <p className="lg:text-3xl text-2xl font-semibold text-blue-900 kufi">
                                        حسابات المورديين
                                    </p>
                                    <div className="line lg:w-96 md:w-72 w-64    h-1 text-white bg-[#339ecc]"></div>

                                    <div className="information mt-3 md:flex gap-3">
                                        <div className="info-details md:w-1/2 mt-6 cairo md:text-lg text-base flex gap-1  items-center">
                                            <img className="w-8" src={dot} alt="" />
                                            ﻳﺴــﻤﺢ اﻟﻨﻈــﺎم ﺑﺘﺄﺳــﻴﺲ ﻗﺎﻋــﺪة ﺑﻴﺎﻧــﺎت ﻛﺎﻣﻠــﺔ ﻋﻦ
                                            اﻟﻤﻮرﺩﻳﻦ.
                                        </div>
                                        <div className="info-details md:w-1/2 mt-6 cairo md:text-lg text-base flex gap-1  items-center">
                                            <img className="w-8" src={dot} alt="" />
                                            إﻣﻜﺎﻧﻴﺔ إﺩﺧﺎل اﻟﻤﻴﺰاﻧﻴﺔ اﻟﺘﻘﺪﻳﺮﻳﺔ وﻣﺘﺎﺑﻌﺘﻬﺎ.
                                        </div>
                                    </div>
                                    <div className="information mt-3 md:flex gap-3">
                                        <div className="info-details md:w-1/2 mt-6 cairo md:text-lg text-base flex gap-1  items-center">
                                            <img className="w-8" src={dot} alt="" />
                                            النظام يتيح متابعة حركة أوراق الدفع من خلال حالات مختلفة،
                                            وهي: مصدر، مسلم، مرتد، ملغى، أو محصل، لتوفير تتبع دقيق
                                            لجميع المعاملات المتعلقة بأوراق الدفع.
                                        </div>
                                        <div className="info-details md:w-1/2 mt-6 cairo md:text-lg text-base flex gap-1  items-center">
                                            <img className="w-8" src={dot} alt="" />
                                            النظام يغطي الحركات مثل: الأرصدة الافتتاحية (مدين ودائن)،
                                            الإشعارات المدينة والدائنة، فواتير المشتريات ومرتجع
                                            المشتريات، توريد نقدي للمورد، إصدار أوراق دفع، وإصدار
                                            نموذج الإقرار الضريبي.
                                        </div>
                                    </div>
                                    <div className="information mt-3 md:flex gap-3">
                                        <div className="info-details md:w-1/2 mt-6 cairo md:text-lg text-base flex gap-1  items-center">
                                            <img className="w-8" src={dot} alt="" />
                                            النظام يستخرج تقارير شاملة تشمل حسابات الموردين،
                                            المأموريات الضريبية، المديونيات، أوراق الدفع، ونماذج
                                            وشهادات الضرائب.
                                        </div>
                                        <div className="info-details md:w-1/2 mt-6 cairo md:text-lg text-base flex gap-1  items-center">
                                            <img className="w-8" src={dot} alt="" />
                                            النظام يسمح بتسديد المدفوعات على غير الفواتير ومتابعة
                                            الفواتير المسددة.
                                        </div>
                                    </div>
                                </>
                            )}
                            {activeTab === "clients-accounts" && (
                                <>
                                    <p className="lg:text-3xl text-2xl font-semibold text-blue-900 kufi">
                                        حسابات العملاء
                                    </p>
                                    <div className="line lg:w-96 md:w-72 w-64    h-1 text-white bg-[#339ecc]"></div>

                                    <div className="information mt-3 md:flex gap-3">
                                        <div className="info-details md:w-1/2 mt-6 cairo md:text-lg text-base flex gap-1  items-center">
                                            <img className="w-8" src={dot} alt="" />
                                            ﻳﺴــﻤﺢ اﻟﻨﻈــﺎم ﺑﺘﺄﺳــﻴﺲ ﻗﺎﻋــﺪة ﺑﻴﺎﻧــﺎت ﻣﺘﻜﺎﻣﻠــﺔ ﻋﻦ
                                            اﻟﻌﻤﻼء.
                                        </div>
                                        <div className="info-details md:w-1/2 mt-6 cairo md:text-lg text-base flex gap-1  items-center">
                                            <img className="w-8" src={dot} alt="" />
                                            النظام يغطي جميع الحركات المحتملة مثل: الأرصدة الافتتاحية،
                                            الإشعارات، الفواتير النقدية، المبيعات، المرتجعات، واستلام
                                            وإيداع أوراق القبض من العميل والمظهرة.
                                        </div>
                                    </div>
                                    <div className="information mt-3 md:flex gap-3">
                                        <div className="info-details md:w-1/2 mt-6 cairo md:text-lg text-base flex gap-1  items-center">
                                            <img className="w-8" src={dot} alt="" />
                                            النظام يتابع مديونيات العملاء، وأقدمية الدين، وحركة أوراق
                                            القبض عبر حالات مختلفة: في الصندوق، مودع بالبنك، مرتد،
                                            ملغى، أو محصل.
                                        </div>
                                        <div className="info-details md:w-1/2 mt-6 cairo md:text-lg text-base flex gap-1  items-center">
                                            <img className="w-8" src={dot} alt="" />
                                            النظام يتابع أوراق القبض المرتدة عبر حالات: في الصندوق،
                                            محصلة، أو مبدلة.
                                        </div>
                                    </div>
                                    <div className="information mt-3 md:flex gap-3">
                                        <div className="info-details md:w-1/2 mt-6 cairo md:text-lg text-base flex gap-1  items-center">
                                            <img className="w-8" src={dot} alt="" />
                                            النظام يسمح بتسديد المدفوعات على غير الفواتير ومتابعة
                                            الفواتير المسددة.
                                        </div>
                                        <div className="info-details md:w-1/2 mt-6 cairo md:text-lg text-base flex gap-1  items-center">
                                            <img className="w-8" src={dot} alt="" />
                                            النظام يستخرج تقارير شاملة تشمل حسابات العملاء،
                                            المديونيات، وأوراق القبض.
                                        </div>
                                    </div>
                                </>
                            )}
                            {activeTab === "finance-accounts" && (
                                <>
                                    <p className="text-3xl  font-semibold text-blue-900 kufi">
                                        الحسابات المالية                                    </p>
                                    <div className="line lg:w-96 md:w-72 w-64    h-1 text-white bg-[#339ecc]"></div>

                                    <p className="md:w-2/3 md:text-lg text-base cairo font-[650]">النظام مصمم ليتلاءم مع المعايير المحاسبية المتعارف عليها، ويلبي جميع الاستخدامات المحاسبية بمرونة وسرعة و اهم عناصر النظام ما يلي :
                                    </p>
                                    <div className="information mt-3 md:flex gap-3">
                                        <div className="info-details md:w-1/2 mt-6 cairo md:text-lg text-base flex gap-1  items-center">
                                            <img className="w-8" src={dot} alt="" />
                                            دﻟﻴﻞ ﺣﺴﺎﺑﺎت ﻣﺘﻌﺪد اﻟﻤﺴﺘﻮﻳﺎت.                                         </div>
                                        <div className="info-details md:w-1/2 mt-6 cairo md:text-lg text-base flex gap-1  items-center">
                                            <img className="w-8" src={dot} alt="" />
                                            دﻟﻴﻞ ﻣﺮاﻛﺰ ﺗﻜﻠﻔﺔ ﻣﺘﻌﺪد اﻟﻤﺴﺘﻮﻳﺎت.
                                        </div>
                                    </div>
                                    <div className="information mt-3 md:flex gap-3">
                                        <div className="info-details md:w-1/2 mt-6 cairo md:text-lg text-base flex gap-1  items-center">
                                            <img className="w-8" src={dot} alt="" />
                                            النظام يتيح توزيع بنود المصروفات على عدة حسابات وفق معدلات توزيع يتم إدخالها بواسطة المستخدم.
                                        </div>
                                        <div className="info-details md:w-1/2 mt-6 cairo md:text-lg text-base flex gap-1  items-center">
                                            <img className="w-8" src={dot} alt="" />
                                            إﻣﻜﺎﻧﻴﺔ إﺩﺧﺎل اﻟﻤﻴﺰاﻧﻴﺔ اﻟﺘﻘﺪﻳﺮﻳﺔ وﻣﺘﺎﺑﻌﺘﻬﺎ.
                                            ﺗﻌﺪد اﻟﻌﻤﻼت.
                                        </div>
                                    </div>
                                    <div className="information mt-3 md:flex gap-3">
                                        <div className="info-details md:w-1/2 mt-6 cairo md:text-lg text-base flex gap-1  items-center">
                                            <img className="w-8" src={dot} alt="" />
                                            ﺗﺴــﺠﻴﻞ اﻟﻌﻤــﻼت ﺣﺴــﺐ ﻗﻴﻤــﻪ اﻟﻌﻤﻠــﻪ ﺑﺴــﻌﺮﻫﺎ
                                            اﻟﻴﻮﻣﻰ.
                                        </div>
                                        <div className="info-details md:w-1/2 mt-6 cairo md:text-lg text-base flex gap-1  items-center">
                                            <img className="w-8" src={dot} alt="" />
                                            إﻣﻜﺎﻧﻴــﺔ ﺣﻔــﻆ ﻣﺠﻤﻮﻋــﺔ ﻣــﻦ ﻗﻴــﻮد اﻟﻴﻮﻣﻴــﺔ ﻳﺘــﻢ
                                            ﺗﺴﺠﻴﻠﻬﺎ ﺑﺼﻮرة ﺗﻠﻘﺎﺋﻴﺔ. Repeated Vouchers
                                        </div>
                                    </div>
                                    <div className="information mt-3 md:flex gap-3">
                                        <div className="info-details md:w-1/2 mt-6 cairo md:text-lg text-base flex gap-1  items-center">
                                            <img className="w-8" src={dot} alt="" />
                                            النظام يستخرج مجموعة كبيرة من التقارير، تشمل مراجعة واستعراض قبل وبعد الترحيل، والتقارير الختامية مثل الميزانية، الأرباح والخسائر، وقائمة الدخل.

                                        </div>
                                        <div className="info-details md:w-1/2 mt-6 cairo md:text-lg text-base flex gap-1  items-center">
                                            <img className="w-8" src={dot} alt="" />
                                            النظام يتيح الحصول على القوائم المالية بأكثر من أسلوب من خلال مجموعة تقارير يمكن تعريفها بواسطة المستخدم Report Generator

                                        </div>
                                    </div>
                                </>
                            )}
                            {activeTab === "storage-accounts" && (
                                <>
                                    <p className="text-3xl  font-semibold text-blue-900 kufi">
                                        نظام المخازن                                    </p>
                                    <div className="line lg:w-96 md:w-72 w-64    h-1 text-white bg-[#339ecc]"></div>

                                    <p className="md:w-2/3 md:text-lg text-base cairo font-[650]"> ﻳﺴــﻤﺢ اﻟﻨﻈــﺎم ﺑﻌــﺪد ﻻﻧﻬﺎﺋــﻲ
                                        ﻣــﻦ اﻷﺻﻨﺎف ﻛﻤﺎ ﻳﻤﻜﻦ ﺗﺼﻨﻴﻒ
                                        اﻷﺻﻨﺎف إﻟﻰ ﻣﺠﻤﻮﻋﺎت ﻣﺨﺰﻧية ﻃﺒﻘﺎ
                                        ﻟﻄﺒﻴﻌﺔ ﻛﻞ ﺻﻨﻒ وﻳﻤﻜﻦ اﻟﺘﺤﺪﻳﺪ ﻓﻲ
                                        اﻟﺘﻘﺎرﻳﺮ ﻟﻤﺠﻤﻮﻋﺎت ﻣﻌﻴﻨﺔ، وﺍﻟﺘﺠﻤﻴﻊ ﻋﻠﻰ
                                        ﻣﺴﺘﻮى ﻛﻞ ﺗﺼﻨﻴﻒ.
                                    </p>
                                    <div className="information mt-3 md:flex gap-3">
                                        <div className="info-details md:w-1/2 mt-6 cairo md:text-lg text-base flex gap-1  items-center">
                                            <img className="w-8" src={dot} alt="" />
                                            النظام يدعم تطبيق سياسات تسعير مختلفة: سياسة الوارد أولاً يصرف أولاً، سياسة متوسط التكلفة المتغيرة على التوزيع، ويتيح التقييم بأي من الأساليب التالية: سعر البيع، آخر سعر شراء، أعلى أو أقل سعر شراء.

                                        </div>
                                        <div className="info-details md:w-1/2 mt-6 cairo md:text-lg text-base flex gap-1  items-center">
                                            <img className="w-8" src={dot} alt="" />
                                            النظام يدير حركات الشراء والبيع المباشر، أوامر الصرف للتصنيع، وارد الإنتاج، المنصرف الداخلي، التسويات، والتحويلات بين المخازن، ويشمل الجرد. يصلح للشركات التجارية والمصانع على حد سواء.
                                        </div>
                                    </div>
                                    <div className="information mt-3 md:flex gap-3">
                                        <div className="info-details md:w-1/2 mt-6 cairo md:text-lg text-base flex gap-1  items-center">
                                            <img className="w-8" src={dot} alt="" />
                                            إﻣﻜﺎﻧﻴﺔ اﻟﺼﺮف اﻟﺘﻠﻘﺎﺋﻲ ﻟﻤﻜﻮنات اﻟﺼﻨﻒ
                                            ﻃﺒﻘﺎ ﻟﻘﺎﺋﻤﺔ اﻟﻤﻜﻮﻧﺎت Bill of Material                                         </div>
                                        <div className="info-details md:w-1/2 mt-6 cairo md:text-lg text-base flex gap-1  items-center">

                                            <img className="w-8" src={dot} alt="" />
                                            النظام يدعم تعدد المخازن والوحدات ويتعامل مع حدود التخزين مثل الحد الأدنى، وحد الطلب، والحد الأقصى.

                                        </div>
                                    </div>
                                    <div className="information mt-3 md:flex gap-3">
                                        <div className="info-details md:w-1/2 mt-6 cairo md:text-lg text-base flex gap-1  items-center">
                                            <img className="w-8" src={dot} alt="" />
                                            ﻳﺘﻴــﺢ اﻟﺒﺮﻧﺎﻣــﺞ إﻋــﺎدﺔ ﺗﻜﻠﻔــﺔ رﺳــﺎﻟﺔ ﻣﻌﻴﻨــﺔ Actual Costing
                                        </div>
                                        <div className="info-details md:w-1/2 mt-6 cairo md:text-lg text-base flex gap-1  items-center">
                                            <img className="w-8" src={dot} alt="" />
                                            النظام يستخرج تقارير شاملة تشمل متابعة المخزون، التقييمات المختلفة، وتحليل المبيعات.

                                        </div>
                                    </div>

                                </>
                            )}
                        </div>
                    </div>
                </div>
                <div className="eaghtth   lg:p-12 md:p-8 lg:px-24 md:px-7 p-3 flex flex-col items-center">
                    <p className="m-0 py-6 text-center md:text-4xl text-2xl font-semibold cairo text-[#339ecc] ">
                        انظمة اخري تنتجها المؤسسة{" "}
                    </p>
                    <p dir="rtl" className="cairo text-center m-0 mt-1 md:text-base text-sm font-medium">المستوصفات - ادارة المطاعم - ادارة التخليص الجمركي - ادارة العقارات - الاستقدام - ادارة الارشفة الالكترونية</p>
                    <p dir="rtl" className="cairo text-center m-0 mt-1 md:text-base text-sm font-medium">الحكومة الألكترونية - التأهيل الطبي للمعاقين - ادارة النوادي - ادارة البحث و التحري - ادارة البلديات</p>

                    <div dir="rtl" className="w-full">
                        <div className="flex border-b justify-center border-gray-200 py-3  ">
                            <div
                                className={tabClasses2("human-resources")}
                                onClick={() => setActiveTab2("human-resources")}
                            >
                                شئون الموظفين
                            </div>
                            <div
                                className={tabClasses2("salaries")}
                                onClick={() => setActiveTab2("salaries")}
                            >
                                الاجور و المرتبات
                            </div>

                        </div>

                        <div className="p-4 mt-4  bg-white  rounded-md">
                            {activeTab2 === "human-resources" && (
                                <>
                                    <p className="lg:text-3xl text-2xl font-semibold text-blue-900 kufi">
                                        نظام شئون الموظفين
                                    </p>
                                    <div className="line lg:w-96 md:w-72 w-64    h-1 text-white bg-[#339ecc]"></div>

                                    <div className="information mt-3 md:flex gap-3">
                                        <div className="info-details md:w-1/2 mt-6 cairo md:text-lg text-base flex gap-1  items-center">
                                            <img className="w-8" src={dot} alt="" />
                                            ﺗﺴﺠﻴﻞ وﺍﺣﺘﺴﺎب اﻟﺤﻀﻮر وﺍﻻﻧصراف

                                        </div>
                                        <div className="info-details md:w-1/2 mt-6 cairo md:text-lg text-base flex gap-1  items-center">
                                            <img className="w-8" src={dot} alt="" />
                                            ﺗﺴﺠﻴﻞ وﺍﺣﺘﺴﺎب اﻻﺟﺎزات اﻻﻋﺘﻴﺎدﻳﺔ

                                        </div>
                                    </div>
                                    <div className="information mt-3 md:flex gap-3">
                                        <div className="info-details md:w-1/2 mt-6 cairo md:text-lg text-base flex gap-1  items-center">
                                            <img className="w-8" src={dot} alt="" />
                                            ﺗﺴﺠﻴﻞ ﺑﻴﺎﻧﺎت اﻹﻗﺎﻣﺔ وﻣﺘﺎﺑﻌﺔ ﺗﺠﺪﻳﺪﻫﺎ

                                        </div>
                                        <div className="info-details md:w-1/2 mt-6 cairo md:text-lg text-base flex gap-1  items-center">
                                            <img className="w-8" src={dot} alt="" />
                                            ﺗﺴﺠﻴﻞ وﺍﺣﺘﺴﺎب اﻻﺟﺎزات اﻟﻤﺮﺿﻴﺔ
                                        </div>
                                    </div>
                                    <div className="information mt-3 md:flex gap-3">
                                        <div className="info-details md:w-1/2 mt-6 cairo md:text-lg text-base flex gap-1  items-center">
                                            <img className="w-8" src={dot} alt="" />
                                            ﺗﺴﺠﻴﻞ وﺍﺣﺘﺴﺎب اﻟﺴﻨﻮﻳﺔ

                                        </div>
                                        <div className="info-details md:w-1/2 mt-6 cairo md:text-lg text-base flex gap-1  items-center">
                                            <img className="w-8" src={dot} alt="" />
                                            ﺗﺴﺠﻴﻞ اﻟﺘﺄﺧﻴﺮات

                                        </div>
                                    </div>
                                    <div className="information mt-3 md:flex gap-3">
                                        <div className="info-details md:w-1/2 mt-6 cairo md:text-lg text-base flex gap-1  items-center">
                                            <img className="w-8" src={dot} alt="" />
                                            ﺗﺴﺠﻴﻞ إﺿﺎﻓﻲ ﺳﺎﻋﺎت اﻟﻌﻤﻞ

                                        </div>
                                        <div className="info-details md:w-1/2 mt-6 cairo md:text-lg text-base flex gap-1  items-center">
                                            <img className="w-8" src={dot} alt="" />
                                            ﺗﺴﺠﻴﻞ اﺟﺎزات اﻟﺤﺞ

                                        </div>
                                    </div>
                                    <div className="information mt-3 md:flex gap-3">
                                        <div className="info-details md:w-1/2 mt-6 cairo md:text-lg text-base flex gap-1  items-center">
                                            <img className="w-8" src={dot} alt="" />
                                            ﺗﺴﺠﻴﻞ اﺟﺎزات اﻟﺰواج
                                        </div>
                                        <div className="info-details md:w-1/2 mt-6 cairo md:text-lg text-base flex gap-1  items-center">
                                            <img className="w-8" src={dot} alt="" />
                                            ﺗﺴﺠﻴﻞ وﺍﺣﺘﺴﺎب اﻻﺟﺎزات اﻟﻐﻴﺮ ﻣﺪﻓﻮﻋﺔ

                                        </div>
                                    </div>
                                    <div className="information mt-3 md:flex gap-3">
                                        <div className="info-details md:w-1/2 mt-6 cairo md:text-lg text-base flex gap-1  items-center">
                                            <img className="w-8" src={dot} alt="" />
                                            ﺗﺴﺠﻴﻞ ﻣﺄﻣﻮرﻳﺎت اﻟﻌﻤﻞ اﻟﺨﺎرﺟﻴﺔ


                                        </div>
                                        <div className="info-details md:w-1/2 mt-6 cairo md:text-lg text-base flex gap-1  items-center">
                                            <img className="w-8" src={dot} alt="" />
                                            ﺗﺴــﺠﻴﻞ وﺍﺣﺘﺴــﺎب ﻓﺘــﺮات اﻟﺴــﻤﺎح اﻟﺨﺎﺻــﺔ ﺑﺎﻟﺤﻀﻮر وﺍﻻﻧﺼﺮاف


                                        </div>
                                    </div>
                                    <div className="information mt-3 md:flex gap-3">
                                        <div className="info-details md:w-1/2 mt-6 cairo md:text-lg text-base flex gap-1  items-center">
                                            <img className="w-8" src={dot} alt="" />
                                            ﺗﺴــﺠﻴﻞ ﺑﻴﺎﻧــﺎت ﺟــﻮاﺯات اﻟﺴــﻔﺮ وﻣﺘﺎﺑﻌــﺔ
                                            ﺗﺠﺪﻳﺪﻫﺎ

                                        </div>
                                        <div className="info-details md:w-1/2 mt-6 cairo md:text-lg text-base flex gap-1  items-center">
                                            <img className="w-8" src={dot} alt="" />
                                            ﺗﺴــﺠﻴﻞ ﺑﻴﺎﻧــﺎت اﻟﺘﺄﻣﻴﻨــﺎت اﻻﺟﺘﻤﺎﻋﻴــﺔ وﻣﺘﺎﺑﻌــﺔ
                                            ﺗﺠﺪﻳﺪﻫﺎ

                                        </div>
                                    </div>
                                </>
                            )}
                            {activeTab2 === "salaries" && (
                                <>
                                    <p className="lg:text-3xl text-2xl font-semibold text-blue-900 kufi">
                                        نظام الاجور و المرتبات
                                    </p>
                                    <div className="line lg:w-96 md:w-72 w-64    h-1 text-white bg-[#339ecc]"></div>
                                    <div className="information mt-3 md:flex gap-3">
                                        <div className="info-details md:w-1/2 mt-6 cairo md:text-lg text-base flex gap-1  items-center">
                                            <img className="w-8" src={dot} alt="" />
                                            يتيح النظام تعدد فترات القبض خلال الشهر.

                                        </div>
                                        <div className="info-details md:w-1/2 mt-6 cairo md:text-lg text-base flex gap-1  items-center">
                                            <img className="w-8" src={dot} alt="" />
                                            يتيح النظام استخراج أنواع الأجر الأساسية والبدلات بدون حد أقصى، مع تعريف أسلوب التعامل (شهري / نسبة / يومي / ساعة).

                                        </div>
                                    </div>
                                    <div className="information mt-3 md:flex gap-3">
                                        <div className="info-details md:w-1/2 mt-6 cairo md:text-lg text-base flex gap-1  items-center">
                                            <img className="w-8" src={dot} alt="" />
                                            يتيح النظام استخراج الاستقطاعات بدون حد أقصى، مع تعريف أسلوب التعامل (شهري / نسبة / يومي / ساعة).

                                        </div>
                                        <div className="info-details md:w-1/2 mt-6 cairo md:text-lg text-base flex gap-1  items-center">
                                            <img className="w-8" src={dot} alt="" />
                                            يتيح النظام تطبيق أكثر من نظام تأمين حسب نوع التأمين.

                                        </div>
                                    </div>
                                    <div className="information mt-3 md:flex gap-3">
                                        <div className="info-details md:w-1/2 mt-6 cairo md:text-lg text-base flex gap-1  items-center">
                                            <img className="w-8" src={dot} alt="" />
                                            يقوم النظام بعمل التسوية الضريبية سنوياً أو عند ترك العامل للخدمة.

                                        </div>
                                        <div className="info-details md:w-1/2 mt-6 cairo md:text-lg text-base flex gap-1  items-center">
                                            <img className="w-8" src={dot} alt="" />
                                            يقدم النظام تقارير شهرية وسنوية لمتابعة الأجور والضرائب والتأمينات وحركة العمالة.

                                        </div>
                                    </div>
                                    <div className="information mt-3 md:flex gap-3">
                                        <div className="info-details md:w-1/2 mt-6 cairo md:text-lg text-base flex gap-1  items-center">
                                            <img className="w-8" src={dot} alt="" />
                                            يقوم النظام بمتابعة بيانات جوازات السفر والإقامة وتجديدها، والتأمين الاجتماعي والصحي، وتفويضات الزيارة، وتأشيرات الخروج والعودة، والإجراءات الخاصة بمكتب العمل والجوازات.







                                        </div>

                                    </div>
                                </>
                            )}

                        </div>
                    </div>
                </div>
                <div className="nineth bg-blue-200 bg-opacity-20 py-12 flex flex-col items-center p-6 ">
                    <p className="text-4xl cairo font-semibold text-blue-950 ">اقسام ايزي كود</p>

                    <div className="sections w-full md:flex">
                        <div className="section mt-3 md:w-1/3   flex flex-col justify-center items-center">
                            <div className="section-img md:w-2/3 md:h-2/3 w-1/2 h-1/2 overflow-hidden shadow-lg bg-white rounded-full">
                                <img className="w-full h-full" src={callcenter} alt="" />

                            </div>
                            <p className="m-0 mt-3  kufi font-medium text-blue-900   ">فريق دعم فني </p>
                            <p className="m-0 mt-3 cairo text-lg font-bold">دعم فني مميز</p>
                            <p className="m-0 mt-3 text-center w-4/5 text-gray-600 text-lg font-medium messiri">ﻳﻘــﺪم دﻋﻤــﺎ ﻓﻨﻴــﺎ ﻣﺘﺨﺼﺼــﺎ ﻟﻠﻌﻤــﻼء،
                                ﻣﺴــﺎﻋﺪﺗﻬﻢ ﻓــﻲ ﺣــﻞ اﻟﻤﺸــﺎﻛﻞ
                                اﻟﺘﻘﻨﻴــﺔ وﺗﻮﻓﻴــﺮ إﺭﺷــﺎدﺎﺗ وﺣﻠــﻮل
                                ﻓﻮرﻳــﺔ ﻟﻀﻤـ ـﺎن اﺳــﺘﺨﺪﺎﻣ ﺳــﻠﺲ وﻓﻌــﺎل
                                ﻟﻸﻧﻈﻤﺔ اﻟﻤﺤﺎﺳﺒﻴﺔ. </p>



                        </div>
                        <div className="section mt-3 md:w-1/3   flex flex-col justify-center items-center">
                            <div className="section-img md:w-2/3 md:h-2/3 w-1/2 h-1/2 overflow-hidden shadow-lg bg-white rounded-full">
                                <img className="w-full h-full" src={customerservice} alt="" />

                            </div>
                            <p className="m-0 mt-3  kufi font-medium text-blue-900   "> خدمة عملاء </p>
                            <p className="m-0 mt-3 cairo text-lg font-bold"> متاحة 24 ساعة</p>
                            <p className="m-0 mt-3 text-center w-4/5 text-gray-600 text-lg font-medium messiri">
                                ﻓﺮﻳــﻖ ﺧﺪﻣــﺔ اﻟﻌﻤــﻼء ﻓــﻲ إﻳــﺰي ﻛــﻮد
                                ﻳﻘــﺪم اﻟﺪﻋــﻢ اﻟﻔﻨــﻲ وﺍﻻﺳﺘﺸــﺎرﺎﺗ
                                اﻟﻤﺤﺎﺳــﺒﻴﺔ ﻟﺘﺤﻘﻴــﻖ رﺿــﺎ اﻟﻌﻤــﻼء
                                وﺗﺠﺮﺑﺔ ﻣﻤﺘﺎزﺔ.

                            </p>



                        </div>
                        <div className="section mt-3 md:w-1/3   flex flex-col justify-center items-center">
                            <div className="section-img md:w-2/3 md:h-2/3 w-1/2 h-1/2 overflow-hidden shadow-lg bg-white rounded-full">
                                <img className="w-full h-full" src={programming} alt="" />

                            </div>
                            <p className="m-0 mt-3  kufi font-medium text-blue-900   "> تحديثات و اضافات مستمرة </p>
                            <p className="m-0 mt-3 cairo text-lg font-bold">فريق مبرمجين</p>
                            <p className="m-0 mt-3 text-center w-4/5 text-gray-600 text-lg font-medium messiri">
                                ﻓﺮﻳــﻖ ﻣﺘﺨﺼــﺺ ﻓــﻲ ﺗﻄﻮﻳــﺮ ﺣﻠــﻮل
                                ﺑﺮﻣﺠﻴــﺔ ﻣﺒﺘﻜــﺮة وﻣﺘﻘﺪﻣــﺔ. ﻳﻬــﺪف
                                اﻟﻔﺮﻳــﻖ إﻟــﻰ ﺗﻠﺒﻴــﺔ اﺣﺘﻴﺎﺟــﺎت اﻟﻌﻤــﻼء
                                وﺗﺤﺴﻴﻦ أﺩﺍء اﻷﻧﻈﻤﺔ اﻟﻤﺤﺎﺳﺒﻴﺔ.
                            </p>



                        </div>



                    </div>





                </div>
            </div>
        </>
    );
}
