import LogoImg from "../../utils/foodFireLogo.png";

const Header = () => {
  return (
    <div className="header">
      <div>
        <img className="logo" src={LogoImg} />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
