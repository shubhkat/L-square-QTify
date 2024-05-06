import axios from "axios";

const topAlbumsURL = "https://qtify-backend-labs.crio.do/albums/top";
const newAlbumsURL = "https://qtify-backend-labs.crio.do/albums/new";

const fetchTopAlbumsData = async () => {
  try {
    const response = await axios.get(topAlbumsURL);
    const data = response.data;
    console.log("Services.jsx getTopAlbums debug data: ", data);
    return data;
  } catch (error) {
    console.error("Error fetching top albums data:", error);
    return []; // Return an empty array in case of an error
  }
};

const fetchNewAlbumsData = async () => {
  try {
    const response = await axios.get(newAlbumsURL);
    const data = response.data;
    console.log("Services.jsx getNewAlbums debug data: ", data);
    return data;
  } catch (error) {
    console.error("Error fetching new albums data:", error);
    return []; // Return an empty array in case of an error
  }
};

export { fetchTopAlbumsData, fetchNewAlbumsData };
