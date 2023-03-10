import { matchPath } from 'react-router-dom';

import data from './data.json';

function fakeFetch(data) {
  return new Promise(resolve => {
    // pretend the request takes time
    setTimeout(() => {
      resolve({
        json: () => Promise.resolve(data),
      });
    }, 500);
  });
}

export function fetch(url) {
  if (url === '/api/v1/users') {
    const response = Array.from(
      data
        .map(item => item.user)
        .reduce((set, item) => set.add(item), new Set())
        .values()
    );
    return fakeFetch(response);
  }

  const userMatch = matchPath('/api/v1/transactions/:userid', url);
  if (userMatch) {
    const response = data.filter(item => item.user === userMatch.params.userid);
    return fakeFetch(response);
  }

  return Promise.reject('error');
}
