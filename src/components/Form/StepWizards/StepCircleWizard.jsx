import { useState } from "react";
import PersonalDetails from "./Page/PersonalDetails";
import AdditionalInfo from "./Page/AdditionalInfo";
import stepWizardStyle from "../../../assets/scss/StepCircleWizard.module.scss";

const StepCircleWizard = () => {
    const [activeTab, setActiveTab] = useState(1);

    const tabs = [
        {
            id: 1,
            name: "Personal details",
        },
        {
            id: 2,
            name: "Additional Info",
        },
        {
            id: 3,
            name: "Last step",
        },
    ];

    const updateStep = (step) => {
        if (step > 0 && step <= tabs.length) {
            setActiveTab(step);
        }
    };

    return (
        <div className={`${stepWizardStyle.wizard_wrapper} position-relative mt-5 px-3`}>
            <div className="row">
                <div
                    className={`position-absolute ${stepWizardStyle.wizard_progress}`}
                    style={{
                        width: `${
                            activeTab === 1
                                ? "18%"
                                : activeTab === 2
                                ? "50%"
                                : activeTab === 3
                                ? "85%"
                                : ""
                        }`,
                    }}></div>
                {tabs.map((items, index) => (
                    <div className="col-4 text-center p-0" key={items.id}>
                        <div className={stepWizardStyle.step_block}>
                            <div
                                className={stepWizardStyle.step_wrapper}
                                onClick={() => updateStep(index + 1)}>
                                <div
                                    className={`${stepWizardStyle.wizard_icon} ${
                                        activeTab >= index + 1 ? stepWizardStyle.active : ""
                                    } mx-auto position-relative`}>
                                    <span>{items.id}</span>
                                </div>
                            </div>
                        </div>
                        <span
                            className={`${stepWizardStyle.step_title} ${
                                activeTab >= index + 1 ? stepWizardStyle.step_title_active : ""
                            }`}>
                            {items.name}
                        </span>
                    </div>
                ))}
            </div>
            <div className={stepWizardStyle.step_content}>
                {activeTab === 1 && <PersonalDetails />}
                {activeTab === 2 && <AdditionalInfo />}
                {activeTab === 3 && (
                    <span className={`py-2 mb-3 ${stepWizardStyle.step_content_title}`}>
                        Congratulations This is the Final Step
                    </span>
                )}
            </div>
            <div
                className={`${stepWizardStyle.step_btn_wrapper} mb-4`}
                style={{ padding: "0 20px" }}>
                {activeTab > 1 && <button onClick={() => updateStep(activeTab - 1)}>Back</button>}
                <button className="float-end" onClick={() => updateStep(activeTab + 1)}>
                    Next
                </button>
            </div>
        </div>
    );
};

export default StepCircleWizard;
