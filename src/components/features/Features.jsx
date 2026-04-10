import { Link } from "react-router-dom";
import { backgroundImage } from "../../assets/assets";
import ActionButton from "../../ui/actionButton/actionButton";
const Features = () => {
  return (
    <div className="bg-gray-100">
      <div className="bg-gray-100 relative flex flex-col items-center mx-auto lg:flex-row-reverse lg:max-w-5xl lg:mt-12 xl:max-w-6xl py-10 md:px-10 lg:px-20 xl:py-20">
        {/* Image Column */}
        <div className="w-full h-80 lg:w-1/2 lg:h-auto">
          <img
            className="h-full w-full object-cover"
            src={backgroundImage.posterAi}
            alt="Winding mountain road"
          />
        </div>
        {/* Close Image Column */}

        {/* Text Column */}
        <div className="max-w-lg bg-white lg:max-w-2xl lg:z-10 lg:shadow-lg lg:absolute lg:top-0 lg:w-3/5 lg:left-0 lg:mt-10 lg:ml-10 xl:mt-24 xl:ml-12 md:-mt-10">
          {/* Text Wrapper */}
          <div className="flex flex-col p-10 ">
            <h1 className="text-2xl font-semibold lg:text-4xl">
              AI-Generated Images for <br /> Social Media Marketing
            </h1>

            <p className="mt-4 text-black">
              Create stunning real estate visuals tailored for social media. Our
              AI Estate Image Generator helps you produce eye-catching property
              images designed for Facebook, Instagram, and other platforms.
              Showcase listings professionally, increase engagement, and attract
              more potential buyers with AI-powered visuals.
            </p>

            {/* Button Container */}
            <div className="mt-8 w-[70%]">
              <Link
                to="/dashboard"
                className="w-full md:w-auto text-md py-3 bg-gradient-to-r from-[#6464df] to-[#220fce] rounded-sm shadow transition"
              >
                <ActionButton>Create AI Image</ActionButton>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
