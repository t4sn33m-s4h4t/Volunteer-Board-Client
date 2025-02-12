import { toast } from "react-toastify";
import contactVector from "../assets/contactVector.svg";
import { useRef } from "react";
const Contact = () => {
  const nameRef = useRef()
  const emailRef = useRef()
  const messageRef = useRef()
  return (
    <div className="md:px-32 px-5 bg-gray-200 dark:bg-sky-950 min-h-screen flex items-center justify-center">

      <div className=" w-full mx-auto p-8 bg-white dark:bg-gray-800 rounded-lg shadow-lg ">
        <h2
          className="text-3xl font-semibold text-center mt-8 mb-5 dark:text-white">
          Contact Us
        </h2>
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 flex justify-center">
            <img src={contactVector} alt="Contact Us" className="w-3/4 md:w-2/3" />
          </div>

          <div className="w-full md:w-1/2 p-6">

            <form onSubmit={(e) => {
              e.preventDefault() 
                          nameRef.current.value=''
                          emailRef.current.value=''
                          messageRef.current.value=''
                          toast.success("Message sent successfully!")
            }} className="space-y-6">
              <div>
                <label className="block text-gray-700 dark:text-gray-300 text-sm font-semibold mb-2" htmlFor="name">
                  Name
                </label>
                <input
                ref={nameRef}
                  type="text"
                  id="name"
                  className="w-full p-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500 dark:text-white"
                  placeholder="Enter your name"
                />
              </div>

              <div>
                <label className="block text-gray-700 dark:text-gray-300 text-sm font-semibold mb-2" htmlFor="email">
                  Email
                </label>
                <input
                ref={emailRef}
                  type="email"
                  id="email"
                  className="w-full p-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500 dark:text-white"
                  placeholder="Enter your email"
                />
              </div>

              <div>
                <label className="block text-gray-700 dark:text-gray-300 text-sm font-semibold mb-2" htmlFor="message">
                  Message
                </label>
                <textarea
                ref={messageRef}
                  id="message"
                  rows="4"
                  className="w-full p-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500 dark:text-white"
                  placeholder="Enter your message"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-sky-950 text-white py-3 rounded-md hover:bg-sky-800 transition duration-300 dark:hover:bg-sky-800 dark:bg-sky-950"
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
