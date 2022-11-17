import React from "react";

const NormalForm = () => {
  return (
    <form>
      <div className="form-group">
        <label className="d-block mb-1 form-control-label">Email</label>
        <input
          type="email"
          className="form-control"
          placeholder="Enter Email...."
          required
        />
        <span className="help-block form-text">Please enter your email</span>
      </div>
      <div className="form-group mt-2">
        <label className="d-block mb-1 form-control-label">Password</label>
        <input
          type="password"
          className="form-control"
          placeholder="Enter password...."
          required
        />
        <span className="help-block form-text">Please enter your password</span>
      </div>
    </form>
  );
};

export default NormalForm;
