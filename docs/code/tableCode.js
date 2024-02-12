export const tableCode = `
<Row className="gy-4 gx-4">
    <Col sm={12}>
        <CardContent
            title="Basic Table"
            cardPadding="0 16px 16px 16px"
            CardBody={
                <>
                    <Table />
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
                    <Table isVariants={true} />
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
                    <Table isSearch={true} />
                </>
            }
        />
    </Col>
</Row>
`;
