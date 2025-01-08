import { Button, Modal } from "flowbite-react";
import { useEffect, useState } from "react";
import { FaArrowCircleRight } from "react-icons/fa";
import useAxiosSecure from "../../CustomHooks/useAxiosSecure";
import {toast} from "react-toastify";
import { useMutation } from "@tanstack/react-query";
import { useAuth } from "../../CustomHooks/useAuth"
const VolunteerDetailsModal = ({ data, refetch}) => {
    const { user } = useAuth();
    const [openModal, setOpenModal] = useState(false);
    const axiosSecure = useAxiosSecure();
    const [formData, setFormData] = useState({
        ...data,
        volunteerName: user.displayName,
        volunteerEmail: user.email,
        email: user.email,
        status: "Requested",
        needPostId: data._id,
        suggestion: "",
    });
    useEffect(() => {
        setFormData(
            {
                ...data,
                volunteerName: user.displayName,
                volunteerEmail: user.email,
                email: user.email,
                status: "Requested",
                needPostId: data._id,
                suggestion: "",
            }
        )
    }, [user, data])
    const mutation = useMutation({
        mutationFn: async (formData) => {
            return axiosSecure.post('/volunteer-request-post', formData)
        },
    })
    const handleRequest = async (e) => {
        e.preventDefault();
        try {
            const post = await mutation.mutateAsync(formData);
            refetch()
            toast.success("Requested successfully!");
        } catch (error) {
            toast.error(error.response.data.message);
            console.error(error.response.data.message);
        }
        setOpenModal(false)

    };

    useEffect(() => {
        setFormData({ ...formData, suggestion: "" })
    }, [openModal])

    return (
        <div>
            <Button disabled={data.volunteersNeeded===0 ? true : false } className="w-4/5 mx-auto" onClick={() => setOpenModal(true)}>
                {data.volunteersNeeded===0 ? "Slots are Full" :
                    <div className="flex items-center justify-center gap-2">
                    <span>Be a Volunteer</span> <FaArrowCircleRight />
                </div>}
            </Button>

            <Modal dismissible show={openModal} size="xl" onClose={() => setOpenModal(false)} popup>
                <Modal.Header >Request to be a Volunteer</Modal.Header>
                <Modal.Body>
                    <form className="grid gap-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Post Thumbnail</label>
                            <input
                                type="text"
                                value={data.thumbnail}
                                readOnly
                                disabled
                                className="w-full px-3 py-2 rounded-lg border border-gray-300 bg-gray-100 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Post Title</label>
                            <input
                                type="text"
                                value={data.postTitle}
                                readOnly
                                disabled
                                className="w-full px-3 py-2 rounded-lg border border-gray-300 bg-gray-100 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Description</label>
                            <textarea
                                readOnly
                                disabled
                                className="w-full px-3 py-2 rounded-lg border border-gray-300 bg-gray-100 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                            >
                                {data.description}
                            </textarea>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Category</label>
                            <input
                                type="text"
                                value={data.category}
                                readOnly
                                disabled
                                className="w-full px-3 py-2 rounded-lg border border-gray-300 bg-gray-100 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Location</label>
                            <input
                                type="text"
                                value={data.location}
                                readOnly
                                disabled
                                className="w-full px-3 py-2 rounded-lg border border-gray-300 bg-gray-100 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">No. of Volunteers Needed</label>
                            <input
                                type="text"
                                value={data.volunteersNeeded}
                                readOnly
                                disabled
                                className="w-full px-3 py-2 rounded-lg border border-gray-300 bg-gray-100 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Deadline</label>
                            <input
                                type="text"
                                value={data.deadline}
                                readOnly
                                disabled
                                className="w-full px-3 py-2 rounded-lg border border-gray-300 bg-gray-100 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Organizer Name</label>
                            <input
                                type="text"
                                value={`${data.organizerName}`}
                                readOnly
                                disabled
                                className="w-full px-3 py-2 rounded-lg border border-gray-300 bg-gray-100 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                            />
                        </div><div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Organizer Email</label>
                            <input
                                type="text"
                                value={`${data.organizerEmail}`}
                                readOnly
                                disabled
                                className="w-full px-3 py-2 rounded-lg border border-gray-300 bg-gray-100 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Volunteer Name</label>
                            <input
                                type="text"
                                value={`${user.displayName}`}
                                readOnly
                                disabled
                                className="w-full px-3 py-2 rounded-lg border border-gray-300 bg-gray-100 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Volunteer Email</label>
                            <input
                                type="text"
                                value={`${user.email}`}
                                readOnly
                                disabled
                                className="w-full px-3 py-2 rounded-lg border border-gray-300 bg-gray-100 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Suggestion</label>
                            <textarea
                                onChange={(e) => {
                                    setFormData({ ...formData, suggestion: e.target.value })
                                }}
                                value={formData.suggestion}
                                placeholder="Enter your suggestion..."
                                className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                            ></textarea>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Status</label>
                            <input
                                type="text"
                                value="Requested"
                                readOnly
                                disabled
                                className="w-full px-3 py-2 rounded-lg border border-gray-300 bg-gray-100 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                            />
                        </div>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={handleRequest}>Request</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default VolunteerDetailsModal;
