const WhyShoud = () => {
  return (
    <div className="bg-white dark:bg-gray-900">
      <div className="container px-5 lg:px-6 pb-20 pt-10 lg:pt-20 mx-auto">
        <div className="py-10">
          <h2 className="text-3xl lg:text-5xl font-bold tracking text-center dark:text-gray-50">
            Why Choose AI Estate Image Generator?
          </h2>
          <div className="divider my-3 bg-primary h-[5px] w-[5%] mx-auto"></div>
          <p className="w-full md:w-[70%] lg:w-[60%] text-lg mx-auto text-center text-gray-500 dark:text-gray-300">
            AI Estate Image Generator helps real estate professionals create
            stunning, high-quality property visuals instantly. Generate
            realistic images, enhance listings, and attract potential buyers
            with AI-powered creativity designed specifically for the real estate
            market.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 mt-4 md:mt-12 xl:gap-12 md:grid-cols-2 lg:grid-cols-3">
          {/* Card 1 */}
          <div className="p-6 rounded-lg hover:shadow-lg transition bg-white dark:bg-gray-900">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="text-[#5387d4] w-12 h-12"
              viewBox="0 0 16 16"
            >
              <path d="M8.5 5.6a.5.5 0 1 0-1 0v2.9h-3a.5.5 0 0 0 0 1H8a.5.5 0 0 0 .5-.5V5.6z" />
              <path d="M6.5 1A.5.5 0 0 1 7 .5h2a.5.5 0 0 1 0 1v.57c1.36.196 2.594.78 3.584 1.64a.715.715 0 0 1 .012-.013l.354-.354-.354-.353a.5.5 0 0 1 .707-.708l1.414 1.415a.5.5 0 1 1-.707.707l-.353-.354-.354.354a.512.512 0 0 1-.013.012A7 7 0 1 1 7 2.071V1.5a.5.5 0 0 1-.5-.5z" />
            </svg>
            <h1 className="text-xl font-semibold text-gray-800 dark:text-white">
              Instant Image Generation
            </h1>
            <p className="mt-2 text-gray-500 dark:text-gray-400">
              Generate high-quality real estate images instantly using AI. Save
              time and create stunning visuals for your listings in seconds.
            </p>
          </div>

          {/* Card 2 */}
          <div className="p-6 rounded-lg hover:shadow-lg transition bg-white dark:bg-gray-900">
            <svg
              className="w-12 h-12 text-[#5387d4]"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 2a10 10 0 100 20 10 10 0 000-20z" />
            </svg>
            <h1 className="mt-4 text-xl font-semibold text-gray-800 dark:text-white">
              Smart AI Technology
            </h1>
            <p className=" text-gray-500 dark:text-gray-400">
              Advanced AI creates realistic property images that help attract
              buyers and improve engagement.
            </p>
          </div>

          {/* Card 3 */}
          <div className="p-6 rounded-lg hover:shadow-lg transition bg-white dark:bg-gray-900">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="w-12 h-12 text-[#5387d4]"
              viewBox="0 0 16 16"
            >
              <path d="M5 11.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5z" />
            </svg>
            <h1 className="text-xl font-semibold text-gray-800 dark:text-white">
              Multiple Image Variations
            </h1>
            <p className=" text-gray-500 dark:text-gray-400">
              Generate multiple property images with different styles and
              layouts for better marketing.
            </p>
          </div>

          {/* Card 4 */}
          <div className="p-6 rounded-lg hover:shadow-lg transition bg-white dark:bg-gray-900">
            <svg
              className="w-12 h-12 text-[#5387d4]"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 4l8 4v8l-8 4-8-4V8z" />
            </svg>
            <h1 className=" text-xl font-semibold text-gray-800 dark:text-white">
              Marketing Ready Images
            </h1>
            <p className="mt-2 text-gray-500 dark:text-gray-400">
              Use AI-generated images directly in listings, ads, and social
              media marketing campaigns.
            </p>
          </div>

          {/* Card 5 */}
          <div className="p-6 rounded-lg hover:shadow-lg transition bg-white dark:bg-gray-900">
            <svg
              className="w-12 h-12 text-[#5387d4]"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 21v-7a4 4 0 014-4h8"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14 3h7v7"
              />
            </svg>
            <h1 className="text-xl font-semibold text-gray-800 dark:text-white">
              Easy Customization
            </h1>
            <p className="mt-2 text-gray-500 dark:text-gray-400">
              Customize property styles, layouts, and environments to match your
              real estate needs.
            </p>
          </div>

          {/* Card 6 */}
          <div className="p-6 rounded-lg hover:shadow-lg transition bg-white dark:bg-gray-900">
            <svg
              className="w-12 h-12 text-[#5387d4]"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M5 12l5 5L20 7" />
            </svg>
            <h1 className="text-xl font-semibold text-gray-800 dark:text-white">
              Professional Quality
            </h1>
            <p className="mt-2 text-gray-500 dark:text-gray-400">
              Create professional-grade property visuals that enhance trust and
              improve conversions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyShoud;
