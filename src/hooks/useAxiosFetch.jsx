import { useState, useEffect } from 'react';
import axios from 'axios';

const useAxiosFetch = () => {
    const [data, setData] = useState(null);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const fetchData = async (url, passedData) => {
        setError('');
        try {
            setLoading(true);
            const response = await axios.post(url, passedData);
            return response;
        } catch (err) {
            setError(err);
            throw err?.response;
        } finally {
            setLoading(false);
        }
        // axios.post(url, passedData)
        // .then((res) => {
        //     console.log(res)
        //     return setData(res.data);
        // })
    };
    const fetchDataGet = async (url) => {
        setLoading(true);
        setError('');
        try {
            const response = await axios.get(url);
            //   setData(response.data);
            return response;
        } catch (err) {
            setError(err);
        } finally {
            setLoading(false);
        }
    };

    //   useEffect(() => {
    //     fetchData();
    //     // Include url in the dependency array to re-fetch if the URL changes
    //   }, [url]); 

    // The hook returns the state variables for the component to use
    return { data, error, loading, fetchData };
};

export default useAxiosFetch;
