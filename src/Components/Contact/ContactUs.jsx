import React from 'react'

export default function ContactUs() {
    return (<>
        <div className="contact-page w-full relative flex flex-col  mt-28">
            <div id="map" className="z-[-1] h-[300px] overflow-hidden bg-cover bg-[50%] bg-no-repeat">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d453.32603665474215!2d46.714934!3d24.637182!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f05cd5f486917%3A0xc05d35308de26991!2z2KfZhNmD2YjYryDYp9mE2LPZh9mE!5e0!3m2!1sar!2seg!4v1727965059345!5m2!1sar!2seg"
                    width="100%"
                    height="450"
                    style={{ border: 0 }}  // Updated style prop to JSX object syntax
                    allowFullScreen  // Use camelCase for boolean attributes
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"  // Use camelCase for this attribute
                />


            </div>
            <div className="contact p-6 w-11/12 mx-auto relative -top-20 bg-white shadow-xl rounded-md  z-10 ">
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

        </div>






    </>

    )
}
