import React, { useEffect } from 'react';

const GreetingAlert = () => {
  useEffect(() => {
    alert("Hello! Welcome to my website 😊");
  }, []);

  return <></>; // or return null;
};

export default GreetingAlert;
