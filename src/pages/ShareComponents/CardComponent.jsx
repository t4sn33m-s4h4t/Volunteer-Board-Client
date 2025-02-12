
import { format } from "date-fns";
import { Badge, Card } from "flowbite-react";
import { Link } from "react-router-dom";
export default function CardComponent({ data }) {
  
  return (
    <div
      
      
      
    >
      <Card
      id="flowbiteCard"
        className="max-w-sm mx-auto h-full w-full relative shadow-lg dark:bg-cyan-900"
        imgAlt={data.thumbnail}
        imgSrc={data.thumbnail}
      >
        <p className="font-medium text-sky-500 dark:text-sky-400">
          Deadline: {format(data.deadline, "dd MMM, yyyy")}
        </p>
        <Badge className="absolute top-1 right-1 rounded-none px-5 py-2 shadow-md" color="info">{data.category}</Badge>
        <Badge className="absolute top-1 left-1 rounded-none px-5 py-2 shadow-md" color="indigo">{data.location}</Badge>
        <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
          {data.postTitle}
        </h5>
        <h5 className="tracking-tight text-gray-600 dark:text-gray-200">
          {data.description.substring(0, 100)}...
        </h5>
        <Link to={`/post-details/${data._id}`} className="mt-4 w-full text-center py-2 px-4 bg-sky-950 text-white font-medium rounded-lg shadow-md hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-opacity-50">
          View Details
        </Link>
      </Card>
    </div>
  );
}
