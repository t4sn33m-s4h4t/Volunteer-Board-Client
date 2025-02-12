import { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Button, Label, TextInput, Textarea, Select } from "flowbite-react";
import { toast } from "react-toastify";
import { useAuth } from "../../CustomHooks/useAuth";
import { useMutation, useQuery } from '@tanstack/react-query'
import useAxiosSecure from "../../CustomHooks/useAxiosSecure";
import { useParams } from "react-router-dom";
import Loading from "../Loading";


const UpdateVolunteerNeedPost = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const { id } = useParams();
  const { isLoading, error, data } = useQuery({
    queryKey: ['singlePost', id],
    queryFn: async () =>
      await axiosSecure.get(`/volunteer-need-post/${id}`, {
        params: {
          email: user.email,
        },
      }).then((res) => res.data),
  })

  const [formData, setFormData] = useState({ ...data, email: user.email });
  useEffect(() => {
    setFormData({ ...data, email: user.email });
  }, [data]);
  const [volunteersError, setVolunteersError] = useState("");
  const [deadlineError, setDeadlineError] = useState("");

  const mutation = useMutation({
    mutationFn: async (formData) => {
      return axiosSecure.put(`/update-volunteer-need-post/${id}`, formData)
    },
  })
  if (isLoading) {
    return <Loading />;

  }
  if (error) {
    return (<div className='text-center'>
      <b className='dark:text-white text-center text-xl'>No Post found</b>
    </div>)
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    if (name === "volunteersNeeded") {
      if (parseInt(value) <= 0 && value !== "") {
        setVolunteersError("Number of volunteers must be greater than 0.");
      } else {
        setVolunteersError("");
      }
    }

    if (name === "deadline") {
      const currentDate = new Date();
      if (new Date(value) < currentDate) {
        setDeadlineError("Deadline must be a future date.");
      } else {
        setDeadlineError("");
      }
    }
  };

  const handleDateChange = (date) => {
    setFormData({ ...formData, deadline: date });
    const currentDate = new Date();
    if (date < currentDate) {
      setDeadlineError("Deadline must be a future date.");
    } else {
      setDeadlineError("");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const volunteersValid = parseInt(formData.volunteersNeeded) > 0;
    const deadline = new Date(formData.deadline);
    const currentDate = new Date();
    const deadlineValid = deadline >= currentDate;


    if (!volunteersValid || !deadlineValid) {
      if (!volunteersValid) setVolunteersError("Number of volunteers must be greater than 0.");
      if (!deadlineValid) setDeadlineError("Deadline must be a future date.");
      return;
    }
    try {
      const post = await mutation.mutateAsync(formData);
      toast.success("Post Updated Successfully!");
    } catch (error) {
      toast.error("No Data Changes.");
      console.error(error);
    }
  };

  return (
    <div className="bg-gray-200 dark:bg-sky-950 py-10">
      <div className="max-w-4xl my-10 mx-auto p-8 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
        <h2
          
          
          
          
          className="text-3xl font-semibold text-center mt-8 mb-5 dark:text-white">
          Update Volunteer Need Post
        </h2>
        <form
          
          onSubmit={handleSubmit} className="space-y-6">
          <div>
            <Label htmlFor="thumbnail" value="Thumbnail (URL)" className="mb-2" />
            <TextInput
              id="thumbnail"
              name="thumbnail"
              type="url"
              placeholder="Enter thumbnail URL"
              value={formData.thumbnail}
              onChange={handleChange}
              required
              className="border-none focus:outline-none"
            />
          </div>
          <div>
            <Label htmlFor="postTitle" value="Post Title" className="mb-2" />
            <TextInput
              id="postTitle"
              name="postTitle"
              type="text"
              placeholder="Enter post title"
              value={formData.postTitle}
              onChange={handleChange}
              required
              className="border-none focus:outline-none"
            />
          </div>
          <div>
            <Label htmlFor="description" value="Description" className="mb-2" />
            <Textarea
              id="description"
              name="description"
              placeholder="Enter description"
              value={formData.description}
              onChange={handleChange}
              required
              className="border-none focus:outline-none resize-none h-40"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 items-end gap-4">
            <div>
              <Label htmlFor="category" value="Category" className="mb-2" />
              <Select
                id="category"
                name="category"
                value={formData.category}
                onChange={handleChange}
                required
                className="border-none focus:outline-none"
              >
                <option value="">Select a category</option>
                <option value="Healthcare">Healthcare</option>
                <option value="Education">Education</option>
                <option value="Social-Service">Social Service</option>
                <option value="Animal-Welfare">Animal Welfare</option>
              </Select>
            </div>

            <div>
              <Label htmlFor="location" value="Location" className="mb-2" />
              <TextInput
                id="location"
                name="location"
                type="text"
                placeholder="Enter location"
                value={formData.location}
                onChange={handleChange}
                required
                className="border-none focus:outline-none"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 items-start gap-4">
            <div>
              <Label htmlFor="volunteersNeeded" value="Number of Volunteers Needed" className="mb-2" />
              <TextInput
                id="volunteersNeeded"
                name="volunteersNeeded"
                type="number"
                placeholder="Enter number"
                value={formData.volunteersNeeded}
                onChange={handleChange}
                required
                color={volunteersError ? "failure" : "gray"}
                helperText={volunteersError}
                className={`border-none focus:outline-none `}
              />
            </div>

            <div>
              <Label htmlFor="deadline" value="Deadline" className="block mb-2" />
              <DatePicker
                id="deadline"
                selected={formData.deadline}
                onChange={handleDateChange}
                dateFormat="yyyy-MM-dd"
                className={`w-full p-2 border-2 bg-gray-50 border-gray-200 rounded-md dark:bg-gray-700 dark:text-gray-300 ${deadlineError ? "border-red-500" : ""}`}
              />
              {deadlineError && <p className="text-red-500 text-sm mt-1">{deadlineError}</p>}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="organizerName" value="Organizer Name" className="mb-2" />
              <TextInput
                id="organizerName"
                name="organizerName"
                type="text"
                value={formData.organizerName}
                readOnly
                disabled
              />
            </div>
            <div>
              <Label htmlFor="organizerEmail" value="Organizer Email" className="mb-2" />
              <TextInput
                id="organizerEmail"
                name="organizerEmail"
                type="email"
                value={formData.organizerEmail}
                readOnly
                disabled
              />
            </div>
          </div>

          <div>
            <Button type="submit" className="w-full hover:bg-blue-600">
              Update Post
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateVolunteerNeedPost;
