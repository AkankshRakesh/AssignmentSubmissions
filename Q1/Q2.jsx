const ProductCard = () => {
  const [liked, setLiked] = useState(false);

  const handleLikeToggle = () => {
    setLiked(prev => !prev);
  };

  return (
    <button onClick={handleLikeToggle}>
      {liked ? 'Liked ❤️' : 'Like 🤍'}
    </button>
  );
};
