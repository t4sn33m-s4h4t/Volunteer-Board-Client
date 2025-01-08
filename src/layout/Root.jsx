import NavbarComponent from "./Navbar"
import { Flowbite } from "flowbite-react";
import { Outlet } from 'react-router-dom';
import FooterComponent from './Footer';

import HelmetComponent from '../pages/ShareComponents/HelmetComponent';
import { ToastContainer } from "react-toastify";

const Root = () => {
    return (
        <div >
            <HelmetComponent />
            <div className='max-w-7xl mx-auto'>
                <Flowbite>
                <ToastContainer position="top-center" autoClose={2400}/>
                    <NavbarComponent />
                    <div className='min-h-[calc(100vh-90px)]'>
                        <Outlet />
                    </div>
                    
                    <FooterComponent />
                </Flowbite>
            </div>
        </div>
    )
}

export default Root
