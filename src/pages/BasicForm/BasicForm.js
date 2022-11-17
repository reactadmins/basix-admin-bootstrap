import React from "react";
import Card from "../../component/Card/Card";
import BasicFormElements from "../../component/Forms/BasicFormElements";
import ButtonsGroupsForm from "../../component/Forms/ButtonsGroupsForm";
import CompanyForm from "../../component/Forms/CompanyForm";
import CreditCardForm from "../../component/Forms/CreditCardForm";
import DropdownsGroupsForm from "../../component/Forms/DropdownsGroupsForm";
import ExampleForm from "../../component/Forms/ExampleForm";
import GridDevicesForm from "../../component/Forms/GridDevicesForm";
import HorizontalForm from "../../component/Forms/HorizontalForm";
import IconTextForm from "../../component/Forms/IconTextForm";
import InlineForm from "../../component/Forms/InlineForm";
import InputGrid from "../../component/Forms/InputGrid";
import InputGridDevicesForm from "../../component/Forms/InputGridDevicesForm";
import InputNameExampleForm from "../../component/Forms/InputNameExampleForm";
import InputSizes from "../../component/Forms/InputSizes";
import NormalForm from "../../component/Forms/NormalForm";
import ValidationstatesErrorForm from "../../component/Forms/ValidationstatesErrorForm";
import ValidationstatesForm from "../../component/Forms/ValidationstatesForm";
import "./basicform.scss";

