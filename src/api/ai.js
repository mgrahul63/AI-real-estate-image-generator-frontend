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

    const data = await response.json();

    if (!response.ok) {
      return {
        success: false,
        message: data?.message || "Something went wrong",
        status: response.status,
      };
    }

    return data;
  } catch (error) {
    console.error("API Request Failed:", error);

    return {
      success: false,
      message: "Network error. Please try again.",
    };
  }
};

export const test = async () => {
  const res = await fetch(`${BASE_URL}/test`, {
    method: "POST",
  });
  const data = await res.json();

  if (data.success) return data;
};

export const generatePropertyInfo = async (promptData) => {
  try {
    const res = await apiRequest("/openai/generateTextAndImage", {
      method: "POST",
      body: JSON.stringify(promptData),
    });

    if (!res?.success) {
      return {
        success: false,
        message: res?.message || "Something went wrong. Please try again.",
      };
    }
    return res;
  } catch (error) {
    return {
      success: false,
      message: error?.message || "Network error. Please check your connection.",
    };
  }
};

export const fetchProducts = async (email = "") => {
  try {
    const url = email ? `/properties?email=${email}` : `/properties`;

    const res = await apiRequest(url, {
      method: "GET",
    });

    if (!res?.success) {
      return {
        success: false,
        message: res?.message || "Something went wrong. Please try again.",
      };
    }

    return res;
  } catch (error) {
    return {
      success: false,
      message: error?.message || "Network error. Please check your connection.",
    };
  }
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
