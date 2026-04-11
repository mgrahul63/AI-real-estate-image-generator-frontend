import { Link } from "react-router-dom";
import { backgroundImage } from "../../assets/assets";
import ActionButton from "../../ui/actionButton/actionButton";

const Hero = () => {
  return (
    <section
      className="bg-no-repeat bg-cover bg-center py-12"
      style={{ backgroundImage: `url(${backgroundImage.heroimage})` }}
    >
      <div className="container px-5 pt-20">
        <div className="flex flex-wrap flex-col-reverse md:flex-row">
          <div className="w-full sm:w-8/12 mb-10">
            <div className="container mx-auto h-full">
              <div className="w-full md:w-7/12 mb-10 md:mb-0">
                <div className="h-full">
                  <h2 className="text-sm lg:text-xl uppercase text-indigo-600 font-medium mb-2">
                    AI Estate Image Generator
                  </h2>
                  <h1 className="text-3xl md:text-4xl lg:text-3xl font-bold leading-tight text-gray-100">
                    Transform Real Estate Listings with{" "}
                    <span className="text-indigo-600 block">
                      AI-Powered Images
                    </span>
                  </h1>
                  <div className="w-24 h-1 bg-indigo-500 my-4 rounded" />
                  <p className=" mb-8 text-gray-100">
                    Generate stunning property visuals instantly. Enhance your
                    listings, attract buyers, and showcase every detail with
                    realistic AI-generated images tailored for the real estate
                    market.
                  </p>
                  <div className="flex flex-col md:flex-row gap-4 md:gap-5 w-full ">
                    <Link
                      to="/dashboard"
                      className="bg-linear-to-r from-[#260de7] to-[#b9b2f3] rounded-sm shadow transition"
                    >
                      <ActionButton>Create AI Image</ActionButton>
                    </Link>
                    <Link to="/properties">
                      <button className="border-2 border-indigo-600 hover:text-gray-950 hover:bg-indigo-50 transition px-6 py-3 rounded-sm w-full text-md cursor-pointer text-gray-300">
                        View Existing Properties
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
