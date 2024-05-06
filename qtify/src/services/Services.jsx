import axios from "axios";

const topAlbumsURL = "https://qtify-backend-labs.crio.do/albums/top";

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

export { fetchTopAlbumsData };
