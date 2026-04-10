import { Link } from "react-router-dom";

const DashboardFooter = () => {
  return (
    <div className="px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
      <div className="flex flex-col-reverse justify-between pt-5 pb-6 border-t lg:flex-row">
        <p className="text-sm text-gray-600">
          &copy; {new Date().getFullYear()} AIEstateImageGenerator. All rights
          reserved.
        </p>
        <p className="text-sm mt-2 lg:mt-0">
          Powered by OpenAI | Developed by{" "}
          <Link
            to={"https://github.com/mgrahul63"}
            className="text-green-600"
            target="_blank"
          >
            MG Rahul
          </Link>{" "}
          |{" "}
          <Link to="/privacy" className="text-[#a3a5a7] hover:text-gray-800">
            Privacy Policy
          </Link>{" "}
          |{" "}
          <Link to="/terms" className="text-[#a3a5a7] hover:text-gray-800">
            Terms of Service
          </Link>
        </p>
      </div>
    </div>
  );
};

export default DashboardFooter;
