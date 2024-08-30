import React from 'react'
import { useState } from 'react';
import Tree from 'rc-tree';
import 'rc-tree/assets/index.css';
import logo from "../../assets/logo@2x.png"


const treeData = [
    {
        title: 'الأصول 1',
        titleEnglish: "Origins",
        key: '1',
        children: [
            {
                title: 'اصول غير متداولة 1-1',
                key: '1-1',
                children: [
                    {
                        title: 'child 1-1-1',
                        key: '1-1-1',
                        children: [
                            {
                                title: "الاصول الثابتة 1-1-1-1",
                                key: "1-1-1-1"
                            },
                            {
                                title: "اراضي 1-1-1-2",
                                key: "1-1-1-2"
                            }
                        ]
                    }
                ],
            },
            {
                title: 'الاصول المتداولة 1-2',
                key: '1-2',
                children: [
                    {
                        title: 'المخزون 1-2-1',
                        key: '1-2-1',
                        children: [
                            {
                                title: "مخزون اول المدة 1-2-1-1",
                                key: "1-2-1-1"
                            },
                            {
                                title: "المستودعات 1-2-1-2",
                                key: "1-2-1-2"
                            }
                        ]
                    }
                ],
            },
        ],
    },
    {
        title: 'حقوق الملكية و الالتزامات 2',
        titleEnglish: "Property Rights and Obligations",
        key: '2',
        children: [
            {
                title: 'حقوق الملكية 2-1',
                titleEnglish: "Copy rights",
                key: '2-1',
                children: [
                    {
                        title: 'راس المال 2-1-1',
                        key: '2-1-1',
                        children: [
                            {
                                title: "الاحتياطي النظامي 2-1-1-1",
                                key: "2-1-1-1"
                            },
                            {
                                title: "الارباح المبقاه 2-1-1-2",
                                key: "2-1-1-2"
                            }
                        ]
                    }
                ],
            },
            {
                title: 'التزامات غير متداولة 2-2',
                key: '2-2',
                children: [
                    {
                        title: 'قروض طويلة الاجل 2-2-1',
                        key: '2-2-1',
                        children: [
                            {
                                title: "منافع الموظفيين 2-2-1-1",
                                key: "2-2-1-1"
                            },
                            {
                                title: "نهاية خدمة مستحق 2-2-1-2",
                                key: "2-2-1-2"
                            }
                        ]
                    }
                ],
            },
        ],
    },
    {
        title: 'المشتريات 3',
        titleEnglish: "buys",
        key: '3',
        children: [
            {
                title: 'بضاعة اخر المدة 3-1',
                key: '3-1',
                children: [
                    {
                        title: 'بضاعة اخر  3-1-1',
                        key: '3-1-1',
                        children: [
                            {
                                title: "صافي 3-1-1-1",
                                key: "3-1-1-1"
                            },
                            {
                                title: "مردودات 3-1-1-2",
                                key: "3-1-1-2"
                            }
                        ]
                    }
                ],
            },
            {
                title: 'تكلفة المشتريات 3-2',
                titleEnglish: "cost",
                key: '3-2',
                children: [
                    {
                        title: 'بيع  3-2-1',
                        key: '3-2-1',
                        children: [
                            {
                                title: "مكسب 3-2-1-1",
                                key: "3-2-1-1"
                            },
                            {
                                title: "خسارة 3-2-1-2",
                                key: "3-2-1-2"
                            }
                        ]
                    }
                ],
            },
        ],
    },

];





