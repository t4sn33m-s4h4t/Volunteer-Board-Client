import React from 'react';

import { fadeIn } from "../../variant";

const reviewsData = [
  { name: "Jess Hopkins", initial: "J", bgColor: "bg-red-500", date: "Jun 21, 2021", review: "Absolutely love it! The attention to detail is incredible, and the responsiveness makes it a joy to use." },
  { name: "Abhey Yadav", initial: "A", bgColor: "bg-yellow-500", date: "Dec 02, 2022", review: "A game-changer! The sleek design and user-friendly interface make this stand out from the rest." },
  { name: "Tahmid Tayeem", initial: "T", bgColor: "bg-green-500", date: "Feb 16, 2023", review: "The UI is beautiful and intuitive. Everything is smooth, and I love the overall experience." },
  { name: "Dia Hopkins", initial: "D", bgColor: "bg-sky-500", date: "Mar 3, 2022", review: "One of the best experiences I’ve had. Easy to navigate, and the features are exactly what I needed." },
  { name: "Pitter Patter", initial: "P", bgColor: "bg-pink-500", date: "Jan 13, 2024", review: "The design is stunning! The dark mode option is a huge plus. Highly recommend!" },
  { name: "Kares Pokey", initial: "K", bgColor: "bg-purple-500", date: "Feb 29, 2025", review: "This exceeded my expectations. The performance and usability are top-notch!" }
];

const Reviews = () => {
  return (
    <div className="bg-gray-200 dark:bg-sky-950 mb-10 mx-auto pt-10 pb-20 flex items-center justify-center">
      <div className="w-full mx-auto p-8 pb-20 bg-white dark:bg-gray-800 rounded-lg shadow-lg text-center">
        <h2
          variants={fadeIn("right", 0.2)}
          
          
          
          className="text-3xl font-semibold text-center mb-8 dark:text-white"
        >
          Top Reviews
        </h2>
        <div className="grid md:grid-cols-3 grid-cols-1 gap-3 mt-14">
          {reviewsData.map((review, index) => (
            <div key={index} className="flex rounded-md dark:text-white shadow-xl border dark:border-0 dark:bg-cyan-800 bg-white flex-col gap-4 p-4">
              <div className="flex justify-between">
                <div className={`w-7 h-7 flex items-center justify-center text-center rounded-full ${review.bgColor}`}>
                  {review.initial}
                </div>
                <span>{review.name}</span>
              </div>
              <div className='dark:text-gray-200'>{review.review}</div>
              <div className="flex justify-between">
                <span>{review.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Reviews;
