function myFunction() {
    var x = document.getElementsByClassName("pages");
    for (var i = 0; i < x.length; i++) {
        if(x[i].style.display == "")
            x[i].style.display = "none"
        else
            x[i].style.display = ""
    }
}

function displaySD() {
    alert("SD clicked!")
}

function displayGD() {
    alert("GD clicked!")
}

function displayAboutMe() {
    alert("About Me clicked!")
}