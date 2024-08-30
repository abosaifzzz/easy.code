import React, { useEffect, useState } from 'react'
import NavBar from '../NavBar/NavBar'
import { Outlet } from "react-router-dom";
import Loading from '../Loading/Loading';


export default function Layout() {


    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 1000); // 2 seconds delay for the loading spinner

        return () => clearTimeout(timer); // Cleanup the timer
    }, []);

    if (isLoading) {
        return <Loading />;
    }
    return (<>
        <NavBar></NavBar>
        <div className="">
            <Outlet></Outlet>

        </div>
    </>
    )
}
