import React from "react";
import logo from "../../images/logo.png";
import "./error500.scss";

const Error500 = () => {
  return (
    <div className="container-fluid p-0">
      <div className="container-fluid p-0">
        <div className="error500-wrapper">
          <div className="error-container bg-white h-100">
            <div className="">
              <div style={{ marginLeft: "20px" }}>
                <h1 className="error-code">404</h1>
                <h5 className="error-title">Oops! You're lost.</h5>
                <p className="error-description">
                  The page you are looking <br /> for was not found.
                </p>
              </div>
              <div class="input-group">
                <button type="button" className="error-search-btn">
                  <i className="fa fa-search"></i>
                </button>
                <input
                  type="text"
                  className="form-control"
                  placeholder="What are you looking for?"
                  required
                />
                <button type="submit" className="error-submit-btn">
                  Search
                </button>
              </div>
            </div>
          </div>
          <div className="logo-container h-100">
            <div className="oblique"></div>
            <div className="logo">
              <a href="">
                <img src={logo} alt="logo" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Error500;
