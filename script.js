function start() {
    var x = document.getElementsByClassName("projectSelectionGD");
    for (var i = 0; i < x.length; i++) {
        x[i].style.display = "none"
    }
}

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
    var x = document.getElementsByClassName("projectSelectionGD");
    for (var i = 0; i < x.length; i++) {
        x[i].style.display = "none"
    }

    x = document.getElementsByClassName("projectSelectionSD");
    for (var i = 0; i < x.length; i++) {
        x[i].style.display = ""
    }
}

function displayGD() {
    var x = document.getElementsByClassName("projectSelectionSD");
    for (var i = 0; i < x.length; i++) {
        x[i].style.display = "none"
    }

    x = document.getElementsByClassName("projectSelectionGD");
    for (var i = 0; i < x.length; i++) {
        x[i].style.display = ""
    }
}

function displayAboutMe() {
    alert("About Me clicked!")
}