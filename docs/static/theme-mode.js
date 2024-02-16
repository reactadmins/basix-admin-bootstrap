import ExecutionEnvironment from "@docusaurus/ExecutionEnvironment";
import { waitForElm } from "../utils/waitForElm";

if (ExecutionEnvironment.canUseDOM) {

    waitForElm(".light-dark-wrapper").then((elm) => {
        const lightBtn = document.querySelector(".light-dark-dropdown .light");
        const darkBtn = document.querySelector(".light-dark-dropdown .dark");
        const systemBtn = document.querySelector(".light-dark-dropdown .system");

        const dropdown = document.querySelector(".light-dark-dropdown");
        const modeIcon = document.querySelector(".mode-icon");

        document.addEventListener('click', (event) => {  
            const isVisible  = getComputedStyle(dropdown).visibility === "visible";       
            console.log("isVisible", isVisible);

            if (!dropdown.contains(event.target)) {
                if(!!isVisible){
                    dropdown.style.visibility = 'hidden';
                }
            }
        });

        handleClick(modeIcon, () => {
            dropdown.style.visibility = "visible";
        })

        // console.log("dropdown", dropdown.style)
        // console.log("style", getComputedStyle(dropdown).visibility);


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

    const dropdown = document.querySelector(".light-dark-dropdown");

    dropdown.style.visibility = "hidden";
}

