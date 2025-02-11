import React from "react";
import { FaHandsHelping, FaRegEdit, FaTrashAlt, FaPlusSquare, FaUsers, FaTasks, FaUserPlus, FaHeart } from "react-icons/fa";

import { fadeIn } from "../../variant"
const VolunteerSectors = () => {
  const categories = [
    {
      id: 1,
      title: "Create Volunteer Post",
      description: "Add a new post to invite volunteers.",
      icon: <FaPlusSquare className="h-8 w-8 text-blue-500" />,
    },
    {
      id: 2,
      title: "Update Volunteer Post",
      description: "Edit your existing volunteer posts.",
      icon: <FaRegEdit className="h-8 w-8 text-blue-500" />,
    },
    {
      id: 3,
      title: "Delete Volunteer Post",
      description: "Remove volunteer posts that are no longer needed.",
      icon: <FaTrashAlt className="h-8 w-8 text-blue-500" />,
    },
    {
      id: 4,
      title: "Volunteer for a Post",
      description: "Sign up to help with others' posts.",
      icon: <FaHandsHelping className="h-8 w-8 text-blue-500" />,
    },
    {
      id: 5,
      title: "Manage Volunteers",
      description: "Track and organize volunteers for your posts.",
      icon: <FaUsers className="h-8 w-8 text-blue-500" />,
    },
    {
      id: 6,
      title: "Assign Tasks",
      description: "Break down posts into manageable tasks.",
      icon: <FaTasks className="h-8 w-8 text-blue-500" />,
    },
    {
      id: 7,
      title: "Invite Volunteers",
      description: "Send invites to potential volunteers.",
      icon: <FaUserPlus className="h-8 w-8 text-blue-500" />,
    },
    {
      id: 8,
      title: "Show Appreciation",
      description: "Thank and reward volunteers for their effort.",
      icon: <FaHeart className="h-8 w-8 text-blue-500" />,
    },
  ];

  return (
    <div className="mb-10 mx-auto py-10 ">
      <h2
        
        
        
        
        className="text-3xl font-semibold text-center mb-8 dark:text-white">
        Volunteer Board Sectors
      </h2>

      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {categories.map(({ id, title, description, icon }) => (
          <div
          variants={fadeIn("right", 0.2)}
          
          
          viewport={{ once: true, amount: 0.4 }}
            key={id}
            className="flex flex-col items-center p-6 bg-white dark:bg-cyan-800 rounded-lg shadow hover:shadow-lg transition"
          >
            <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
              {icon}
            </div>
            <h3 className="text-lg font-medium text-gray-800 dark:text-white">{title}</h3>
            <p className="text-sm text-center text-gray-500 mt-2 dark:text-gray-300">{description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VolunteerSectors;
