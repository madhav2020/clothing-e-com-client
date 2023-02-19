import axios from "axios";
import { useEffect, useState } from "react";

const useFetch = (url, body, options) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const getsData = async () => {
    try {
      const { data } = await axios.get(url);
    //   console.log(data.data);
      setData(data.data);
    } catch (error) {
      console.log(error);
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getsData();
  }, []);

  return { data, error, loading };
};

export default useFetch;
