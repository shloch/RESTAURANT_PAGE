!function(e){var n={};function t(a){if(n[a])return n[a].exports;var i=n[a]={i:a,l:!1,exports:{}};return e[a].call(i.exports,i,i.exports,t),i.l=!0,i.exports}t.m=e,t.c=n,t.d=function(e,n,a){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:a})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(t.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var i in e)t.d(a,i,function(n){return e[n]}.bind(null,i));return a},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=0)}([function(e,n,t){"use strict";t.r(n);let a=' <nav class="navbar navbar-expand-lg bg-light">\n<a class="navbar-brand" href="#">\n    <img src="assets/logo.jpg" width="30" height="30" class="d-inline-block align-top" alt="" /> RESTAURANT APP\n</a>\n<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">\n<span class="navbar-toggler-icon"></span>\n</button>\n<div class="collapse navbar-collapse" id="navbarNavAltMarkup">\n    <div class="navbar-nav">\n        <a class="nav-item nav-link" href="#home">HOME</a>\n        <a class="nav-item nav-link" href="#menu">MENU</a>\n        <a class="nav-item nav-link" href="#about">ABOUT</a>\n        <a class="nav-item nav-link" href="#contact">CONTACT</a>\n    </div>\n</div>\n</nav>';let i=" <h1>Know more about us</h1>\n<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation</p>\n";let o=' \n\n    <div class="text-box shadow-sm p-3 mb-5 bg-white rounded responsive">\n        <h1>Eat and Heat your world up</h1>\n        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation</p>\n        <h4>Lorem ipsum dolor sit amet</h4>\n    </div>\n\n<div class="col-6 first-col">\n    <img src="assets/image1.jpeg" class="img-fluid shadow-lg p-3 mb-5 bg-white rounded responsive"> \n</div>\n';let r="<h1>Contact Us</h1>\n<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation</p>\n<h4>Tel : 456-908-890</h4>\n<h4>Email : restaurant@microverse.code</h4>\n<h4>Location : STandford Road , SILICON VALLEY</h4>\n<h4>OPENING HOURS : 10am - 7pm</h4>";let d='<h1 class="anim">WELCOME TO SHLOCH RESTAURANT</h1>\n<p>\n    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor\n    in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."\n</p>';function l(){var e=document.createElement("div");return document.getElementById("content").innerHTML="",document.getElementById("content").appendChild(e),e.innerHTML=d,e}!function(){var e=document.createElement("div");e.setAttribute("id","header"),e.innerHTML=a,document.querySelector("body").insertAdjacentElement("afterbegin",e)}(),l(),document.querySelectorAll(".navbar-nav a").forEach((e,n)=>{e.addEventListener("click",e=>{switch(console.log(e.currentTarget.hash.slice(1)),e.currentTarget.hash.slice(1)){case"home":l();break;case"menu":!function(){var e=document.createElement("div");document.getElementById("content").innerHTML="",document.getElementById("content").appendChild(e),e.setAttribute("id","menu_id"),e.innerHTML=o}();break;case"about":!function(){var e=document.createElement("div");document.getElementById("content").innerHTML="",document.getElementById("content").appendChild(e),e.setAttribute("id","about_id"),e.innerHTML=i}();break;case"contact":!function(){var e=document.createElement("div");document.getElementById("content").innerHTML="",document.getElementById("content").appendChild(e),e.setAttribute("id","contact_id"),e.innerHTML=r}();break;default:l()}})})}]);