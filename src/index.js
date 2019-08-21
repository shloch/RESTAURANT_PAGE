"use strict";

import { nav_menu } from "./navbar";
import { about_txt } from "./about";
import { menu_txt } from "./menu";
import { contact_txt } from "./contact";
import { home_txt } from "./home";

//-------inserts HOME PAGE text ---------------
nav_menu();
home_txt();
//-----------------------------------------
const home_link = document.querySelector("#home_link");
home_link.addEventListener("click", e => {
    home_txt();
    e.preventDefault();
});

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