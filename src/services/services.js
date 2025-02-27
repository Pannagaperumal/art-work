import axios from "axios";

export const getAllCategories = async () => await axios.get("/api/categories");

export const getAllProducts = async (page = 1, limit = 10) => 
  await axios.get("/api/products", {
    params: {
      page,
      limit
    }
  });
