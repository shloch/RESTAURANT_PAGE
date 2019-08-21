let home_pre_txt = `<h1 class="anim">WELCOME TO SHLOCH RESTAURANT</h1>
<p>
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
    in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
</p>`;

function home_txt() {
    var element = document.createElement("div");
    document.getElementById("content").innerHTML = ""; //empty the div
    document.getElementById("content").appendChild(element);
    //element.setAttribute("id", "about_id"); //giv child new id

    element.innerHTML = home_pre_txt;
    return element;
}

export { home_txt };