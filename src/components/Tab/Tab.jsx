import { useState } from "react";
import TabOne from "./TabPage/TabOne";
import TabTwo from "./TabPage/TabTwo";
import TabThree from "./TabPage/TabThree";
import style from "../../assets/scss/Tabs.module.scss";

const Tab = ({
    title = "",
    tabData = {},
    tabPosition = "top",
    tabActiveBg,
    tabActiveTextColor,
}) => {
    const [date, setDate] = useState(1);
    return (
        <div className={style.tablist_container}>
            {title ? <h5>{title}</h5> : null}

            <div
                className={`${style.tablist_wrapper} ${style[tabPosition]}`}
            >
                <div className={style.tab_title}>
                    <ul className={style.title_list}>
                        {tabData?.map((tab, index) => (
                            <li
                                className={`${
                                    date === tab.id
                                        ? style.active_tab
                                        : style.inactive_tab
                                }`}
                                style={{
                                    color: `${
                                        date === tab.id
                                            ? tabActiveTextColor
                                            : ""
                                    }`,
                                    background: `${
                                        date === tab.id ? tabActiveBg : ""
                                    }`,
                                }}
                                onClick={() => setDate(tab.id)}
                                key={index}
                            >
                                <div className="d-flex justify-content-center align-items-center gap-2">
                                    {tab.icon && (
                                        <i className={`${tab.icon}`}></i>
                                    )}
                                    {tab.title && <span>{tab.title}</span>}
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
                {date === 1 && <TabOne />}
                {date === 2 && <TabTwo />}
                {date === 3 && <TabThree />}
            </div>
        </div>
    );
};

export default Tab;
