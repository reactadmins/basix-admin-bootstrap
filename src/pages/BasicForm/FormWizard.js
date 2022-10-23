import React from "react";

import StepCircleWizard from "./StepWizards/StepCircleWizard";
import StepSquarWizard from "./StepWizards/StepSquarWizard";
import StepTabWizard from "./StepWizards/StepTabWizard";

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
