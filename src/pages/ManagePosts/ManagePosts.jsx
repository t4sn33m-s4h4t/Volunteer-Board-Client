import { Table, TableBody, TableCell, TableHead, TableHeadCell, Modal, TableRow, Button } from "flowbite-react";
import { Link } from "react-router-dom";
import { useAuth } from "../../CustomHooks/useAuth"
import useAxiosSecure from "../../CustomHooks/useAxiosSecure";
import { useQuery } from '@tanstack/react-query';
import { useEffect, useState } from "react";
import { format } from "date-fns";
import { toast } from "react-toastify";
import { motion } from "motion/react";
import { fadeIn } from "../variant"

import { HiOutlineExclamationCircle } from 'react-icons/hi'

export default function ManagePosts() {
  const [openModal, setOpenModal] = useState(false);
  const [selectedAction, setSelectedAction] = useState(null);
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  
  const { data } = useQuery({
    queryKey: ["MyPosts"],
    queryFn: async () =>
      await axiosSecure.get(`/my-posts/${user.email}`).then((res) => res.data),
    staleTime: 5000,
  });

  const [posts, setPosts] = useState([]);
  useEffect(() => {
    setPosts(data);
  }, [data]);

  const handleDelete = async (id) => {
    try {
      await axiosSecure.delete(`delete-volunteer-need-post/${id}`, {
        params: { email: user.email },
      });
      toast.success("Post deleted successfully!");
      setPosts((prevPosts) => prevPosts.filter((post) => post._id !== id));
    } catch (error) {
      toast.error(`Error: ${error.response?.data?.message || "Something went wrong!"}`);
    }
  };

  const result = useQuery({
    queryKey: ["MyRequests"],
    queryFn: async () =>
      await axiosSecure.get(`/my-requests/${user.email}`).then((res) => res.data),
    staleTime: 5000,
  });

  const [requests, setRequests] = useState([]);
  useEffect(() => {
    setRequests(result.data);
  }, [result.data]);

  const handleRequestDelete = async (id, needPostId) => {
    try {
      await axiosSecure.delete(`/delete-request-post/${id}`, {
        params: { email: user.email, needPostId },
      });
      toast.success("Request cancelled successfully!");
      setRequests((prevReqs) => prevReqs.filter((req) => req._id !== id));
    } catch (error) {
      toast.error(`Error: ${error.response?.data?.message || "Something went wrong!"}`);
    }
  };

  const confirmAction = () => {
    if (selectedAction?.type === "deletePost") {
      handleDelete(selectedAction.id);
    } else if (selectedAction?.type === "cancelRequest") {
      handleRequestDelete(selectedAction.id, selectedAction.needPostId);
    }
    setOpenModal(false);
    setSelectedAction(null);
  };

  return (
    <div className="overflow-x-auto min-h-[calc(100vh-90px)] md:px-20 px-5 py-10 bg-gray-200 dark:bg-sky-950">
      <motion.h2
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: true, amount: 0.7 }}
        className="text-3xl font-semibold text-center mb-8 dark:text-white"
      >
        My Volunteer Need Posts
      </motion.h2>
      {posts?.length ? (
        <div className="flex justify-center rounded bg-gray-100 dark:bg-gray-900">
          <div className="overflow-x-auto w-full max-w-screen-xl p-0 md:p-3 lg:p-4">
            <Table hoverable>
              <TableHead>
                <TableHeadCell>Post Title</TableHeadCell>
                <TableHeadCell>Category</TableHeadCell>
                <TableHeadCell>Location</TableHeadCell>
                <TableHeadCell className="text-center">Volunteers Needed</TableHeadCell>
                <TableHeadCell>Deadline</TableHeadCell>
                <TableHeadCell className="text-center">Actions</TableHeadCell>
              </TableHead>
              <TableBody className="divide-y">
                {posts.map((post) => (
                  <TableRow key={post._id} className="bg-white dark:border-gray-700 dark:bg-gray-800">
                    <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                      {post.postTitle}
                    </TableCell>
                    <TableCell>{post.category}</TableCell>
                    <TableCell>{post.location}</TableCell>
                    <TableCell className="text-center">{post.volunteersNeeded}</TableCell>
                    <TableCell>{format(post.deadline, "dd MMM, yyyy")}</TableCell>
                    <TableCell>
                      <div className="flex justify-center space-x-2">
                        <Link to={`/update-post/${post._id}`}>
                          <Button color="cyan" className="px-4 text-sm">
                            Update
                          </Button>
                        </Link>
                        <Button
                          onClick={() => {
                            setSelectedAction({ type: "deletePost", id: post._id });
                            setOpenModal(true);
                          }}
                          color="red"
                          className="px-4 text-sm"
                        >
                          Delete
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      ) : (
        <p className="text-center dark:text-gray-300">You Haven't Made Any Posts Yet</p>
      )}

      <motion.h2
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: true, amount: 0.7 }}
        className="text-3xl font-semibold text-center my-8 dark:text-white"
      >
        My Requests
      </motion.h2>
      {requests?.length ? (
        <div className="flex justify-center rounded bg-gray-100 dark:bg-gray-900">
          <div className="overflow-x-auto w-full max-w-screen-xl p-0 md:p-3 lg:p-4">
            <Table hoverable>
              <TableHead>
                <TableHeadCell>Post Title</TableHeadCell>
                <TableHeadCell>Category</TableHeadCell>
                <TableHeadCell>Location</TableHeadCell>
                <TableHeadCell>Deadline</TableHeadCell>
                <TableHeadCell className="text-center">Actions</TableHeadCell>
              </TableHead>
              <TableBody className="divide-y">
                {requests.map((request) => (
                  <TableRow key={request._id} className="bg-white dark:border-gray-700 dark:bg-gray-800">
                    <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                      {request.postTitle}
                    </TableCell>
                    <TableCell>{request.category}</TableCell>
                    <TableCell>{request.location}</TableCell>
                    <TableCell>{format(request.deadline, "dd MMM, yyyy")}</TableCell>
                    <TableCell>
                      <div className="flex justify-center space-x-2">
                        <Button
                          onClick={() => {
                            setSelectedAction({
                              type: "cancelRequest",
                              id: request._id,
                              needPostId: request.needPostId,
                            });
                            setOpenModal(true);
                          }}
                          color="red"
                          className="px-4 text-sm"
                        >
                          Cancel
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      ) : (
        <p className="text-center dark:text-gray-300">You Haven't Made Any Requests Yet</p>
      )}

      <Modal show={openModal} size="md" onClose={() => setOpenModal(false)} popup>
        <Modal.Header />
        <Modal.Body>
          <div className="text-center">
            <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
            <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
              Are you sure about this?
            </h3>
            <div className="flex justify-center gap-4">
              <Button color="failure" onClick={confirmAction}>
                Yes, I'm sure
              </Button>
              <Button color="gray" onClick={() => setOpenModal(false)}>
                No, cancel
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}