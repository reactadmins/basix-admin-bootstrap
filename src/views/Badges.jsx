import { Fragment } from "react";
import { Badge, Button, Col, Row } from "react-bootstrap";
import CardContent from "../components/Card/CardContent";
import { useDashboardDataContext } from "../context/dashboardDataContext";

const Badges = () => {
    const { isDark } = useDashboardDataContext();
    return (
        <Fragment>
            {/* start badges & badges buttons section*/}
            <Row className="gy-4 gx-4 mb-4">
                <Col md={6}>
                    <CardContent
                        title="Labels"
                        CardBody={
                            <>
                                <p
                                    className="mb-3"
                                    style={{
                                        color: `${
                                            isDark
                                                ? "var(--content-text-color)"
                                                : "var(--content-text-color)"
                                        }`,
                                    }}
                                >
                                    Use the <code>{`.label`}</code> class,
                                    followed by one of the six contextual
                                    classes <code>{`.label-default`}</code>,
                                    <code>{` .label-primary`}</code>,
                                    <code>{` .label-success`}</code>
                                    <code>{`.label-info`}</code>,
                                    <code>{`.label-warning`}</code>
                                    {" or "}
                                    <code>{` .label-danger`}</code>, within a
                                    <code>{`<span>`}</code>, elements to create
                                    badges:
                                </p>
                                <div>
                                    <h1
                                        style={{
                                            color: `${
                                                isDark
                                                    ? "var( --hedging-text-color)"
                                                    : "var( --hedging-text-color)"
                                            }`,
                                        }}
                                    >
                                        Example heading
                                        <Badge bg="secondary" className="mx-1">
                                            New
                                        </Badge>
                                    </h1>
                                    <h2
                                        style={{
                                            color: `${
                                                isDark
                                                    ? "var( --hedging-text-color)"
                                                    : "var( --hedging-text-color)"
                                            }`,
                                        }}
                                    >
                                        Example heading
                                        <Badge bg="secondary" className="mx-1">
                                            New
                                        </Badge>
                                    </h2>
                                    <h3
                                        style={{
                                            color: `${
                                                isDark
                                                    ? "var( --hedging-text-color)"
                                                    : "var( --hedging-text-color)"
                                            }`,
                                        }}
                                    >
                                        Example heading
                                        <Badge bg="secondary" className="mx-1">
                                            New
                                        </Badge>
                                    </h3>
                                    <h4
                                        style={{
                                            color: `${
                                                isDark
                                                    ? "var( --hedging-text-color)"
                                                    : "var( --hedging-text-color)"
                                            }`,
                                        }}
                                    >
                                        Example heading
                                        <Badge bg="secondary" className="mx-1">
                                            New
                                        </Badge>
                                    </h4>
                                    <h5
                                        style={{
                                            color: `${
                                                isDark
                                                    ? "var( --hedging-text-color)"
                                                    : "var( --hedging-text-color)"
                                            }`,
                                        }}
                                    >
                                        Example heading
                                        <Badge bg="secondary" className="mx-1">
                                            New
                                        </Badge>
                                    </h5>
                                    <h6
                                        style={{
                                            color: `${
                                                isDark
                                                    ? "var( --hedging-text-color)"
                                                    : "var( --hedging-text-color)"
                                            }`,
                                        }}
                                    >
                                        Example heading
                                        <Badge bg="secondary" className="mx-1">
                                            New
                                        </Badge>
                                    </h6>
                                </div>
                            </>
                        }
                    />
                </Col>
                <Col md={6}>
                    <div className="mb-4">
                        <CardContent
                            title="Badges"
                            titleCode={
                                <>
                                    <small
                                        className="mx-2"
                                        style={{
                                            fontSize: "80%",
                                            fontWeight: "400",
                                        }}
                                    >
                                        Use <code>.badge</code> class within
                                        <code>{`<span>`} </code>
                                        elements to create badges:
                                    </small>
                                </>
                            }
                            CardBody={
                                <div className="d-flex gap-2">
                                    <Button
                                        href="#"
                                        className="p-0 bg-transparent border-0"
                                        style={{
                                            color: `${
                                                isDark
                                                    ? "var(--content-text-color)"
                                                    : "var(--content-text-color)"
                                            }`,
                                        }}
                                    >
                                        News
                                        <Badge bg="primary" className="mx-1">
                                            5
                                        </Badge>
                                    </Button>
                                    <Button
                                        href="#"
                                        className="p-0 bg-transparent border-0"
                                        style={{
                                            color: `${
                                                isDark
                                                    ? "var(--content-text-color)"
                                                    : "var(--content-text-color)"
                                            }`,
                                        }}
                                    >
                                        Comments
                                        <Badge bg="warning" className="mx-1">
                                            10
                                        </Badge>
                                    </Button>
                                    <Button
                                        href="#"
                                        className="p-0 bg-transparent border-0"
                                        style={{
                                            color: `${
                                                isDark
                                                    ? "var(--content-text-color)"
                                                    : "var(--content-text-color)"
                                            }`,
                                        }}
                                    >
                                        Updates
                                        <Badge bg="success" className="mx-1">
                                            2
                                        </Badge>
                                    </Button>
                                </div>
                            }
                        />
                    </div>
                    <div className="mb-4">
                        <CardContent
                            title="Badges in Buttons"
                            CardBody={
                                <>
                                    <p
                                        className="mb-1"
                                        style={{
                                            color: `${
                                                isDark
                                                    ? "var(--content-text-color)"
                                                    : "var(--content-text-color)"
                                            }`,
                                        }}
                                    >
                                        Use <code>{`.badge`}</code> class within
                                        <code>{`<span>`}</code> elements to
                                        create badges:
                                    </p>
                                    <div className="d-flex flex-wrap gap-2">
                                        <Button variant="primary">
                                            Primary
                                            <Badge
                                                bg="light"
                                                text="dark"
                                                className="mx-1"
                                            >
                                                7
                                            </Badge>
                                        </Button>
                                        <Button variant="success">
                                            Success
                                            <Badge
                                                bg="light"
                                                text="dark"
                                                className="mx-1"
                                            >
                                                7
                                            </Badge>
                                        </Button>
                                        <Button variant="info text-dark">
                                            Info
                                            <Badge
                                                bg="light"
                                                text="dark"
                                                className="mx-1"
                                            >
                                                7
                                            </Badge>
                                        </Button>
                                        <Button variant="warning text-dark">
                                            Warning
                                            <Badge
                                                bg="light"
                                                text="dark"
                                                className="mx-1"
                                            >
                                                7
                                            </Badge>
                                        </Button>
                                        <Button variant="danger">
                                            Danger
                                            <Badge
                                                bg="light"
                                                text="dark"
                                                className="mx-1"
                                            >
                                                7
                                            </Badge>
                                        </Button>
                                    </div>
                                </>
                            }
                        />
                    </div>
                    <div className="mb-4">
                        <CardContent
                            title="Labels"
                            CardBody={
                                <>
                                    <p
                                        className="mb-1"
                                        style={{
                                            color: `${
                                                isDark
                                                    ? "var(--content-text-color)"
                                                    : "var(--content-text-color)"
                                            }`,
                                        }}
                                    >
                                        Use <code>{`.badge`}</code> class within
                                        <code>{`<span>`}</code> elements to
                                        create badges:
                                    </p>
                                    <div className="d-flex flex-wrap gap-2">
                                        <Badge bg="primary">Primary</Badge>
                                        <Badge bg="secondary">Secondary</Badge>
                                        <Badge bg="success">Success</Badge>
                                        <Badge bg="danger">Danger</Badge>
                                        <Badge bg="warning" text="dark">
                                            Warning
                                        </Badge>
                                        <Badge bg="info" text="dark">
                                            Info
                                        </Badge>
                                        <Badge bg="light" text="dark">
                                            Light
                                        </Badge>
                                        <Badge bg="dark">Dark</Badge>
                                    </div>
                                </>
                            }
                        />
                    </div>
                </Col>
            </Row>
            {/* end badges & badges buttons section*/}
        </Fragment>
    );
};

export default Badges;
