const BASE_URL =
  import.meta.env.VITE_REACT_API_URL || "http://localhost:5000/api/v1";

const apiRequest = async (endpoint, options = {}) => {
  try {
    const response = await fetch(`${BASE_URL}${endpoint}`, {
      headers: {
        "Content-Type": "application/json",
        ...options.headers,
      },
      ...options,
    });

    if (!response.ok) {
      throw new Error(`API Error: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error("API Request Failed:", error);
    throw error;
  }
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
