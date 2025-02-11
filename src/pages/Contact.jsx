import contactVector from "../assets/contactVector.svg";
import { fadeIn } from "./variant";
import { motion } from "motion/react";
const Contact = () => {
  return (
    <div className="md:px-32 px-5 bg-gray-200 dark:bg-sky-950 min-h-screen flex items-center justify-center">
      
      <div className=" w-full mx-auto p-8 bg-white dark:bg-gray-800 rounded-lg shadow-lg ">
      <motion.h2
                variants={fadeIn("up", 0.2)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: true, amount: 0.7 }}
        className="text-3xl font-semibold text-center mt-8 mb-5 dark:text-white">
          Contact Us
        </motion.h2>
<div className="flex flex-col md:flex-row items-center">
        <div className="w-full md:w-1/2 flex justify-center">
          <img src={contactVector} alt="Contact Us" className="w-3/4 md:w-2/3" />
        </div>
 
        <div className="w-full md:w-1/2 p-6">
          
          <form className="space-y-6">
            <div>
              <label className="block text-gray-700 dark:text-gray-300 text-sm font-semibold mb-2" htmlFor="name">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full p-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:text-white"
                placeholder="Enter your name"
              />
            </div>

            <div>
              <label className="block text-gray-700 dark:text-gray-300 text-sm font-semibold mb-2" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full p-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:text-white"
                placeholder="Enter your email"
              />
            </div>

            <div>
              <label className="block text-gray-700 dark:text-gray-300 text-sm font-semibold mb-2" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                rows="4"
                className="w-full p-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:text-white"
                placeholder="Enter your message"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition duration-300 dark:bg-blue-500 dark:hover:bg-blue-400"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
    
</div>
    
  );
};

export default Contact;
