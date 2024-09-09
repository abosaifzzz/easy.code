import React, { useEffect, useState } from 'react'
import NavBar from '../NavBar/NavBar'
import { Outlet } from "react-router-dom";
import Loading from '../Loading/Loading';
import Footer from '../Footer/Footer';


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

        <div className="flex flex-col min-h-screen">

            <NavBar></NavBar>
            <div className="flex-grow">
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>

    </>
    )
}
