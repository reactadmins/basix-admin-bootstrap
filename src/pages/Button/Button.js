import React from "react";
import Card from "../../component/Card/Card";

const Button = () => {
  return (
    <div className="container-fluid p-0">
      <div className="row g-4">
        <div className="col-md-12 col-lg-6 col-xl-6">
          <Card
            cardHeaderBg="#f7f7f7"
            headerTitle="Badges"
            headerTitleColot="#343a40"
            cardBodyBg="bg-light"
            titleCode={
              <>
                <small
                  className="mx-2"
                  style={{ fontSize: "80%", fontWeight: "400" }}
                >
                  Use this class <code>{`<a>`}</code>,{" "}
                  <code>{`<button>`} </code>
                  or
                  <code> {`<input>`}</code>
                </small>
              </>
            }
            cardBody={
              <div className="d-flex flex-wrap gap-2">
                <button type="button" className="btn btn-primary">
                  Primary
                </button>
                <button type="button" className="btn btn-secondary">
                  Secondary
                </button>
                <button type="button" className="btn btn-success">
                  Success
                </button>
                <button type="button" className="btn btn-danger">
                  Danger
                </button>
                <button type="button" className="btn btn-warning">
                  Warning
                </button>
                <button type="button" className="btn btn-info">
                  Info
                </button>
                <button type="button" className="btn btn-light">
                  Light
                </button>
                <button type="button" className="btn btn-dark">
                  Dark
                </button>
                <button type="button" className="btn btn-link">
                  Link
                </button>
              </div>
            }
          ></Card>
        </div>
        <div className="col-md-12 col-lg-6 col-xl-6">
          <Card
            cardHeaderBg="#f7f7f7"
            headerTitle="Outline Buttons"
            headerTitleColot="#343a40"
            cardBodyBg="bg-light"
            titleCode={
              <>
                <small
                  className="mx-2"
                  style={{ fontSize: "80%", fontWeight: "400" }}
                >
                  Use this class <code>{`<a>`}</code>,{" "}
                  <code>{`<button>`} </code>
                  or
                  <code> {`<input>`}</code>
                </small>
              </>
            }
            cardBody={
              <div className="d-flex flex-wrap gap-2">
                <button type="button" className="btn btn-outline-primary">
                  Primary
                </button>
                <button type="button" className="btn btn-outline-secondary">
                  Secondary
                </button>
                <button type="button" className="btn btn-outline-success">
                  Success
                </button>
                <button type="button" className="btn btn-outline-danger">
                  Danger
                </button>
                <button type="button" className="btn btn-outline-warning">
                  Warning
                </button>
                <button type="button" className="btn btn-outline-info">
                  Info
                </button>
                <button
                  type="button"
                  className="btn btn-outline-light text-dark"
                >
                  Light
                </button>
                <button type="button" className="btn btn-outline-dark">
                  Dark
                </button>
              </div>
            }
          ></Card>
        </div>
        <div className="col-md-12 col-lg-6 col-xl-6">
          <Card
            cardHeaderBg="#f7f7f7"
            headerTitle="Button tags"
            headerTitleColot="#343a40"
            cardBodyBg="bg-light"
            titleCode={
              <>
                <small
                  className="mx-2"
                  style={{ fontSize: "80%", fontWeight: "400" }}
                >
                  Use this class <code>.btn </code> or
                  <code> {`<button>`}</code>
                </small>
              </>
            }
            cardBody={
              <div className="d-flex flex-wrap gap-2">
                <a
                  href="#"
                  role="button"
                  type="button"
                  className="btn btn-primary"
                >
                  Link
                </a>
                <button type="submit" className="btn btn-danger">
                  Button
                </button>
                <input type="button" value="Input" className="btn btn-info" />
                <input
                  type="submit"
                  value="Submit"
                  className="btn btn-success"
                />
                <input type="reset" value="Reset" className="btn btn-warning" />
              </div>
            }
          ></Card>
        </div>
        <div className="col-md-12 col-lg-6 col-xl-6">
          <Card
            cardHeaderBg="#f7f7f7"
            headerTitle="Button tags"
            headerTitleColot="#343a40"
            cardBodyBg="bg-light"
            titleCode={
              <>
                <small
                  className="mx-2"
                  style={{ fontSize: "80%", fontWeight: "400" }}
                >
                  Use this class <code>.btn </code> or
                  <code> {`<button>`}</code>
                </small>
              </>
            }
            cardBody={
              <div className="d-flex flex-wrap gap-2">
                <a
                  href="#"
                  role="button"
                  type="button"
                  className="btn btn-outline-primary"
                >
                  Link
                </a>
                <button type="submit" className="btn btn-outline-danger">
                  Button
                </button>
                <input
                  type="button"
                  value="Input"
                  className="btn btn-outline-info"
                />
                <input
                  type="submit"
                  value="Submit"
                  className="btn btn-outline-success"
                />
                <input
                  type="reset"
                  value="Reset"
                  className="btn btn-outline-warning"
                />
              </div>
            }
          ></Card>
        </div>
        <div className="col-md-12 col-lg-6 col-xl-6">
          <Card
            cardHeaderBg="#f7f7f7"
            headerTitle="Disabled state"
            headerTitleColot="#343a40"
            cardBodyBg="bg-light"
            titleCode={
              <>
                <small
                  className="mx-2"
                  style={{ fontSize: "80%", fontWeight: "400" }}
                >
                  Use this class <code>disabled="disabled"</code>
                </small>
              </>
            }
            cardBody={
              <div className="d-flex flex-wrap gap-2">
                <button
                  type="button"
                  disabled="disabled"
                  className="btn btn-primary"
                >
                  Primary
                </button>
                <button
                  type="button"
                  disabled="disabled"
                  className="btn btn-secondary"
                >
                  Secondary
                </button>
                <button
                  type="button"
                  disabled="disabled"
                  className="btn btn-success"
                >
                  Success
                </button>
                <button
                  type="button"
                  disabled="disabled"
                  className="btn btn-danger"
                >
                  Danger
                </button>
                <button
                  type="button"
                  disabled="disabled"
                  className="btn btn-warning"
                >
                  Warning
                </button>
                <button
                  type="button"
                  disabled="disabled"
                  className="btn btn-info"
                >
                  Info
                </button>
                <button
                  type="button"
                  disabled="disabled"
                  className="btn btn-light"
                >
                  Light
                </button>
                <button
                  type="button"
                  disabled="disabled"
                  className="btn btn-dark"
                >
                  Dark
                </button>
                <button
                  type="button"
                  disabled="disabled"
                  className="btn btn-link"
                >
                  Link
                </button>
              </div>
            }
          ></Card>
        </div>
        <div className="col-md-12 col-lg-6 col-xl-6">
          <Card
            cardHeaderBg="#f7f7f7"
            headerTitle="Disabled state"
            headerTitleColot="#343a40"
            cardBodyBg="bg-light"
            titleCode={
              <>
                <small
                  className="mx-2"
                  style={{ fontSize: "80%", fontWeight: "400" }}
                >
                  Use this class <code>disabled="disabled"</code>
                </small>
              </>
            }
            cardBody={
              <div className="d-flex flex-wrap gap-2">
                <button
                  type="button"
                  disabled="disabled"
                  className="btn btn-outline-primary"
                >
                  Primary
                </button>
                <button
                  type="button"
                  disabled="disabled"
                  className="btn btn-outline-secondary"
                >
                  Secondary
                </button>
                <button
                  type="button"
                  disabled="disabled"
                  className="btn btn-outline-success"
                >
                  Success
                </button>
                <button
                  type="button"
                  disabled="disabled"
                  className="btn btn-outline-danger"
                >
                  Danger
                </button>
                <button
                  type="button"
                  disabled="disabled"
                  className="btn btn-outline-warning"
                >
                  Warning
                </button>
                <button
                  type="button"
                  disabled="disabled"
                  className="btn btn-outline-info"
                >
                  Info
                </button>
                <button
                  type="button"
                  disabled="disabled"
                  className="btn btn-outline-light text-dark"
                >
                  Light
                </button>
                <button
                  type="button"
                  disabled="disabled"
                  className="btn btn-outline-dark"
                >
                  Dark
                </button>
                <button
                  type="button"
                  disabled="disabled"
                  className="btn btn-outline-link"
                >
                  Link
                </button>
              </div>
            }
          ></Card>
        </div>
        <div className="col-md-12 col-lg-6 col-xl-6">
          <Card
            cardHeaderBg="#f7f7f7"
            headerTitle="Button with Icons"
            headerTitleColot="#343a40"
            cardBodyBg="bg-light"
            titleCode={
              <>
                <small
                  className="mx-2"
                  style={{ fontSize: "80%", fontWeight: "400" }}
                >
                  Use <code>{`<i>`}</code>
                </small>
              </>
            }
            cardBody={
              <div className="d-flex flex-wrap gap-2">
                <button type="button" className="btn btn-primary">
                  <i className="fa fa-star"></i> Primary
                </button>
                <button type="button" className="btn btn-secondary">
                  <i className="fa fa-lightbulb"></i> Secondary
                </button>
                <button type="button" className="btn btn-success">
                  <i className="fa fa-magic"></i> Success
                </button>
                <button type="button" className="btn btn-warning">
                  <i className="fa-solid fa-triangle-exclamation"></i> Warning
                </button>
                <button type="button" className="btn btn-danger">
                  <i className="fa fa-rss"></i> Danger
                </button>
                <button type="button" className="btn btn-link">
                  <i className="fa fa-link"></i> Link
                </button>
              </div>
            }
          ></Card>
        </div>
        <div className="col-md-12 col-lg-6 col-xl-6">
          <Card
            cardHeaderBg="#f7f7f7"
            headerTitle="Button with Icons"
            headerTitleColot="#343a40"
            cardBodyBg="bg-light"
            titleCode={
              <>
                <small
                  className="mx-2"
                  style={{ fontSize: "80%", fontWeight: "400" }}
                >
                  Use <code>{`<i>`}</code>
                </small>
              </>
            }
            cardBody={
              <div className="d-flex flex-wrap gap-2">
                <button type="button" className="btn btn-outline-primary">
                  <i className="fa fa-star"></i> Primary
                </button>
                <button type="button" className="btn btn-outline-secondary">
                  <i className="fa fa-lightbulb"></i> Secondary
                </button>
                <button type="button" className="btn btn-outline-success">
                  <i className="fa fa-magic"></i> Success
                </button>
                <button type="button" className="btn btn-outline-warning">
                  <i className="fa-solid fa-triangle-exclamation"></i> Warning
                </button>
                <button type="button" className="btn btn-outline-danger">
                  <i className="fa fa-rss"></i> Danger
                </button>
                <button type="button" className="btn btn-outline-link">
                  <i className="fa fa-link"></i> Link
                </button>
              </div>
            }
          ></Card>
        </div>
        <div className="col-md-12 col-lg-6 col-xl-6">
          <Card
            cardHeaderBg="#f7f7f7"
            headerTitle="Small Button"
            headerTitleColot="#343a40"
            cardBodyBg="bg-light"
            titleCode={
              <>
                <small
                  className="mx-2"
                  style={{ fontSize: "80%", fontWeight: "400" }}
                >
                  Use this class <code>.btn-sm</code>
                </small>
              </>
            }
            cardBody={
              <div className="d-flex flex-wrap gap-2">
                <button type="button" className="btn btn-primary btn-sm">
                  Primary
                </button>
                <button type="button" className="btn btn-secondary btn-sm">
                  Secondary
                </button>
                <button type="button" className="btn btn-success btn-sm">
                  Success
                </button>
                <button type="button" className="btn btn-warning btn-sm">
                  Warning
                </button>
                <button type="button" className="btn btn-danger btn-sm">
                  Danger
                </button>
                <button type="button" className="btn btn-link btn-sm">
                  Link
                </button>
              </div>
            }
          ></Card>
        </div>
        <div className="col-md-12 col-lg-6 col-xl-6">
          <Card
            cardHeaderBg="#f7f7f7"
            headerTitle="Small Button"
            headerTitleColot="#343a40"
            cardBodyBg="bg-light"
            titleCode={
              <>
                <small
                  className="mx-2"
                  style={{ fontSize: "80%", fontWeight: "400" }}
                >
                  Use this class <code>.btn-sm</code>
                </small>
              </>
            }
            cardBody={
              <div className="d-flex flex-wrap gap-2">
                <button
                  type="button"
                  className="btn btn-outline-primary btn-sm"
                >
                  Primary
                </button>
                <button
                  type="button"
                  className="btn btn-outline-secondary btn-sm"
                >
                  Secondary
                </button>
                <button
                  type="button"
                  className="btn btn-outline-success btn-sm"
                >
                  Success
                </button>
                <button
                  type="button"
                  className="btn btn-outline-warning btn-sm"
                >
                  Warning
                </button>
                <button type="button" className="btn btn-outline-danger btn-sm">
                  Danger
                </button>
                <button type="button" className="btn btn-outline-link btn-sm">
                  Link
                </button>
              </div>
            }
          ></Card>
        </div>
        <div className="col-md-12 col-lg-6 col-xl-6">
          <Card
            cardHeaderBg="#f7f7f7"
            headerTitle="Small Button with Icons"
            headerTitleColot="#343a40"
            cardBodyBg="bg-light"
            titleCode={
              <>
                <small
                  className="mx-2"
                  style={{ fontSize: "80%", fontWeight: "400" }}
                >
                  Use this class <code>.btn-sm</code>
                </small>
              </>
            }
            cardBody={
              <div className="d-flex flex-wrap gap-2">
                <button type="button" className="btn btn-primary btn-sm">
                  <i className="fa fa-star"></i> Primary
                </button>
                <button type="button" className="btn btn-secondary btn-sm">
                  <i className="fa fa-lightbulb"></i> Secondary
                </button>
                <button type="button" className="btn btn-success btn-sm">
                  <i className="fa fa-magic"></i> Success
                </button>
                <button type="button" className="btn btn-warning btn-sm">
                  <i className="fa-solid fa-triangle-exclamation"></i>
                  Warning
                </button>
                <button type="button" className="btn btn-danger btn-sm">
                  <i className="fa fa-rss"></i> Danger
                </button>
                <button type="button" className="btn btn-link btn-sm">
                  <i className="fa fa-link"></i> Link
                </button>
              </div>
            }
          ></Card>
        </div>
        <div className="col-md-12 col-lg-6 col-xl-6">
          <Card
            cardHeaderBg="#f7f7f7"
            headerTitle="Small Button with Icons"
            headerTitleColot="#343a40"
            cardBodyBg="bg-light"
            titleCode={
              <>
                <small
                  className="mx-2"
                  style={{ fontSize: "80%", fontWeight: "400" }}
                >
                  Use this class <code>.btn-sm</code>
                </small>
              </>
            }
            cardBody={
              <div className="d-flex flex-wrap gap-2">
                <button
                  type="button"
                  className="btn btn-outline-primary btn-sm"
                >
                  <i className="fa fa-star"></i> Primary
                </button>
                <button
                  type="button"
                  className="btn btn-outline-secondary btn-sm"
                >
                  <i className="fa fa-lightbulb"></i> Secondary
                </button>
                <button
                  type="button"
                  className="btn btn-outline-success btn-sm"
                >
                  <i className="fa fa-magic"></i> Success
                </button>
                <button
                  type="button"
                  className="btn btn-outline-warning btn-sm"
                >
                  <i className="fa-solid fa-triangle-exclamation"></i>
                  Warning
                </button>
                <button type="button" className="btn btn-outline-danger btn-sm">
                  <i className="fa fa-rss"></i> Danger
                </button>
                <button type="button" className="btn btn-outline-link btn-sm">
                  <i className="fa fa-link"></i> Link
                </button>
              </div>
            }
          ></Card>
        </div>
        <div className="col-md-12 col-lg-6 col-xl-6">
          <Card
            cardHeaderBg="#f7f7f7"
            headerTitle="Large Button"
            headerTitleColot="#343a40"
            cardBodyBg="bg-light"
            titleCode={
              <>
                <small
                  className="mx-2"
                  style={{ fontSize: "80%", fontWeight: "400" }}
                >
                  Use this class <code>.btn-lg</code>
                </small>
              </>
            }
            cardBody={
              <div className="d-flex flex-wrap gap-2">
                <button type="button" className="btn btn-primary btn-lg">
                  Primary
                </button>
                <button type="button" className="btn btn-secondary btn-lg">
                  Secondary
                </button>
                <button type="button" className="btn btn-success btn-lg">
                  Success
                </button>
                <button type="button" className="btn btn-warning btn-lg">
                  Warning
                </button>
                <button type="button" className="btn btn-danger btn-lg">
                  Danger
                </button>
                <button type="button" className="btn btn-link btn-lg">
                  Link
                </button>
              </div>
            }
          ></Card>
        </div>
        <div className="col-md-12 col-lg-6 col-xl-6">
          <Card
            cardHeaderBg="#f7f7f7"
            headerTitle="Large Button"
            headerTitleColot="#343a40"
            cardBodyBg="bg-light"
            titleCode={
              <>
                <small
                  className="mx-2"
                  style={{ fontSize: "80%", fontWeight: "400" }}
                >
                  Use this class <code>.btn-lg</code>
                </small>
              </>
            }
            cardBody={
              <div className="d-flex flex-wrap gap-2">
                <button
                  type="button"
                  className="btn btn-outline-primary btn-lg"
                >
                  Primary
                </button>
                <button
                  type="button"
                  className="btn btn-outline-secondary btn-lg"
                >
                  Secondary
                </button>
                <button
                  type="button"
                  className="btn btn-outline-success btn-lg"
                >
                  Success
                </button>
                <button
                  type="button"
                  className="btn btn-outline-warning btn-lg"
                >
                  Warning
                </button>
                <button type="button" className="btn btn-outline-danger btn-lg">
                  Danger
                </button>
                <button type="button" className="btn btn-outline-link btn-lg">
                  Link
                </button>
              </div>
            }
          ></Card>
        </div>
        <div className="col-md-12 col-lg-6 col-xl-6">
          <Card
            cardHeaderBg="#f7f7f7"
            headerTitle="Large Active Button"
            headerTitleColot="#343a40"
            cardBodyBg="bg-light"
            titleCode={
              <>
                <small
                  className="mx-2"
                  style={{ fontSize: "80%", fontWeight: "400" }}
                >
                  Use this class <code>.btn-lg .active</code>
                </small>
              </>
            }
            cardBody={
              <div className="d-flex flex-wrap gap-2">
                <button type="button" className="btn btn-primary btn-lg active">
                  Primary
                </button>
                <button
                  type="button"
                  className="btn btn-secondary btn-lg active"
                >
                  Secondary
                </button>
                <button type="button" className="btn btn-success btn-lg active">
                  Success
                </button>
                <button type="button" className="btn btn-warning btn-lg active">
                  Warning
                </button>
                <button type="button" className="btn btn-danger btn-lg active">
                  Danger
                </button>
                <button
                  type="button"
                  className="btn btn-link btn-lg active text-primary"
                >
                  Link
                </button>
              </div>
            }
          ></Card>
        </div>
        <div className="col-md-12 col-lg-6 col-xl-6">
          <Card
            cardHeaderBg="#f7f7f7"
            headerTitle="Large Disabled Button"
            headerTitleColot="#343a40"
            cardBodyBg="bg-light"
            titleCode={
              <>
                <small
                  className="mx-2"
                  style={{ fontSize: "80%", fontWeight: "400" }}
                >
                  Use this class <code>.btn-lg .active</code>
                </small>
              </>
            }
            cardBody={
              <div className="d-flex flex-wrap gap-2">
                <button
                  type="button"
                  className="btn btn-outline-primary btn-lg active"
                >
                  Primary
                </button>
                <button
                  type="button"
                  className="btn btn-outline-secondary btn-lg active"
                >
                  Secondary
                </button>
                <button
                  type="button"
                  className="btn btn-outline-success btn-lg active"
                >
                  Success
                </button>
                <button
                  type="button"
                  className="btn btn-outline-warning btn-lg active"
                >
                  Warning
                </button>
                <button
                  type="button"
                  className="btn btn-outline-danger btn-lg active"
                >
                  Danger
                </button>
                <button
                  type="button"
                  className="btn btn-outline-link btn-lg active text-primary"
                >
                  Link
                </button>
              </div>
            }
          ></Card>
        </div>

        <div className="col-md-12 col-lg-6 col-xl-6">
          <Card
            cardHeaderBg="#f7f7f7"
            headerTitle="Block Level Buttons"
            headerTitleColot="#343a40"
            cardBodyBg="bg-light"
            titleCode={
              <>
                <small
                  className="mx-2"
                  style={{ fontSize: "80%", fontWeight: "400" }}
                >
                  Use this class <code>.btn-block</code>
                </small>
              </>
            }
            cardBody={
              <div className="d-flex flex-column gap-2 w-100">
                <button
                  type="button"
                  className="btn btn-primary btn-lg btn-block"
                >
                  Primary
                </button>
                <button
                  type="button"
                  className="btn btn-secondary btn-lg btn-block"
                >
                  Secondary
                </button>
                <button
                  type="button"
                  className="btn btn-success btn-lg btn-block"
                >
                  Success
                </button>
                <button
                  type="button"
                  className="btn btn-warning btn-lg btn-block"
                >
                  Warning
                </button>
                <button
                  type="button"
                  className="btn btn-danger btn-lg btn-block"
                >
                  Danger
                </button>
                <button
                  type="button"
                  className="btn btn-link btn-lg btn-block text-primary"
                >
                  Link
                </button>
              </div>
            }
          ></Card>
        </div>
        <div className="col-md-12 col-lg-6 col-xl-6">
          <Card
            cardHeaderBg="#f7f7f7"
            headerTitle="Block Level Buttons"
            headerTitleColot="#343a40"
            cardBodyBg="bg-light"
            titleCode={
              <>
                <small
                  className="mx-2"
                  style={{ fontSize: "80%", fontWeight: "400" }}
                >
                  Use this class <code>.btn-block</code>
                </small>
              </>
            }
            cardBody={
              <div className="d-flex flex-column gap-2 w-100">
                <button
                  type="button"
                  className="btn btn-outline-primary btn-lg btn-block"
                >
                  Primary
                </button>
                <button
                  type="button"
                  className="btn btn-outline-secondary btn-lg btn-block"
                >
                  Secondary
                </button>
                <button
                  type="button"
                  className="btn btn-outline-success btn-lg btn-block"
                >
                  Success
                </button>
                <button
                  type="button"
                  className="btn btn-outline-warning btn-lg btn-block"
                >
                  Warning
                </button>
                <button
                  type="button"
                  className="btn btn-outline-danger btn-lg btn-block"
                >
                  Danger
                </button>
                <button
                  type="button"
                  className="btn btn-outline-link btn-lg btn-block text-primary"
                >
                  Link
                </button>
              </div>
            }
          ></Card>
        </div>
      </div>
    </div>
  );
};

export default Button;
