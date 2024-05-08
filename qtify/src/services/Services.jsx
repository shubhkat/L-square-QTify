import axios from "axios";
export const BACKEND_ENDPOINT = "https://qtify-backend-labs.crio.do";

const fetchData = async (resource) => {
  try {
    const response = await axios.get(`${BACKEND_ENDPOINT}/${resource}`);
    const data = response.data;
    // console.log("Services.jsx fetchData debug data: ", data);
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return []; // Return an empty array in case of an error
  }
};

export { fetchData };
