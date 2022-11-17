import React from "react";

const IconTextForm = () => {
  return (
    <>
      <div className="input-group mb-3">
        <span className="input-group-text" id="inputGroupPrepend2">
          <i className="fa fa-user"></i>
        </span>
        <input
          type="text"
          className="form-control"
          id="validationDefaultUsername"
          aria-describedby="inputGroupPrepend2"
          placeholder="Username"
          required
        />
      </div>
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          id="validationDefaultEmail"
          aria-describedby="inputGroupPrepend2"
          placeholder="Email"
          required
        />
        <span className="input-group-text" id="inputGroupPrepend2">
          <i className="fa-solid fa-envelope"></i>
        </span>
      </div>
      <div className="input-group mb-3">
        <span className="input-group-text" id="inputGroupPrepend2">
          <i className="fa fa-euro"></i>
        </span>
        <input
          type="text"
          className="form-control"
          id="validationDefaultEuro"
          aria-describedby="inputGroupPrepend2"
          placeholder=".."
          required
        />
        <span className="input-group-text" id="inputGroupPrepend2">
          .00
        </span>
      </div>
    </>
  );
};

export default IconTextForm;
