import ReactDOM from "react-dom/client";

const Header = () => {
  return (
    <div className="header-container">
      <div className="logo-wrapper">
        <img
          src="https://png.pngtree.com/png-clipart/20220628/original/pngtree-food-logo-png-image_8239850.png"
          alt="outlet-logo"
        />
      </div>
      <div className="list-wrapper">
        <ul>
          <li>Home</li>
          <li>Contact us</li>
          <li>About</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const RestaurantCard = (prop) => {
  console.log(prop);
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

const Body = () => {
  return (
    <div className="card-wrapper">
      {RestaurantCard({name: "Pizza House", rating: 4.4})}
      <RestaurantCard name="KFC" rating="4.3"/>
    </div>
  );
};

const Footer = () => {
  return <div></div>;
};

const AppLayout = () => {
  return (
    <div className="app-container">
      <Header />
      <Body />
      <Footer />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
