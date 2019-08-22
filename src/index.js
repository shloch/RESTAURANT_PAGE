"use strict";

import { nav_menu } from "./navbar";
import { about_txt } from "./about";
import { menu_txt } from "./menu";
import { contact_txt } from "./contact";
import { home_txt } from "./home";

nav_menu();
home_txt();

const tabs = document.querySelectorAll(".navbar-nav a");
tabs.forEach((tab, index) => {
    tab.addEventListener("click", event => {
        console.log(event.currentTarget.hash.slice(1));
        let href_value = event.currentTarget.hash.slice(1);
        switch (href_value) {
            case "home":
                home_txt();
                break;
            case "menu":
                menu_txt();
                break;
            case "about":
                about_txt();
                break;
            case "contact":
                contact_txt();
                break;
            default:
                home_txt();
        }
    });
});