import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import moment from 'moment-hijri';
import shape2 from "../../assets/graph2.png";

// Function to convert English digits to Arabic digits
const convertToArabicDigits = (dateString) => {
    const englishToArabicDigits = {
        '0': '٠',
        '1': '١',
        '2': '٢',
        '3': '٣',
        '4': '٤',
        '5': '٥',
        '6': '٦',
        '7': '٧',
        '8': '٨',
        '9': '٩',
    };

    return dateString.replace(/\d/g, (digit) => englishToArabicDigits[digit]);
};

export default function Accounting1() {
    const [activeIndex, setActiveIndex] = useState(null); // State to track which menu is open
    const [startDate, setStartDate] = useState(new Date());
    const handleSubDrop = (index) => {
        // If the clicked item is already open, close it. Otherwise, open it.
        setActiveIndex(activeIndex === index ? null : index);
    };

    const [startMiladyDate, setStartMiladyDate] = useState(new Date());
    const [endMiladyDate, setEndMiladyDate] = useState(new Date());
    const [startHijriDate, setStartHijriDate] = useState(convertToArabicDigits(moment().format('iYYYY/iM/iD')));
    const [endHijriDate, setEndHijriDate] = useState(convertToArabicDigits(moment().format('iYYYY/iM/iD')));

    const handleStartMiladyChange = (date) => {
        setStartMiladyDate(date);
        const hijriEquivalent = moment(date).format('iYYYY/iM/iD');
        setStartHijriDate(convertToArabicDigits(hijriEquivalent));
    };

    const handleEndMiladyChange = (date) => {
        setEndMiladyDate(date);
        const hijriEquivalent = moment(date).format('iYYYY/iM/iD');
        setEndHijriDate(convertToArabicDigits(hijriEquivalent));
    };

    const [periodCount, setPeriodCount] = useState(1);

    // Function to handle period count change
    const handlePeriodChange = (e) => {
        const value = parseInt(e.target.value, 10);
        if (value > 0) setPeriodCount(value);
    };

    // Generate table rows based on period count
    // Generate table rows based on period count
    const tableRows = Array.from({ length: periodCount }, (_, index) => (
        <tr
            key={index}
            className="bg-white transition-all duration-500 hover:bg-gray-50"
        >
            <td className="sequence p-5 whitespace-nowrap text-sm leading-6 font-medium text-gray-900">
                {index + 1}
            </td>
            <td className="period-number p-5 whitespace-nowrap text-sm leading-6 font-medium text-gray-900">
                الفترة {index + 1}
            </td>
            <td className="p-5 whitespace-nowrap text-sm leading-6 font-medium text-gray-900">
                25/03/2024
            </td>
            <td className="p-5 whitespace-nowrap text-sm leading-6 font-medium text-gray-900">
                06/7/1664
            </td>
            <td className="p-5 whitespace-nowrap text-sm leading-6 font-medium text-gray-900">
                02/10/2025
            </td>
            <td className="p-5 whitespace-nowrap text-sm leading-6 font-medium text-gray-900">
                08/10/1664
            </td>
            <td className="p-5 whitespace-nowrap text-sm leading-6 font-medium text-gray-900">
                <div className="py-1.5 px-2.5 bg-red-50 rounded-full flex w-20 justify-center items-center gap-1">
                    <svg
                        width="5"
                        height="6"
                        viewBox="0 0 5 6"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <circle cx="2.5" cy="3" r="2.5" fill="#DC2626"></circle>
                    </svg>
                    <span className="font-medium text-xs text-red-600">مغلقة</span>
                </div>
            </td>
            <td className="flex p-5 items-center gap-0.5">
                <div className="py-1.5 px-2.5 kufi bg-green-600 rounded-full text-white flex w-20 justify-center items-center gap-1 hover:bg-green-400 hover:text-slate-700">
                    <span className="font-medium text-xs">
                        فتح <i className="fa-solid fa-lock-open"></i>
                    </span>
                </div>
                <button className="p-2 rounded-full bg-white group transition-all duration-500 hover:bg-black flex item-center">
                    <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            className="stroke-black group-hover:stroke-white"
                            d="M10.0161 14.9897V15.0397M10.0161 9.97598V10.026M10.0161 4.96231V5.01231"
                            stroke="black"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                        ></path>
                    </svg>
                </button>
            </td>
        </tr>
    ));




    return (<>
        <div className="page w-[95%] lg:mx-auto ms-16 mb-32 ">

            <div className="first-content lg:flex  w-full mt-24 h-fit gap-4">
                <div className="right lg:w-1/2 mt-2 rounded-xl p-6  bg-white   shadow-md">
                    <div className="code">
                        <label className='block' htmlFor="code">الكود: </label>
                        <input className='h-10 input-form bg-slate-50 w-72' type="text" name="code" id="" />

                    </div>
                    <div className="name w-full flex gap-3 items-center">
                        <div className='w-1/2'>
                            <label className='block' htmlFor="arabic-name">الأسم باللغة العربية </label>
                            <input className='h-10 input-form bg-slate-50 ' type="text" name="code" id="" />

                        </div>
                        <div className='w-1/2'>
                            <label className='block' htmlFor="english-name">الأسم باللغة الانجليزية </label>
                            <input dir='ltr' className='h-10 input-form bg-slate-50  ' type="text" name="code" id="" />

                        </div>
                    </div>

                </div>
                <div className="left lg:w-1/2 mt-2  rounded-xl p-6 bg-white shadow-md">

                    <div className="date  gap-4">
                        <div className="start flex w-full  gap-2">
                            <div className='w-1/2 '>
                                <label className="block" htmlFor="startDateMilady">من تاريخ </label>
                                <DatePicker
                                    selected={startMiladyDate}
                                    onChange={handleStartMiladyChange}
                                    dateFormat="dd/MM/yyyy"
                                    className="border p-2 input-form bg-slate-100"
                                />
                            </div>
                            <div className='w-1/2'>
                                <label className="block" htmlFor="startDateHijri">هجري</label>
                                <input

                                    type="text"
                                    value={startHijriDate}
                                    readOnly
                                    className="border p-2  input-form bg-blue-50"
                                />
                            </div>
                        </div>

                    </div>
                    <div className="date-2 flex">
                        <div className="end flex gap-2 w-full">

                            <div className='w-1/2'>
                                <label className="block" htmlFor="endDateMilady">الي تاريخ </label>
                                <DatePicker
                                    selected={endMiladyDate}
                                    onChange={handleEndMiladyChange}
                                    dateFormat="dd/MM/yyyy"
                                    className="border input-form p-2 z-0 bg-slate-100"
                                />
                            </div>
                            <div className='w-1/2'>
                                <label className="block" htmlFor="endDateHijri"> هجري</label>
                                <input
                                    type="text"
                                    value={endHijriDate}
                                    readOnly
                                    className="border input-form p-2 bg-blue-50"
                                />
                            </div>
                        </div>

                    </div>


                </div>
            </div>
            <div className="second-content p-5 rounded-xl w-full mt-7 bg-white">
                <div className="second-content-header relative flex justify-between items-center">
                    <div className="shape absolute  -top-4 right-0 items-center">
                        <img className='w-28 -z-0 opacity-25' src={shape2} alt="" />

                    </div>
                    <div className='z-10'>

                        <p className='kufi z-0 font-semibold text-lg'>الفترات الداخلية </p>

                    </div>
                    <div className="number-of-period">
                        <label className='block' htmlFor="period"> عدد الفترات</label>
                        <input
                            className='input-form'
                            id="period-count"
                            type="number"
                            value={periodCount}
                            onChange={handlePeriodChange}
                            min="1"
                        />
                    </div>
                </div>

                <div dir="rtl" className="w-full  flex flex-col">
                    <div className="overflow-x-auto overflow-y-auto mb-10 pb-4">
                        <div className="min-w-full inline-block align-middle">
                            <div className="border rounded-lg max-h-[700px] overflow-y-auto border-gray-300">
                                <table className="table-auto min-w-full rounded-xl">
                                    <thead className="sticky top-0 z-10 bg-blue-100">
                                        <tr>
                                            <th scope="col" className="p-5 text-right whitespace-nowrap text-sm leading-6 font-semibold text-gray-900 capitalize">م</th>
                                            <th scope="col" className="p-5 text-right whitespace-nowrap text-sm leading-6 font-semibold text-gray-900 capitalize">اسم الفترة</th>
                                            <th scope="col" className="p-5 text-right whitespace-nowrap text-sm leading-6 font-semibold text-gray-900 capitalize">من تاريخ</th>
                                            <th scope="col" className="p-5 text-right whitespace-nowrap text-sm leading-6 font-semibold text-gray-900 capitalize">هجري</th>
                                            <th scope="col" className="p-5 text-right whitespace-nowrap text-sm leading-6 font-semibold text-gray-900 capitalize">الي تاريخ</th>
                                            <th scope="col" className="p-5 text-right whitespace-nowrap text-sm leading-6 font-semibold text-gray-900 capitalize">هجري</th>
                                            <th scope="col" className="p-5 text-right whitespace-nowrap text-sm leading-6 font-semibold text-gray-900 capitalize">الحالة</th>
                                            <th scope="col" className="p-5 text-right whitespace-nowrap text-sm leading-6 font-semibold text-gray-900 capitalize"></th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-300">
                                        {tableRows}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>



    </>
    )
}
