import React, { useEffect, useRef, useState } from "react";
import "./AdminMessage.scss";

const AdminMessage = ({
  icon,
  count,
  coun_bg,
  rightPosition,
  notification,
  message_counter,
}) => {
  const [message, setMessage] = useState(false);

  let dropRef = useRef();

  useEffect(() => {
    document.addEventListener("mousedown", (e) => {
      if (dropRef.current && !dropRef.current.contains(e.target)) {
        setMessage(false);
      }
    });
  }, []);

  return (
    <div ref={dropRef} className="position-relative">
      <div className="navbar-container d-flex">
        <div className="position-relative">
          <button
            onClick={() => setMessage(!message)}
            className="border-0 bg-white"
          >
            <i className={icon}></i>
          </button>
          <div className={`${coun_bg} ${message_counter}`}>
            <span className="text-white" style={{ fontSize: "11px" }}>
              {count}
            </span>
          </div>
        </div>

        <div
          className={`${
            !message ? "d-none" : "d-block"
          } ${rightPosition} admin-message`}
        >
          {notification}
        </div>
      </div>
    </div>
  );
};

export default AdminMessage;
