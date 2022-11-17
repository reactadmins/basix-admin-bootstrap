import React from "react";

const ButtonsGroupsForm = () => {
  return (
    <>
      <div className="input-group mb-3">
        <button
          className="btn btn btn-primary"
          type="button"
          id="button-addon1"
        >
          <i className="fa fa-search"></i> Search
        </button>
        <input
          type="text"
          className="form-control"
          placeholder="Username"
          aria-label="Example text with button addon"
          aria-describedby="button-addon1"
        />
      </div>
      <div className="input-group mb-3">
        <input
          type="email"
          className="form-control"
          placeholder="Email"
          aria-label="Example text with button addon"
          aria-describedby="button-addon1"
        />
        <button
          className="btn btn btn-primary"
          type="button"
          id="button-addon1"
        >
          Submit
        </button>
      </div>
      <div className="input-group mb-3">
        <button
          className="btn btn btn-primary"
          type="button"
          id="button-addon1"
        >
          <i className="fa-brands fa-facebook-f"></i>
        </button>
        <input
          type="email"
          className="form-control"
          placeholder="Email"
          aria-label="Example text with button addon"
          aria-describedby="button-addon1"
        />
        <button
          className="btn btn btn-primary"
          type="button"
          id="button-addon1"
        >
          <i className="fa-brands fa-twitter"></i>
        </button>
      </div>
    </>
  );
};

export default ButtonsGroupsForm;
