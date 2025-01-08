import { Avatar, Button } from 'flowbite-react';
import { useState } from 'react';
import {toast} from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const HoverDropdown = ({signOutUser,imgSrc, setImgSrc, setUser}) => {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();


  async function logOut() {
    try {
      await signOutUser();
      setUser(null);
      toast.success("Logged Out Successfully!");
      navigate('/');
    } catch (error) {
      toast.error('Error logging out:', error.message);
    }
  }
  return (
    <div className="mx-auto sha">
      <div
        className="group relative "
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Avatar img={imgSrc} onError={()=>setImgSrc('')} alt="Profile Image" className='cursor-pointer' rounded />

        {isHovered && (
          <div className='bg-transparent shadow-2xl z-50 absolute w-56 right-0'>
            <div className="flex border bg-white items-center rounded-md mt-3 flex-col
           py-4 dark:bg-gray-700 ">

              <span className='dark:text-gray-300 text-gray-600 font-semibold w-full text-center text-lg mb-4'>
              Tasneem Sahat
              </span>
              <Button onClick={logOut} color='dark'>Log Out</Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default HoverDropdown;
