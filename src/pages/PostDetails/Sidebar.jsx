import { Avatar, HR } from 'flowbite-react';
import { FaMapMarkerAlt, FaUsers } from 'react-icons/fa';
import { BiCategoryAlt } from 'react-icons/bi';
import VolunteerDetailsModal from './VolunteerDetailsModal';
import { format } from "date-fns";

import { fadeIn } from "../variant"
import { useEffect, useState } from 'react';
const Sidebar = ({ data, refetch }) => {
    const [img, setImg] = useState("")
    useEffect(() => {
        setImg(data.organizerPhoto)
    }, [data])
    return (
        <div>
            <div
                variants={fadeIn("left", 0.2)}
                
                
                
                className="mx-auto p-8 text-center w-full h-fit bg-white dark:bg-cyan-900 rounded-lg shadow-lg">
                <h3 className="text-lg dark:text-white font-medium text-gray-900 mb-2">Application ends:</h3>
                <p className="text-base text-gray-700 mb-4 dark:text-gray-300 dark:font-semibold"> {format(data.deadline, "dd MMM, yyyy")}</p>

                <VolunteerDetailsModal refetch={refetch} data={data} />
            </div>
            <div
                
                
                
                
                className="mx-auto  p-8 mt-10 w-full h-fit bg-white dark:bg-cyan-900 rounded-lg shadow-lg">
                <div className="flex  items-center justify-center">
                    <h3 className="text-lg dark:text-white font-medium text-gray-900">Details</h3>
                </div>
                <HR className="bg-slate-400 dark:bg-gray-200 my-4" />

                <div className="mt-6 flex flex-col gap-4 text-gray-700 dark:text-gray-300">
                    <div className=" flex items-center">
                        <BiCategoryAlt className="mr-2 text-lg text-gray-600 dark:text-gray-400" />
                        <span className='font-bold mr-2'>Category:</span> <span>{data.category}</span>
                    </div>
                    <div className="flex items-center">
                        <FaMapMarkerAlt className="mr-2 text-lg text-gray-600 dark:text-gray-400" />
                        <span className='font-bold mr-2'>Location:</span> <span>{data.location}</span>
                    </div>
                    <div className="flex items-center">
                        <FaUsers className="mr-2 text-lg text-gray-600 dark:text-gray-400" />
                        <span className='font-bold mr-2'>Volunteers Needed:</span> <span>{data.volunteersNeeded}</span>
                    </div>
                </div>
            </div>

            <div
                
                
                
                
                className="mx-auto p-8 mt-10 w-full h-fit bg-white dark:bg-cyan-900 rounded-lg shadow-lg">
                <div className="flex items-center justify-between">
                    <Avatar size="lg" img={img} onError={() => { setImg('') }} className="cursor-pointer" />
                    <div className="ml-4">
                        <h2 className="text-xl dark:text-white font-bold text-gray-900">{data.organizerName}</h2>
                        <p className="text-sm text-gray-600 dark:text-gray-300 dark:font-semibold">Volunteer Seeker</p>
                    </div>
                </div>
                <HR className="bg-slate-400 dark:bg-gray-200" />
                <ul className="space-y-2 text-sm text-gray-700 mt-4">
                    <li className="flex justify-between">
                        <span className="font-medium text-gray-900 dark:text-white">Name:</span>
                        <span className="dark:text-gray-300 dark:font-semibold">{data.organizerName}</span>
                    </li>
                    <li className="flex justify-between">
                        <span className="font-medium text-gray-900 dark:text-white">Email:</span>
                        <span className="dark:text-gray-300 dark:font-semibold">{data.organizerEmail}</span>
                    </li>
                </ul>
            </div>

        </div>
    );
};

export default Sidebar;
