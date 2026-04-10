import useTitle from "../../hook/useTitle";

 
const Faq = () => {
  useTitle("FAQ");
  return (
    <section className="bg-gray-100 dark:bg-gray-800 dark:text-gray-100">
      <div className="container flex flex-col justify-center px-5 md:px-20 lg:px-10 pt-20 md:pt-28 lg:pt-28 pb-20 mx-auto">
        <h2 className="font-semibold text-2xl md:text-3xl lg:text-3xl">
          Frequently Asked Questions
        </h2>
        <div className="divider my-1 bg-primary h-[5px] w-[5%]"></div>
        <p className="mt-2 mb-8 dark:text-gray-400 lg:w-[60%]">
          Explore answers to common queries about generating AI-powered property
          images, customizing visuals, and using our platform for your real
          estate listings.
        </p>
        <div className="space-y-4">
          <details className="w-full border rounded-lg" open>
            <summary className="px-4 py-6 font-semibold focus:outline-none">
              What is an AI Estate Image Generator?
            </summary>
            <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">
              Our AI Estate Image Generator creates realistic property images
              using advanced AI models. It helps visualize properties quickly
              for listings, presentations, or marketing materials without
              needing professional photography.
            </p>
          </details>

          <details className="w-full border rounded-lg">
            <summary className="px-4 py-6 font-semibold focus:outline-none">
              How does the AI generate property images?
            </summary>
            <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">
              The AI analyzes your input details such as property type, size,
              style, and interior/exterior preferences. It then generates highly
              realistic visuals by combining patterns learned from thousands of
              real estate images.
            </p>
          </details>

          <details className="w-full border rounded-lg">
            <summary className="px-4 py-6 font-semibold focus:outline-none">
              Can I customize the AI-generated property images?
            </summary>
            <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">
              Yes, you can customize aspects like interior style, furniture
              arrangement, exterior look, lighting, and decor elements to match
              your vision or brand.
            </p>
          </details>

          <details className="w-full border rounded-lg">
            <summary className="px-4 py-6 font-semibold focus:outline-none">
              Are these AI-generated images suitable for commercial use?
            </summary>
            <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">
              Absolutely. You can use them for real estate listings, brochures,
              social media posts, or virtual tours for residential and
              commercial properties.
            </p>
          </details>

          <details className="w-full border rounded-lg">
            <summary className="px-4 py-6 font-semibold focus:outline-none">
              Can I download the generated images?
            </summary>
            <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">
              Yes, all images can be downloaded in high resolution, ready for
              presentations, listing platforms, or client sharing.
            </p>
          </details>

          <details className="w-full border rounded-lg">
            <summary className="px-4 py-6 font-semibold focus:outline-none">
              How accurate are the AI-generated images compared to the actual
              property?
            </summary>
            <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">
              The images are realistic representations but may not perfectly
              match every detail of the actual property. They are ideal for
              marketing, visualization, or pre-sale presentations.
            </p>
          </details>

          <details className="w-full border rounded-lg">
            <summary className="px-4 py-6 font-semibold focus:outline-none">
              Does this AI replace professional photographers?
            </summary>
            <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">
              No, it complements professional photography. While AI can generate
              fast and cost-effective visuals, professional photos provide
              high-detail, real-world images for premium listings.
            </p>
          </details>

          <details className="w-full border rounded-lg">
            <summary className="px-4 py-6 font-semibold focus:outline-none">
              Can I generate images for multiple properties at once?
            </summary>
            <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">
              Yes, our platform supports batch generation, allowing you to
              create AI images for multiple properties efficiently.
            </p>
          </details>

          <details className="w-full border rounded-lg">
            <summary className="px-4 py-6 font-semibold focus:outline-none">
              Are the generated images safe to share with clients?
            </summary>
            <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">
              Yes. All images are unique AI-generated visuals, free from
              copyright issues, and safe to share publicly or with clients.
            </p>
          </details>

          <details className="w-full border rounded-lg">
            <summary className="px-4 py-6 font-semibold focus:outline-none">
              Does the AI support different property types and styles?
            </summary>
            <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">
              Yes. You can generate images for apartments, villas, offices, and
              commercial spaces with various architectural and interior styles.
            </p>
          </details>

          <details className="w-full border rounded-lg">
            <summary className="px-4 py-6 font-semibold focus:outline-none">
              Can I use AI-generated images for marketing campaigns?
            </summary>
            <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">
              Definitely. The images are optimized for online ads, social media
              posts, brochures, and virtual property showcases.
            </p>
          </details>
        </div>
      </div>
    </section>
  );
};

export default Faq;
