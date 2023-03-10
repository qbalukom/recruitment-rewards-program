import React from 'react';

export function Error({ error }) {
  return <div className='error'>
    an error occured
    <pre>{JSON.stringify(error, null, 4)}</pre>
  </div>;
}

