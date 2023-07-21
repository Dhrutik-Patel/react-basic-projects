import React, { useEffect } from 'react';

const Alert = ({ message, type, removeAlert }) => {
  useEffect(() => {
    const alert = setTimeout(() => {
      removeAlert();
    }, [3000]);
    return () => clearTimeout(alert);
  }, [message]);

  return <p className={`alert alert-${type}`}>{message}</p>;
};

export default Alert;
