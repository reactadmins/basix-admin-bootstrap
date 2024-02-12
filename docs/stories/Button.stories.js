import Button from "react-bootstrap/Button";

export default {
    title: "Components/Button",
    component: Button,
    tags: ["autodocs"],
    args: {},
    argTypes: {
        variant: {
            control: "select",
            options: [
                "primary",
                "secondary",
                "success",
                "warning",
                "danger",
                "info",
                "light",
                "dark",
            ],
        },
        size: {
            control: "inline-radio",
            options: ["sm", "md", "lg"],
        },
    },
};

export const Normal = {
    args: {
        variant: "primary",
        children: "Primary",
        active: false,
        disabled: false,
    },
};

export const Outline = {
    args: {
        variant: "outline-primary",
        children: "Primary",
    },
    argTypes: {
        variant: {
            control: "select",
            options: [
                "outline-primary",
                "outline-secondary",
                "outline-success",
                "outline-warning",
                "outline-danger",
                "outline-info",
                "outline-light",
                "outline-dark",
            ],
        },
    },
};
