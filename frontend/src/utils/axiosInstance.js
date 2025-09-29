import axios from "axios";

const instance = axios.create({
        baseURL: "http://localhost:3000",
        timeout: 10000,
        withCredentials: true, // Send cookies with requests
});

// Error handler interceptor
instance.interceptors.response.use(
    response => response,
    error => {
        // You can customize error handling here
        let message = "An error occurred";
        if (error.response) {
            // Server responded with a status other than 2xx
            message = error.response.data?.message || `Error: ${error.response.status}`;
        } else if (error.request) {
            // No response received
            message = "No response from server";
        } else {
            // Something else happened
            message = error.message;
        }
        // Optionally log or show error
        // console.error(message);
        return Promise.reject({ ...error, message });
    }
);

export default instance;