const BasicForm = () => {
  return (
    <div className="container-fluid p-0">
      <div className="row g-4">
        <div className="col-md-12 col-lg-6 col-xl-6">
          <Card
            cardHeaderBg="#fafafa"
            headerTitle="Credit Card"
            titleCode={<small className="mx-2">form</small>}
            cardBody={<CreditCardForm></CreditCardForm>}
          ></Card>
        </div>
        <div className="col-md-12 col-lg-6 col-xl-6">
          <Card
            cardHeaderBg="#fafafa"
            headerTitle="Company"
            titleCode={<small className="mx-2">form</small>}
            cardBody={<CompanyForm></CompanyForm>}
          ></Card>
        </div>
        <div className="col-md-12 col-lg-6 col-xl-6">
          <Card
            cardHeaderBg="#fafafa"
            headerTitle="Basic Form"
            titleCode={<small className="mx-2">Elements</small>}
            cardBody={<BasicFormElements></BasicFormElements>}
            cardFooter={
              <>
                <div className="d-flex gap-3">
                  <button type="submit" className="btn btn-primary btn-sm">
                    <i className="fa-regular fa-circle-check"></i> Submit
                  </button>
                  <button type="submit" className="btn btn-danger btn-sm">
                    <i className="fa-solid fa-ban"></i> Submit
                  </button>
                </div>
              </>
            }
          ></Card>
        </div>
        <div className="col-md-12 col-lg-6 col-xl-6">
          <div className="mb-4">
            <Card
              cardHeaderBg="#fafafa"
              headerTitle="Horizontal"
              titleCode={<small className="mx-2">Form</small>}
              cardBody={<HorizontalForm></HorizontalForm>}
              cardFooter={
                <>
                  <div className="d-flex gap-3">
                    <button type="submit" className="btn btn-primary btn-sm">
                      <i className="fa-regular fa-circle-check"></i> Submit
                    </button>
                    <button type="submit" className="btn btn-danger btn-sm">
                      <i className="fa-solid fa-ban"></i> Submit
                    </button>
                  </div>
                </>
              }
            ></Card>
          </div>
          <div className="mb-4">
            <Card
              cardHeaderBg="#fafafa"
              headerTitle="Normal"
              titleCode={<small className="mx-2">Form</small>}
              cardBody={<NormalForm></NormalForm>}
              cardFooter={
                <>
                  <div className="d-flex gap-3">
                    <button type="submit" className="btn btn-primary btn-sm">
                      <i className="fa-regular fa-circle-check"></i> Submit
                    </button>
                    <button type="submit" className="btn btn-danger btn-sm">
                      <i className="fa-solid fa-ban"></i> Submit
                    </button>
                  </div>
                </>
              }
            ></Card>
          </div>
          <div className="mb-4">
            <Card
              cardHeaderBg="#fafafa"
              headerTitle="Input"
              titleCode={<small className="mx-2">Grid</small>}
              cardBody={<InputGrid></InputGrid>}
              cardFooter={
                <>
                  <div className="d-flex gap-3">
                    <button type="submit" className="btn btn-primary btn-sm">
                      <i className="fa fa-user"></i> Submit
                    </button>
                    <button type="submit" className="btn btn-danger btn-sm">
                      <i className="fa-solid fa-ban"></i> Submit
                    </button>
                  </div>
                </>
              }
            ></Card>
          </div>
        </div>
        <div className="col-md-12 col-lg-6 col-xl-6">
          <Card
            cardHeaderBg="#fafafa"
            headerTitle="Inline"
            titleCode={<small className="mx-2">Form</small>}
            cardBody={<InlineForm></InlineForm>}
            cardFooter={
              <>
                <div className="d-flex gap-3">
                  <button type="submit" className="btn btn-primary btn-sm">
                    <i className="fa fa-user"></i> Submit
                  </button>
                  <button type="submit" className="btn btn-danger btn-sm">
                    <i className="fa-solid fa-ban"></i> Submit
                  </button>
                </div>
              </>
            }
          ></Card>
        </div>
        <div className="col-md-12 col-lg-6 col-xl-6">
          <Card
            cardHeaderBg="#fafafa"
            headerTitle="Input"
            titleCode={<small className="mx-2">Sizes</small>}
            cardBody={<InputSizes></InputSizes>}
            cardFooter={
              <>
                <div className="d-flex gap-3">
                  <button type="submit" className="btn btn-primary btn-sm">
                    <i className="fa fa-user"></i> Submit
                  </button>
                  <button type="submit" className="btn btn-danger btn-sm">
                    <i className="fa-solid fa-ban"></i> Submit
                  </button>
                </div>
              </>
            }
          ></Card>
        </div>
        <div className="col-md-12 col-lg-6 col-xl-6">
          <Card
            cardHeaderBg="#fafafa"
            headerTitle="Validation states"
            titleCode={<small className="mx-2">Form</small>}
            cardBody={<ValidationstatesForm></ValidationstatesForm>}
          ></Card>
        </div>
        <div className="col-md-12 col-lg-6 col-xl-6">
          <Card
            cardHeaderBg="#fafafa"
            headerTitle="Validation states"
            titleCode={
              <small className="mx-2">
                with optional icons <em>(deprecated)</em>
              </small>
            }
            cardBody={<ValidationstatesErrorForm></ValidationstatesErrorForm>}
            cardFooter={
              <>
                <div className="d-flex gap-3">
                  <button type="submit" className="btn btn-primary btn-sm">
                    <i className="fa fa-user"></i> Submit
                  </button>
                  <button type="submit" className="btn btn-danger btn-sm">
                    <i className="fa-solid fa-ban"></i> Submit
                  </button>
                </div>
              </>
            }
          ></Card>
        </div>
        <div className="col-md-12 col-lg-6 col-xl-6">
          <Card
            cardHeaderBg="#fafafa"
            headerTitle="Icon/Text"
            titleCode={<small className="mx-2">Groups</small>}
            cardBody={<IconTextForm></IconTextForm>}
            cardFooter={
              <>
                <div className="d-flex gap-3">
                  <button type="submit" className="btn btn-primary btn-sm">
                    <i className="fa fa-user"></i> Submit
                  </button>
                  <button type="submit" className="btn btn-danger btn-sm">
                    <i className="fa-solid fa-ban"></i> Submit
                  </button>
                </div>
              </>
            }
          ></Card>
        </div>
        <div className="col-md-12 col-lg-6 col-xl-6">
          <Card
            cardHeaderBg="#fafafa"
            headerTitle="Buttons"
            titleCode={<small className="mx-2">Groups</small>}
            cardBody={<ButtonsGroupsForm></ButtonsGroupsForm>}
            cardFooter={
              <>
                <div className="d-flex gap-3">
                  <button type="submit" className="btn btn-primary btn-sm">
                    <i className="fa fa-user"></i> Submit
                  </button>
                  <button type="submit" className="btn btn-danger btn-sm">
                    <i className="fa-solid fa-ban"></i> Submit
                  </button>
                </div>
              </>
            }
          ></Card>
        </div>
        <div className="col-md-12 col-lg-6 col-xl-6">
          <Card
            cardHeaderBg="#fafafa"
            headerTitle="Dropdowns"
            titleCode={<small className="mx-2">Groups</small>}
            cardBody={<DropdownsGroupsForm></DropdownsGroupsForm>}
            cardFooter={
              <>
                <div className="d-flex gap-3">
                  <button type="submit" className="btn btn-primary btn-sm">
                    <i className="fa fa-user"></i> Submit
                  </button>
                  <button type="submit" className="btn btn-danger btn-sm">
                    <i className="fa-solid fa-ban"></i> Submit
                  </button>
                </div>
              </>
            }
          ></Card>
        </div>
        <div className="col-md-12 col-lg-6 col-xl-6">
          <Card
            titleCode={
              <>
                <strong className="fw-bold">
                  Use the grid for big devices!
                </strong>{" "}
                <code>.col-lg-*.col-md-*.col-sm-*</code>
              </>
            }
            cardBody={<GridDevicesForm></GridDevicesForm>}
            cardFooter={
              <>
                <div className="d-flex gap-3">
                  <button type="submit" className="btn btn-primary btn-sm">
                    Action
                  </button>
                  <button type="submit" className="btn btn-primary btn-sm">
                    Action
                  </button>
                  <button type="submit" className="btn btn-primary btn-sm">
                    Action
                  </button>
                  <button type="submit" className="btn btn-primary btn-sm">
                    Action
                  </button>
                  <button type="submit" className="btn btn-primary btn-sm">
                    Action
                  </button>
                </div>
              </>
            }
          ></Card>
        </div>
        <div className="col-md-12 col-lg-6 col-xl-6">
          <Card
            titleCode={
              <>
                <strong className="fw-bold">
                  Input Grid for small devices!
                </strong>{" "}
                <code>.col-*</code>
              </>
            }
            cardBody={<InputGridDevicesForm></InputGridDevicesForm>}
            cardFooter={
              <>
                <div className="d-flex gap-3">
                  <button type="submit" className="btn btn-primary btn-sm">
                    Action
                  </button>
                  <button type="submit" className="btn btn-primary btn-sm">
                    Action
                  </button>
                  <button type="submit" className="btn btn-primary btn-sm">
                    Action
                  </button>
                  <button type="submit" className="btn btn-primary btn-sm">
                    Action
                  </button>
                  <button type="submit" className="btn btn-primary btn-sm">
                    Action
                  </button>
                </div>
              </>
            }
          ></Card>
        </div>
        <div className="col-md-12 col-lg-6 col-xl-6">
          <Card
            titleCode={
              <>
                <small className="fw-bold">Example Form</small>
              </>
            }
            cardBody={<InputNameExampleForm></InputNameExampleForm>}
          ></Card>
        </div>
        <div className="col-md-12 col-lg-6 col-xl-6">
          <Card
            titleCode={
              <>
                <small className="fw-bold">Example Form</small>
              </>
            }
            cardBody={
              <ExampleForm
                inputOrder="1"
                IconOrder="2"
                inputBorderRadius="8px 0px 0px 8px"
                IconBorderRadius="0px 8px 8px 0px"
                buttonBg="btn-secondary"
              ></ExampleForm>
            }
          ></Card>
        </div>
        <div className="col-md-12 col-lg-6 col-xl-6">
          <Card
            titleCode={
              <>
                <small className="fw-bold">Example Form</small>
              </>
            }
            cardBody={
              <ExampleForm
                inputOrder="2"
                IconOrder="1"
                inputBorderRadius="0px 8px 8px 0px"
                IconBorderRadius="8px 0px 0px 8px"
                buttonBg="btn-success"
              ></ExampleForm>
            }
          ></Card>
        </div>
      </div>
    </div>
  );
};

export default BasicForm;
