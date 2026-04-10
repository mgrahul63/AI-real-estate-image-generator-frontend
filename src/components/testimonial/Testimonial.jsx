const reviews = [
  {
    id: 1,
    clientName: "Sophia Carter",
    designation: "Real Estate Agent",
    feedback:
      "The AI property generator is a game-changer! It created detailed property images and descriptions within seconds. My clients were amazed at the realistic visuals and floor plans. This tool saves me so much time and effort 🚀",
    url: "https://i.ibb.co/BKJBBbt/1.jpg",
  },
  {
    id: 2,
    clientName: "Liam Thompson",
    designation: "Property Developer",
    feedback:
      "Using this AI platform was effortless. The interface is intuitive, and the generated images perfectly match the property details I input. It’s now an essential part of our project presentations 👏",
    url: "https://i.ibb.co/xFLg9Sq/2.jpg",
  },
  {
    id: 3,
    clientName: "Emma Wilson",
    designation: "Interior Designer",
    feedback:
      "I couldn’t believe how realistic the AI-generated property images were. Every detail, from room layout to exterior shots, is precise and professional. This platform truly elevates our property marketing 💯",
    url: "https://i.ibb.co/9TKZ3kN/3.jpg",
  },
  {
    id: 4,
    clientName: "Noah Davis",
    designation: "Real Estate Investor",
    feedback:
      "The AI estate generator exceeded my expectations. It’s incredibly user-friendly, and the results are stunning. I’ve been able to showcase my properties in a whole new light, attracting more potential buyers 🌟",
    url: "https://i.ibb.co/2sZ8m9C/4.jpg",
  },
];

const Testimonial = () => {
  return (
    <section className="bg-gray-200 dark:bg-gray-900 py-12">
      <div className="container mx-auto px-6">
        <h1 className="text-3xl sm:text-5xl font-bold text-center dark:text-gray-50">
          Clients Feedback on{" "}
          <span className="text-primary">AI Estate Generator</span>
        </h1>
        <div className="divider my-2 bg-primary h-[5px] w-[5%] mx-auto"></div>
        <p className="text-center text-gray-500 dark:text-gray-300 mt-3">
          Hear what our users say about AI-powered property image and
          description generation.
        </p>

        {/* Scrollable Reviews */}
        <div className="mt-10 flex space-x-6 overflow-x-auto pb-4 scrollbar-hide">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="flex-shrink-0 w-[300px] bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="38"
                height="38"
                fill="currentColor"
                className="bi bi-quote text-primary mb-4"
                viewBox="0 0 16 16"
              >
                <path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 9 7.558V11a1 1 0 0 0 1 1h2Zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 3 7.558V11a1 1 0 0 0 1 1h2Z" />
              </svg>

              <p className="text-gray-500 dark:text-gray-400 mb-6">
                {review.feedback}
              </p>

              <div className="flex flex-col items-center">
                <img
                  src={review.url}
                  alt={review.clientName}
                  className="w-14 h-14 rounded-full object-cover"
                />
                <h2 className="mt-4 font-semibold text-gray-800 dark:text-white">
                  {review.clientName}
                </h2>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  {review.designation}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
