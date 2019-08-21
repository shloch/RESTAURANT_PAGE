let about_pre_txt = "ABOUT US ";

function about_txt() {
    var element = document.createElement("div");
    document.getElementById("content").innerHTML = ""; //empty the div
    document.getElementById("content").appendChild(element);
    element.setAttribute("id", "about_id"); //giv child new id

    element.innerHTML = about_pre_txt;
    return element;
}

export { about_txt };