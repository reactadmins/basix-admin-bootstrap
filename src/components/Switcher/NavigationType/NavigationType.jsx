import { Fragment } from "react";
import { useDashboardDataContext } from "../../../context/dashboardDataContext";
import styles from "./NavigationType.module.scss";

const NavigationType = ({ navList }) => {
    const { activeVariation, setActiveVariation } = useDashboardDataContext();

    return (
        <div className={`${styles.navbar_type_contorl} py-3`}>
            <span className={styles.title}>Navigation Type</span>
            <div className={styles.navbar_setting_panel}>
                {navList.map((item) => {
                    return (
                        <Fragment key={item.id}>
                            <div
                                className={`${styles.navbar_setting_item} ${
                                    activeVariation === item.name.toLowerCase().replace(/\s/g, "_")
                                        ? styles.active
                                        : ""
                                }`}
                                onClick={() =>
                                    setActiveVariation(item.name.toLowerCase().replace(/\s/g, "_"))
                                }>
                                <img src={item.img} alt="navbar-type" />
                                <label>
                                    <div className={styles.active_radio}></div>
                                    <span className={styles.title}>{item.name}</span>
                                </label>
                            </div>
                        </Fragment>
                    );
                })}
            </div>
        </div>
    );
};

export default NavigationType;
