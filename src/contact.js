let pre_txt = `<h1>Contact Us</h1>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation</p>
<h4>Tel : 456-908-890</h4>
<h4>Email : restaurant@microverse.code</h4>
<h4>Location : STandford Road , SILICON VALLEY</h4>
<h4>OPENING HOURS : 10am - 7pm</h4>`;

function contact_txt() {
    var element = document.createElement("div");
    document.getElementById("content").innerHTML = ""; //empty the div
    document.getElementById("content").appendChild(element);
    element.setAttribute("id", "contact_id"); //giv child new id

    element.innerHTML = pre_txt;
    return element;
}
export { contact_txt };