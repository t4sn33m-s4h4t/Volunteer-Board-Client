import { useQuery } from "@tanstack/react-query";
import MainDetails from "./MainDetails";
import Sidebar from "./Sidebar";
import { useParams } from "react-router-dom";
import useAxiosSecure from "../../CustomHooks/useAxiosSecure";
import { useAuth } from "../../CustomHooks/useAuth";
import Loading from "../Loading";

const PostDetails = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const { id } = useParams();

  const { data, isLoading, isError, error, refetch } = useQuery({
    queryKey: ['singlePost', id],
    queryFn: async () =>
      await axiosSecure.get(`/volunteer-need-post/${id}`, {
        params: {
          email: user.email,
        },
      }).then((res) => res.data),
  });

  if (isLoading) return <Loading />
  if (isError) return <div>Error: {error.message}</div>;

  return (
    <section className="py-10 px-1 md:px-4 lg:px-6 bg-gray-100 dark:bg-sky-950 grid grid-cols-1 md:grid-cols-[6fr_2fr] gap-[20px] max-w-7xl mx-auto">
      <MainDetails data={data} />
      <Sidebar refetch={refetch} data={data} />
    </section>
  );
};

export default PostDetails;
