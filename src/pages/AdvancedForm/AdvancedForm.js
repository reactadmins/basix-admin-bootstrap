import React from "react";

import Card from "../../component/Card/Card";
import MaskedInput from "../../component/Forms/MaskedInput";
import MultipleTagSelect from "../../component/Forms/MultipleTagSelect";

const AdvancedForm = () => {
  return (
    <div className="row gx-4">
      <div className="col-sm-12 col-md-12 col-lg-6 col-xl-7">
        <Card
          cardHeader={
            <>
              <strong className="fs-6">
                Masked Input{" "}
                <small style={{ fontSize: "80%", fontWeight: "400" }}>
                  React Text Mask
                </small>
              </strong>
            </>
          }
          cardBodyBg="bg-white"
          cardBody={
            <>
              <MaskedInput
                title="Date input"
                icon="fa-solid fa-calendar-days"
                textMuted="ex. 99/99/9999"
              />
              <MaskedInput
                title="Phone input"
                icon="fa-solid fa-phone"
                textMuted="ex. 99/99/9999"
              />
              <MaskedInput
                title="Taxpayer Identification Numbers"
                icon="fa-solid fa-dollar-sign"
                textMuted="ex. 99/99/9999"
              />
              <MaskedInput
                title="Social Security Number"
                icon="fa-solid fa-person"
                textMuted="ex. 99/99/9999"
              />
              <MaskedInput
                title="Eye Script"
                icon="fa-solid fa-asterisk"
                textMuted="ex. 99/99/9999"
              />
              <MaskedInput
                title="Credit Card Number"
                icon="fa-regular fa-credit-card"
                textMuted="ex. 99/99/9999"
              />
            </>
          }
        ></Card>
      </div>
      <div className="col-sm-12 col-md-12 col-lg-6 col-xl-5 mb-4">
        <Card
          cardHeader={
            <>
              <strong className="fs-6">React-Select</strong>
            </>
          }
          cardBodyBg="bg-white"
          cardBody={
            <>
              <MultipleTagSelect />
            </>
          }
        ></Card>
      </div>
    </div>
  );
};

export default AdvancedForm;
