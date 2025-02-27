import axios from "axios";

export const loginService = async (email, password) => {
  try {
    return await axios.post("/api/auth/login", { email, password });
  } catch (error) {
    console.error("Login error:", error.response ? error.response.data : error.message);
    throw error;
  }
};
