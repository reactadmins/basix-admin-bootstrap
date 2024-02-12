import Alert from "react-bootstrap/Alert";
// import AlertWithHeading from "../components/AlertWithHeading";

export default {
    title: "Components/Alerts",
    component: Alert,
    // tags: ["autodocs"],
    args: {
        dismissible: false,
    },
    argTypes: {
        dismissible: {
            control: "boolean",
        },
        // variant: {
        //     type: "select",
        //     options: [
        //         "primary",
        //         "secondary",
        //         "success",
        //         "danger",
        //         "waring",
        //         "info",
        //         "light",
        //         "dark",
        //     ],
        // },
    },
    // parameters: {
    //     layout: "centered",
    // },
    tags: ["autodocs"],
};

export const All = {
    args: {
        dismissible: false,
    },
    render: (args) => {
        console.log("Args", args);

        return (
            <div className="d-block">
                <Alert variant="primary">This is a primary alert—check it out!</Alert>
                <Alert variant="secondary">This is a secondary alert—check it out!</Alert>
                <Alert variant="danger">This is a danger alert—check it out!</Alert>
                <Alert variant="warning">This is a warning alert—check it out!</Alert>
                <Alert variant="info">This is a info alert—check it out!</Alert>
                <Alert variant="light">This is a light alert—check it out!</Alert>
                <Alert variant="dark">This is a dark alert—check it out!</Alert>
            </div>
        );
    },
};

export const WithHeading = {
    render: () => (
        <div>
            <Alert variant="primary">
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
    render: () => (
        <div>
            <Alert variant="primary">
                This is a primary alert with <Alert.Link href="#">an example link</Alert.Link>. Give
                it a click if you like.
            </Alert>
        </div>
    ),
};

// export const Normal = {
//     args: {
//         children: "This is a primary alert—check it out!",
//         variant: "primary",
//         dismissible: false,
//         show: true,
//         onClose: () => {},
//     },
// };

// export const WithHeading = {
//     args: {
//         children: AlertWithHeading,
//         variant: "primary",
//         dismissible: false,
//         show: true,
//         onClose: () => {},
//     },
// };
