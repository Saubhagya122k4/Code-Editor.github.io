//Here the page loading div script is GIVEN
document.querySelector("body").style.transition = "visibility 0.5s";
document.querySelector("#loader").style.transition = "visibility 3s";

document.onreadystatechange = function () {
    if (document.readyState !== "complete") {
        document.querySelector("body").style.visibility = "hidden";
        document.querySelector("#loader").style.visibility = "visible";
    } else {
        document.querySelector("#loader").style.visibility = "hidden";
        document.querySelector("body").style.visibility = "visible";
    }
};

function runCode() {
    let html = document.getElementById("html-code").value;
    let css = document.getElementById("css-code").value;
    let js = document.getElementById("js-code").value;

    let output = document.getElementById("output");

    output.contentDocument.body.innerHTML = html + "<style>" + css + "</style>";
    output.contentWindow.eval(js);
}

function resetCode() {
    document.getElementById("html-code").value = "";
    document.getElementById("css-code").value = "";
    document.getElementById("js-code").value = "";
    document.getElementById("output").contentDocument.body.innerHTML = "";
}