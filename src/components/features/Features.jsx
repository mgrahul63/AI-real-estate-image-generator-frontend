import { backgroundImage } from "../../assets/assets";
import { Link } from "react-router-dom"; 
import ActionButton from "../../ui/actionButton/actionButton";
const Features =() =>{
  return (
    <>
      {/* Container */}
      <div className="bg-gray-100">
        <div className="bg-gray-100 relative flex flex-col items-center mx-auto lg:flex-row-reverse lg:max-w-5xl lg:mt-12 xl:max-w-6xl">
          {/* Image Column */}
          <div className="w-full h-64 lg:w-1/2 lg:h-auto">
            <img
              className="h-full w-full object-cover"
              src={backgroundImage.posterAi}
              alt="Winding mountain road"
            />
          </div>
          {/* Close Image Column */}
          {/* Text Column */}
          <div className="max-w-lg bg-white lg:max-w-2xl lg:z-10 lg:shadow-lg lg:absolute lg:top-0 lg:w-3/5 lg:left-0 lg:mt-20 lg:ml-20 xl:mt-24 xl:ml-12 md:-mt-20">
            {/* Text Wrapper */}
            <div className="flex flex-col p-12 lg:px-16">
              <h1 className="text-2xl font-semibold lg:text-4xl">
                AI-Generated Images for <br /> Social Media Marketing
              </h1>

              <p className="mt-4 text-gray-600 dark:text-gray-300">
                Create stunning real estate visuals tailored for social media.
                Our AI Estate Image Generator helps you produce eye-catching
                property images designed for Facebook, Instagram, and other
                platforms. Showcase listings professionally, increase
                engagement, and attract more potential buyers with AI-powered
                visuals.
              </p>

              {/* Button Container */}
              <div className="mt-8 w-[70%]">
                <Link to="/dashboard">
                  <ActionButton>Create AI Image</ActionButton>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Features;