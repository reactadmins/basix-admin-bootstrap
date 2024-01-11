import { Fragment } from "react";
import switcherStyle from "../Switcher.module.scss";

const SwitchControl = ({
    directionType = "",
    title,
    switchType = "groupSwitch",
    buttonList = "",
    activeSwitch,
    isActiveSwitch,
}) => {
    return (
        <div className={switcherStyle.switch_contorl}>
            <div
                className={switcherStyle.toggle_button}
                style={{
                    gap: `${directionType === "vertical" ? "10px" : ""}`,
                }}>
                <span>{title}</span>
                {switchType === "checkbox" ? (
                    <button
                        type="button"
                        className={`${switcherStyle.switch} ${
                            activeSwitch ? switcherStyle.active : ""
                        }`}
                        onClick={() => isActiveSwitch(!activeSwitch)}>
                        <input type="checkbox" />
                        <span className={switcherStyle.slider}></span>
                    </button>
                ) : (
                    <div
                        data={activeSwitch ? "true" : "false"}
                        className={switcherStyle.group_swatch}>
                        {buttonList.map((item, index) => {
                            return (
                                <Fragment key={index}>
                                    <button
                                        type="button"
                                        onClick={() => {
                                            isActiveSwitch(!activeSwitch);
                                        }}>
                                        {item.name}
                                    </button>
                                </Fragment>
                            );
                        })}
                    </div>
                )}
            </div>
        </div>
    );
};

export default SwitchControl;
