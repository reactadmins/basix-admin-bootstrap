import { Fragment, createContext, useContext, useState } from "react";
import style from "../../assets/scss/Stats.module.scss";

export const ActiveTabContext = createContext();

export const Stats = ({ children, activeTab }) => {
    const [active, setActive] = useState(activeTab);

    return (
        <div className={style.stats}>
            <ul className="d-flex">
                {children?.map((item) => {
                    return (
                        <li
                            key={item.props.eventKey}
                            onClick={() => setActive(item.props.eventKey)}
                            className={`${
                                item.props.eventKey === active
                                    ? style.active
                                    : ""
                            }`}
                        >
                            {item.props.title}
                        </li>
                    );
                })}
            </ul>
            <ActiveTabContext.Provider value={{ active, setActive }}>
                {children}
            </ActiveTabContext.Provider>
        </div>
    );
};

export const StatsTab = ({ children, eventKey }) => {
    let { active } = useContext(ActiveTabContext);
    return <Fragment>{eventKey === active && children}</Fragment>;
};
