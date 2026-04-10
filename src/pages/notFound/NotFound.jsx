/* eslint-disable react/no-unescaped-entities */
import { useNavigate, useRouteError } from "react-router-dom";

const NotFound = () => {
  const error = useRouteError();
  const navigate = useNavigate();

  const goBack = () => {
    history.back();
  };

  return (
    <section
      className="relative min-h-screen flex items-center bg-gray-900"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1508780709619-79562169bc64?auto=format&fit=crop&w=1600&q=80')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      {/* Content */}
      <div className="relative container mx-auto px-6 py-16 flex flex-col lg:flex-row items-center gap-12">
        {/* Text Content */}
        <div className="lg:w-1/2 text-center lg:text-left text-white">
          <h1 className="text-4xl font-extrabold mb-4">
            Oops! Something went wrong
          </h1>
          <p className="text-lg mb-6 text-gray-200">
            <em>{error?.statusText || error?.message || "Page not found."}</em>
          </p>
          <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
            <button
              onClick={goBack}
              className="flex items-center justify-center px-6 py-3 bg-white text-gray-900 rounded-md hover:bg-gray-200 transition-colors duration-200"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-5 h-5 mr-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
                />
              </svg>
              Go Back
            </button>
            <button
              onClick={() => navigate("/")}
              className="px-6 py-3 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors duration-200"
            >
              Take Me Home
            </button>
          </div>
        </div>

        {/* Image */}
        <div className="lg:w-1/2 w-full">
          <img
            className="mx-auto max-w-md"
            src="https://merakiui.com/images/components/illustration.svg"
            alt="Error Illustration"
          />
        </div>
      </div>
    </section>
  );
};

export default NotFound;
