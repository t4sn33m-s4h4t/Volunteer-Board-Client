import { format } from 'date-fns'
import { Table, TableBody, TableCell, TableHead, TableHeadCell, TableRow } from 'flowbite-react'
import { Link } from 'react-router-dom'



const ListComponent = ({ data }) => {
    return (
        <div
           
            className="overflow-x-auto rounded-md border-2 dark:border-gray-600 border-gray-300">
            <Table hoverable>
                <TableHead>
                    <TableHeadCell className='p-2 md:p-3 lg:p-5 w-1/4'>Post Title</TableHeadCell>
                    <TableHeadCell className='p-2 md:p-3 lg:p-5'>Category</TableHeadCell>
                    <TableHeadCell className='p-2 md:p-3 lg:p-5'>Location</TableHeadCell>
                    <TableHeadCell className='p-2 md:p-3 lg:p-5'>Deadline</TableHeadCell>
                    <TableHeadCell className='text-center p-2 md:p-3 lg:p-5'>Volunteers Needed</TableHeadCell>
                    <TableHeadCell className="text-center p-2 md:p-3 lg:p-5">Actions</TableHeadCell>
                </TableHead>
                <TableBody className="divide-y">
                    {data.map((post) => (
                        <TableRow key={post.id} className="bg-white dark:border-gray-700 dark:bg-gray-800">

                            <TableCell className="p-2 md:p-3 lg:p-5 whitespace-nowrap font-medium text-gray-900 dark:text-white w-1/4">
                                {post.postTitle.slice(0, 25)}...
                            </TableCell>
                            <TableCell className='p-2 md:p-3 lg:p-5'>{post.category.toUpperCase()}</TableCell>
                            <TableCell className='p-2 md:p-3 lg:p-5'>{post.location}</TableCell>
                            <TableCell className='p-2 md:p-3 lg:p-5'>{format(post.deadline, "dd MMM, yyyy")}</TableCell>
                            <TableCell className='text-center p-2 md:p-3 lg:p-5'>{post.volunteersNeeded}</TableCell>
                            <TableCell className='p-2 md:p-3 lg:p-5'>
                                <div className="flex justify-center ">
                                    <Link to={`/post-details/${post._id}`} className="mt-4 w-full text-center border border-gray-600 py-2 px-4 bg-sky-950 text-white font-medium rounded-lg shadow-md hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-opacity-50">
                                        View Details
                                    </Link>
                                </div>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    )
}

export default ListComponent
