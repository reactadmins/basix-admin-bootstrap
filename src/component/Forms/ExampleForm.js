import React from "react";

const ExampleForm = ({
  inputOrder = "",
  inputBorderRadius = "",
  IconOrder = "",
  IconBorderRadius = "",
  buttonBg = "",
}) => {
  return (
    <>
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          id="validationDefaultUsername"
          aria-describedby="inputGroupPrepend2"
          placeholder="Username"
          required
          style={{
            order: `${inputOrder}`,
            borderRadius: `${inputBorderRadius}`,
          }}
        />
        <span
          className="input-group-text rounded-star"
          id="inputGroupPrepend2"
          style={{ order: `${IconOrder}`, borderRadius: `${IconBorderRadius}` }}
        >
          <i className="fa fa-user"></i>
        </span>
      </div>
      <div className="input-group mb-3">
        <input
          type="email"
          className="form-control"
          id="validationDefaultEmail"
          aria-describedby="inputGroupPrepend2"
          placeholder="Email"
          required
          style={{
            order: `${inputOrder}`,
            borderRadius: `${inputBorderRadius}`,
          }}
        />
        <span
          className="input-group-text"
          id="inputGroupPrepend2"
          style={{ order: `${IconOrder}`, borderRadius: `${IconBorderRadius}` }}
        >
          <i className="fa-solid fa-envelope"></i>
        </span>
      </div>
      <div className="input-group mb-3">
        <input
          type="password"
          className="form-control"
          id="validationDefaultEuro"
          aria-describedby="inputGroupPrepend2"
          placeholder="Password"
          required
          style={{
            order: `${inputOrder}`,
            borderRadius: `${inputBorderRadius}`,
          }}
        />
        <span
          className="input-group-text"
          id="inputGroupPrepend2"
          style={{ order: `${IconOrder}`, borderRadius: `${IconBorderRadius}` }}
        >
          <i className="fa fa-asterisk"></i>
        </span>
      </div>
      <div className="form-actions form-group mb-3">
        <button type="submit" className={`btn ${buttonBg} btn-sm`}>
          Submit
        </button>
      </div>
    </>
  );
};

export default ExampleForm;
