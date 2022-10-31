import React from "react";
import ProfileImg from "../../images/admin.jpg";
import "./notificationcart.scss";

const NotificationCart = () => {
  return (
    <div
      className="card"
      style={{ borderBottomLeftRadius: "0", borderBottomRightRadius: "0" }}
    >
      <div className="card-header p-0">
        <div className="d-flex gap-4 align-items-center bg-dark rounded-top p-3">
          <img
            src={ProfileImg}
            alt=""
            className="w-25 rounded-circle border border-5 border-secondary"
          />
          <div>
            <h1 className="text-light display-6 m-0">Jim Doe</h1>
            <p className="text-secondary m-0">Project Manager</p>
          </div>
        </div>
      </div>
      <div className="card-body p-0">
        <ul className="list-group list-group-flush">
          <li className="list-group-item my-1">
            <a
              href="#"
              className="d-flex justify-content-between text-decoration-none"
            >
              <span className="text-secondary message">
                <i className="fa-regular fa-envelope"></i>
                {"  "}Mail Inbox
              </span>
              <span className="badge bg-primary">10</span>
            </a>
          </li>
          <li className="list-group-item my-1">
            <a
              href="#"
              className="d-flex justify-content-between text-decoration-none"
            >
              <span className="text-secondary message">
                <i className="fa-solid fa-server"></i>
                {"  "}Recent Activity
              </span>
              <span className="badge badge-danger">15</span>
            </a>
          </li>
          <li className="list-group-item my-1">
            <a
              href="#"
              className="d-flex justify-content-between text-decoration-none"
            >
              <span className="text-secondary message">
                <i className="fa-regular fa-bell"></i>
                {"  "}Notification
              </span>
              <span className="badge badge-primary">11</span>
            </a>
          </li>
          <li className="list-group-item my-1">
            <a
              href="#"
              className="d-flex justify-content-between text-decoration-none"
            >
              <span className="text-secondary message">
                <i className="fa-solid fa-message"></i>
                {"  "}Message
              </span>
              <span className="badge badge-warning">3</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NotificationCart;