export default function Accounting2() {
    const [expandedKeys, setExpandedKeys] = useState([]);
    const [formData, setFormData] = useState({
        accountType: 'حساب رئيسي',
        sequence: '',
        code: '',
        arabicName: '',
        englishName: ''
    });
    const [searchQuery, setSearchQuery] = useState('');

    // Function to find a node by key and collect all parent keys
    const findNodeAndParentKeys = (nodes, key, parentKeys = []) => {
        for (let node of nodes) {
            if (node.key === key) {
                return { node, parentKeys };
            }
            if (node.children) {
                const result = findNodeAndParentKeys(node.children, key, [...parentKeys, node.key]);
                if (result) return result;
            }
        }
        return null;
    };

    // Function to find the first matching node by title and return its key along with parent keys
    const findFirstMatchingNodeAndParentKeys = (nodes, query, parentKeys = []) => {
        for (let node of nodes) {
            if (node.title.includes(query)) {
                return { node, parentKeys };
            }
            if (node.children) {
                const result = findFirstMatchingNodeAndParentKeys(node.children, query, [...parentKeys, node.key]);
                if (result) return result;
            }
        }
        return null;
    };

    // Handle the expansion of nodes
    const onExpand = (keys) => {
        setExpandedKeys(keys);

        if (keys.length > 0) {
            const latestKey = keys[keys.length - 1];
            const expandedNode = findNodeAndParentKeys(treeData, latestKey);

            if (expandedNode) {
                setFormData({
                    accountType: 'حساب رئيسي',
                    sequence: latestKey,
                    code: latestKey,
                    arabicName: expandedNode.node.title,
                    englishName: expandedNode.node.titleEnglish || ''
                });
            }
        }
    };

    const handlePageClick = (key) => {
        setExpandedKeys([key]);
        const expandedNode = findNodeAndParentKeys(treeData, key);

        if (expandedNode) {
            setFormData({
                accountType: 'حساب رئيسي',
                sequence: key,
                code: key,
                arabicName: expandedNode.node.title,
                englishName: expandedNode.node.titleEnglish || ''
            });
        }
    };

    // Handle search
    const handleSearch = () => {
        const matchingResult = findFirstMatchingNodeAndParentKeys(treeData, searchQuery);
        if (matchingResult) {
            const { node, parentKeys } = matchingResult;
            const matchingKey = node.key;
            setExpandedKeys([...parentKeys, matchingKey]);
            setFormData({
                accountType: 'حساب رئيسي',
                sequence: matchingKey,
                code: matchingKey,
                arabicName: node.title,
                englishName: node.titleEnglish || ''
            });
        }
    };

    return (<>
        <div className="accounting2 2-first-content pt-32 w-full  ">


            <div className="3-first-content bg-white p-5 rounded-lg">
                <p className='kufi text-blue-950 text-xl font-bold'>دليل الحسابات</p>

                <div className="search w-3/5 flex h-10 mx-auto bg-slate-200 rounded-md border-2 border-gray-400">
                    <input
                        className='bg-slate-50 w-3/4 p-2'
                        type="search"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder="ابحث هنا..."
                    />
                    <button
                        className='w-1/4 alexandria bg-blue-950 rounded-md text-white'
                        onClick={handleSearch}
                    >
                        بحث
                    </button>
                </div>
                <div className="pagination  mx-auto mt-7 ">
                    <div className="flex items-center w-full mb-5  justify-center">
                        <div className="py-3 w-3/5 flex justify-center bg-slate-200 border rounded-lg dark:border-gray-600">
                            <ol
                                className="flex bg-w items-center text-sm text-gray-500 divide-x rtl:divide-x-reverse divide-gray-300 dark:text-gray-400 dark:divide-gray-600">
                                <li>
                                    <button type="button"
                                        className="relative flex items-center justify-center font-medium min-w-[3rem] px-1.5 h-8 -my-3 rounded-md outline-none hover:bg-gray-500/5 focus:focus:bg-yellow-500/10 focus:ring-2 focus:focus:ring-yellow-500 dark:hover:bg-gray-400/5 transition text-yellow-600"
                                        aria-label="Previous" rel="prev">
                                        <svg className="w-5 h-5 rtl:scale-x-[-1]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                                            fill="currentColor" aria-hidden="true">
                                            <path fill-rule="evenodd"
                                                d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                                                clip-rule="evenodd"></path>
                                        </svg>
                                    </button>
                                </li>

                                <li>
                                    <button onClick={() => handlePageClick('1')} className="relative flex items-center justify-center font-medium min-w-[3rem] px-1.5 h-8 rounded-md focus:underline focus:bg-yellow-500/10 ring-2 focus:ring-yellow-500">
                                        <span>1</span>
                                    </button>
                                </li>
                                <li>
                                    <button onClick={() => handlePageClick('2')} className="relative flex items-center justify-center font-medium min-w-[3rem] px-1.5 h-8 rounded-md focus:underline focus:bg-yellow-500/10 ring-2 focus:ring-yellow-500">
                                        <span>2</span>
                                    </button>
                                </li>
                                <li>
                                    <button onClick={() => handlePageClick('3')} className="relative flex items-center justify-center font-medium min-w-[3rem] px-1.5 h-8 rounded-md focus:underline focus:bg-yellow-500/10 ring-2 focus:ring-yellow-500">
                                        <span>3</span>
                                    </button>
                                </li>
                                <li>
                                    <button onClick={() => handlePageClick('4')} className="relative flex items-center justify-center font-medium min-w-[3rem] px-1.5 h-8 rounded-md focus:underline focus:bg-yellow-500/10 ring-2 focus:ring-yellow-500">
                                        <span>4</span>
                                    </button>
                                </li>
                                <li>
                                    <button onClick={() => handlePageClick('5')} className="relative flex items-center justify-center font-medium min-w-[3rem] px-1.5 h-8 rounded-md focus:underline focus:bg-yellow-500/10 ring-2 focus:ring-yellow-500">
                                        <span>5</span>
                                    </button>
                                </li>
                                <li>
                                    <button onClick={() => handlePageClick('6')} className="relative flex items-center justify-center font-medium min-w-[3rem] px-1.5 h-8 rounded-md focus:underline focus:bg-yellow-500/10 ring-2 focus:ring-yellow-500">
                                        <span>6</span>
                                    </button>
                                </li>
                                <li>
                                    <button onClick={() => handlePageClick('..')} className="relative flex items-center justify-center font-medium min-w-[3rem] px-1.5 h-8 rounded-md focus:underline focus:bg-yellow-500/10 ring-2 focus:ring-yellow-500">
                                        <span>....</span>
                                    </button>
                                </li>
                                <li>
                                    <button onClick={() => handlePageClick('11')} className="relative flex items-center justify-center font-medium min-w-[3rem] px-1.5 h-8 rounded-md focus:underline focus:bg-yellow-500/10 ring-2 focus:ring-yellow-500">
                                        <span>11</span>
                                    </button>
                                </li>
                                <li>
                                    <button onClick={() => handlePageClick('12')} className="relative flex items-center justify-center font-medium min-w-[3rem] px-1.5 h-8 rounded-md focus:underline focus:bg-yellow-500/10 ring-2 focus:ring-yellow-500">
                                        <span>12</span>
                                    </button>
                                </li>
                                <li>
                                    <button onClick={() => handlePageClick('13')} className="relative flex items-center justify-center font-medium min-w-[3rem] px-1.5 h-8 rounded-md focus:underline focus:bg-yellow-500/10 ring-2 focus:ring-yellow-500">
                                        <span>13</span>
                                    </button>
                                </li>

                                <li>
                                    <button type="button"
                                        className="relative flex items-center justify-center font-medium min-w-[3rem] px-1.5 h-8 -my-3 rounded-md outline-none hover:bg-gray-500/5 focus:focus:bg-yellow-500/10 focus:ring-2 focus:focus:ring-yellow-500 dark:hover:bg-gray-400/5 transition text-yellow-600"
                                        aria-label="Next" rel="next">
                                        <svg className="w-5 h-5 rtl:scale-x-[-1]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                                            fill="currentColor" aria-hidden="true">
                                            <path fill-rule="evenodd"
                                                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                                clip-rule="evenodd"></path>
                                        </svg>
                                    </button>
                                </li>
                            </ol>
                        </div>
                    </div>            </div>

                <div className="2-second-content bg-slate-100 rounded-2xl flex w-full">

                    <div className="w-1/3 p-4 2-right bg-blue-100">
                        <Tree
                            defaultExpandAll={false}
                            expandedKeys={expandedKeys}
                            treeData={treeData}
                            onExpand={onExpand}

                        />
                    </div>


                    <div className="w-2/3    bg-blue-50 p-4 rounded-md 2-left">
                        <div className="account gap-3 flex">
                            <div className="1 w-1/3">
                                <label className='account-type alexandria block' htmlFor="">نوع الحساب</label>
                                <input className='w-full alexandria rounded-md p-1 bg-slate-50 border border-blue-400 mt-2'
                                    value={formData.accountType}
                                    readOnly
                                    type="text" />

                            </div>
                            <div className="2 w-1/3">
                                <label className='block alexandria' htmlFor="">مسلسل </label>
                                <input className='sequence w-full rounded-md p-1 bg-slate-50 border border-blue-400 mt-2'
                                    value={formData.sequence}
                                    readOnly
                                    type="text" />



                            </div>
                            <div className="3 w-1/3">
                                <label className='code block alexandria' htmlFor="">كود الحساب </label>
                                <input className='w-full rounded-md p-1 bg-slate-50 border border-blue-400 mt-2'
                                    value={formData.code}
                                    readOnly
                                    type="text" />



                            </div>


                        </div>
                        <div className="account-name mt-4 gap-3 flex">
                            <div className="1 w-1/2">
                                <label className=' alexandria block' htmlFor="">الأسم بالعربية</label>
                                <input className='arabic-name w-full rounded-md p-1 bg-slate-50 border border-blue-400 mt-2'
                                    value={formData.arabicName} // Arabic name input
                                    readOnly
                                    type="text" />

                            </div>
                            <div className="2 w-1/2">
                                <label className='block alexandria' htmlFor="">الأسم باللاتينية </label>
                                <input className='english-name w-full rounded-md p-1 bg-slate-50 border border-blue-400 mt-2'
                                    value={formData.englishName} // English name input
                                    readOnly
                                    type="text" />



                            </div>


                        </div>
                        <div className="checkboxes flex gap-2 mt-6">
                            <div className="1 w-1/2 flex gap-2 p-2 rounded-md border border-blue-100 bg-slate-50">
                                <span className='w-2/3 kufi text-blue-900 font-medium text-lg'>طبيعة الحساب </span>
                                <div className=" check1 w-1/3">
                                    <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"></input>
                                    <label for="vehicle1"> مدين </label>
                                </div>
                                <div className="check2  w-1/3">
                                    <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"></input>
                                    <label for="vehicle1">  دائن</label>
                                </div>


                            </div>
                            <div className="1 w-1/2 flex gap-1 p-2 rounded-md border border-blue-100 bg-slate-50">
                                <span className='w-2/3 kufi text-blue-900 font-medium text-lg'>حساب ختامي  </span>
                                <div className="check1 w-1/3">
                                    <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"></input>
                                    <label for="vehicle1"> ميزانية </label>
                                </div>
                                <div className="check2 w-1/3">
                                    <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"></input>
                                    <label for="vehicle1">  قائمة دخل</label>
                                </div>


                            </div>


                        </div>
                        <div className="3 w-full mt-5 flex gap-2 p-2 rounded-md border border-blue-100 bg-slate-50">
                            <span className='w-1/3 kufi text-blue-900 font-medium text-lg'>مركز التكلفة  </span>
                            <div className="check1 w-1/3">
                                <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"></input>
                                <label for="vehicle1"> اجباري  </label>
                            </div>
                            <div className="check2 w-1/3">
                                <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"></input>
                                <label for="vehicle1">  اختياري </label>
                            </div>
                            <div className="check3 w-1/3">
                                <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"></input>
                                <label for="vehicle1">  بدون</label>
                            </div>


                        </div>

                        <div className="account-details w-full m-4 p-3 ">
                            <p className='kufi text-lg text-blue-950 font-bold'>معلومات عن الحساب</p>
                            <label className='block alexandria font-medium text-sm mt-2' htmlFor="area1">حقل 1</label>
                            <input className=' w-full h-11 border border-blue-300 mt-2 bg-white rounded-lg' type="text" name="area1" id="" />
                            <label className='block alexandria font-medium text-sm mt-2' htmlFor="area1">حقل 2</label>
                            <input className=' w-full h-11 border border-blue-300 mt-2 bg-white rounded-lg' type="text" name="area1" id="" />
                            <label className='block alexandria font-medium text-sm mt-2' htmlFor="area1">حقل 3</label>
                            <input className=' w-full h-11 border border-blue-300 mt-2 bg-white rounded-lg' type="text" name="area1" id="" />
                            <label className='block alexandria font-medium text-sm mt-2' htmlFor="area1">حقل 4</label>
                            <input className=' w-full h-11 border border-blue-300 mt-2 bg-white rounded-lg' type="text" name="area1" id="" />
                            <label className='block alexandria font-medium text-sm mt-2' htmlFor="area1">حقل 5</label>
                            <input className=' w-full h-11 border border-blue-300 mt-2 bg-white rounded-lg' type="text" name="area1" id="" />


                        </div>

                        <div className="form-btns flex justify-evenly mb-4  ">
                            <button className='rounded-md bg-green-500 text-white kufi p-2 px-8'>حفظ</button>
                            <button className='rounded-md bg-red-500 text-white p-2 kufi px-8'>تراجع</button>
                            <button onClick={window.print} className='rounded-md bg-slate-500 text-white p-2 kufi px-8'>طباعة</button>


                        </div>
                    </div>

                </div>
            </div>

        </div>
        <div className="print ">
            <div className="header-print w-full mb-6 flex justify-around items-center bg-slate-200  text-gray-600 ">
                <img className='w-11 h-11' src={logo} alt="" />
                <p className='kufi font-medium text-2xl'> مؤسسة اسطول السنبلة للخدمات اللوجيستية</p>
            </div>
            <label className='text-xl kufi font-semibold' htmlFor="">:الاسم بالعربية </label>
            <span className='bg-slate-200 p-2 rounded-md text-xl' >{formData.arabicName}</span >
            <label className='text-xl kufi font-semibold' htmlFor="">:الاسم باللاتينية </label>
            <span className='bg-slate-200 p-2 rounded-md text-xl' >{formData.englishName}</span >
            <div className='mt-3'>
                <label className='text-xl kufi font-semibold' htmlFor=""> نوع الحساب</label>
                <span className='bg-slate-200 p-2 rounded-md text-xl' >{formData.sequence}</span >
                <label className='text-xl kufi font-semibold' htmlFor=""> كود الحساب</label>
                <span className='bg-slate-200 p-2 rounded-md text-xl' >{formData.code}</span >


            </div>
        </div>


    </>

    )
}
