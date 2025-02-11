import { Card } from "flowbite-react";

import { fadeIn } from "../variant"
const MainDetails = ({ data }) => {
    return (
        <div
            variants={fadeIn("right", 0.1)}
            
            
            
        >
            <Card className="md:max-w-5xl mx-auto p-0 md:p-2 lg:p-8 bg-white dark:bg-cyan-900 rounded-lg shadow-lg">
                <img src={data.thumbnail} className="w-full h-96 mx-auto rounded-xl object-cover" />
                <h2 className="text-3xl font-semibold  mt-8 dark:text-white">
                    {
                        data.postTitle
                    }
                </h2>
                <p className="mt-2 text-gray-600 dark:text-gray-300 dark:font-semibold ">{data.description}</p>
            </Card>
        </div>
    )
}

export default MainDetails
