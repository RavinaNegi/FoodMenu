import React from 'react';
import { useRouteError } from 'react-router-dom';

const Error = () => {
    const err=useRouteError();
  return (
    <div>
       
        <p>{err.status}</p>
        <p>these are the error are comi</p>
      
    </div>
  )
}

export default Error
