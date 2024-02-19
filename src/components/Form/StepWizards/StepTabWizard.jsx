import { useState } from "react";
import PersonalDetails from "@/components/Form/StepWizards/Page/PersonalDetails";
import AdditionalInfo from "@/components/Form/StepWizards/Page/AdditionalInfo";
import LoggedIn from "@/components/Form/StepWizards/Page/LoggedIn";
import styles from "@/assets/scss/StepTabWizard.module.scss";

const StepTabWizard = () => {
    const [stepCounter, setStepCounter] = useState(1);

    const arrayList = [
        {
            id: 1,
            icon: "fa-solid fa-user",
            name: "Personal details",
        },
        {
            id: 2,
            icon: "fa-solid fa-user",
            name: "Is Logged In?",
        },
        {
            id: 3,
            icon: "fa-solid fa-gear",
            name: "Additional Info",
        },
        {
            id: 4,
            icon: "fa-solid fa-map",
            name: "Final step",
        },
    ];

    const updateStep = (step) => {
        if (step > 0 && step <= arrayList.length) {
            setStepCounter(step);
        }
    };
    return (
        <div className={`${styles.wizard_wrapper} position-relative mt-5 px-3`}>
            <div className="row">
                <div className={styles.wizard_header}>
                    <h3 className="m-0 text-center">Awesome Wizard</h3>
                    <p className="text-center">
                        Split a complicated flow in multiple steps
                    </p>
                </div>
                {arrayList.map((items, index) => (
                    <div className="col-3 text-center p-0" key={items.id}>
                        <div
                            className={`${styles.step_block} ${
                                stepCounter === index + 1 ? styles.active : ""
                            }`}
                        >
                            <div onClick={() => updateStep(index + 1)}>
                                <div className="mx-auto position-relative">
                                    <i className={`${items.icon}`}></i>
                                </div>
                            </div>
                        </div>
                        <span
                            className={`${styles.step_title} ${
                                stepCounter >= index + 1
                                    ? styles.step_title_active
                                    : ""
                            }`}
                        >
                            {items.name}
                        </span>
                    </div>
                ))}
            </div>
            <div className={styles.step_content}>
                {stepCounter === 1 && <PersonalDetails />}
                {stepCounter === 2 && <LoggedIn />}
                {stepCounter === 3 && <AdditionalInfo />}
                {stepCounter === 4 && (
                    <span className={styles.step_content_title}>
                        Congratulations This is the Final Step
                    </span>
                )}
            </div>
            <div className={`${styles.step_btn_wrapper} mb-4`}>
                {stepCounter > 1 && stepCounter < arrayList.length && (
                    <button onClick={() => updateStep(stepCounter - 1)}>
                        Back
                    </button>
                )}
                <button
                    className="float-end"
                    style={{
                        backgroundColor: `${
                            stepCounter < arrayList.length
                                ? "rgb(230, 126, 34)"
                                : "rgb(67, 160, 71)"
                        }`,
                    }}
                    onClick={() => updateStep(stepCounter + 1)}
                >
                    {stepCounter < arrayList.length ? "Next" : "Done"}
                </button>
            </div>
        </div>
    );
};

export default StepTabWizard;
