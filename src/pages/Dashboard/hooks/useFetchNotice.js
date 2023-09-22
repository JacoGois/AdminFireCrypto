import axios from 'axios';
import { useAxios } from '../../../hooks';

export const useFetchNotice = () => {
  const API_NOTICE = 'DNSXSNFP6YD5509E';
  const url = 'https://www.alphavantage.co/query?function=NEWS_SENTIMENT&topics=blockchain&apikey='

  const { data, error, loading, makeRequest } = useAxios(() => axios.get(`${url}${API_NOTICE}`))
  return { 
    dataNotice: data?.feed || [], 
    loadingNotice: loading, 
    makeRequestNotice: makeRequest,
    errorNotice: error,
  };
};