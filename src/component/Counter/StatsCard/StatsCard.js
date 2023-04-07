import React from "react";
import CountUp from "react-countup";
import "./StatsCard.scss";

const FirstCounter = ({
    dolar = "",
    count = "",
    percentage = "",
    color = "",
    count_name = "",
    icon = "",
    conuterBg = "",
    borderColor = "",
    cardBg = "",
    font = "",
    width = "",
    height = "height",
    padding = "",
    ViewMore = "",
    paddingBottom = "",
}) => {
    return (
        <>
            {conuterBg ? (
                <div className="card border-0 rounded-0  overflow-hidden counter-wrapper">
                    <div className="card-body counter-bg " style={{ padding: "20px", backgroundColor: `${conuterBg}` }}>
                        <div className="d-flex justify-content-between align-items-center">
                            <div className="counter">
                                <div style={{ fontSize: "1.75rem", fontWeight: "400" }}>
                                    {dolar && <span className="mx-1">{dolar}</span>}
                                    <CountUp end={count} duration={4}></CountUp>
                                    {percentage && <span>{percentage}</span>}
                                </div>
                                <p>{count_name}</p>
                            </div>
                            <div className="counter-icon">{icon}</div>
                        </div>
                    </div>
                </div>
            ) : !cardBg ? (
                <div className="card rounded-0">
                    <div className="card-body bg-white d-flex gap-4 align-items-center">
                        <div className={`border border-3 ${borderColor} rounded-circle d-flex justify-content-center align-items-center`} style={{ width: "65px", height: "65px" }}>
                            <i className={`${icon}`} style={{ fontSize: "30px" }}></i>
                        </div>
                        <div>
                            <p className="text-secondary m-0">{`${count_name}`}</p>
                            <div>
                                <CountUp end={`${count}`} duration={3} style={{ fontSize: "24px", color: "#373757" }}></CountUp>
                            </div>
                        </div>
                    </div>
                </div>
            ) : !font ? (
                <div className="card rounded-0">
                    <div className="card-body text-white" style={{ backgroundColor: `${cardBg}` }}>
                        <div className="d-flex align-items-center">
                            <span className="mx-1" style={{ fontSize: "25px" }}>
                                {dolar}
                            </span>
                            <CountUp end={`${count}`} duration={3} style={{ fontSize: "25px" }}></CountUp>
                            <span className="m-0" style={{ fontSize: "25px" }}>
                                {percentage}
                            </span>
                        </div>
                        <div>
                            <h4 style={{ fontSize: "17px" }}>Lorem ipsum...</h4>
                            <div className="bg-white" style={{ width: "55px", height: "5px" }}></div>
                            <small style={{ fontSize: "80%" }} name="">
                                Lorem ipsum dolor sit amet enim.
                            </small>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="card rounded-0">
                    <div className={`card-body ${padding}`}>
                        <div className="d-flex gap-3 align-items-center">
                            <div
                                className="d-flex justify-content-center align-items-center"
                                style={{
                                    width: `${width}`,
                                    height: `${height}`,
                                    backgroundColor: `${cardBg}`,
                                }}>
                                <i className={`${font} text-white`} style={{ fontSize: "18px" }}></i>
                            </div>
                            <div className={`${paddingBottom}`}>
                                <p className="h5 m-0" style={{ color: `${color}` }}>
                                    $4.999,50
                                </p>
                                <span style={{ fontSize: "14px", fontWeight: "700", color: "#868e96" }}>INCOME</span>
                            </div>
                        </div>
                        <div>{ViewMore}</div>
                    </div>
                </div>
            )}
        </>
    );
};

export default FirstCounter;
