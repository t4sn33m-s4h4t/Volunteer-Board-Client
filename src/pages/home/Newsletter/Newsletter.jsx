import { motion } from "motion/react";
import { fadeIn } from "../../variant";
import { TextInput } from "flowbite-react";

const Newsletter = () => {
    return (
      <div className="bg-gray-200 dark:bg-sky-950 py-10 min-h-[50vh] h-[60vh] flex items-center justify-center">
        <div className="w-full mx-auto p-8 bg-white dark:bg-gray-800 rounded-lg shadow-lg text-center">
        <motion.h2
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: true, amount: 0.7 }}
        className="text-3xl font-semibold text-center mb-8 dark:text-white">
 
            Subscribe to Our Newsletter
      </motion.h2> 
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Stay updated with our latest news and volunteer opportunities.
          </p>
           
          <form className="space-y-4 h-80%">
            <TextInput
              type="email"
              className="w-full dark:bg-gray-700 dark:text-white"
              placeholder="Enter your email"
              required
            />
            
            <button
              type="submit"
              className="w-80 bg-sky-950 text-white py-3 rounded-md hover:bg-sky-800 transition duration-300 dark:hover:bg-sky-800 dark:bg-sky-950"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    );
  };
  
  export default Newsletter;
  