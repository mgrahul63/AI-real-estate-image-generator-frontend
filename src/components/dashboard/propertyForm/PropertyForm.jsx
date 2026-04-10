import { useState } from "react";
import DisplayBoard from "./DisplayBoard";
import Form from "./Form";

const PropertyForm = () => {
  const [propertyData, setPropertyData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [jsxData, setJsxData] = useState(null);
  return (
    <div className=" bg-fixed">
      <div className="flex flex-col lg:flex-row pt-24 container mx-auto px-4 md:px-2 xl:px-8 gap-5">
        <div>
          <Form
            setPropertyData={setPropertyData}
            setLoading={setLoading}
            setJsxData={setJsxData}
          />
        </div>

        <div className="bg-indigo-50 w-full lg:w-[50%] overflow-y-auto h-[100%] sticky top-20 px-4 lg:px-0">
          <DisplayBoard
            loading={loading}
            propertyData={propertyData}
            jsxData={jsxData}
            setJsxData={setJsxData}
          />
        </div>
      </div>
    </div>
  );
};

export default PropertyForm;
