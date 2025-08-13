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

export default Header;