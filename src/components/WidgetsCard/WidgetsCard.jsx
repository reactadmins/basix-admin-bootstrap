import { Card } from "react-bootstrap";
import widgetsCardStyle from "../../assets/scss/WidgetsCard.module.scss";

const WidgetsCard = ({ bgColor = "", borderColor = "", children = "" }) => {
    return (
        <Card
            className={`rounded-0 ${widgetsCardStyle.card}  ${
                bgColor ? `bg-${bgColor}` : ""
            } ${borderColor ? `border border-${borderColor}` : ""}`}
        >
            {children}
        </Card>
    );
};

export default WidgetsCard;
