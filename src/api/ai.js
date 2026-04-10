const BASE_URL =
  import.meta.env.VITE_REACT_API_URL || "http://localhost:5173/api";

const apiRequest = async (endpoint, options = {}) => {
  try {
    const response = await fetch(`${BASE_URL}${endpoint}`, {
      headers: {
        "Content-Type": "application/json",
        ...options.headers,
      },
      ...options,
    });

    const data = await response.json();

    if (!response.ok) {
      return {
        success: false,
        message: data?.message || "Something went wrong",
        status: response.status,
      };
    }

    return {
      success: true,
      data,
    };
  } catch (error) {
    console.error("API Request Failed:", error);

    return {
      success: false,
      message: "Network error. Please try again.",
    };
  }
};

export const test = async () => {
  console.log(BASE_URL);
  const res = await fetch(`${BASE_URL}/test`, {
    method: "POST",
  });
  const data = await res.json();

  if (data.success) return data;
};

export const generatePropertyInfo = (promptData) => {
  return apiRequest("/openai/generateTextAndImage", {
    method: "POST",
    body: JSON.stringify(promptData),
  });
};

export const fetchProducts = () => {
  return apiRequest("/properties");
};

export const savePropertyToDb = (propertyData) => {
  return apiRequest("/properties", {
    method: "POST",
    body: JSON.stringify(propertyData),
  });
};

export const generateSocialMediaPoster = (featureData) => {
  return apiRequest("/openai/generateSocialMediaPoster", {
    method: "POST",
    body: JSON.stringify(featureData),
  });
};
