import { useState } from "react";
import DisplayBoard from "./DisplayBoard";
import Form from "./Form";

import { useContext } from "react";
import { AuthContext } from "../../../context/authProvider/AuthProvider";
const PropertyForm = () => {
  const user = useContext(AuthContext);
  const email = user?.user?.email;
  const displayName = user?.user?.displayName;

  const [propertyData, setPropertyData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [jsxData, setJsxData] = useState(null);
  return (
    <div className="flex flex-col lg:flex-row pt-24 container-fluid mx-auto px-8 md:px-10 xl:px-10 gap-5">
      <div>
        <Form
          setPropertyData={setPropertyData}
          setLoading={setLoading}
          setJsxData={setJsxData}
          email={email}
          displayName={displayName}
        />
      </div>

      <div className="bg-indigo-50 w-full lg:w-[50%] overflow-y-auto h-[100%] sticky top-20 px-4 lg:px-0">
        <DisplayBoard
          loading={loading}
          propertyData={propertyData}
          jsxData={jsxData}
          setJsxData={setJsxData}
          email={email}
        />
      </div>
    </div>
  );
};

export default PropertyForm;
