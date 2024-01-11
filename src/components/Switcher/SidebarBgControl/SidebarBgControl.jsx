import { useEffect, useState } from "react";
import { useDashboardDataContext } from "../../../context/dashboardDataContext";
import styles from "./SidebarBgControl.module.scss";

import sidebarBg1 from "../image/sidebar-bg/sidebar-bg-1.jpg";
import sidebarBg2 from "../image/sidebar-bg/sidebar-bg-2.jpg";
import sidebarBg3 from "../image/sidebar-bg/sidebar-bg-3.jpg";
import sidebarBg4 from "../image/sidebar-bg/sidebar-bg-4.jpg";
import sidebarBg5 from "../image/sidebar-bg/sidebar-bg-5.jpg";

export const SidebarBgControl = () => {
    const { sidebarBgImg, setSidebarBgImg } = useDashboardDataContext();
    const [selected, setSelected] = useState(3);

    const bgImg = [
        { url: sidebarBg1 },
        { img_url: sidebarBg2 },
        { img_url: sidebarBg3 },
        { img_url: sidebarBg4 },
        { img_url: sidebarBg5 },
    ];

    useEffect(() => {
        const sidebarBg = bgImg.filter((item, index) =>
            index + 1 === selected && !item.url ? item.img_url : ""
        );
        setSidebarBgImg(sidebarBg.map((i) => i.img_url));
    }, [selected, setSidebarBgImg]);

    return (
        <div className={styles.switcher_wrapper}>
            <span className={styles.title}>Sidebar BG Image</span>
            <div className={styles.bg_container}>
                {bgImg.map((item, index) => {
                    return (
                        <div
                            className={`position-relative ${
                                selected === index + 1 ? styles.active : ""
                            }`}
                            onClick={() => {
                                setSelected(index + 1);
                            }}
                            key={index}>
                            {item.url && <img src={item.url} alt="sidebar bg img" />}
                            {item.img_url && <img src={item.img_url} alt="sidebar bg img" />}

                            <span
                                style={{
                                    color: `${sidebarBgImg?.length === 0 ? "#1b5de0" : "#fff"}`,
                                }}
                            />
                        </div>
                    );
                })}
            </div>
        </div>
    );
};
