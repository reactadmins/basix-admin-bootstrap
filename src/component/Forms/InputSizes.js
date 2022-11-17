import React from "react";

const InputSizes = () => {
  return (
    <form className="form-horizontal">
      <div className="row mb-3">
        <div className="col col-sm-3">
          <label
            className="d-block mb-1 form-control-label"
            htmlFor="input-small"
          >
            Small Input
          </label>
        </div>
        <div className="col col-sm-6">
          <div className="form-group">
            <input
              type="text"
              className="input-sm form-control-sm form-control"
              id="input-small"
              placeholder=".form-control-sm"
              required
            />
          </div>
        </div>
      </div>
      <div className="row mb-3">
        <div className="col col-sm-3">
          <label
            className="d-block mb-1 form-control-label"
            htmlFor="input-normal"
          >
            Normal Input
          </label>
        </div>
        <div className="col col-sm-6">
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              id="input-normal"
              placeholder="Normal"
              required
            />
          </div>
        </div>
      </div>
      <div className="row mb-3">
        <div className="col col-sm-3">
          <label
            className="d-block mb-1 form-control-label"
            htmlFor="input-normal"
          >
            Large Input
          </label>
        </div>
        <div className="col col-sm-6">
          <div className="form-group">
            <input
              type="text"
              className="input-lg form-control-lg form-control"
              id="input-normal"
              placeholder=".form-control-lg"
              required
            />
          </div>
        </div>
      </div>
    </form>
  );
};

export default InputSizes;
