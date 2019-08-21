let pre_txt = ` 

    <div class="text-box shadow-sm p-3 mb-5 bg-white rounded responsive">
        <h1>Eat and Heat your world up</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation</p>
        <h4>Lorem ipsum dolor sit amet</h4>
    </div>

<div class="col-6 first-col">
    <img src="assets/image1.jpeg" class="img-fluid shadow-lg p-3 mb-5 bg-white rounded responsive"> 
</div>
`;

function menu_txt() {
    var element = document.createElement("div");
    document.getElementById("content").innerHTML = ""; //empty the div
    document.getElementById("content").appendChild(element);
    element.setAttribute("id", "menu_id"); //giv child new id

    element.innerHTML = pre_txt;
    return element;
}

export { menu_txt };