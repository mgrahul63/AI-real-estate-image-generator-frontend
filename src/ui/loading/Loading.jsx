import { animation } from "../../assets/assets";
import Lottie from "lottie-react";

const Loading = () => {
  return (
    <section className="flex justify-center items-center h-screen">
      <div className="lg:w-1/2">
        {/* lottie */}
        <Lottie
          className="aspect-square lg:aspect-auto p-40 lg:mt-0"
          animationData={animation?.buildingLoading}
          loop={true}
        />
      </div>
    </section>
  );
};

export default Loading;
