import React from 'react'
import logo from "../../assets/logo@2x.png"
import loading from "../../assets/loading.mp4"

export default function Loading() {
    return (
        <div className='loading h-screen bg-white flex justify-center items-center' >
            <div className=" absolute inset-0 ">
                <video src={loading} autoPlay loop muted ></video>
                <div className="over absolute inset-0 bg-white opacity-30 "></div>

            </div>

            <img src={logo} alt="" className='w-36 h-36 animate__animated animate__bounce' />
        </div>
    )
}
