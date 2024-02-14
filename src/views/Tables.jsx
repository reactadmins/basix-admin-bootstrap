import { Fragment } from "react";
import { Col, Row } from "react-bootstrap";
import CardContent from "../components/Card/CardContent";
import Table from "../components/Table/Table";
import tableData from "../components/data/tableData";

const Tables = () => {
    return (
        <Fragment>
            <Row className="gy-4 gx-4">
                <Col sm={12}>
                    <CardContent
                        title="Basic Table"
                        cardPadding="0 16px 16px 16px"
                        CardBody={
                            <>
                                <Table data={tableData} />
                            </>
                        }
                    />
                </Col>
                <Col sm={12}>
                    <CardContent
                        title="Colors, Icons, Labels"
                        cardPadding="0 16px 16px 16px"
                        CardBody={
                            <>
                                <Table isVariants={true} data={tableData} />
                            </>
                        }
                    />
                </Col>
                <Col sm={12}>
                    <CardContent
                        title="Search & Pagination"
                        cardPadding="0 16px 16px 16px"
                        CardBody={
                            <>
                                <Table isSearch={true} data={tableData} />
                            </>
                        }
                    />
                </Col>
            </Row>
        </Fragment>
    );
};

export default Tables;
