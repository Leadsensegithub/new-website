import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "https://api.admissionsmanipal.com/api/v1", // Set your base URL here
    headers: {
        "Content-Type": "application/json",
    },
});

export default axiosInstance;
