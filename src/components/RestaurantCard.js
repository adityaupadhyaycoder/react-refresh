const RestaurantCard = (prop) => {
  return (
    <div className="card">
      <div className="card-img-wrapper">
        <img
          src="https://images.pexels.com/photos/32461148/pexels-photo-32461148/free-photo-of-elegant-latte-art-in-black-ceramic-cup-on-wooden-table.jpeg"
          alt="coffe-img"
        />
      </div>
      <div> {prop.name}</div>
      <div> {prop.rating}</div>
      <div> RS 99</div>
      <div> Delhi</div>
    </div>
  );
};

export default RestaurantCard;
