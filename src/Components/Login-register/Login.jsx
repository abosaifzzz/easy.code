import React, { useState } from 'react';
import bg from "../../assets/bg4.mp4"
import logo from "../../assets/logo@2x.png"
import { Link } from 'react-router-dom';

export default function Login() {
    // State to manage the active panel
    const [isRightPanelActive, setIsRightPanelActive] = useState(false);

    const handleSignUpClick = () => {
        setIsRightPanelActive(true);
    };

    const handleSignInClick = () => {
        setIsRightPanelActive(false);
    };

    return (
        <div className="login  h-screen flex justify-center items-center">
            <div className=" absolute inset-0 ">
                <video src={bg} autoPlay loop muted ></video>
                <div className="over absolute inset-0 bg-black opacity-60 "></div>

            </div>

            <div className={`container w-3/5 h-4/5 p-7 ${isRightPanelActive ? 'right-panel-active' : ''}`} id="container">
                <div className="form-container sign-up-container">
                    <form action="#">
                        <h6 className='text-2xl'>!انشئ حساب جديد
                        </h6>
                        <div className="social-container">
                            <a href="#" className="social"><i className="fab fa-facebook-f"></i></a>
                            <a href="#" className="social"><i className="fab fa-google-plus-g"></i></a>
                            <a href="#" className="social"><i className="fab fa-linkedin-in"></i></a>
                        </div>
                        <span className='kufi font-semibold mb-3 text-sm'>أو قم بأستخدام بريدك الالكتروني </span>
                        <input className='kufi my-2 p-2 rounded-md border border-blue-300' dir='rtl' type="text" placeholder="الأسم بالكامل" />
                        <input className='kufi my-2 p-2 rounded-md border border-blue-300' dir='rtl' type="email" placeholder="البريد الالكنروني " />
                        <input className='kufi my-2 p-2 rounded-md border border-blue-300' dir='rtl' type="password" placeholder="كلمة السر" />
                        <Link to={"/"}>
                            <button className='submit kufi'>تسجيل الأشتراك المجاني</button>

                        </Link>
                    </form>
                </div>
                <div className="form-container sign-in-container">
                    <form action="#">
                        <h6 className='kufi text-2xl'>تسجيل دخول</h6>
                        <div className="social-container">
                            <a href="#" className="social"><i className="fab fa-facebook-f"></i></a>
                            <a href="#" className="social"><i className="fab fa-google-plus-g"></i></a>
                            <a href="#" className="social"><i className="fab fa-linkedin-in"></i></a>
                        </div>
                        <span className='kufi font-medium my-2 text-sm'>أو قم بأستخدام حسابك الشخصي</span>
                        <input className='kufi my-2 p-2 rounded-md border border-blue-300' dir='rtl' type="email" placeholder="البريد الالكتروني" />
                        <input className='kufi my-2 p-2 rounded-md border border-blue-300' dir='rtl' type="password" placeholder="كلمة السر" />
                        <a href="#" className='kufi font-medium'>نسيت كلمة السر؟</a>
                        <Link to={'/home'}>
                            <button className='submit kufi'>تسجيل الدخول</button>

                        </Link>
                    </form>
                </div>
                <div className="w-64 overlay-container">
                    <div className="overlay">
                        <div dir='rtl' className="overlay-panel overlay-left">
                            <div className="logo">
                                <img className='w-24 h-24  m-9' src={logo} alt="" />

                            </div>
                            <div className="login-desc">
                                <p className='alexandria font-medium m-0 px-9 text-2xl text-blue-900  '>لن تكون بعيد عن اعمالك ابدا
                                </p>
                                <p className='px-9 m-0 pt-4 kufi font-medium leading-8 text-[#75799D] text-[18px]'>حلول الكود السهل التقنية استطاعت بكفائة إقامة جسر دائم بينك وبين مشروعك.</p>
                                <p className='px-9 m-0  kufi text-gray-600 font-medium text-[16px] pt-4' ><i class="text-blue-900 pe-2 fa-solid fa-cash-register"></i>نقاط بيع مرنة   </p>
                                <p className='px-9 m-0  kufi text-gray-600 font-medium text-[16px] pt-4' ><i class="text-blue-900  pe-2 fa-solid fa-desktop"></i>شاشات سهله الإستخدام
                                </p>
                                <p className='px-9 m-0  kufi text-gray-600 font-medium text-[16px] pt-4' ><i class="text-blue-900  pe-2 fa-solid fa-boxes-packing"></i>المخازن وحركة المخزون
                                </p>

                            </div>

                            <div className="already-client flex flex-col justify-center mt-11">
                                <p className='text-center kufi font-medium' > لديك حساب بالفعل ؟ </p>
                                <button className="w-1/3  mx-auto kufi border-2 p-2 rounded-md border-gray-700" onClick={handleSignInClick} id="signIn">تسجيل الدخول</button>

                            </div>



                        </div>
                        <div dir='rtl' className="overlay-panel overlay-right">
                            <div className="logo">
                                <img className='w-24 h-24  m-9' src={logo} alt="" />

                            </div>
                            <div className="login-desc">
                                <p className='alexandria text-2xl m-0  px-9 font-medium  text-blue-950'>انت علي بعد خطوة واحدة فقط  </p>
                                <p className='kufi text-lg font-medium  px-9  text-[#75799D]'>من ادارة اعمالك و زيادة انتاجياتك بكل سهولة و كفاءة  </p>
                            </div>

                            <div className="already-client flex flex-col justify-center mt-11">
                                <p className='text-center kufi font-medium' > زائر جديد؟ </p>
                                <button className="w-1/4 kufi mx-auto border-2 p-2 rounded-md bg-green-600  text-white" onClick={handleSignUpClick} id="signUp">أشترك الأن</button>

                            </div>
                        </div>
                    </div>
                </div>
            </div>



        </div>
    );
}
