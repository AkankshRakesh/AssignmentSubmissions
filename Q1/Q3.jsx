import { useState } from 'react';

const ProductSearch = () => {
  const [search, setSearch] = useState('');

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <input
      type="text"
      value={search}
      onChange={handleChange}
      placeholder="Search products..."
      className="border px-2 py-1 rounded"
    />
  );
};

export default ProductSearch;
