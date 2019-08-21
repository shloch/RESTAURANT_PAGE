let nav_pre_txt = ` <nav class="navbar navbar-expand-lg bg-light">
<a class="navbar-brand" href="#">
    <img src="assets/logo.jpg" width="30" height="30" class="d-inline-block align-top" alt="" /> RESTAURANT APP
</a>
<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
<span class="navbar-toggler-icon"></span>
</button>
<div class="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div class="navbar-nav">
        <a class="nav-item nav-link" id="home_link">HOME</a>

        <a class="nav-item nav-link" id="menu_link">MENU</a>
        <a class="nav-item nav-link" id="about_link">ABOUT</a>
        <a class="nav-item nav-link" id="contact_link">CONTACT</a>
    </div>
</div>
</nav>`;

function nav_menu() {
    var nav_menu = document.createElement("div");
    nav_menu.setAttribute("id", "header"); //giv child new id
    nav_menu.innerHTML = nav_pre_txt;

    var BODY = document.querySelector("body");

    BODY.insertAdjacentElement("afterbegin", nav_menu);
}

export { nav_menu };