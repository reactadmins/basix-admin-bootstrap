import Alert from "react-bootstrap/Alert";
// import AlertWithHeading from "../components/AlertWithHeading";

export default {
    title: "Components/Alerts",
    component: Alert,
    tags: ["autodocs"],
    args: {
        dismissible: false,
        show: true,
    },
    argTypes: {
        dismissible: {
            control: "boolean",
            description: "",
        },
        variant: {
            type: "select",
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
            description:
                "The alert is availabel visual variant are `primary` | `secondary` | `success` | `danger` | `warning` | `info` | `light` | `dark`",
        },
        show: {
            control: "boolean",
            description: "This is visual state of the alert",
        },
    },
};

export const All = {
    args: {},
    render: (args) => {
        return (
            <div className="d-block">
                <Alert variant="primary" dismissible={args?.dismissible}>
                    This is a primary alert—check it out!
                </Alert>
                <Alert variant="secondary" dismissible={args?.dismissible}>
                    This is a secondary alert—check it out!
                </Alert>
                <Alert variant="danger" dismissible={args?.dismissible}>
                    This is a danger alert—check it out!
                </Alert>
                <Alert variant="warning" dismissible={args?.dismissible}>
                    This is a warning alert—check it out!
                </Alert>
                <Alert variant="info" dismissible={args?.dismissible}>
                    This is a info alert—check it out!
                </Alert>
                <Alert variant="light" dismissible={args?.dismissible}>
                    This is a light alert—check it out!
                </Alert>
                <Alert variant="dark" dismissible={args?.dismissible}>
                    This is a dark alert—check it out!
                </Alert>
            </div>
        );
    },
};

export const WithHeading = {
    args: {
        dismissible: false,
        variant: "primary",
    },
    render: (args) => (
        <div>
            <Alert {...args}>
                <Alert.Heading>Well done!</Alert.Heading>
                <p>
                    You successfully read this important alert message. This example text is going
                    to run a bit longer so that you can see alert content.
                </p>
                <hr />
                <p>Whenever you need to, be sure to use margin utilities nice and tidy.</p>
            </Alert>
        </div>
    ),
};

export const WithLink = {
    args: {
        dismissible: false,
        variant: "primary",
    },
    render: (args) => (
        <div>
            <Alert {...args}>
                This is a primary alert with <Alert.Link href="#">an example link</Alert.Link>. Give
                it a click if you like.
            </Alert>
        </div>
    ),
};
