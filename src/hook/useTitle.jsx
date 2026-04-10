import { useEffect } from "react";

const useTitle = (title) => {
  return useEffect(() => {
    document.title = `${title} - AI Estate Image Generator`;
  }, [title]);
};

export default useTitle;
