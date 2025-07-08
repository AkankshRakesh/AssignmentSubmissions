import React from 'react';

const CardExample = () => {
  const cardStyle = {
    border: '1px solid #ccc',
    padding: '16px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    borderRadius: '8px',
    backgroundColor: '#fff',
    maxWidth: '400px',
    margin: '20px auto',
    fontFamily: 'Arial, sans-serif',
  };

  return (
    <div style={cardStyle}>
      <h2>Card Title</h2>
      <p>This is a card component. It has a border, padding, and a subtle shadow to give it depth.</p>
    </div>
  );
};

export default CardExample;
