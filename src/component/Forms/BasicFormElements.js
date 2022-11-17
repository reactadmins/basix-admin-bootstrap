import React from "react";

const BasicFormElements = () => {
  return (
    <form>
      <div className="form-group mt-3">
        <div className="row">
          <div className="col-md-3">
            <label className="form-control-label mb-1">Static</label>
          </div>
          <div className="col-md-9">
            <p className="form-control-static text-secondary">Username</p>
          </div>
        </div>
      </div>
      <div className="form-group mt-3">
        <div className="row">
          <div className="col-md-3">
            <label className="form-control-label mb-1">Text Input</label>
          </div>
          <div className="col-md-9">
            <input
              type="text"
              className="form-control"
              placeholder="Text"
              required
            />
            <small className="form-text text-muted">This is a help text</small>
          </div>
        </div>
      </div>
      <div className="form-group mt-3">
        <div className="row">
          <div className="col-md-3">
            <label className="form-control-label mb-1">Email Input</label>
          </div>
          <div className="col-md-9">
            <input
              type="email"
              className="form-control"
              placeholder="Enter Email"
              required
            />
            <small className="form-text text-muted">
              Please enter your email
            </small>
          </div>
        </div>
      </div>
      <div className="form-group mt-3">
        <div className="row">
          <div className="col-md-3">
            <label className="form-control-label mb-1">Password</label>
          </div>
          <div className="col-md-9">
            <input
              type="number"
              className="form-control"
              placeholder="Password"
              required
            />
            <small className="form-text text-muted">
              Please enter a complex password
            </small>
          </div>
        </div>
      </div>
      <div className="form-group mt-3">
        <div className="row">
          <div className="col-md-3">
            <label className="form-control-label mb-1">Disabled Input</label>
          </div>
          <div className="col-md-9">
            <input
              type="text"
              className="form-control"
              placeholder="Disabled"
              disabled
            />
          </div>
        </div>
      </div>
      <div className="form-group mt-3">
        <div className="row">
          <div className="col-md-3">
            <label className="form-control-label mb-1">Textarea</label>
          </div>
          <div className="col-md-9">
            <textarea
              name=""
              id=""
              className="form-control"
              cols="30"
              rows="10"
              placeholder="Content..."
            ></textarea>
          </div>
        </div>
      </div>
      <div className="form-group mt-3">
        <div className="row">
          <div className="col-md-3">
            <label className="form-control-label mb-1">Select</label>
          </div>
          <div className="col-md-9">
            <select className="form-select" aria-label="Default select example">
              <option>Please select</option>
              <option defaultValue="1">Option #1</option>
              <option defaultValue="2">Option #2</option>
              <option defaultValue="3">Option #3</option>
            </select>
          </div>
        </div>
      </div>
      <div className="form-group mt-3">
        <div className="row">
          <div className="col-md-3">
            <label className="form-control-label mb-1">Select Large</label>
          </div>
          <div className="col-md-9">
            <select
              className="form-select form-select-lg"
              aria-label=".form-select-lg example"
            >
              <option>Please select</option>
              <option defaultValue="1">Option #1</option>
              <option defaultValue="2">Option #2</option>
              <option defaultValue="3">Option #3</option>
            </select>
          </div>
        </div>
      </div>
      <div className="form-group mt-3">
        <div className="row">
          <div className="col-md-3">
            <label className="form-control-label mb-1">Select Large</label>
          </div>
          <div className="col-md-9">
            <select
              className="form-select form-select-sm"
              aria-label=".form-select-sm example"
            >
              <option>Please select</option>
              <option defaultValue="1">Option #1</option>
              <option defaultValue="2">Option #2</option>
              <option defaultValue="3">Option #3</option>
            </select>
          </div>
        </div>
      </div>
      <div className="form-group mt-3">
        <div className="row">
          <div className="col-md-3">
            <label className="form-control-label mb-1">Disabled Select</label>
          </div>
          <div className="col-md-9">
            <select
              className="form-select"
              aria-label="Disabled select example"
              disabled
            >
              <option>Please select</option>
            </select>
          </div>
        </div>
      </div>
      <div className="form-group mt-3">
        <div className="row">
          <div className="col-md-3">
            <label className="form-control-label mb-1">Multiple select</label>
          </div>
          <div className="col-md-9">
            <select
              className="form-select"
              size="3"
              aria-label="size 3 select example"
            >
              <option defaultValue="1">Option #1</option>
              <option defaultValue="2">Option #2</option>
              <option defaultValue="3">Option #3</option>
              <option defaultValue="4">Option #4</option>
              <option defaultValue="5">Option #5</option>
              <option defaultValue="6">Option #6</option>
              <option defaultValue="7">Option #7</option>
              <option defaultValue="8">Option #8</option>
              <option defaultValue="9">Option #9</option>
              <option defaultValue="10">Option #10</option>
            </select>
          </div>
        </div>
      </div>
      <div className="form-group mt-3">
        <div className="row">
          <div className="col-md-3">
            <label className="form-control-label mb-1">Radios</label>
          </div>
          <div className="col-md-9">
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault1"
              />
              <label className="form-check-label" htmlFor="flexRadioDefault1">
                Option 1
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault2"
              />
              <label className="form-check-label" htmlFor="flexRadioDefault2">
                Option 2
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault3"
              />
              <label className="form-check-label" htmlFor="flexRadioDefault3">
                Option 3
              </label>
            </div>
          </div>
        </div>
      </div>
      <div className="form-group mt-3">
        <div className="row">
          <div className="col-md-3">
            <label className="form-control-label mb-1">Inline Radios</label>
          </div>
          <div className="col-md-9">
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioInline1"
              />
              <label className="form-check-label" htmlFor="flexRadioInline1">
                One
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioInline2"
              />
              <label className="form-check-label" htmlFor="flexRadioInline2">
                Tow
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioInline3"
              />
              <label className="form-check-label" htmlFor="flexRadioInline3">
                Three
              </label>
            </div>
          </div>
        </div>
      </div>
      <div className="form-group mt-3">
        <div className="row">
          <div className="col-md-3">
            <label className="form-control-label mb-1">Checkboxes</label>
          </div>
          <div className="col-md-9">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault1"
              />
              <label className="form-check-label" htmlFor="flexCheckDefault1">
                Option 1
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault2"
              />
              <label className="form-check-label" htmlFor="flexCheckDefault2">
                Option 2
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault3"
              />
              <label className="form-check-label" htmlFor="flexCheckDefault3">
                Option 3
              </label>
            </div>
          </div>
        </div>
      </div>
      <div className="form-group mt-3">
        <div className="row">
          <div className="col-md-3">
            <label className="form-control-label mb-1">Inline Checkboxes</label>
          </div>
          <div className="col-md-9">
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefaultInline1"
              />
              <label
                className="form-check-label"
                htmlFor="flexCheckDefaultInline1"
              >
                One
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefaultInline2"
              />
              <label
                className="form-check-label"
                htmlFor="flexCheckDefaultInline2"
              >
                Tow
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefaultInline3"
              />
              <label
                className="form-check-label"
                htmlFor="flexCheckDefaultInline3"
              >
                Three
              </label>
            </div>
          </div>
        </div>
      </div>
      <div className="form-group mt-3">
        <div className="row">
          <div className="col-md-3">
            <label
              className="d-block mb-1 form-control-label"
              htmlFor="fileInput"
            >
              File input
            </label>
          </div>
          <div className="col-md-9">
            <div className="form-group">
              <input type="file" className="form-control-file" id="fileInput" />
            </div>
          </div>
        </div>
      </div>
      <div className="form-group mt-3 mb-3">
        <div className="row">
          <div className="col-md-3">
            <label
              className="d-block mb-1 form-control-label"
              htmlFor="multipleFleInput"
            >
              Multiple File input
            </label>
          </div>
          <div className="col-md-9">
            <div className="form-group">
              <input
                type="file"
                className="form-control-file"
                id="multipleFleInput"
                multiple
              />
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default BasicFormElements;
