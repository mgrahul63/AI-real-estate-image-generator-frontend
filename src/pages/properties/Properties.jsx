import { useContext, useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { fetchProducts, test } from "../../api/ai";
import { AuthContext } from "../../context/authProvider/AuthProvider";
import useTitle from "../../hook/useTitle";
import Loading from "../../ui/loading/Loading";
import DisplayModal from "./DisplayModal";
import Pagination from "./Pagination";
import PropertiesCard from "./propertiesCard";

const PRODUCTS_PER_PAGE = 12;

const Properties = () => {
  const { user } = useContext(AuthContext);
  const [productData, setProductData] = useState([]);
  const [yourProductData, setYourProductData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [propertyData, setPropertyData] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);

  useTitle("Properties");

  // console.log(user.email);
  useEffect(() => {
    const loadProducts = async () => {
      try {
        setIsLoading(true);
        setError(null);

        const [allProducts, userProducts] = await Promise.all([
          fetchProducts(),
          user?.email
            ? fetchProducts(user.email)
            : Promise.resolve({ success: true, data: [] }),
        ]);

        if (allProducts.success) {
          setProductData(allProducts.data);
        }

        if (userProducts.success) {
          setYourProductData(userProducts.data);
        }
      } catch (err) {
        console.error("Fetch Products Error:", err);
        setError("Failed to load properties");
      } finally {
        setIsLoading(false);
      }
    };

    loadProducts();
  }, [user?.email]);

  const newProductData = productData.filter(
    (pr) => !yourProductData.some((p) => p.email === pr.email),
  );

  const pageCount = Math.ceil(newProductData.length / PRODUCTS_PER_PAGE);

  const startIndex = currentPage * PRODUCTS_PER_PAGE;
  const displayedProducts = newProductData.slice(
    startIndex,
    startIndex + PRODUCTS_PER_PAGE,
  );

  const handlePageChange = (selectedPage) => {
    setCurrentPage(selectedPage);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleTestClick = async () => {
    try {
      const res = await test();
      if (res.success) {
        toast.success(res.data);
      }
    } catch (error) {}
  };

  if (isLoading) return <Loading />;

  if (error) {
    return (
      <div className="text-center py-20 text-red-500">
        <p>Failed to load properties</p>
        <p className="text-sm text-gray-500 mt-2">{error}</p>
        <button
          onClick={handleTestClick}
          className="border border-gray-950 bg-blue-600 py-4 px-5 cursor-pointer text-white"
        >
          Click here
        </button>
      </div>
    );
  }

  return (
    <div className="bg-gray-100">
      <div className="container mx-auto pt-20 md:pt-24 lg:pt-28 pb-10 lg:pb-20 px-5 md:px-2">
        {/* Properties Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 w-full">
          {yourProductData?.length > 0 &&
            yourProductData?.map((product) => (
              <PropertiesCard
                key={product?._id}
                product={product}
                yours={true}
                setPropertyData={setPropertyData}
              />
            ))}
          {displayedProducts?.length > 0 ? (
            displayedProducts?.map((product) => (
              <PropertiesCard
                key={product?._id}
                product={product}
                setPropertyData={setPropertyData}
              />
            ))
          ) : (
            <div className="col-span-full text-center py-10 text-gray-500">
              No Properties Found
            </div>
          )}
        </div>

        {/* Pagination */}
        {pageCount > 1 && (
          <Pagination
            currentPage={currentPage}
            pageCount={pageCount}
            onPageChange={handlePageChange}
          />
        )}

        {/* Modal */}
        {propertyData && (
          <DisplayModal
            propertyData={propertyData}
            onClose={() => setPropertyData(null)}
          />
        )}
      </div>
    </div>
  );
};

export default Properties;
