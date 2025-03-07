import axios from "axios";

axios.defaults.baseURL = "http://localhost:8990/api";
axios.defaults.headers["Content-Type"] = "application/json";

export const request = async (method, url, data) => {
    try {
        const response = await axios({
            method: method,
            url: url,
            data: data
        });
        return response;
    } catch (error) {
        console.error("Error making request:", error);
        throw error;
    }
};
