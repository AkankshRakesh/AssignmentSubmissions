import React, { useState } from 'react';

function DynamicList() {
  const [items, setItems] = useState([]);

  const addItem = () => {
    setItems([...items, `Item ${items.length + 1}`]);
  };

  return (
    <div>
      <ul>
        {items.map((item, idx) => <li key={idx}>{item}</li>)}
      </ul>
      <button onClick={addItem}>Add Item</button>
    </div>
  );
}

export default DynamicList;
