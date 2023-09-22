import axios from 'axios';
import { useAxios } from '../../../hooks';

export const useFetchCoinRanking = () => {
  const API_COIN = 'coinranking9fba7b300ec0f622075d8242f7c01704644b2c7a8d7e062e';

  const options = {
    headers: {
      'Content-Type': 'application/json',
      'x-access-token': API_COIN,
    },
  };

  const { data, error, loading, makeRequest } = useAxios(() => axios.get('https://api.coinranking.com/v2/coins?limit=50&category=', options))

  return { 
    dataCoinRanking: data?.data?.coins || [], 
    loadingCoinRanking: loading, 
    makeRequestCoinRanking: makeRequest,
    errorCoinRanking: error,
  };
};