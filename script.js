/* Information required for accessing my Spotify though last.fm */
var api_key = '432bce050704e6d83883a144e5123809';
var user    = 'Peamupbubber'
var cache   = new LastFMCache();
var lastfm  = new LastFM({
    apiKey : api_key,
    cache  : cache
});

var initialProjectPage = 'CrewsOutThere';

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
    fetchProjectData(initialProjectPage);
}

function displaySD() {
    document.getElementById("aboutMeOuter").style.display = "none";
    document.getElementById("projectOuter").style.display = "";

    document.getElementById("projectSelectionGD").style.display = "none";
    document.getElementById("projectSelectionSD").style.display = "";
}

function displayGD() {
    document.getElementById("aboutMeOuter").style.display = "none";
    document.getElementById("projectOuter").style.display = "";

    document.getElementById("projectSelectionSD").style.display = "none";
    document.getElementById("projectSelectionGD").style.display = "";
}

function displayAboutMe() {
    getSpotifyInfo();

    document.getElementById("projectOuter").style.display = "none";
    document.getElementById("aboutMeOuter").style.display = "";
}

function fetchProjectData(project) {
    fetch("./projects.json")
        .then((res) => {
          return res.json();  
        })
        .then((data) => displayProject(data[project]));
}

/* Takes a specific project section of json data and places it into the display box */
function displayProject(projectData) {
    for(var x in projectData) {
        if(typeof(projectData[x]) == "string") {
            document.getElementById(x).innerText = projectData[x];
        }
        /* Just used for the How to View section */
        else {
            for(let i = 0; i <= 2; i++) {
                if(projectData[x][x + i] != undefined) {
                    document.getElementById(x + i).parentElement.style.display = "";
                    document.getElementById(x + i).innerText = projectData[x][x + i]["text"];
                    document.getElementById(x + i).href = projectData[x][x + i]["link"];
                }
                else {
                    document.getElementById(x + i).parentElement.style.display = "none";
                }
            }
        }
    }
}