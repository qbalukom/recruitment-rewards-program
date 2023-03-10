import { useState, useEffect } from 'react';

import { fetch } from './fake-fetch';

const API_URL = '/api/v1';

export function useGet(resource) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();

  useEffect(() => {
    fetch(`${API_URL}/${resource}`)
      .then(res => res.json())
      .then(data => {
        setData(data);
        setLoading(false);
      })
      .catch(e => {
        setError(e);
        setLoading(false);
      });
  }, [resource]);

  return {
    data,
    loading,
    error,
  };
}
