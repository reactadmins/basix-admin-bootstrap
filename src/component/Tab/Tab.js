import React, { useState } from "react";
import Home from "./TabPage/Home";
import Messages from "./TabPage/Messages";
import Profile from "./TabPage/Profile";
import "./tab.scss";

const Tab = ({
  tablistStyle = "",
  tabData = {},
  titleListStyle = "",
  tabPageStyle = "",
}) => {
  const [date, setDate] = useState(1);
  return (
    <div className={`tablist-wrapper ${tablistStyle}`}>
      <div className="title-container">
        <ul className={`title-list ${titleListStyle}`}>
          {tabData?.map((el, index) => (
            <li
              className={`${date === el.id ? "active" : "tab-title"} `}
              onClick={() => setDate(el.id)}
              key={index}
            >
              <div className="d-flex justify-content-center align-items-center gap-2">
                {el.icon && <i className={`${el.icon}`}></i>}
                {el.title && <span>{el.title}</span>}
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className={`${tabPageStyle}`}>
        <div>{date === 1 && <Home />}</div>
        <div>{date === 2 && <Profile />}</div>
        <div>{date === 3 && <Messages />}</div>
      </div>
    </div>
  );
};

export default Tab;
