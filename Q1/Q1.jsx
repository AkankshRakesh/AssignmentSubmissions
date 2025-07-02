// ParentComponent.jsx
<ProductCard name="Wireless Earbuds" price={79.99} />


const ProductCard = ({ name, price }) => (
  <div>
    <h2>{name}</h2>
    <p>${price.toFixed(2)}</p>
  </div>
);