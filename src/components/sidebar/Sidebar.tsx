import React from "react";
import "./sidebar.css";
import { Link } from "react-router-dom";
import { menu } from "../../data";

const Sidebar = () => {
  return (
    <div className="w-full max-w-[200px] p-2  text-white menu">
      {menu.map((item) => (
        <div key={item.id}>
          <h3 className="uppercase ">{item.title}</h3>
          {item.listItems.map((listItem) => (
            <Link
              key={listItem.id}
              to={item.title + listItem.url}
              className="w-full menu__item-wrapper"
            >
              <div className="menu__item">
                <img src={listItem.icon} alt="" />
                <span className="text-[16px] font-semibold">
                  {listItem.title}
                </span>
              </div>
            </Link>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
