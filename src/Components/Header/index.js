import { useState } from "react";
import LogoImg from "../../utils/foodFireLogo.png";
import ButtonComp from "../ButtonComp";

import './style.css';

const Header = () => {
  const [isLogin, setIsLogin ] = useState(false);

  const loginHandler = () => {
    setIsLogin(!isLogin);
  }

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
          <ButtonComp
            btnClass="primary-button"
            clickHandler={loginHandler}
            btnText={isLogin ? "Logout" : "Login"}
          />
        </ul>
      </div>
    </div>
  );
};

export default Header;
