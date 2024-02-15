import { createRoot } from "react-dom/client";
import App from "../src/components/Notice/App";

// const root = document.getElementById("notice-root");

// console.log("root", root);

// // createRoot(root).render(<App />);
// createRoot(root).render(<App />);

// import { createRoot } from "@wordpress/element";
// import App from "./ticketAssign/app";

function waitForElm(selector) {
    return new Promise((resolve) => {
        if (document.querySelector(selector)) {
            return resolve(document.querySelector(selector));
        }

        const observer = new MutationObserver((mutations) => {
            if (document.querySelector(selector)) {
                observer.disconnect();
                resolve(document.querySelector(selector));
            }
        });

        // If you get "parameter 1 is not of type 'Node'" error, see https://stackoverflow.com/a/77855838/492336
        observer.observe(document.body, {
            childList: true,
            subtree: true,
        });
    });
}

waitForElm("#notice-root").then((elm) => {
    createRoot(elm).render(<App />);
});
