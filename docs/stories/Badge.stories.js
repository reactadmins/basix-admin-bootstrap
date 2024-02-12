import { Badge } from "react-bootstrap";

export default {
    title: "Components/Badge",
    component: Badge,
    tags: ["autodocs"],
    argTypes: {
        bg: {
            control: "select",
            options: [
                "primary",
                "secondary",
                "success",
                "danger",
                "waring",
                "info",
                "light",
                "dark",
            ],
        },
        text: {
            control: "select",
            options: [
                "primary",
                "secondary",
                "success",
                "danger",
                "waring",
                "info",
                "light",
                "dark",
            ],
        },
    },
};

export const Normal = {
    args: {
        bg: "primary",
        children: "Primary",
        pill: false,
        text: "",
    },
};
