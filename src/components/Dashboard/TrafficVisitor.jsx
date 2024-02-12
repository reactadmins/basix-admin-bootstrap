import visitorStyle from "../../assets/scss/TrafficVisitor.module.scss";

const TrafficVisitor = () => {
    return (
        <div className={visitorStyle.visitor_wrapper}>
            <span className={`${visitorStyle.title} text-center d-block`}>
                Visits
            </span>
            <h4
                className={`${visitorStyle.counter} counter text-center m-0 text-uppercase`}
            >
                29.703 Users (40%)
            </h4>
            <div className={visitorStyle.progress}>
                <div
                    className={visitorStyle.progress_bar}
                    role="progressbar"
                    aria-valuenow=""
                    aria-valuemin="0"
                    aria-valuemax="100"
                ></div>
            </div>
        </div>
    );
};

export default TrafficVisitor;
