const BlogCard = ({ blog }) => {
  const { image, title, content, author, date } = blog;
  return (
    <section className="p-2 border-b border-gray-50 shadow">
      <div className=" lg:-mx-6 lg:flex lg:items-center">
        <img
          className="object-cover w-full lg:mx-6 lg:w-2/5 rounded-xl h-72 lg:h-52"
          src={image}
          alt=""
        />

        <div className="mt-6 lg:w-1/2 lg:mt-0 lg:mx-6 ">
          <p className="text-sm uppercase">
            {" "}
            <span className="text-[#8879FB] font-bold">Author:</span> {author}
          </p>

          <a
            href="#"
            className="block mt-3 text-xl font-semibold text-gray-800 "
          >
            {title}
          </a>
          <p className="mt-2 text-sm text-gray-500 md:text-sm">
            {content.slice(0, 350)}...
          </p>
          <div className="flex justify-between items-center">
            <p className="mt-3 font-semibold">{date}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogCard;
