import React from 'react'
import footerShape from "../../assets/shape-foote.png"
import footerLogo from "../../assets/footer-logo.png"
export default function Footer() {
    return <>
        <div dir='rtl' className='footer relative bg-[#3D3D3F] border-t-4  text-white border-blue-500 p-12'>
            <img className='absolute md:w-1/4 w-1/2  left-0 bottom-0' src={footerShape} alt="" />
            <div className="footer-data w-full p-6 flex lg:flex-row flex-col  lg:gap-3 md:gap-5">
                <div className="footer-col w-1/4">
                    <img src={footerLogo} alt="" />
                    <p className='cairo font-medium'>تأسست على يد نخبة من المتخصصين المحترفين لتبدأ نشاطها وتقدم خدمات مميزة على مستوى المملكة العربية السعودية</p>
                    <div className="socials flex gap-7">
                        <div className="icon-1 w-10 h-10 bg-[#2d8bb4] hover:bg-[#21779c] cursor-pointer flex justify-center items-center rounded-full">

                            <i className="text-white fa-brands fa-facebook-f"></i>
                        </div>
                        <div className="icon-1 w-10 h-10 bg-[#2d8bb4] hover:bg-[#21779c] cursor-pointer flex justify-center items-center rounded-full">

                            <i className="text-white fa-brands fa-linkedin-in"></i>
                        </div>
                        <div className="icon-1 w-10 h-10 bg-[#2d8bb4] hover:bg-[#21779c] cursor-pointer flex justify-center items-center rounded-full">

                            <i className="text-white fa-brands fa-twitter"></i>
                        </div>
                        <div className="icon-1 w-10 h-10 bg-[#2d8bb4] hover:bg-[#21779c] cursor-pointer flex justify-center items-center rounded-full">

                            <i className="text-white fa-brands fa-whatsapp"></i>
                        </div>


                    </div>
                </div>

                <div className="footer-col w-1/4">
                    <p className='m-0 cairo text-2xl font-[500]'>الروابط السريعة </p>
                    <p className='m-0 mt-4 messiri cursor-pointer  text-lg text-gray-300 hover:text-white font-[50]'>من نحن؟</p>
                    <p className='m-0 mt-4 messiri cursor-pointer  text-lg text-gray-300 hover:text-white font-[50]'>الأسئلة الشائعة</p>
                    <p className='m-0 mt-4 messiri cursor-pointer  text-lg text-gray-300 hover:text-white font-[50]'>برامجنا الخاصة</p>
                    <p className='m-0 mt-4 messiri cursor-pointer  text-lg text-gray-300 hover:text-white font-[50]'>التعريف</p>

                </div>
                <div className="footer-col w-1/4">
                    <p className='m-0 cairo text-2xl font-[500]'>خريطة الموقع </p>
                    <p className='m-0 mt-4 messiri cursor-pointer  text-lg text-gray-300 hover:text-white font-[50]'>برامج ايزي كود</p>
                    <p className='m-0 mt-4 messiri cursor-pointer  text-lg text-gray-300 hover:text-white font-[50]'>برنامج الفاينال بيزنس</p>
                    <p className='m-0 mt-4 messiri cursor-pointer  text-lg text-gray-300 hover:text-white font-[50]'>برنامج كلاود بيزنس</p>

                    <p className='m-0 mt-4 messiri cursor-pointer  text-lg text-gray-300 hover:text-white font-[50]'>التخليص الجمركي</p>
                    <p className='m-0 mt-4 messiri cursor-pointer  text-lg text-gray-300 hover:text-white font-[50]'>الوظائف </p>

                </div>

                <div className="footer-col  flex flex-wrap w-1/4">
                    <div className="ticket  w-1/2"><p className='cairo text-3xl  m-0 font-bold'>+1000</p>
                        <p className='m-0 mt-1 text-[1.1rem] text-gray-200'>عميل </p></div>
                    <div className="ticket w-1/2"><p className='cairo  m-0 text-3xl font-bold'>+12500</p>
                        <p className='m-0 mt-1 text-[1.1rem] text-gray-200'>مستخدم  </p></div>
                    <div className="ticket w-1/2"> <p className='cairo  m-0 text-3xl font-bold'>+21304</p>
                        <p className='m-0 mt-1 text-[1.1rem] text-gray-200'>نقطة بيع  </p></div>
                    <div className="ticket w-1/2"><p className='cairo  m-0 text-3xl font-bold'>+150,000</p>
                        <p className='m-0 mt-1 text-[1.1rem] text-gray-200'>فاتورة الكترونية  </p></div>





                </div>


            </div>


        </div>
    </>
}
