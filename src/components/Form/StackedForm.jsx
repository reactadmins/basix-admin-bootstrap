import { CardBody, CardFooter } from "react-bootstrap";
import Card from "@/components/Card/Card";

const StackedForm = () => {
    return (
        <Card title="Normal Form">
            <CardBody>
                <form>
                    <div className="form-group">
                        <input
                            id="n-email"
                            type="email"
                            className="form-control"
                            placeholder="Enter Email...."
                            required
                        />
                    </div>
                    <div className="form-group mt-2">
                        <input
                            id="n-password"
                            type="password"
                            className="form-control"
                            placeholder="Enter password...."
                            required
                        />
                    </div>
                </form>
            </CardBody>
            <CardFooter>
                {" "}
                <div className="d-flex gap-3 py-1">
                    <button type="submit" className="btn btn-primary btn-sm">
                        <i className="fa-regular fa-circle-check"></i> Submit
                    </button>
                    <button type="submit" className="btn btn-danger btn-sm">
                        <i className="fa-solid fa-ban"></i> Submit
                    </button>
                </div>
            </CardFooter>
        </Card>
    );
};

export default StackedForm;
