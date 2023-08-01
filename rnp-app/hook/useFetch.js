import {useState, useEffect} from 'react';
import axios from 'axios';

export default function useFetch(endpoint, query){
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError ] = useState(null);

  // console.log(data);

    const options = {
        method: 'GET',
        url: `https://jsearch.p.rapidapi.com/${endpoint}`,
        params: { ...query},
        headers: {
          'X-RapidAPI-Key': '212edf0f97mshf0f05756b406a9dp13077fjsnb73c3965d1b7',
          'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
        }
      };

      const fetchData = async () => {
        setIsLoading(true);

        try {
            const response = await axios.request 
            (options);

            setData(response.data.data);
            setIsLoading(false);
        } catch (error) {
            setError(error);
            alert('There is an error')
        } finally {
            setIsLoading(false);
        }
      }

      useEffect(() => {
        fetchData();
      }, []);

      const refetch = () => {
        setIsLoading(true);
        fetchData();
      }

      return { data, isLoading, error, refetch }
}
