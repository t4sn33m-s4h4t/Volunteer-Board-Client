import { Link } from 'react-router-dom';

import { motion } from "motion/react";
import { fadeIn } from '../../variant';
export default function Banner({ ban, title, description }) {
    return (
        <div
            className="hero min-h-screen bg-cover bg-center bg-no-repeat "
            style={{
                backgroundImage: `url(${ban})`,
            }}>

            <div className="hero-content h-[90vh] text-neutral-content text-center ">
                <div className="max-w-lg h-full mx-auto pt-24 px-5">
                    <motion.h1
                        variants={fadeIn("left", 0.2)}
                        initial="hidden"
                        whileInView={"show"}
                        viewport={{ once: true, amount: 0.7 }}
                        className="mb-5 lg:text-4xl md:text-4xl text-3xl font-bold text-white">
                        {title}
                    </motion.h1>
                    <motion.p
                        variants={fadeIn("right", 0.2)}
                        initial="hidden"
                        whileInView={"show"}
                        viewport={{ once: true, amount: 0.7 }}
                        className=" text-white mb-16">
                        {description}
                    </motion.p>
                    <Link to={"/all-posts"}
                        className="bg-sky-950 px-8 py-4 text-white border-2 hover:shadow-none hover:border-0 border-white shadow-md shadow-white "
                    >
                        All Volunteer Need Posts
                    </Link>

                </div>
            </div>
        </div>
    )
}
