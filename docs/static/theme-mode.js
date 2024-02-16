import ExecutionEnvironment from "@docusaurus/ExecutionEnvironment";
import { waitForElm } from "../utils/waitForElm";

if (ExecutionEnvironment.canUseDOM) {

    waitForElm(".light-dark-wrapper").then((elm) => {
        const lightBtn = document.querySelector(".light-dark-dropdown .light");
        const darkBtn = document.querySelector(".light-dark-dropdown .dark");
        const systemBtn = document.querySelector(".light-dark-dropdown .system");

        const mode = localStorage.getItem("theme");

        if(mode === "dark"){
            handleMode("dark")
        }else{
            handleMode("light")
        }

        handleClick(lightBtn, () => {
            handleMode("light")
        })
        
        handleClick(darkBtn, () => {
            handleMode("dark")
        })

        handleClick(systemBtn, () => {
            const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

            if(isDark){
                handleMode("dark")
            }else{
                handleMode("light")
            }
        })
    });
}

/**
 * Handle click
 * @param {css selector} el 
 * @param {function} callback 
 * @returns 
 */
function handleClick(el, callback ){
    return el.addEventListener("click", callback)
}

function handleMode(mode){
    localStorage.setItem("theme", mode);
    document.documentElement.setAttribute('data-theme', mode);
    document.documentElement.setAttribute('data-bs-theme', mode);
}

