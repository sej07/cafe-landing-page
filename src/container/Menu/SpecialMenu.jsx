import React from "react";
import { images, data } from "../../constants";
import { MenuItem, SubHeading } from "../../components";
import "./SpecialMenu.css";

const SpecialMenu = () => (
  <div className="app__specialMenu flex__center section__padding" id="menu">
    <div className="app__specialMenu-title">
      <SubHeading title="Where Every Dish is a Symphony of Flavor" />
      <h1 className="headtext__cormorant">Our Specials</h1>
    </div>
    <div className="app__specialMenu-menu">
      <div className="app__specialMenu-menu_course flex__center">
        <p className="app__specialMenu_menu_heading">Main Course</p>
        <div className="app__specialMenu_menu_items">
          {data.main_course.map((course, index) => (
            <MenuItem
              key={course.title + index}
              title={course.title}
              price={course.price}
              tags={course.tags}
            />
          ))}
        </div>
      </div>

      <div className="app__specialMenu-menu_img">
        <img src={images.menu} alt="menu img" />
      </div>

      <div className="app__specialMenu-menu_drinks flex__center">
        <p className="app__specialMenu_menu_heading">Drinks</p>
        <div className="app__specialMenu_menu_items">
          {data.drinks.map((drink, index) => (
            <MenuItem
              key={drink.title + index}
              title={drink.title}
              price={drink.price}
              tags={drink.tags}
            />
          ))}
        </div>
      </div>
    </div>

    <div style={{ marginTop: " 15px" }}>
      <button type="button" className="custom__button">
        View More
      </button>
    </div>
  </div>
);

export default SpecialMenu;
