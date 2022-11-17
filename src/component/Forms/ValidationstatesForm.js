import React from "react";

const ValidationstatesForm = () => {
  return (
    <form>
      <div className="form-group mb-3">
        <label htmlFor="inputIsValid" className="form-control-label mb-1">
          Input is valid
        </label>
        <input
          type="text"
          id="inputIsValid"
          className="is-valid  form-control"
        />
      </div>
      <div className="form-group  mb-3">
        <label htmlFor="inputIsInvalid" className="form-control-label mb-1">
          Input is invalid
        </label>
        <input
          type="text"
          id="inputIsInvalid"
          className="is-invalid  form-control"
        />
      </div>
    </form>
  );
};

export default ValidationstatesForm;
