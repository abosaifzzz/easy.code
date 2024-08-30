import React from 'react'
import not from "../../assets/not2.png"
import { Link } from 'react-router-dom'

export default function NotFound() {
    return (<>
        <div className="not flex flex-col justify-center items-center">
            <img className='w-1/3' src={not} alt="" />
            <p className='kufi text-3xl font-bold m-0'>ضليت الطريق ؟ لا يهمك </p>
            <Link to={"/home"}>
                <button className='bg-blue-400 my-3 p-3 rounded-lg kufi font-medium hover:bg-blue-300'>الصفحة الرئيسية</button>

            </Link>

        </div>



    </>

    )
}
