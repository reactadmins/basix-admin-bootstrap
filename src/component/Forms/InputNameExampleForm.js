import React from "react";

const InputNameExampleForm = () => {
  return (
    <>
      <div className="input-group mb-3">
        <span className="input-group-text" id="inputGroupPrepend2">
          Username
        </span>

        <input
          type="text"
          className="form-control"
          id="validationDefaultUsername"
          aria-describedby="inputGroupPrepend2"
          required
        />
        <span className="input-group-text" id="inputGroupPrepend2">
          <i className="fa fa-user"></i>
        </span>
      </div>
      <div className="input-group mb-3">
        <span className="input-group-text" id="inputGroupPrepend2">
          Email
        </span>
        <input
          type="email"
          className="form-control"
          id="validationDefaultEmail"
          aria-describedby="inputGroupPrepend2"
          required
        />
        <span className="input-group-text" id="inputGroupPrepend2">
          <i className="fa-solid fa-envelope"></i>
        </span>
      </div>
      <div className="input-group mb-3">
        <span className="input-group-text" id="inputGroupPrepend2">
          Password
        </span>
        <input
          type="password"
          className="form-control"
          id="validationDefaultEuro"
          aria-describedby="inputGroupPrepend2"
          required
        />
        <span className="input-group-text" id="inputGroupPrepend2">
          <i className="fa fa-asterisk"></i>
        </span>
      </div>
      <div className="form-actions form-group mb-3">
        <button type="submit" className="btn btn-primary btn-sm">
          Submit
        </button>
      </div>
    </>
  );
};

export default InputNameExampleForm;
