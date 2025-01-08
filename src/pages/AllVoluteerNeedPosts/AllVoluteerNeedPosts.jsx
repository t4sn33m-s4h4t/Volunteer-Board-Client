import { useEffect, useState } from 'react';
import CardComponent from '../ShareComponents/CardComponent';
import { FaRegListAlt, FaSearch } from 'react-icons/fa';
import { MdOutlineApps } from "react-icons/md"
import Loading from '../Loading';
import { useQuery } from '@tanstack/react-query';
import useAxios from '../../CustomHooks/useAxios';
import ListComponent from '../ShareComponents/ListComponent';
import { Label, Pagination, Select } from 'flowbite-react';
import { motion } from "motion/react";
import { fadeIn } from "../variant"

const AllVolunteerNeedPosts = () => {
    const ownAxios = useAxios()
    const [itemsPerPage, setItemsPerPage] = useState(() => {
        const storedName = localStorage.getItem('itemsPerPage');
        return storedName ? storedName : 9;
    })
    const [currentPage, setCurrentPage] = useState(1);
    const resut = useQuery({
        queryKey: ['DashboardStats'],
        queryFn: async () =>
            await ownAxios.get(`/dashboard-stats`).then((res) => res.data),
    });

    useEffect(() => {
        if (itemsPerPage) {
            localStorage.setItem('itemsPerPage', itemsPerPage);
        }
    }, [itemsPerPage]);

    const totalPages = Math.ceil((resut?.data?.totalPosts || 1) / itemsPerPage);
    const onPageChange = (page) => setCurrentPage(page);
    const [CardView, setCardView] = useState(true)
    const activeClass = "bg-sky-950 text-white rounded-md dark:bg-white dark:text-sky-950"


    const [searchTerm, setSearchTerm] = useState('');
    const OwnAxios = useAxios();
    const { isLoading, error, data } = useQuery({
        queryKey: ['AllVolunteerNeedPosts', searchTerm, currentPage, itemsPerPage],
        queryFn: async () =>
            await OwnAxios.get('/volunteer-need-posts', {
                params: {
                    search: searchTerm,
                    limit: !searchTerm.length ? itemsPerPage : 0,
                    page: !searchTerm.length ? currentPage : Infinity,
                },
            }).then((res) => res.data),
        staleTime: 5000,
    });
    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };
     
    if (error) {
        return (
            <div className="text-center">
                <b className="dark:text-white text-center text-xl">Error: {error.message}</b>
            </div>
        );
    }
    return (
        <div className="w-full text-center pb-10 md:px-20 px-5 bg-gray-200 dark:bg-sky-950 py-10">
            <motion.h2
                variants={fadeIn("up", 0.2)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: true, amount: 0.7 }}
                className="text-3xl font-semibold text-center mb-8 dark:text-white">
                All volunteer Need posts
            </motion.h2>

            <motion.div
                variants={fadeIn("right", 0.3)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: true, amount: 0.7 }}
                className="mb-4 relative flex items-center justify-center w-full md:w-3/5 mx-auto border border-gray-300 rounded-lg overflow-hidden shadow-lg">
                <input
                    type="text"
                    value={searchTerm}
                    onChange={handleSearchChange}
                    placeholder="Search by Post Title"
                    className="w-full p-3 pl-5 pr-12 dark:text-black border-none rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 dark:bg-gray-100 dark:border-gray-600 transition-all"
                />
                <FaSearch className="absolute right-3 text-sky-500 w-5 h-5 cursor-pointer" />
            </motion.div>
            <motion.div
                variants={fadeIn("up", 0.2)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: true, amount: 0.7 }}
                className='mb-8 mx-auto w-full flex justify-between items-end'>

                <div className="w-fit">
                    {!searchTerm.length &&
                        <><div className="mb-2 block">
                        <Label htmlFor="itemsPerPage" value="Posts Per Page" />
                    </div>
                    <Select id="itemsPerPage" value={itemsPerPage} onChange={(e) => setItemsPerPage(e.target.value)} required>
                        <option>3</option>
                        <option>6</option>
                        <option>9</option>
                        <option>12</option>
                        <option>15</option>
                        <option>18</option>
                    </Select>
                    </>}
                </div>

                <div className='flex justify-around text-2xl w-fit  bg-white rounded-md dark:bg-cyan-800 dark:text-gray-200'>
                    <MdOutlineApps name='card' className={`cursor-pointer py-2 px-3 box-content ${CardView && activeClass}`} onClick={() => { setCardView(true) }} />
                    <FaRegListAlt name='list' className={`cursor-pointer py-2 px-3 box-content ${!CardView && activeClass}`} onClick={() => { setCardView(false) }} />
                </div>
            </motion.div>
            {
                isLoading || !data || data.length === 0 ?
                    (isLoading ?
                        <Loading />
                        :
                        <div className="text-center mb-5">
                            <b className="dark:text-white text-center text-xl">No data found</b>
                        </div>)
                    :
                    <div
                        className={` ${CardView ? "grid" : "block"} grid-cols-1 text-left gap-10 md:grid-cols-2 lg:grid-cols-3 mb-10`}>
                        {
                            CardView ? (data?.map((post) => (
                                <CardComponent key={post.id} data={post} />
                            )))

                                : <ListComponent data={data} />

                        }
                    </div>
            }
            {
                !searchTerm.length && <motion.div
                variants={fadeIn("up", 0.3)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: true, amount: 0.7 }}
                className="flex overflow-x-auto ">

                <Pagination  className='justify-center mx-auto' currentPage={currentPage} totalPages={totalPages} onPageChange={onPageChange} showIcons />
            </motion.div>
            }
            
        </div>
    );
};

export default AllVolunteerNeedPosts;
