import { backgroundImage } from "../../assets/assets";
const UseGuide = () => {
  return (
    <section
      className="bg-fixed bg-no-repeat bg-cover bg-center py-8 lg:py-20"
      style={{ backgroundImage: `url(${backgroundImage?.useguid})` }}
    >
      <div className="bg-white/80 dark:bg-gray-900/80">
        <div className="container max-w-xl px-6 py-8 lg:py-10 mx-auto space-y-10 md:space-y-24 lg:space-y-24 lg:px-8 lg:max-w-7xl">
          <div className="text-center">
            <h2 className="text-2xl font-bold tracking text-center dark:text-gray-50">
              How AI Estate Image Generator Works
            </h2>
            <div className="divider my-2 bg-primary h-1.25 w-[5%] mx-auto"></div>
            <p className="w-full md:w-[90%] lg:w-[60%] text-lg mx-auto text-center text-gray-500 dark:text-gray-300">
              Generate professional real estate images in just a few steps.
              Simply provide your property details, let AI create stunning
              visuals, and download high-quality images ready for listings,
              marketing, and social media.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
            <div>
              <h3 className="text-xl font-bold tracking dark:text-gray-50">
                How Our AI Creates Property Images
              </h3>
              <p className="mt-4 dark:text-gray-400">
                Follow our intuitive process to create, customize, and finalize
                your property listings effortlessly. Designed for speed,
                security, and clarity.
              </p>

              <div className="mt-12 space-y-12">
                <div className="flex items-center">
                  <div className="flex items-center justify-center w-12 h-8 rounded-md bg-primary dark:text-gray-900">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      className="w-7 h-7 text-white"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-md leading-6 uppercase text-gray-900 font-semibold dark:text-gray-50">
                      Create an Account
                    </h4>
                    <p className="mt-2 dark:text-gray-400">
                      Sign up to access the AI Estate Image Generator and manage
                      your generated property visuals in one place.
                    </p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="flex items-center justify-center w-12 h-8 rounded-md bg-primary dark:text-gray-900">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      className="w-7 h-7 text-white"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-md leading-6 uppercase text-gray-900 font-semibold dark:text-gray-50">
                      Enter Property Details
                    </h4>
                    <p className="mt-2 dark:text-gray-400">
                      Add property information such as type, location, style,
                      and features to guide the AI in creating accurate and
                      appealing visuals.
                    </p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="flex items-center justify-center w-12 h-8 rounded-md bg-primary dark:text-gray-900">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      className="w-7 h-7 text-white"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-md leading-6 uppercase text-gray-900 font-semibold dark:text-gray-50">
                      Generate AI Images
                    </h4>
                    <p className="mt-2 dark:text-gray-400">
                      Click generate and instantly receive high-quality real
                      estate images ready to download and use for listings or
                      social media.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div aria-hidden="true" className="mt-10 lg:mt-0">
              <img
                src={backgroundImage?.diagram}
                alt=""
                className="mx-auto rounded-lg dark:bg-gray-500"
              />
            </div>
          </div>

          <div>
            <div className="grid gap-8 grid-cols-1 lg:grid-cols-2 lg:items-center overflow-hidden">
              <div className="lg:col-start-2">
                <h3 className="text-xl font-bold tracking dark:text-gray-50">
                  Property Details with Images
                </h3>
                <p className="mt-3 dark:text-gray-400">
                  We create visually engaging property descriptions accompanied
                  by images, featuring smooth display, responsive layout, and
                  optimized visuals.
                </p>
                <div className="mt-12 space-y-12">
                  <div className="flex items-center">
                    <div className="flex items-center justify-center w-12 h-8 rounded-md bg-primary dark:text-gray-900">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="w-7 h-7 text-white"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-md leading-6 uppercase text-gray-900 font-semibold dark:text-gray-50">
                        View Property Insights
                      </h4>
                      <p className="mt-2 dark:text-gray-400">
                        In just a few seconds, the user sees the generated
                        property description paired with a high-quality image,
                        presented neatly on the display board.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <div className="flex items-center justify-center w-12 h-8 rounded-md bg-primary dark:text-gray-900">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="w-7 h-7 text-white"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-md leading-6 uppercase text-gray-900 font-semibold dark:text-gray-50">
                        Save Properties for Later
                      </h4>
                      <p className="mt-2 dark:text-gray-400">
                        By clicking the Save button, the property gets stored in
                        the database, making it easy for users to access later
                        in their property list.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <div className="flex items-center justify-center w-12 h-8 rounded-md bg-primary dark:text-gray-900">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="w-7 h-7 text-white"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-md leading-6 uppercase text-gray-900 font-semibold dark:text-gray-50">
                        Export as PDF
                      </h4>
                      <p className="mt-2 dark:text-gray-400">
                        Users can download a PDF version of the generated
                        property, including description, images, and all
                        relevant details for easy sharing or printing.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-10 lg:mt-0 lg:col-start-1 lg:row-start-1 w-full">
                <img
                  src={backgroundImage?.useguid2}
                  alt=""
                  className="mx-auto rounded-lg dark:bg-gray-500 "
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UseGuide;
