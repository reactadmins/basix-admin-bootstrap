import { Card } from "react-bootstrap";
import ProgressBar from "../ProgressBar/ProgressBar";
import { useDashboardDataContext } from "../../context/dashboardDataContext";
import style from "../../assets/scss/UserStats.module.scss";

const UserStats = ({
    bgColor = "#fff",
    icon = "",
    conunt = "",
    title = "",
    size = "sm",
    progressBg = "#fff",
    progressPercent = "",
}) => {
    return (
        <Card
            className={`rounded-0 ${style.card}`}
            style={{
                backgroundColor: `${bgColor ? bgColor : "var(--bg-content)"}`,
            }}
        >
            <Card.Body>
                <div className="text-end mb-3">
                    <i
                        className={`${icon}`}
                        style={{
                            fontSize: `${
                                (size == "sm" && "17px") ||
                                (size == "2xl" && "2rem")
                            }`,
                            color: `${
                                bgColor == "#fff"
                                    ? "var(--content-text-color)"
                                    : "#fff"
                            }`,
                        }}
                    ></i>
                </div>
                <div>
                    <h2
                        style={{
                            fontSize: "1.5rem",
                            color: `${
                                bgColor == "#fff"
                                    ? "var(--hedging-text-color)"
                                    : "#fff"
                            }`,
                            fontWeight: "500",
                        }}
                    >
                        {conunt}
                    </h2>
                    <span
                        className="d-block text-uppercase"
                        style={{
                            fontSize: "14px",
                            color: `${
                                bgColor == "#fff"
                                    ? "var(--content-text-color)"
                                    : "#fff"
                            }`,
                            fontWeight: "700",
                        }}
                    >
                        {title}
                    </span>
                </div>
                <div className={`mt-3 ${size == "2xl" ? "mb-3" : "mb-2"}`}>
                    <ProgressBar
                        percent={progressPercent}
                        progressBg="transparent"
                        height={5}
                        strokeColor={progressBg}
                    />
                </div>
            </Card.Body>
        </Card>
    );
};

export default UserStats;
