import aboutUsVector from "../assets/aboutUsVector.svg";

const AboutUs = () => {
  return (
    <div className="bg-gray-200 dark:bg-sky-950 py-10 min-h-screen flex items-center justify-center">
      <div className="max-w-6xl mx-auto p-8 bg-white dark:bg-gray-800 rounded-lg shadow-lg flex flex-col md:flex-row items-center">
 
        <div className="w-full md:w-1/2 flex justify-center">
          <img src={aboutUsVector} alt="About Us" className="w-3/4 md:w-2/3" />
        </div>
 
        <div className="w-full md:w-1/2 p-6">
          <h2 className="text-3xl font-semibold text-center text-gray-800 dark:text-white mb-6">
            About Us
          </h2>
          <p className="text-gray-700 dark:text-gray-300 text-lg mb-4">
            We are a passionate team dedicated to connecting volunteers with meaningful initiatives. Our mission is to empower communities by providing a platform where individuals can create, manage, and participate in volunteer opportunities.
          </p>
          <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mt-6">Our Mission</h3>
          <p className="text-gray-700 dark:text-gray-300 text-lg mt-2">
            To create a world where everyone has the opportunity to contribute to their community. We believe that volunteering is a powerful way to bring people together and make a positive impact.
          </p>
          <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mt-6">Why Choose Us?</h3>
          <ul className="text-gray-700 dark:text-gray-300 text-lg mt-2 list-disc pl-5">
            <li>Easy-to-use platform for creating and managing volunteer posts.</li>
            <li>Seamless integration with social logins for quick access.</li>
            <li>Responsive design for a great experience on all devices.</li>
            <li>Dark mode support for comfortable browsing.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
