import NavbarComponent from "./Navbar"
import { Flowbite } from "flowbite-react";
import { Outlet } from 'react-router-dom';
import FooterComponent from './Footer';

import HelmetComponent from '../pages/ShareComponents/HelmetComponent';
import { ToastContainer } from "react-toastify";
import { useEffect } from "react";

const Root = () => {
    useEffect(() => {
        document.documentElement.setAttribute('class', `${window.matchMedia("(prefers-color-scheme: dark)").matches && "dark"}`);  
      }, []);
    return (
        <div >
            <HelmetComponent />
            <div className=' mx-auto'>
                <Flowbite>
                <ToastContainer position="top-center" autoClose={2400}/>
                    <NavbarComponent />
                    <div className='min-h-[calc(100vh-90px)] mt-20 '>
                        <Outlet />
                    </div>
                    
                    <FooterComponent />
                </Flowbite>
            </div>
        </div>
    )
}

export default Root
