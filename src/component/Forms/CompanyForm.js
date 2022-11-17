import React from "react";

const CompanyForm = () => {
  return (
    <form>
      <div className="form-group">
        <label className="form-control-label mb-1">Company</label>
        <input
          type="text"
          placeholder="Enter your company name"
          className="form-control"
        />
      </div>
      <div className="form-group mt-3">
        <label className="form-control-label mb-1">VAT</label>
        <input
          type="text"
          placeholder="DE1234567890"
          className="form-control"
        />
      </div>
      <div className="form-group mt-3">
        <label className="form-control-label mb-1">Street</label>
        <input
          type="text"
          placeholder="Enter street name"
          className="form-control"
        />
      </div>
      <div className="form-group mt-3">
        <label className="form-control-label mb-1">City</label>
        <input
          type="text"
          placeholder="Enter your city"
          className="form-control"
        />
      </div>
      <div className="form-group mt-3">
        <label className="form-control-label mb-1">Postal Code</label>
        <input
          type="text"
          className="form-control"
          placeholder="Postal Code"
          aria-label="Username"
        />
      </div>

      <div className="form-group mt-3 mb-3">
        <label className="form-control-label mb-1">Company</label>
        <input
          type="text"
          placeholder="Enter your company name"
          className="form-control"
        />
      </div>
    </form>
  );
};

export default CompanyForm;
