import { Col, Row } from "react-bootstrap";
import Tab from "../components/Tab/Tab";

const Tabs = () => {
    return (
        <div className="tabs-wrapper">
            <Row className="gy-4 gx-4">
                <Col md={6}>
                    <Tab
                        title="Top Horizontal"
                        tabActiveBg="#292b35"
                        tabActiveTextColor="#fff"
                        tabData={[
                            {
                                id: 1,
                                title: "Home",
                            },
                            {
                                id: 2,
                                title: "Profile",
                            },
                            {
                                id: 3,
                                title: "Messages",
                            },
                        ]}
                    />
                </Col>
                <Col md={6}>
                    <Tab
                        title="Bottom Horizontal"
                        tabActiveBg="#292b35"
                        tabActiveTextColor="#fff"
                        tabPosition="bottom"
                        tabData={[
                            {
                                id: 1,
                                title: "Home",
                                icon: "fa fa-home",
                            },
                            {
                                id: 2,
                                title: "Profile",
                                icon: "fa-sharp fa-solid fa-user",
                            },
                            {
                                id: 3,
                                title: "Messages",
                                icon: "fa fa-comments",
                            },
                        ]}
                    />
                </Col>
                <Col md={6}>
                    <Tab
                        title="Left Vertical"
                        tabActiveBg="#292b35"
                        tabActiveTextColor="#fff"
                        tabPosition="left"
                        tabData={[
                            {
                                id: 1,
                                icon: "fa fa-home",
                            },
                            {
                                id: 2,
                                icon: "fa-sharp fa-solid fa-user",
                            },
                            {
                                id: 3,
                                icon: "fa fa-comments",
                            },
                        ]}
                    />
                </Col>
                <Col md={6}>
                    <Tab
                        title="Right Vertical"
                        tabActiveBg="#292b35"
                        tabActiveTextColor="#fff"
                        tabPosition="right"
                        tabData={[
                            {
                                id: 1,
                                title: "Home",
                                icon: "fa fa-home",
                            },
                            {
                                id: 2,
                                title: "Profile",
                                icon: "fa-sharp fa-solid fa-user",
                            },
                            {
                                id: 3,
                                title: "Messages",
                                icon: "fa fa-comments",
                            },
                        ]}
                    />
                </Col>
            </Row>
        </div>
    );
};

export default Tabs;
