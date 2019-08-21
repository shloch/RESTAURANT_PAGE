let about_pre_txt = ` <h1>Know more about us</h1>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation</p>
<h4>Contact Us</h4>`;

function about_txt() {
    var element = document.createElement("div");
    document.getElementById("content").innerHTML = ""; //empty the div
    document.getElementById("content").appendChild(element);
    element.setAttribute("id", "about_id"); //giv child new id

    element.innerHTML = about_pre_txt;
    return element;
}

export { about_txt };