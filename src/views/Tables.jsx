import { Fragment } from "react";
import { CardBody, Col, Row } from "react-bootstrap";
import Card from "@/components/Card/Card";
import Table from "@/components/Table/Table";
import tableData from "@/components/data/tableData";

const Tables = () => {
    return (
        <Fragment>
            <Row className="gy-4 gx-4">
                <Col sm={12}>
                    <Card title="Basic Table">
                        <CardBody>
                            <Table data={tableData} />
                        </CardBody>
                    </Card>
                </Col>
                <Col sm={12}>
                    <Card title="Colors, Icons, Labels">
                        <CardBody>
                            <Table isVariants={true} data={tableData} />
                        </CardBody>
                    </Card>
                </Col>
                <Col sm={12}>
                    <Card title="Search & Pagination">
                        <CardBody>
                            <Table isSearch={true} data={tableData} />
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </Fragment>
    );
};

export default Tables;
