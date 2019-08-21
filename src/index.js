"use strict";

import { about_txt } from "./about";
import { menu_txt } from "./menu";
import { contact_txt } from "./contact";

//console.log("testing WEBPACK in the RESTAURANT");
//console.log("another line");

const about_link = document.querySelector("#about_link");
about_link.addEventListener("click", e => {
    about_txt();
    e.preventDefault();
});

const menu_link = document.querySelector("#menu_link");
menu_link.addEventListener("click", e => {
    menu_txt();
    e.preventDefault();
});

const contact_link = document.querySelector("#contact_link");
contact_link.addEventListener("click", e => {
    contact_txt();
    e.preventDefault();
});