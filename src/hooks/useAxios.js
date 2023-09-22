import { useState, useEffect } from 'react'

export const useAxios = requester => {
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)

  const makeRequest = async (...args) => {
    setLoading(true)
    setError(null)

    try {
      const result = await requester(...args)
      setData(result.data)
    } catch (err) {
      console.error('Error fetching data:', err);
      setLoading(false);
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    return () => {
      setData(null)
      setError(null)
    }
  }, [])

  return {
    data,
    error,
    loading,
    makeRequest,
  }
}
