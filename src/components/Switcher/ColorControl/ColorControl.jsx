import { Fragment, useEffect, useState } from "react";
import styles from "./ColorControl.module.scss";

const ColorControl = ({ title, bgList, bgColorName, selectedBg }) => {
    const [active, setActive] = useState(bgColorName);

    useEffect(() => {
        bgList.filter((item) => {
            if (item.name === active) {
                selectedBg(item.name);
            }
        });
    }, [active, bgList, selectedBg]);

    return (
        <div className={styles.color_control_wrapper}>
            <h2 className={styles.title}>{title}</h2>
            <div className={styles.bg_wrapper}>
                {bgList?.map((item, index) => {
                    return (
                        <Fragment key={index}>
                            <button
                                type="button"
                                style={{
                                    backgroundColor: `${item.bg}`,
                                }}
                                className={`${active === item.name ? styles.active : ""}`}
                                onClick={() => {
                                    setActive(item.name);
                                }}>
                                <span
                                    style={{
                                        color: `${active === item.name ? item.activeColor : ""}`,
                                    }}></span>
                            </button>
                        </Fragment>
                    );
                })}
            </div>
        </div>
    );
};

export default ColorControl;
