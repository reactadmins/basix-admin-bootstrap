import React from "react";

import StepCircleWizard from "../../component/Forms/StepWizards/StepCircleWizard";
import StepSquarWizard from "../../component/Forms/StepWizards/StepSquarWizard";
import StepTabWizard from "../../component/Forms/StepWizards/StepTabWizard";

const FormWizard = () => {
  return (
    <div>
      <StepCircleWizard></StepCircleWizard>
      <StepSquarWizard></StepSquarWizard>
      <StepTabWizard></StepTabWizard>
    </div>
  );
};

export default FormWizard;
