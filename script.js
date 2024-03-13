/* Information required for accessing my Spotify though last.fm */
var api_key = '432bce050704e6d83883a144e5123809';
var user    = 'Peamupbubber'
var cache   = new LastFMCache();
var lastfm  = new LastFM({
    apiKey : api_key,
    cache  : cache
});

/* Get my recently/currently listened song */
function getSpotifyInfo() {
    lastfm.user.getRecentTracks({limit: 1, user: user, api_key: api_key}, {success: function(data){
        const track = data.recenttracks.track[0];
        var lt = "Was";
        if(track["@attr"] != undefined) {
            lt = "Currently";
        }
        document.getElementById("songTitleAndArtist").innerText = lt + " listening to " + track.name + " by " + track.artist["#text"];
        document.getElementById("songImage").src = track.image[1]["#text"];
        },
        error: function(code, message) { /* Nothing on error */ }
    });
}

/* Can be used for anything that needs to happen on page load */
function start() {
    
}

function displaySD() {
    document.getElementById("aboutMeOuter").style.display = "none";
    document.getElementById("projectOuter").style.display = "";

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
    document.getElementById("aboutMeOuter").style.display = "none";
    document.getElementById("projectOuter").style.display = "";

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
    getSpotifyInfo();

    document.getElementById("projectOuter").style.display = "none";
    document.getElementById("aboutMeOuter").style.display = "";
}