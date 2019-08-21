let pre_txt = "MENU PAGE";

function menu_txt() {
    var element = document.createElement("div");
    document.getElementById("content").innerHTML = ""; //empty the div
    document.getElementById("content").appendChild(element);
    element.setAttribute("id", "menu_id"); //giv child new id

    element.innerHTML = pre_txt;
    return element;
}

export { menu_txt };