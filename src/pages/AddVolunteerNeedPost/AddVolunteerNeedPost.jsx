import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Button, Label, TextInput, Textarea, Select } from "flowbite-react";
import { toast } from "react-toastify";
import { useAuth } from "../../CustomHooks/useAuth";
import { useMutation } from '@tanstack/react-query'
import useAxiosSecure from "../../CustomHooks/useAxiosSecure";

import { fadeIn } from "../variant"
import { useNavigate } from "react-router-dom";
const AddVolunteerNeedPost = () => {
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate()
  const { user } = useAuth();
  const [formData, setFormData] = useState({
    thumbnail: "",
    postTitle: "",
    description: "",
    category: "",
    location: "",
    volunteersNeeded: "",
    deadline: new Date(),
  });
  useEffect(() => {
    setFormData({
      ...formData,
      organizerPhoto: user.photoURL,
      organizerName: user.displayName,
      organizerEmail: user.email,
      email: user.email,
    });
  }, [user]);
  const [volunteersError, setVolunteersError] = useState("");
  const [deadlineError, setDeadlineError] = useState("");

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

  const mutation = useMutation({
    mutationFn: async (formData) => {
      return axiosSecure.post('/add-volunteer-need-post', formData)
    },
  })
  const handleSubmit = async (e) => {
    e.preventDefault();
    const currentDate = new Date();
    const volunteersValid = parseInt(formData.volunteersNeeded) > 0;
    const deadlineValid = formData.deadline >= currentDate;

    if (!volunteersValid || !deadlineValid) {
      if (!volunteersValid) setVolunteersError("Number of volunteers must be greater than 0.");
      if (!deadlineValid) setDeadlineError("Deadline must be a future date.");
      return;
    }
    try {
      const post = await mutation.mutateAsync(formData);
      toast.success("Post added successfully!");
      navigate('/')
    } catch (error) {
      toast.error("An error occurred while adding the post.");
      console.error(error);
    }
  };

  return (
    <div className="bg-gray-200 dark:bg-sky-950 py-10">
      <div className="max-w-4xl my-10 mx-auto p-8 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
        <h2
                
                
                
                
        className="text-3xl font-semibold text-center mt-8 mb-5 dark:text-white">
          Add Volunteer Need Post
        </h2>
        <form
                variants={fadeIn("down", 0.4)}
                
                
                viewport={{ once: true, amount: 0.2 }}
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
                className={`w-full p-2 border-none rounded-md dark:bg-gray-700 dark:text-gray-300 ${deadlineError ? "border-red-500" : ""}`}
              />
              {deadlineError && <p className="text-red-500 text-sm  mt-1">{deadlineError}</p>}
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
              Add Post
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddVolunteerNeedPost;
