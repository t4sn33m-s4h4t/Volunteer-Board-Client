import React from 'react';
import { useQuery } from '@tanstack/react-query';
import CardComponent from '../../ShareComponents/CardComponent';
import { Link } from 'react-router-dom';
import useAxios from '../../../CustomHooks/useAxios';
import Loading from '../../Loading';
import { motion } from "motion/react";
import { fadeIn } from '../../variant';

const VolunteerNeedsNow = () => {
    const OwnAxios = useAxios();
    const { isPending, error, data } = useQuery({
        queryKey: ['sixPosts'],
        queryFn: async () =>
            await OwnAxios.get('/volunteer-need-posts', {
                params: {
                    limit: 8,
                    sort: 'asc'
                },
            }).then((res) => res.data),
    })

    if (isPending) {
        return <Loading />;
    }
    if (error) {
        return <p>Error: {error.message}</p>;
    }
    if (data.length === 0) {
        return (
            <div className='text-center'>
                <b className='dark:text-white text-center text-xl'>No data found</b>
            </div>
        );
    }
    return (
        <div className="w-full text-center mb-20">
            <motion.h2
                variants={fadeIn("up", 0.2)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: true, amount: 0.7 }}
                className="text-3xl font-semibold text-center mb-8 dark:text-white">
                Volunteer Needs Now
            </motion.h2>
            <div className="grid grid-cols-1 text-left gap-10 md:grid-cols-3 lg:grid-cols-4 mb-10">
                {data?.map((post) => (
                    <CardComponent key={post._id} data={post} />
                ))}
            </div>
            <Link
                to="/all-posts"
                className="mt-4 mx-auto py-3 lg:px-32 md:px-24 px-16 bg-cyan-900 text-white font-medium rounded-lg shadow-md hover:bg-sky-800 focus:outline-none focus:ring-2 focus:ring-sky-800 focus:ring-opacity-50"
            >
                See All
            </Link>
        </div>
    );
};

export default VolunteerNeedsNow;
