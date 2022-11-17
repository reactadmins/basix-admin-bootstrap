import React from "react";

const InlineForm = () => {
  return (
    <form className="d-flex gap-3">
      <div className="form-group d-flex gap-2 align-items-center">
        <label className="form-control-label" htmlFor="exampleInputName">
          Name
        </label>
        <input
          type="text"
          className="form-control"
          id="exampleInputName"
          placeholder="Jane Doe"
        />
      </div>
      <div className="form-group d-flex gap-2 align-items-center">
        <label className="pr-1 form-control-label" htmlFor="exampleInputEmail">
          Email
        </label>
        <input
          type="text"
          className="form-control"
          id="exampleInputEmail"
          placeholder="Jane Doe"
        />
      </div>
    </form>
  );
};

export default InlineForm;
