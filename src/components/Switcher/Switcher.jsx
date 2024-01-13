import { useEffect, useState } from "react";
import { useDashboardDataContext } from "../../context/dashboardDataContext";
import vertical_Nav from "./image/nav-type/vertical-nav.png";
import horizontal from "./image/nav-type/horizontal-nav.png";
import combo_Nav from "./image/nav-type/combo-nav.png";
import duall_Nav from "./image/nav-type/dual-nav.png";
import switcherStyle from "./Switcher.module.scss";
import OfferNotice from "./OfferNotice/OfferNotice";
import SwitchControl from "./SwitchControl/SwitchControl";
import ColorControl from "./ColorControl/ColorControl";
import NavigationType from "./NavigationType/NavigationType";
import { SidebarBgControl } from "./SidebarBgControl/SidebarBgControl";

function getStartOrEndOffer(date) {
    return new Date(date).getTime();
}

const Switcher = ({ setSidebarMini, sidebarMini }) => {
    const {
        topNavbarBgColor,
        sidebarBgColor,
        setSidebarBgColor,
        setTopNavbarBgColor,
        navbarFixed,
        setNavbarFixed,
        isDark,
        setIsDark,
        isThemeDirection,
        setIsThemeDirection,
    } = useDashboardDataContext();

    const [isSwitcher, setIsSwitcher] = useState(true);

    const layoutsTheme = [
        {
            name: "Light",
        },
        {
            name: "Dark",
        },
    ];

    const themeDirection = [
        {
            name: "LTR",
        },
        {
            name: "RTL",
        },
    ];

    const sidebarBg = [
        {
            name: "bg_white",
            activeColor: "#1B5DE0",
            bg: "#F4F4F4",
        },
        {
            name: "bg_black",
            activeColor: "#fff",
            bg: "#292b35",
        },
        {
            name: "bg_red",
            activeColor: "#fff",
            bg: "#f44336",
        },
    ];

    const navbarBg = [
        {
            name: "bg_white",
            activeColor: "#1B5DE0",
            bg: "#F4F4F4",
        },
        {
            name: "bg_black",
            activeColor: "#fff",
            bg: "#263238",
        },
        {
            name: "bg_red",
            activeColor: "#fff",
            bg: "#f44336",
        },
    ];

    const navigationType = [
        {
            id: 1,
            name: "Vertical",
            img: vertical_Nav,
        },
        {
            id: 2,
            name: "Horizontal",
            img: horizontal,
        },
        {
            id: 3,
            name: "Combo",
            img: combo_Nav,
        },
        {
            id: 4,
            name: "Dual nav",
            img: duall_Nav,
        },
    ];

    const [offerData, setOfferData] = useState({});
    const [isOpenOffer, setIsOpenOffer] = useState(false);

    const day1 = 8.64e7;
    const day3 = 259200000;

    const product_slug = "basix_admin";

    const offerStartDate = getStartOrEndOffer(offerData?.start_date);
    const offerEndDate = getStartOrEndOffer(offerData?.end_date);
    const currentDate = new Date().getTime();

    // GET Google Sheet Data
    const getSheetData = async () => {
        const sheet_id = "1VLpfKspHHNM6JIFOQtohqDRyHR85J3KR5RLF4jqlz0Q";
        const tab_id = 38890577;
        let url = `https://docs.google.com/spreadsheets/export?format=csv&id=${sheet_id}&gid=${tab_id}`;

        await fetch(url)
            .then((res) => res.text())
            .then((data) => {
                const dataArr = data.split("\n");
                const firstRow = dataArr?.[0]?.split(",");

                const sheetData = dataArr.slice(1, dataArr.length).reduce((acc, current) => {
                    const rowDataArr = current.split(",");
                    const rowData = {};
                    for (let i = 0; i < firstRow?.length; i++) {
                        Object.assign(rowData, { [firstRow[i]]: rowDataArr[i] });
                    }
                    if (rowDataArr?.[1]) {
                        Object.assign(acc, { ...acc, [rowDataArr?.[1]]: rowData });
                    }
                    return acc;
                }, {});

                //counter_time

                const mainObj = sheetData[product_slug];
                const checkCounterTime = new Date(mainObj.counter_time).getTime();

                if (mainObj.counter_time && checkCounterTime < currentDate) {
                    mainObj.counter_time = checkCounterTime + day3;
                }

                if (!mainObj.counter_time) {
                    mainObj.counter_time = currentDate + day3;
                }

                setOfferData(mainObj);

                const obj = {
                    data: mainObj,
                    exp_t: currentDate + day1,
                };

                localStorage.setItem(`${product_slug}_offer_data`, JSON.stringify(obj));

                // offerStartDate < currentDate && currentDate < offerEndDate && isOpenOffer
                // if (mainObj?.start_date < currentDate && currentDate < mainObj?.end_date) {
                //     setIsOpenOffer(true);
                // }
            });
    };

    // Close Offer
    const handleCloseOffer = () => {
        setIsOpenOffer(false);
        localStorage.setItem(`${product_slug}_sl`, currentDate + day1);
    };

    useEffect(() => {
        const savedOfferData = localStorage.getItem(`${product_slug}_offer_data`);
        const isShowOffer = localStorage.getItem(`${product_slug}_sl`);

        // Manage Google Sheet Data
        if (savedOfferData) {
            const offerData = JSON.parse(savedOfferData);
            const currentTime = new Date().getTime();

            if (Object.keys(offerData).length > 0 && currentTime < offerData?.exp_t) {
                setOfferData(offerData?.data);
                setIsOpenOffer(true);
            } else {
                localStorage.removeItem(`${product_slug}_offer_data`);
                getSheetData();
                setIsOpenOffer(true);
            }
        } else {
            getSheetData();
            setIsOpenOffer(true);
        }

        // Manage Show/Hide Offer Notice
        if (isShowOffer && +isShowOffer > currentDate) {
            setIsOpenOffer(false);
        }
    }, []);

    useEffect(() => {
        const body = document.querySelector("body");
        if (!isSwitcher) {
            body.style.overflow = "hidden";
        } else {
            body.removeAttribute("style");
        }
    }, [isSwitcher]);

    return (
        <div className={switcherStyle.switch_wrapper} data={!isThemeDirection ? "false" : "true"}>
            <button
                type="button"
                className={switcherStyle.switch_btn}
                onClick={() => setIsSwitcher(!isSwitcher)}>
                <i className="fa-solid fa-gear"></i>
            </button>

            {offerStartDate < currentDate && currentDate < offerEndDate && isOpenOffer ? (
                <OfferNotice offerData={offerData} onCloseOffer={handleCloseOffer} />
            ) : null}

            <div
                className={`${switcherStyle.switch_menu}`}
                style={
                    !isSwitcher
                        ? { transform: "translateX(0)" }
                        : { transform: "translateX(350px)" }
                }>
                <div className="px-3 py-4">
                    <SwitchControl
                        title="Layouts Theme"
                        directionType="vertical"
                        buttonList={layoutsTheme}
                        activeSwitch={isDark}
                        isActiveSwitch={setIsDark}
                    />
                    <SwitchControl
                        title="Theme Direction"
                        buttonList={themeDirection}
                        activeSwitch={isThemeDirection}
                        isActiveSwitch={setIsThemeDirection}
                    />
                    <NavigationType navList={navigationType} />
                    <SwitchControl
                        title="Navbar Fixed"
                        switchType="checkbox"
                        activeSwitch={navbarFixed}
                        isActiveSwitch={setNavbarFixed}
                    />

                    <SwitchControl
                        title="Sidebar Collapse"
                        switchType="checkbox"
                        activeSwitch={sidebarMini}
                        isActiveSwitch={setSidebarMini}
                    />
                    <ColorControl
                        title="Navbar BG Color Options"
                        bgList={navbarBg}
                        bgColorName={topNavbarBgColor}
                        selectedBg={setTopNavbarBgColor}
                    />

                    <ColorControl
                        title="Sidebar BG Color Options"
                        bgList={sidebarBg}
                        bgColorName={sidebarBgColor}
                        selectedBg={setSidebarBgColor}
                    />

                    <SidebarBgControl />

                    <div className="py-3">
                        <a href="#" className={switcherStyle.bownload_btn}>
                            Download Free
                        </a>
                        <a href="#" className={`${switcherStyle.purchase_btn} mt-2`}>
                            Purchase Now
                        </a>
                        <a href="#" className={`${switcherStyle.documentatione_btn} mt-2`}>
                            Documentation
                        </a>
                    </div>
                    <div className={`${switcherStyle.social_btn} mt-3`}>
                        <a href="#" className={switcherStyle.facebook_btn}>
                            <i className="fa-brands fa-facebook"></i>
                            <span>Share</span>
                        </a>
                        <a href="#" className={switcherStyle.twitter_btn}>
                            <i className="fa-brands fa-twitter"></i>
                            <span>Tweet</span>
                        </a>
                    </div>
                </div>
            </div>

            {!isSwitcher ? (
                <div
                    className={switcherStyle.overlay_bg}
                    onClick={() => setIsSwitcher(!isSwitcher)}></div>
            ) : null}
        </div>
    );
};

export default Switcher;
