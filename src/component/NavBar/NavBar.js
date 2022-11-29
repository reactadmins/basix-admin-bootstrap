import React, { useEffect, useRef, useState } from "react";
import "./NavBar.scss";
import admin from "../../images/admin.jpg";
import AdminMessage from "../AdminMessage/AdminMessage";
import Notification from "../Notification/Notification";
import MailNotification from "../MailNotification/MailNotification";
import img1 from "../../images/avatar/1.jpg";
import img2 from "../../images/avatar/2.jpg";
import img3 from "../../images/avatar/3.jpg";
import img4 from "../../images/avatar/4.jpg";

const NavBar = ({ isOpen, setIsOpen }) => {
  const [isOpenSearch, setIsOpenSearch] = useState(true);
  const [isUser, setIsUser] = useState(true);

  let dropRef = useRef();

  useEffect(() => {
    document.addEventListener("mousedown", (e) => {
      if (dropRef.current && !dropRef.current.contains(e.target)) {
        setIsUser(true);
      }
    });
  }, []);

  return (
    <>
      {isOpenSearch ? (
        <div className="bg-white header">
          <div
            className={`d-flex justify-content-between align-items-center w-100 ${
              isOpen ? "" : "menu-active"
            }`}
          >
            <div className="d-flex gap-4 position-relative">
              <div className="navbar-container show-menutoggle">
                <button
                  className="border-0 bg-white"
                  onClick={() => setIsOpen(!isOpen)}
                >
                  {!isOpen ? (
                    <div className="close-btn">
                      <i className="fa-sharp fa-solid fa-xmark"></i>
                    </div>
                  ) : (
                    <i className="fa-solid fa-bars-progress"></i>
                  )}
                </button>
              </div>
              <div className="navbar-container ">
                <button
                  onClick={() => setIsOpenSearch(!isOpenSearch)}
                  className="border-0 bg-white"
                >
                  <i className="fa fa-search"></i>
                </button>
              </div>

              <AdminMessage
                icon={"fa fa-bell"}
                count={4}
                coun_bg="bg-danger"
                rightPosition={"admin-notification"}
                message_counter="notification-count"
                notification={
                  <>
                    <Notification
                      icon="fa fa-pencil"
                      message="You have 3 Notification"
                      message_bg="message-bg-1"
                    />
                    <Notification
                      icon="fa fa-check"
                      message="Server #1 overloaded."
                      message_bg="message-bg-2"
                    />
                    <Notification
                      icon="fa fa-info"
                      message="Server #2 overloaded."
                      message_bg="message-bg-3"
                    />
                    <Notification
                      icon="fa fa-warning"
                      message="Server #3 overloaded."
                      message_bg="message-bg-4"
                    />
                  </>
                }
              />
              <AdminMessage
                icon={"fa-solid fa-envelope"}
                count={9}
                coun_bg="bg-primary"
                rightPosition={"admin-mail"}
                message_counter="message-count"
                notification={
                  <>
                    <p className="m-0 py-1 px-3 text-secondary">
                      You have 4 Mails
                    </p>
                    <MailNotification
                      location={img1}
                      message_bg="message-bg-2"
                      userName="Jonathan Smith"
                      timeCount="Just now"
                      message="Hello, this is an example msg"
                    />
                    <MailNotification
                      location={img2}
                      message_bg="message-bg-3"
                      userName="Jack Sanders"
                      timeCount="5 minutes ago"
                      message="Hello, this is an example msg"
                    />
                    <MailNotification
                      location={img3}
                      message_bg="message-bg-4"
                      userName="Cheryl Wheeler"
                      timeCount="10 minutes ago"
                      message="Hello, this is an example msg"
                    />
                    <MailNotification
                      location={img4}
                      message_bg="message-bg-1"
                      userName="Rachel Santos"
                      timeCount="20 minutes ago"
                      message="Hello, this is an example msg"
                    />
                  </>
                }
              />
            </div>
            <div ref={dropRef} className="position-relative ">
              <button
                type="button"
                onClick={() => setIsUser(!isUser)}
                className="border-0 bg-white user-btn"
              >
                <img
                  src={admin}
                  alt="admin"
                  className="user-avatar rounded-circle"
                  style={{ width: "35px" }}
                />
              </button>
              <div
                className={`${
                  isUser ? "d-none" : "active-user"
                } bg-white admin-menu`}
              >
                <a href="#" className="text-decoration-none d-block">
                  <i className="fa fa-user"></i>
                  <span>My Profile</span>
                </a>
                <a href="#" className="text-decoration-none d-block">
                  <i className="fa-solid fa-bell"></i>
                  <span>Notifications</span>
                  <span className="count">13</span>
                </a>
                <a href="#" className="text-decoration-none d-block">
                  <i className="fa-solid fa-gear"></i> Settings
                </a>
                <a href="#" className="text-decoration-none d-block">
                  <i className="fa-solid fa-right-from-bracket"></i> Logout
                </a>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className={` ${isOpenSearch ? "" : "search-container"}`}>
          <div className={`navbar-container`}>
            <div className="Search-wrapper">
              <div className="d-flex justify-content-between align-item-center py-2 search-memu">
                <input placeholder="Search ..." className="w-75 border-0" />
                <button
                  onClick={() => setIsOpenSearch(!isOpenSearch)}
                  className="border-0"
                  id="#SearchClose"
                >
                  <i className="fa fa-close"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default NavBar;
