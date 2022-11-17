import React from "react";

const ValidationstatesErrorForm = () => {
  return (
    <form>
      <div className="form-group mb-3">
        <label htmlFor="inputIsSuccess" className="form-control-label mb-1">
          Input with success
        </label>
        <input
          type="text"
          id="inputIsSuccess"
          className="form-control-success form-control"
        />
      </div>
      <div className="form-group  mb-3">
        <label htmlFor="inputIsInWarning" className="form-control-label mb-1">
          Input with warning
        </label>
        <input
          type="text"
          id="inputIsInWarning"
          className="form-control-warning form-control"
        />
      </div>
      <div className="form-group  mb-3">
        <label htmlFor="inputIsInError" className="form-control-label mb-1">
          Input with error
        </label>
        <input
          type="text"
          id="inputIsInError"
          className="form-control-danger  form-control"
        />
      </div>
    </form>
  );
};

export default ValidationstatesErrorForm;
