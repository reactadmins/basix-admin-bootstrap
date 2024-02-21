import "../../assets/scss/ProgressBar.scss";

const ProgressBar = ({
    isAnimated = false,
    isStriped = false,
    progressBg = "",
    value = "10",
    label = "",
    height = "16px",
    ProgressBarBg = "#E9ECEF",
}) => {
    return (
        <div
            className={`progressbar_container progressbar-container rounded-1`}
            style={{ height: height, backgroundColor: ProgressBarBg }}>
            <div
                className={`rounded-1 progress ${isAnimated ? "progress_bar" : ""}  ${
                    isStriped ? "progress-bar-striped" : ""
                }`}
                role="progressbar"
                style={{
                    width: `${value}%`,
                    height: "100%",
                    alignItems: "center",
                    backgroundColor: progressBg,
                }}
                aria-valuenow="0"
                aria-valuemin="0"
                aria-valuemax="100">
                {label && (
                    <span
                        className="labels text-white d-block text-center w-100"
                        style={{ fontSize: "13px" }}>
                        {label}%
                    </span>
                )}
            </div>
        </div>
    );
};

export default ProgressBar;
