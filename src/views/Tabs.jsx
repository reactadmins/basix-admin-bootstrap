import { Col, Row } from "react-bootstrap";
import { Tab, TabPage } from "@/components/Tab/Tab";

const Tabs = () => {
    let styles = {
        fontSize: "0.875em",
        fontWeight: "600",
        color: "var(--hedging-text-color)",
        marginTop: "25px",
        marginBottom: "15px",
    };
    return (
        <div className="tabs-wrapper">
            <Row className="gy-4 gx-4">
                <Col md={6}>
                    <h5 style={styles}>Top Horizontal</h5>
                    <Tab
                        activeTab="home"
                        tabActiveBg="#292b35"
                        tabActiveTextColor="#fff"
                    >
                        <TabPage eventKey="home" title="Home">
                            <div
                                className="w-100 h-100"
                                style={{ padding: "20px" }}
                            >
                                <p
                                    style={{
                                        color: "var(--hedging-text-color)",
                                    }}
                                >
                                    1. Lorem ipsum dolor sit amet, consectetur
                                    adipisicing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua.
                                    Ut enim ad minim veniam, quis nostrud
                                    exercitation ullamco laboris nisi ut aliquip
                                    ex ea commodo consequat.
                                </p>
                            </div>
                        </TabPage>
                        <TabPage eventKey="profile" title="Profile">
                            <div
                                className="w-100 h-100"
                                style={{ padding: "20px" }}
                            >
                                <p
                                    style={{
                                        color: "var(--hedging-text-color)",
                                    }}
                                >
                                    2. Lorem ipsum dolor sit amet, consectetur
                                    adipisicing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua.
                                    Ut enim ad minim veniam, quis nostrud
                                    exercitation ullamco laboris nisi ut aliquip
                                    ex ea commodo consequat.
                                </p>
                            </div>
                        </TabPage>
                        <TabPage eventKey="messages" title="Messages">
                            <div
                                className="w-100 h-100"
                                style={{ padding: "20px" }}
                            >
                                <p
                                    style={{
                                        color: "var(--hedging-text-color)",
                                    }}
                                >
                                    3. Lorem ipsum dolor sit amet, consectetur
                                    adipisicing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua.
                                    Ut enim ad minim veniam, quis nostrud
                                    exercitation ullamco laboris nisi ut aliquip
                                    ex ea commodo consequat.
                                </p>
                            </div>
                        </TabPage>
                    </Tab>
                </Col>
                <Col md={6}>
                    <h5 style={styles}>Bottom Horizontal</h5>
                    <Tab
                        activeTab="home"
                        tabActiveBg="#292b35"
                        tabActiveTextColor="#fff"
                        tabPosition="bottom"
                    >
                        <TabPage eventKey="home" title="Home" icon="fa fa-home">
                            <div
                                className="w-100 h-100"
                                style={{ padding: "20px" }}
                            >
                                <p
                                    style={{
                                        color: "var(--hedging-text-color)",
                                    }}
                                >
                                    1. Lorem ipsum dolor sit amet, consectetur
                                    adipisicing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua.
                                    Ut enim ad minim veniam, quis nostrud
                                    exercitation ullamco laboris nisi ut aliquip
                                    ex ea commodo consequat.
                                </p>
                            </div>
                        </TabPage>
                        <TabPage
                            eventKey="profile"
                            title="Profile"
                            icon="fa-sharp fa-solid fa-user"
                        >
                            <div
                                className="w-100 h-100"
                                style={{ padding: "20px" }}
                            >
                                <p
                                    style={{
                                        color: "var(--hedging-text-color)",
                                    }}
                                >
                                    2. Lorem ipsum dolor sit amet, consectetur
                                    adipisicing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua.
                                    Ut enim ad minim veniam, quis nostrud
                                    exercitation ullamco laboris nisi ut aliquip
                                    ex ea commodo consequat.
                                </p>
                            </div>
                        </TabPage>
                        <TabPage
                            eventKey="messages"
                            title="Messages"
                            icon="fa fa-comments"
                        >
                            <div
                                className="w-100 h-100"
                                style={{ padding: "20px" }}
                            >
                                <p
                                    style={{
                                        color: "var(--hedging-text-color)",
                                    }}
                                >
                                    3. Lorem ipsum dolor sit amet, consectetur
                                    adipisicing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua.
                                    Ut enim ad minim veniam, quis nostrud
                                    exercitation ullamco laboris nisi ut aliquip
                                    ex ea commodo consequat.
                                </p>
                            </div>
                        </TabPage>
                    </Tab>
                </Col>
                <Col md={6}>
                    <h5 style={styles}>Left Vertical</h5>
                    <Tab
                        activeTab="home"
                        tabActiveBg="#292b35"
                        tabActiveTextColor="#fff"
                        tabPosition="left"
                    >
                        <TabPage eventKey="home" icon="fa fa-home">
                            <div
                                className="w-100 h-100"
                                style={{ padding: "20px" }}
                            >
                                <p
                                    style={{
                                        color: "var(--hedging-text-color)",
                                    }}
                                >
                                    1. Lorem ipsum dolor sit amet, consectetur
                                    adipisicing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua.
                                    Ut enim ad minim veniam, quis nostrud
                                    exercitation ullamco laboris nisi ut aliquip
                                    ex ea commodo consequat.
                                </p>
                            </div>
                        </TabPage>
                        <TabPage
                            eventKey="profile"
                            icon="fa-sharp fa-solid fa-user"
                        >
                            <div
                                className="w-100 h-100"
                                style={{ padding: "20px" }}
                            >
                                <p
                                    style={{
                                        color: "var(--hedging-text-color)",
                                    }}
                                >
                                    2. Lorem ipsum dolor sit amet, consectetur
                                    adipisicing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua.
                                    Ut enim ad minim veniam, quis nostrud
                                    exercitation ullamco laboris nisi ut aliquip
                                    ex ea commodo consequat.
                                </p>
                            </div>
                        </TabPage>
                        <TabPage eventKey="messages" icon="fa fa-comments">
                            <div
                                className="w-100 h-100"
                                style={{ padding: "20px" }}
                            >
                                <p
                                    style={{
                                        color: "var(--hedging-text-color)",
                                    }}
                                >
                                    3. Lorem ipsum dolor sit amet, consectetur
                                    adipisicing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua.
                                    Ut enim ad minim veniam, quis nostrud
                                    exercitation ullamco laboris nisi ut aliquip
                                    ex ea commodo consequat.
                                </p>
                            </div>
                        </TabPage>
                    </Tab>
                </Col>
                <Col md={6}>
                    <h5 style={styles}>Right Vertical</h5>
                    <Tab
                        activeTab="home"
                        tabActiveBg="#292b35"
                        tabActiveTextColor="#fff"
                        iconPosition="right"
                        tabPosition="right"
                    >
                        <TabPage eventKey="home" title="Home" icon="fa fa-home">
                            <div
                                className="w-100 h-100"
                                style={{ padding: "20px" }}
                            >
                                <p
                                    style={{
                                        color: "var(--hedging-text-color)",
                                    }}
                                >
                                    1. Lorem ipsum dolor sit amet, consectetur
                                    adipisicing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua.
                                    Ut enim ad minim veniam, quis nostrud
                                    exercitation ullamco laboris nisi ut aliquip
                                    ex ea commodo consequat.
                                </p>
                            </div>
                        </TabPage>
                        <TabPage
                            eventKey="profile"
                            title="Profile"
                            icon="fa-sharp fa-solid fa-user"
                        >
                            <div
                                className="w-100 h-100"
                                style={{ padding: "20px" }}
                            >
                                <p
                                    style={{
                                        color: "var(--hedging-text-color)",
                                    }}
                                >
                                    2. Lorem ipsum dolor sit amet, consectetur
                                    adipisicing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua.
                                    Ut enim ad minim veniam, quis nostrud
                                    exercitation ullamco laboris nisi ut aliquip
                                    ex ea commodo consequat.
                                </p>
                            </div>
                        </TabPage>
                        <TabPage
                            eventKey="messages"
                            title="Messages"
                            icon="fa fa-comments"
                        >
                            <div
                                className="w-100 h-100"
                                style={{ padding: "20px" }}
                            >
                                <p
                                    style={{
                                        color: "var(--hedging-text-color)",
                                    }}
                                >
                                    3. Lorem ipsum dolor sit amet, consectetur
                                    adipisicing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua.
                                    Ut enim ad minim veniam, quis nostrud
                                    exercitation ullamco laboris nisi ut aliquip
                                    ex ea commodo consequat.
                                </p>
                            </div>
                        </TabPage>
                    </Tab>
                </Col>
            </Row>
        </div>
    );
};

export default Tabs;
