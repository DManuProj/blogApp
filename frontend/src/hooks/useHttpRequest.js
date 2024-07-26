import { useState, useCallback } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";

const useHttpRequest = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const sendRequest = useCallback(
    async (
      method,
      url,
      data,
      headers = { "Content-Type": "application/json" },
      config
    ) => {
      console.log("mehtod: " + method, "url", "data:" + data);
<<<<<<< HEAD
      const API = `http://localhost:8000/api/${url}`;
=======
      // const API = `http://localhost:5000/${url}`;
      const API = `http://13.201.137.181/api/${url}`;
>>>>>>> 8976cd101ac7be30b46013849e310f6d0035d85d

      setIsLoading(true);
      setError(null);

      try {
        const response = await axios({
          method,
          url: API,
          data,
          headers,
          ...config,
        });
        response.data.message && toast.success(response.data.message);

        return response.data;
      } catch (error) {
        const errorMessage = error.data?.message || "Something went wrong!";
        setError(errorMessage);
        toast.error(errorMessage);

        throw error;
      } finally {
        setIsLoading(false);
      }
    },
    []
  );

  return { isLoading, error, sendRequest };
};

export default useHttpRequest;
