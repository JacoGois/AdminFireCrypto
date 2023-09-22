import axios from 'axios';
import { useAxios } from './useAxios';

export const useCotation = () => {
  const { data, error, loading, makeRequest } = useAxios(() => axios.get('https://economia.awesomeapi.com.br/last/USD-BRL,ETH-USD,BTC-USD'))

  return { 
    dataCotation: data, 
    loadingCotation: loading, 
    makeRequestCotation: makeRequest,
    errorCotation: error,
  };
};