import React from "react";
import StatsCard from "../../component/Counter/StatsCard/StatsCard";
import SocialBox from "../../component/Counter/SocialBox";
import CardGroup from "../../component/Card/CardGroup";
import NotificationCart from "../../component/Card/NotificationCart";
import ProfileCard from "../../component/Card/ProfileCard";
import ProfileImg from "../../images/admin.jpg";
import OverlayCard from "../../component/Card/OverlayCard/OverlayCard";
import { BarChart, LineChart, Bar, Line } from "recharts";
import "./widgets.scss";

const Widgets = () => {
    return (
        // Start first counter
        <div className="container-fluid p-0 p-0">
            <div className="row gy-4 gx-4">
                <div className="col-md-6 col-lg-3 col-xl-3">
                    <StatsCard
                        alignItem="d-flex justify-content-between align-items-center"
                        cardBody="card-body counter-bg "
                        conuterBg="#5c6bc0"
                        fontSize="1.75rem"
                        fontWeight="400"
                        padding="20px"
                        count={23569}
                        dolar="$"
                        count_name="Revenue"
                        icon={
                            <>
                                <i className="fa-solid fa-cart-shopping" style={{ color: "#fff", fontSize: "3.68em" }}></i>
                            </>
                        }></StatsCard>
                </div>

                <div className="col-md-6 col-lg-3  col-xl-3">
                    <StatsCard
                        alignItem="d-flex justify-content-between align-items-center"
                        cardBody="card-body counter-bg "
                        conuterBg="#66bb6a"
                        count={85}
                        fontSize="1.75rem"
                        fontWeight="400"
                        percentage="%"
                        count_name="Sales Increase"
                        icon={
                            <>
                                <BarChart
                                    width={100}
                                    height={80}
                                    data={[
                                        {
                                            name: "Page A",
                                            uv: 2000,
                                            pv: 2400,
                                            amt: 2400,
                                        },
                                        {
                                            name: "Page B",
                                            uv: 6000,
                                            pv: 1398,
                                            amt: 2210,
                                        },
                                        {
                                            name: "Page C",
                                            uv: 4000,
                                            pv: 9800,
                                            amt: 2290,
                                        },
                                        {
                                            name: "Page D",
                                            uv: 8000,
                                            pv: 3908,
                                            amt: 2000,
                                        },
                                        {
                                            name: "Page E",
                                            uv: 4000,
                                            pv: 4800,
                                            amt: 2181,
                                        },
                                        {
                                            name: "Page F",
                                            uv: 6000,
                                            pv: 3800,
                                            amt: 2500,
                                        },
                                        {
                                            name: "Page G",
                                            uv: 2000,
                                            pv: 4300,
                                            amt: 2100,
                                        },
                                        {
                                            name: "Page G",
                                            uv: 5000,
                                            pv: 4300,
                                            amt: 2100,
                                        },
                                    ]}>
                                    <Bar dataKey="uv" fill="#fff" />
                                </BarChart>
                            </>
                        }></StatsCard>
                </div>
                <div className="col-md-6 col-lg-3 col-xl-3">
                    <StatsCard
                        alignItem="d-flex justify-content-between align-items-center"
                        cardBody="card-body counter-bg "
                        conuterBg="#ffa726"
                        count={6596}
                        fontSize="1.75rem"
                        fontWeight="400"
                        count_name="Total Clients"
                        icon={
                            <>
                                <i className="fa-solid fa-user-group" style={{ color: "#fff", fontSize: "3.68em" }}></i>
                            </>
                        }></StatsCard>
                </div>
                <div className="col-md-6 col-lg-3 col-xl-3">
                    <StatsCard
                        alignItem="d-flex justify-content-between align-items-center"
                        cardBody="card-body counter-bg "
                        conuterBg="#42a5f5"
                        fontSize="1.75rem"
                        fontWeight="400"
                        count={1490}
                        count_name="New Users"
                        icon={
                            <>
                                <LineChart
                                    width={100}
                                    height={70}
                                    data={[
                                        {
                                            name: "Page A",
                                            uv: 400,
                                            pv: 400,
                                            amt: 2400,
                                        },
                                        {
                                            name: "Page B",
                                            uv: 30,
                                            pv: 25000,
                                            amt: 2210,
                                        },
                                        {
                                            name: "Page C",
                                            uv: 10,
                                            pv: 10500,
                                            amt: 2290,
                                        },
                                        {
                                            name: "Page D",
                                            uv: 20,
                                            pv: 50000,
                                            amt: 2000,
                                        },
                                    ]}>
                                    <Line type="monotone" dataKey="pv" stroke="#fff" strokeWidth={2} />
                                </LineChart>
                            </>
                        }></StatsCard>
                </div>
                {/* // End first counter */}

                {/* Start second counter */}

                <div className="col-md-6 col-lg-3 col-xl-3">
                    <StatsCard
                        alignItem="d-flex flex-row-reverse justify-content-evenly align-items-center"
                        innerAlign="d-flex flex-column-reverse "
                        conuterBg="#FFFFF"
                        borderColor="border border-muted"
                        iconBorder="border border-3 border-success rounded-circle d-flex justify-content-center align-items-center"
                        width="65px"
                        height="65px"
                        padding="10px"
                        count={1012}
                        count_name="Total Profit"
                        icon={
                            <>
                                <i className="fa-sharp fa-solid fa-dollar-sign text-success" style={{ fontSize: "24px", color: "#373757" }}></i>
                            </>
                        }></StatsCard>
                </div>
                <div className="col-md-6 col-lg-3 col-xl-3">
                    <StatsCard
                        alignItem="d-flex flex-row-reverse justify-content-evenly align-items-center "
                        borderColor="border border-muted"
                        innerAlign="d-flex flex-column-reverse  "
                        conuterBg="#FFFFF"
                        iconBorder="border border-3 border-primary rounded-circle d-flex justify-content-center align-items-center"
                        width="65px"
                        height="65px"
                        padding="10px"
                        count={667}
                        count_name="New Customers"
                        icon={
                            <>
                                <i className="fa-sharp fa-solid fa-user text-primary" style={{ fontSize: "24px", color: "#373757" }}></i>
                            </>
                        }></StatsCard>
                </div>
                <div className="col-md-6 col-lg-3 col-xl-3">
                    <StatsCard
                        alignItem="d-flex flex-row-reverse justify-content-evenly align-items-center"
                        innerAlign="d-flex flex-column-reverse "
                        borderColor="border border-muted"
                        conuterBg="#FFFFF"
                        iconBorder="border border-3 border-warning rounded-circle d-flex justify-content-center align-items-center"
                        width="65px"
                        height="65px"
                        padding="10px"
                        count={770}
                        count_name="Active Projects"
                        icon={
                            <>
                                <i className="fa-solid fa-table-cells-large text-warning" style={{ fontSize: "24px", color: "#373757" }}></i>
                            </>
                        }></StatsCard>
                </div>
                <div className="col-md-6 col-lg-3 col-xl-3">
                    <StatsCard
                        alignItem="d-flex flex-row-reverse justify-content-evenly align-items-center"
                        innerAlign="d-flex flex-column-reverse"
                        borderColor="border border-muted"
                        conuterBg="#FFFFF"
                        iconBorder="border border-3 border-danger rounded-circle d-flex justify-content-center align-items-center"
                        width="65px"
                        height="65px"
                        padding="10px"
                        count={3781}
                        count_name="Referals"
                        icon={
                            <>
                                <i className="fa-sharp fa-solid fa-link text-danger" style={{ fontSize: "24px", color: "#373757" }}></i>
                            </>
                        }></StatsCard>
                </div>

                {/* <div className="col-md-6 col-lg-3 col-xl-3  ">
                    <StatsCard
                        // icon="fa-sharp fa-solid fa-dollar-sign text-success "
                        icon={
                            <>
                                <i className="fa-sharp fa-solid fa-dollar-sign text-success " style={{ color: "#fff", fontSize: "30px" }}></i>
                            </>
                        }
                        iconDesign="border border-3 rounded-circle d-flex justify-content-center align-items-center"
                        alignItem="d-flex flex-row-reverse justify-content-between align-items-center"
                        innerAlign="counter d-flex flex-column-reverse"
                        count_name="Total Profit"
                        count="1012"
                        iconBorder="border-success"
                    />
                </div>
                <div className="col-md-6 col-lg-3 col-xl-3  ">
                    <StatsCard icon="fa-sharp fa-solid fa-user text-primary " count_name="New Customer" count="961" iconBorder="border-primary" />
                </div>
                <div className="col-md-6 col-lg-3 col-xl-3 ">
                    <StatsCard icon="fa-solid fa-table-cells-large text-warning " count_name="Active Projects" count="770" iconBorder="border-warning" />
                </div>
                <div className="col-md-6 col-lg-3 col-xl-3 ">
                    <StatsCard icon="fa-sharp fa-solid fa-link text-danger " count_name="Referrals" count="2781" />
                </div> */}

                {/* End second counter  */}

                {/* Start third counter  */}

                <div className="col-md-6 col-lg-3 col-xl-3">
                    <StatsCard
                        alignItem="d-flex flex-row-reverse justify-content-evenly align-items-center"
                        innerAlign="d-flex flex-column-reverse"
                        borderColor="border border-muted"
                        conuterBg="#FFFFF"
                        iconBorder=""
                        width="65px"
                        height="65px"
                        padding="10px"
                        count={3781}
                        text="Total: "
                        count_name="Database"
                        icon={
                            <>
                                <i className="fa-solid fa-database" style={{ fontSize: "30px", color: "#373757" }}></i>
                            </>
                        }></StatsCard>
                </div>
                <div className="col-md-6 col-lg-3 col-xl-3">
                    <StatsCard
                        alignItem="d-flex flex-row-reverse justify-content-evenly align-items-center"
                        innerAlign="d-flex flex-column-reverse"
                        borderColor="border border-muted"
                        conuterBg="#FFFFF"
                        width="65px"
                        height="65px"
                        padding="10px"
                        count={3781}
                        text="Total: "
                        count_name="Users"
                        icon={
                            <>
                                <i className="fa-sharp fa-regular fa-user" style={{ fontSize: "30px", color: "#373757" }}></i>
                            </>
                        }></StatsCard>
                </div>
                <div className="col-md-6 col-lg-3 col-xl-3">
                    <StatsCard
                        alignItem="d-flex flex-row-reverse justify-content-evenly align-items-center"
                        innerAlign="d-flex flex-column-reverse"
                        borderColor="border border-muted"
                        conuterBg="#FFFFF"
                        width="65px"
                        dolar="$"
                        height="65px"
                        padding="10px"
                        count={3781}
                        count_name="Daily Sales"
                        text="Total: "
                        icon={
                            <>
                                <i className="fa-solid fa-chart-line " style={{ fontSize: "30px", color: "#373757" }}></i>
                            </>
                        }></StatsCard>
                </div>
                <div className="col-md-6 col-lg-3 col-xl-3">
                    <StatsCard
                        alignItem="d-flex flex-row-reverse justify-content-evenly align-items-center"
                        innerAlign="d-flex flex-column-reverse"
                        borderColor="border border-muted"
                        conuterBg="#FFFFF"
                        width="65px"
                        height="65px"
                        padding="10px"
                        symbol="TB"
                        isCount="false"
                        count={4}
                        count_name="Bandwidth"
                        text="Total: "
                        icon={
                            <>
                                <i className="fa-solid fa-wave-square" style={{ fontSize: "30px", color: "#373757" }}></i>
                            </>
                        }></StatsCard>
                </div>

                {/* <div className="col-md-6 col-lg-3 col-xl-3 ">
                    <StatsCard icon="fa-solid fa-database " count_name="Database" count="765" />
                </div>
                <div className="col-md-6 col-lg-3 col-xl-3 ">
                    <StatsCard icon="fa-sharp fa-regular fa-user " count_name="Users" count="24720" />
                </div>
                <div className="col-md-6 col-lg-3 col-xl-3 ">
                    <StatsCard icon="fa-solid fa-chart-line " dolar="$" count_name="Daily Sales" count="7658714" />
                </div>
                <div className="col-md-6 col-lg-3 col-xl-3 ">
                    <div className="card rounded-0">
                        <div className="card-body bg-white d-flex gap-4 align-items-center">
                            <div className={`d-flex justify-content-center align-items-center`} style={{ width: "65px", height: "65px" }}>
                                <i className="fa-solid fa-wave-square text-secondary" style={{ fontSize: "35px" }}></i>
                            </div>
                            <div>
                                <p className="m-0" style={{ fontSize: "20px" }}>
                                    Bandwidth
                                </p>
                                <p className="m-0" style={{ fontSize: "16px" }}>
                                    Total: 4TB
                                </p>
                            </div>
                        </div>
                    </div>
                </div> */}

                {/* end third counter  */}

                {/* Start four counter  */}
                <div className="col-md-6 col-lg-3 col-xl-3">
                    <StatsCard
                        alignItem="d-flex justify-content-between text-white align-items-center"
                        conuterBg="#5c6bc0"
                        fontSize="1.75rem"
                        fontWeight="400"
                        isProgress="true"
                        padding="20px"
                        count={85}
                        percentage="%"
                        count_name="Lorem isum .."></StatsCard>
                </div>
                <div className="col-md-6 col-lg-3 col-xl-3">
                    <StatsCard
                        alignItem="d-flex justify-content-between text-white align-items-center"
                        conuterBg="#5c6bc0"
                        fontSize="1.75rem"
                        fontWeight="400"
                        isProgress="true"
                        padding="20px"
                        count={1280}
                        count_name="Lorem isum .."></StatsCard>
                </div>
                <div className="col-md-6 col-lg-3 col-xl-3">
                    <StatsCard
                        alignItem="d-flex justify-content-between text-white align-items-center"
                        conuterBg="#5c6bc0"
                        fontSize="1.75rem"
                        fontWeight="400"
                        isProgress="true"
                        dolar="$"
                        padding="20px"
                        count={9850}
                        count_name="Lorem isum .."></StatsCard>
                </div>
                <div className="col-md-6 col-lg-3 col-xl-3">
                    <StatsCard
                        alignItem="d-flex justify-content-between text-white align-items-center"
                        conuterBg="#5c6bc0"
                        fontSize="1.75rem"
                        fontWeight="400"
                        isProgress="true"
                        padding="20px"
                        count={9850}
                        dolar="$"
                        count_name="Lorem isum .."></StatsCard>
                </div>

                {/* <div className="col-md-6 col-lg-3 col-xl-3 ">
                    <StatsCard headingTag="h1" cardBg="#5c6bc0" count="89" percentage="%" />
                </div>

                <div className="col-md-6 col-lg-3 col-xl-3 ">
                    <StatsCard headingTag="h1" cardBg="#FFA726" count="12124" />
                </div>
                <div className="col-md-6 col-lg-3 col-xl-3 ">
                    <StatsCard headingTag="h1" cardBg="#EF5350" count="9811100" dolar="$" />
                </div>
                <div className="col-md-6 col-lg-3 col-xl-3 ">
                    <StatsCard headingTag="h1" cardBg="#42A5F5" count="9811100" dolar="$" />
                </div> */}

                {/* End Four Counter 

                {/* Stat first ClearFix  */}

                <div className="col-md-6 col-lg-3 col-xl-3">
                    <StatsCard
                        alignItem="d-flex flex-row-reverse justify-content-evenly align-items-center"
                        // innerAlign="d-flex flex-column-reverse"
                        borderColor="border border-muted"
                        conuterBg="#FFFFF"
                        iconBorder=" bg-success d-flex justify-content-center align-items-center"
                        width="65px"
                        height="65px"
                        padding="10px"
                        count={3781}
                        dolar="$"
                        // text="Total: "
                        count_name="Income"
                        icon={
                            <>
                                <i className="fa-sharp fa-solid fa-gears " style={{ color: "#fff", fontSize: "1.68em" }}></i>
                            </>
                        }></StatsCard>
                </div>
                <div className="col-md-6 col-lg-3 col-xl-3">
                    <StatsCard
                        alignItem="d-flex flex-row-reverse justify-content-evenly align-items-center"
                        // innerAlign="d-flex flex-column-reverse"
                        borderColor="border border-muted"
                        conuterBg="#FFFFF"
                        iconBorder=" bg-info d-flex justify-content-center align-items-center"
                        width="65px"
                        height="65px"
                        padding="10px"
                        count={3781}
                        dolar="$"
                        // text="Total: "
                        count_name="Income"
                        icon={
                            <>
                                <i className="fa-sharp fa-solid fa-laptop " style={{ color: "#fff", fontSize: "1.68em" }}></i>
                            </>
                        }></StatsCard>
                </div>
                <div className="col-md-6 col-lg-3 col-xl-3">
                    <StatsCard
                        alignItem="d-flex flex-row-reverse justify-content-evenly align-items-center"
                        // innerAlign="d-flex flex-column-reverse"
                        borderColor="border border-muted"
                        conuterBg="#FFFFF"
                        iconBorder=" bg-warning d-flex justify-content-center align-items-center"
                        width="65px"
                        height="65px"
                        padding="10px"
                        count={3781}
                        dolar="$"
                        // text="Total: "
                        count_name="Income"
                        icon={
                            <>
                                <i className="fa-sharp fa-regular fa-moon " style={{ color: "#fff", fontSize: "1.68em" }}></i>
                            </>
                        }></StatsCard>
                </div>
                <div className="col-md-6 col-lg-3 col-xl-3">
                    <StatsCard
                        alignItem="d-flex flex-row-reverse justify-content-evenly align-items-center"
                        // innerAlign="d-flex flex-column-reverse"
                        borderColor="border border-muted"
                        conuterBg="#FFFFF"
                        iconBorder=" bg-danger d-flex justify-content-center align-items-center"
                        width="65px"
                        height="65px"
                        padding="10px"
                        count={3781}
                        dolar="$"
                        // text="Total: "
                        count_name="Income"
                        icon={
                            <>
                                <i className="fa-sharp fa-solid fa-bell" style={{ color: "#fff", fontSize: "1.68em" }}></i>
                            </>
                        }></StatsCard>
                </div>

                {/* <div className="col-md-6 col-lg-3 col-xl-3 ">
                    <StatsCard cardBg="#4DBD74" font="fa-sharp fa-solid fa-gears" color="#868e96" width="45px" height="45px" />
                </div>

                <div className="col-md-6 col-lg-3 col-xl-3 ">
                    <StatsCard cardBg="#17A2B8" font="fa-sharp fa-solid fa-laptop " color="#868e96" width="45px" height="45px" />
                </div>
                <div className="col-md-6 col-lg-3 col-xl-3  ">
                    <StatsCard cardBg="#FFC107" font="fa-sharp fa-regular fa-moon" color="#868e96" width="45px" height="45px" />
                </div>
                <div className="col-md-6 col-lg-3 col-xl-3 ">
                    <StatsCard cardBg="#DC3545" font="fa-sharp fa-solid fa-bell " color="#868e96" width="45px" height="45px" />
                </div>
                <div className="col-md-6 col-lg-3 col-xl-3 ">
                    <StatsCard
                        cardBg="#4DBD74"
                        font="fa-sharp fa-solid fa-gears "
                        color="#868e96"
                        width="45px"
                        height="45px"
                        ViewMore={
                            <div>
                                <hr className="my-4" />
                                <a
                                    href="#"
                                    className="d-flex align-items-center justify-content-between text-decoration-none"
                                    style={{
                                        color: "#868e96",
                                        fontSize: "15px",
                                        fontWeight: "700",
                                    }}>
                                    View More <i className="fa-sharp fa-solid fa-angle-right"></i>
                                </a>
                            </div>
                        }
                    />
                </div> */}

                {/* End First ClearFix  */}

                {/* Start second ClearFix  */}
                <div className="col-md-6 col-lg-3 col-xl-3 ">
                    <StatsCard
                        cardBg="#17A2B8"
                        font="fa-sharp fa-solid fa-laptop "
                        color="#868e96"
                        width="45px"
                        height="45px"
                        ViewMore={
                            <div>
                                <hr className="my-4" />
                                <a
                                    href="#"
                                    className="d-flex align-items-center justify-content-between text-decoration-none"
                                    style={{
                                        color: "#868e96",
                                        fontSize: "15px",
                                        fontWeight: "700",
                                    }}>
                                    View More <i className="fa-sharp fa-solid fa-angle-right"></i>
                                </a>
                            </div>
                        }
                    />
                </div>
                <div className="col-md-6 col-lg-3 col-xl-3 ">
                    <StatsCard
                        cardBg="#FFC107"
                        font="fa-sharp fa-regular fa-moon"
                        color="#868e96"
                        width="45px"
                        height="45px"
                        ViewMore={
                            <div>
                                <hr className="my-4" />
                                <a
                                    href="#"
                                    className="d-flex align-items-center justify-content-between text-decoration-none"
                                    style={{
                                        color: "#868e96",
                                        fontSize: "15px",
                                        fontWeight: "700",
                                    }}>
                                    View More <i className="fa-sharp fa-solid fa-angle-right"></i>
                                </a>
                            </div>
                        }
                    />
                </div>
                <div className="col-md-6 col-lg-3 col-xl-3 ">
                    <StatsCard
                        cardBg="#DC3545"
                        font="fa-sharp fa-solid fa-bell "
                        color="#868e96"
                        width="45px"
                        height="45px"
                        ViewMore={
                            <div>
                                <hr className="my-4" />
                                <a
                                    href="#"
                                    className="d-flex align-items-center justify-content-between text-decoration-none"
                                    style={{
                                        color: "#868e96",
                                        fontSize: "15px",
                                        fontWeight: "700",
                                    }}>
                                    View More <i className="fa-sharp fa-solid fa-angle-right"></i>
                                </a>
                            </div>
                        }
                    />
                </div>

                {/* End Second ClearFix  */}

                {/* Start Third ClearFix  */}
                <div className="col-md-6 col-lg-3 col-xl-3 ">
                    <StatsCard cardBg="#4DBD74" font="fa-sharp fa-solid fa-gears " color="#4DBD74" width="70px" height="70px" padding="p-0" paddingBottom="pt-3" />
                </div>
                <div className="col-md-6 col-lg-3 col-xl-3 ">
                    <StatsCard cardBg="#17A2B8" font="fa-sharp fa-solid fa-laptop " color="#17A2B8" width="70px" height="70px" padding="p-0" paddingBottom="pt-3" />
                </div>
                <div className="col-md-6 col-lg-3 col-xl-3 ">
                    <StatsCard cardBg="#FFC107" font="fa-sharp fa-regular fa-moon" color="#FFC107" width="70px" height="70px" padding="p-0" paddingBottom="pt-3" />
                </div>
                <div className="col-md-6 col-lg-3 col-xl-3 ">
                    <StatsCard cardBg="#DC3545" font="fa-sharp fa-solid fa-bell " color="#DC3545" width="70px" height="70px" padding="p-0" paddingBottom="pt-3" />
                </div>

                {/* End Third ClearFix  */}

                {/* Start Four ClearFix  */}

                <div className="col-md-6 col-lg-3 col-xl-3 ">
                    <StatsCard cardBg="#4DBD74" font="fa-sharp fa-solid fa-gears " color="#4DBD74" width="100px" height="70px" padding="p-0" paddingBottom="pt-3" />
                </div>
                <div className="col-md-6 col-lg-3 col-xl-3 ">
                    <StatsCard cardBg="#17A2B8" font="fa-sharp fa-solid fa-laptop " color="#17A2B8" width="100px" height="70px" padding="p-0" paddingBottom="pt-3" />
                </div>
                <div className="col-md-6 col-lg-3 col-xl-3 ">
                    <StatsCard cardBg="#FFC107" font="fa-sharp fa-regular fa-moon" color="#FFC107" width="100px" height="70px" padding="p-0" paddingBottom="pt-3" />
                </div>
                <div className="col-md-6 col-lg-3 col-xl-3 ">
                    <StatsCard cardBg="#DC3545" font="fa-sharp fa-solid fa-bell " color="#DC3545" width="100px" height="70px" padding="p-0" paddingBottom="pt-3" />
                </div>

                {/* End Four ClearFix  */}

                <div className="col-md-6 col-lg-3 col-xl-3 ">
                    <SocialBox background="#3B5998" font="fa-brands fa-facebook-f" followersCount="40" total="K" followers="FRIENDS" SocialCount="40" SocialName="FEEDS" />
                </div>
                <div className="col-md-6 col-lg-3 col-xl-3 ">
                    <SocialBox background="#00ACED" font="fa-brands fa-twitter" followersCount="30" total="K" followers="FRIENDS" SocialCount="450" SocialName="TWEETS" />
                </div>
                <div className="col-md-6 col-lg-3 col-xl-3 ">
                    <SocialBox background="#4875B4" font="fa-brands fa-linkedin-in" followersCount="40" total="+" followers="CONTACTS" SocialCount="250" SocialName="FEEDS" />
                </div>
                <div className="col-md-6 col-lg-3 col-xl-3 ">
                    <SocialBox background="#D34836" font="fa-brands fa-google-plus-g" followersCount="894 " total="k" followers="FOLLOWERS" SocialCount="92" SocialName="CIRCLES" />
                </div>
                <div className="col-md-12 col-lg-12 col-xl-12">
                    <div className="card-group">
                        <div className="col-md-4 col-lg-4 col-xl-2">
                            <CardGroup
                                headingTag="h1"
                                cardBg="#fff"
                                font="fa-solid fa-user"
                                fontColor="#868e96"
                                FontSize="17px"
                                conunt="87500"
                                conuntName="Visitors"
                                conuntColor="#868e96"
                                progressBg="#5C6BC0"
                                progressMargin="mt-3"
                            />
                        </div>
                        <div className="col-md-4 col-lg-4 col-xl-2">
                            <CardGroup
                                cardBorder="data-v-049d8d42"
                                headingTag="h1"
                                cardBg="#fff"
                                font="fa-solid fa-user-plus"
                                fontColor="#868e96"
                                FontSize="17px"
                                conunt="385"
                                conuntName="NEW CLIENTS"
                                conuntColor="#868e96"
                                progressBg="#42A5F5"
                                progressMargin="mt-3"
                            />
                        </div>
                        <div className="col-md-4 col-lg-4 col-xl-2">
                            <CardGroup
                                headingTag="h1"
                                cardBg="#fff"
                                font="fa-solid fa-cart-plus"
                                fontColor="#868e96"
                                FontSize="17px"
                                conunt="1238"
                                conuntName="Products sold"
                                conuntColor="#868e96"
                                progressBg="#FFA726"
                                progressMargin="mt-3"
                            />
                        </div>
                        <div className="col-md-4 col-lg-4 col-xl-2">
                            <CardGroup
                                cardBorder="data-v-049d8d44"
                                headingTag="h1"
                                cardBg="#fff"
                                font="fa-solid fa-chart-pie"
                                fontColor="#868e96"
                                FontSize="17px"
                                conunt="28%"
                                conuntName="Returning Visitors"
                                conuntColor="#868e96"
                                progressBg="#4DBD74"
                                progressMargin="mt-3"
                            />
                        </div>
                        <div className="col-md-4 col-lg-4 col-xl-2">
                            <CardGroup
                                cardBorder="data-v-049d8d45"
                                headingTag="h1"
                                cardBg="#fff"
                                font="fa-regular fa-clock"
                                fontColor="#868e96"
                                FontSize="17px"
                                conunt="5:34:11"
                                conuntName="Avg. Time"
                                conuntColor="#868e96"
                                progressBg="#EF5350"
                                progressMargin="mt-3"
                            />
                        </div>
                        <div className="col-md-4 col-lg-4 col-xl-2">
                            <CardGroup
                                cardBorder="data-v-049d8d46"
                                headingTag="h1"
                                cardBg="#fff"
                                font="fa-regular fa-comments"
                                fontColor="#868e96"
                                FontSize="17px"
                                conunt="972"
                                conuntName="COMMENTS"
                                conuntColor="#868e96"
                                progressBg="#5C6BC0"
                                progressMargin="mt-3"
                            />
                        </div>
                    </div>
                </div>
                <div className="col-md-12 col-lg-12 col-xl-12">
                    <div className="card-group">
                        <div className="col-md-4 col-lg-4 col-xl-2">
                            <CardGroup
                                headingTag="h1"
                                cardBg="#5C6BC0"
                                font="fa-solid fa-user"
                                fontColor="#fff"
                                FontSize="2rem"
                                conunt="87500"
                                color="#fff"
                                conuntName="Visitors"
                                conuntColor="#fff"
                                progressBg="#fff"
                                progressMargin="my-4"
                            />
                        </div>
                        <div className="col-md-4 col-lg-4 col-xl-2">
                            <CardGroup
                                headingTag="h1"
                                cardBg="#42A5F5"
                                font="fa-solid fa-user-plus"
                                fontColor="#fff"
                                FontSize="2rem"
                                conunt="385"
                                color="#fff"
                                conuntName="NEW CLIENTS"
                                conuntColor="#fff"
                                progressBg="#fff"
                                progressMargin="my-4"
                            />
                        </div>
                        <div className="col-md-4 col-lg-4 col-xl-2">
                            <CardGroup
                                headingTag="h1"
                                cardBg="#FFA726"
                                font="fa-solid fa-cart-plus"
                                fontColor="#fff"
                                FontSize="2rem"
                                conunt="1238"
                                color="#fff"
                                conuntName="Products sold"
                                conuntColor="#fff"
                                progressBg="#fff"
                                progressMargin="my-4"
                            />
                        </div>
                        <div className="col-md-4 col-lg-4 col-xl-2">
                            <CardGroup
                                headingTag="h1"
                                cardBg="#4DBD74"
                                font="fa-solid fa-chart-pie"
                                fontColor="#fff"
                                FontSize="2rem"
                                conunt="28%"
                                color="#fff"
                                conuntName="Returning Visitors"
                                conuntColor="#fff"
                                progressBg="#fff"
                                progressMargin="my-4"
                            />
                        </div>
                        <div className="col-md-4 col-lg-4 col-xl-2">
                            <CardGroup
                                headingTag="h1"
                                cardBg="#EF5350"
                                font="fa-regular fa-clock"
                                fontColor="#fff"
                                FontSize="2rem"
                                conunt="5:34:11"
                                color="#fff"
                                conuntName="Avg. Time"
                                conuntColor="#fff"
                                progressBg="#fff"
                                progressMargin="my-4"
                            />
                        </div>
                        <div className="col-md-4 col-lg-4 col-xl-2">
                            <CardGroup
                                headingTag="h1"
                                cardBg="#5C6BC0"
                                font="fa-regular fa-comments"
                                fontColor="#fff"
                                FontSize="2rem"
                                conunt="972"
                                color="#fff"
                                conuntName="COMMENTS"
                                conuntColor="#fff"
                                progressBg="#fff"
                                progressMargin="my-4"
                            />
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-6 col-lg-4 col-xl-4">
                    <NotificationCart />
                </div>
                <div className="col-12 col-md-6 col-lg-4 col-xl-4">
                    <ProfileCard cardHeader="Profile Card" cardImg={ProfileImg} />
                </div>
                <div className="col-12 col-md-6 col-lg-4 col-xl-4">
                    <OverlayCard></OverlayCard>
                </div>
            </div>
        </div>
    );
};

export default Widgets;
