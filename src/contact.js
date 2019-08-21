let pre_txt = "CONTACT PAGE";

function contact_txt() {
    var element = document.createElement("div");
    document.getElementById("content").innerHTML = ""; //empty the div
    document.getElementById("content").appendChild(element);
    element.setAttribute("id", "contact_id"); //giv child new id

    element.innerHTML = pre_txt;
    return element;
}
export { contact_txt };