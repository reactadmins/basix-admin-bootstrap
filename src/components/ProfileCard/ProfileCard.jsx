import { Card } from "react-bootstrap";
import styles from "@/assets/scss/ProfileCard.module.scss";

const ProfileCard = ({
    title = "",
    userName = "",
    icon = "",
    isHeader = false,
    isFooter = false,
    image = "",
    userInfo = "",
}) => {
    return (
        <Card className={`${stylescard} rounded-0 border-0 w-100 h-100`}>
            {isHeader && (
                <Card.Header className={stylescard_header}>
                    {icon && <i className={`${icon}`}></i>}
                    <strong>{title}</strong>
                </Card.Header>
            )}

            <Card.Body className={stylescard_body}>
                <div className="d-flex flex-column align-items-center justify-content-center">
                    <img
                        src={image}
                        alt="Card image"
                        className="rounded-circle inline-blocks"
                    />

                    <h2 className={`${stylestitle} mt-2`}>{userName}</h2>
                    {userInfo ? userInfo : null}
                </div>
            </Card.Body>
            {isFooter && (
                <Card.Footer className={stylescard_footer}>
                    <strong>{title}</strong>
                </Card.Footer>
            )}
        </Card>
    );
};

export default ProfileCard;
