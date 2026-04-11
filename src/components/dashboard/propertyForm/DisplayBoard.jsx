import { PDFDownloadLink } from "@react-pdf/renderer";
import PDFFile from "../../../ui/pdf/PDF";
const DisplayBoard = ({ propertyData, loading, jsxData, setJsxData }) => {
  const { description, imageUrl, price } = propertyData || {};
 
  return (
    <div
      className={
        !description &&
        !loading &&
        "flex justify-center items-center h-screen border-dashed border-2 m-4 border-slate-300"
      }
    >
      <div className="p-4">
        <div className={jsxData ? "hidden" : "block"}>
          {loading ? (
            <div className="flex gap-2 justify-center items-center p-4 -mt-10">
              <span className="w-2 h-2 bg-blue-500 rounded-full animate-bounce"></span>
              <span className="w-2 h-2 bg-blue-500 rounded-full animate-bounce [animation-delay:150ms]"></span>
              <span className="w-2 h-2 bg-blue-500 rounded-full animate-bounce [animation-delay:300ms]"></span>
            </div>
          ) : (
            <img
              className={`w-full aspect-square ${imageUrl || "hidden"} rounded-md shadow-[rgba(0,0,0,0.24)_0px_3px_8px]`}
              src={imageUrl}
              alt="property"
            />
          )}
        </div>

        {!description && !loading && (
          <div>
            <h2 className="text-center font-bold text-6xl text-slate-400">
              Generate Now
            </h2>
          </div>
        )}

        <div className={jsxData ? "hidden" : "block"}>
          {loading ? (
            <div className="w-full max-w-full mx-auto animate-pulse p-2 pb-4 -mt-20">
              <h1 className="h-4 bg-gray-500 rounded-lg w-3/4"></h1>
              <p className="w-5/6 h-4 mt-6 bg-gray-400/80 rounded-lg"></p>
              <p className="w-full h-4 mt-4 bg-gray-400/80 rounded-lg"></p>
              <p className="w-64 h-4 mt-4 bg-gray-400/80 rounded-lg"></p>
              <p className="w-4/5 h-4 mt-4 bg-gray-400/80 rounded-lg"></p>
              <p className="w-full h-4 mt-4 bg-gray-400/80 rounded-lg"></p>
              <p className="w-5/6 h-4 mt-4 bg-gray-400/80 rounded-lg"></p>
              <p className="w-11/12 h-4 mt-4 bg-gray-400/80 rounded-lg"></p>
              <p className="w-full h-4 mt-4 bg-gray-400/80 rounded-lg"></p>
            </div>
          ) : (
            <div className="mt-4">
              <p className="text-lg font-bold">{price}</p>
              <p className="text-justify">{description}</p>
            </div>
          )}
          {/* save button */}
          {!loading && description && (
            <div className="text-center mt-4">
              <PDFDownloadLink
                document={
                  <PDFFile image={imageUrl} text={description} price={price} />
                }
                fileName="estate__property.pdf"
              >
                {({ loading }) =>
                  loading ? (
                    <button className="px-2 py-2 w-full text-sm font-semibold text-gray-600 transition-colors duration-200 sm:text-base sm:px-2">
                      Loading document...
                    </button>
                  ) : (
                    <button className="px-4 py-2 text-sm sm:text-base font-semibold text-white bg-indigo-600 hover:bg-indigo-700 transition-all duration-200 rounded-lg shadow-sm hover:shadow-md cursor-pointer">
                      Download as PDF
                    </button>
                  )
                }
              </PDFDownloadLink>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DisplayBoard;
