function Header(){
    return (
        <header className="header"><img src="Logo.png" alt="Logo" />
        <div className="logo"></div>
        <div className="search-bar">
          <input type="text" placeholder="Sign up and get 20% off on your first order" />
          {/* <button><FaSearch /></button> */}
        </div>
        <img src="Cart.png" alt="Cart" />
        <div className="cart-icon">
          {/* <FaShoppingCart /> */}
        </div>
      </header>
    )
};

export default Header;