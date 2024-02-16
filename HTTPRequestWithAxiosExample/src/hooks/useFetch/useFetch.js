import {useState, useEffect} from 'react';
import axios from 'axios';

function useFetch(url) {
  const [error, setErr] = useState(null);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  useEffect(() => {
    fetchData();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchData = async () => {
    try {
      const {data: responseData} = await axios.get(url);
  
      setData(responseData);
      console.log(url)
      setLoading(false);
    } catch (err) {
      setErr(err.message);
      setLoading(false);
    }
  };

  return {error, loading, data};
}

export default useFetch;