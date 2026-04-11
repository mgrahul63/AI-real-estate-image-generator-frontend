import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useTitle from "../../hook/useTitle";
import BlogCard from "./BlogCard";

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch("/blogsData.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  useTitle("Blog");
  return (
    <section className="bg-gray-100  ">
      <div className="container px-10 pt-10 md:pt-10 lg:pt-15 pb-20 ">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-xl font-bold tracking-tight text-gray-900">
            Latest Insights
          </h2>
          <div className="divider my-1 bg-primary h-[5px] w-[5%]"></div>
          <p className="text-gray-600">
            Explore the latest trends and tips in AI-powered property image
            generation. Discover how advanced AI technology can help you create
            stunning property visuals, enhance listings, and elevate your real
            estate marketing strategy.
          </p>
        </div>
        <div className="divider mt-0"></div>
        <div className="flex flex-col gap-2">
          {blogs?.map((blog) => {
            return (
              <Link to={`/blog/${blog._id}`} key={blog._id}>
                <BlogCard blog={blog} />
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Blog;
