import React from 'react';
import aboutUsVector from '../assets/aboutUsVector.svg';
import { Helmet } from 'react-helmet';

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-pyrple-50 to-sky-50 py-12 px-4 sm:px-6 lg:px-8">
      <Helmet>
        <title>About Us - Volunteer Board</title>
        <meta name="description" content="Learn more about the Volunteer Board project and its mission." />
      </Helmet>
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
            About Us
          </h1>
          <p className="mt-4 text-xl text-gray-600">
            Empowering Communities Through Volunteering
          </p>
        </div>

        {/* Content Section */}
        <div className="mt-16 flex flex-col lg:flex-row items-center justify-between">
          {/* Vector Image */}
          <div className="lg:w-1/2 flex justify-center">
            <img
              src={aboutUsVector}
              alt="About Us Vector"
              className="w-full max-w-md lg:max-w-lg"
            />
          </div>

          {/* Text Content */}
          <div className="lg:w-1/2 mt-10 lg:mt-0 lg:pl-12">
            <h2 className="text-3xl font-bold text-gray-900">
              Who We Are
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              We are a passionate team dedicated to connecting volunteers with meaningful initiatives. Our mission is to empower communities by providing a platform where individuals can create, manage, and participate in volunteer opportunities.
            </p>

            <h2 className="mt-8 text-3xl font-bold text-gray-900">
              Our Mission
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              To create a world where everyone has the opportunity to contribute to their community. We believe that volunteering is a powerful way to bring people together and make a positive impact.
            </p>

            <h2 className="mt-8 text-3xl font-bold text-gray-900">
              Why Choose Us?
            </h2>
            <ul className="mt-4 text-lg text-gray-600 list-disc list-inside">
              <li>Easy-to-use platform for creating and managing volunteer posts.</li>
              <li>Seamless integration with social logins for quick access.</li>
              <li>Responsive design for a great experience on all devices.</li>
              <li>Dark mode support for comfortable browsing.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;