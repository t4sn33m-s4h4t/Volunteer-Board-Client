import { useQuery } from "@tanstack/react-query";
import useAxios from "../../../CustomHooks/useAxios";
import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { fadeIn } from "../../variant"
const StatsSection = () => {
  const ownAxios = useAxios();
  const infos = [
    {
      id: 1,
      value: 0,
      description: "Volunteer Opportunities Posted",
    },
    {
      id: 2,
      value: 0,
      description: "Volunteer Applications",
    },
    {
      id: 3,
      value: 0,
      description: "Total Members",
    },
  ]
  const [realValues, setRealValues] = useState([]);
  const { data } = useQuery({
    queryKey: ['DashboardStats'],
    queryFn: async () =>
      await ownAxios.get(`/dashboard-stats`).then((res) => res.data),
  });

  useEffect(() => {
    setRealValues([
      data?.totalPosts,
      data?.totalApplications,
      data?.totalMembers
    ]);
  }, [data]);


  return (
    <section className="bg-white mt-10 p-10 rounded-lg shadow-lg  dark:bg-gray-900">
      <div className="max-w-5xl mx-auto text-center">
        <motion.h2
          variants={fadeIn("left", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.7 }}
          className="text-3xl font-semibold text-center mb-8 dark:text-white">
          Volunteer Board Stats
        </motion.h2>
        <motion.p
          variants={fadeIn("right", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.7 }}
          className="mt-2 text-gray-600 dark:text-gray-400">
          Here we list our site stats and how many people we've helped find
          volunteer opportunities and how many volunteers have joined the cause.
          It's a pretty awesome stats area!
        </motion.p>
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.7 }}
          className="grid grid-cols-2 md:grid-cols-3 gap-8 mt-8 justify-center">
          {infos.map(({ id, value, description }) => (
            <div key={id} className="flex flex-col items-center col-span-2 md:col-span-1">
              <span className="text-4xl font-bold text-gray-800 dark:text-gray-200">
                {realValues ? realValues[id - 1] : value}
              </span>
              <span className="text-gray-600 dark:text-gray-400">{description}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default StatsSection;
