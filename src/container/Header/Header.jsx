import React from "react";
import { images } from "../../constants";
import "./Header.css";
import { SubHeading } from "../../components";

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      <SubHeading title="Where Brew Meets Bliss" />
      <h1 className="app__header-h1">Indulge in Flavorful Moments</h1>
      <p className="p__opensans" style={{ margin: "2rem 0" }}>
        BlissBrew: Where every cup is a journey, and every visit is an
        invitation to savor the blend of exceptional flavors and soulful
        moments. Embrace the art of coffee culture in a haven crafted for those
        who seek the extraordinary in every sip.
      </p>
      <button type="button" className="custom__button">Explore Menu</button>
    </div>
    <div className="app__wrapper_img">
      <img src={images.welcome} alt="header img" />
    </div>
  </div>
);

export default Header;
