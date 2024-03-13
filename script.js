var lastfm;

function getSpotifyInfo() {
    var api_key = "432bce050704e6d83883a144e5123809";

    lastfm = new LastFM({ apiKey: api_key });

    /* Get my recently listned song from lastfm */
    lastfm.user.getRecentTracks({limit: 1, user: 'Peamupbubber', api_key: api_key}, {success: function(data){
        const track = data.recenttracks.track[0];
        document.getElementById("replace").innerText = track.name
        }, error: function(code, message){
        // Doesn't seem to report the error
        document.getElementById("replace").innerText = "Couldn't get Spotify data :("
    }});
}

function start() {
    getSpotifyInfo();
    
    var x = document.getElementsByClassName("projectSelectionGD");
    for (var i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
}

function myFunction() {
    var x = document.getElementsByClassName("pages");
    for (var i = 0; i < x.length; i++) {
        if(x[i].style.display == "")
            x[i].style.display = "none";
        else
            x[i].style.display = "";
    }
}


function displaySD() {
    var x = document.getElementsByClassName("projectSelectionGD");
    for (var i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }

    x = document.getElementsByClassName("projectSelectionSD");
    for (var i = 0; i < x.length; i++) {
        x[i].style.display = "";
    }
}

function displayGD() {
    var x = document.getElementsByClassName("projectSelectionSD");
    for (var i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }

    x = document.getElementsByClassName("projectSelectionGD");
    for (var i = 0; i < x.length; i++) {
        x[i].style.display = "";
    }
}

function displayAboutMe() {
    alert("About Me clicked!");
}