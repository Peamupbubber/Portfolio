/* Information required for accessing my Spotify through last.fm */
var api_key = '432bce050704e6d83883a144e5123809';
var user    = 'Peamupbubber'
var cache   = new LastFMCache();
var lastfm  = new LastFM({
    apiKey : api_key,
    cache  : cache
});

var initialSDProjectPage = 'CrewsOutThere';
var initialGDProjectPage = 'BTC';

/* Get my recently/currently listened song */
function getSpotifyInfo() {
    lastfm.user.getRecentTracks({limit: 1, user: user, api_key: api_key}, {success: function(data){
        const track = data.recenttracks.track[0];

        if(track["@attr"] == undefined) {
            document.getElementById("currentlyPlaying").style.display = "none";
        }
        else {
            document.getElementById("currentlyPlaying").style.display = "";
        }
        
        document.getElementById("songTitle").innerText = track.name;
        document.getElementById("songArtist").innerText = track.artist["#text"];
        document.getElementById("songImage").src = track.image[1]["#text"];
        },
        error: function(code, message) { /* Nothing on error */ }
    });
}

/* Can be used for anything that needs to happen on page load */
function start() {
    fetchProjectData(initialSDProjectPage);
}

function displaySD() {
    document.getElementById("aboutMeOuter").style.display = "none";
    document.getElementById("projectOuter").style.display = "";

    document.getElementById("projectSelectionGD").style.display = "none";
    document.getElementById("projectSelectionSD").style.display = "";

    fetchProjectData(initialSDProjectPage);
}

function displayGD() {
    document.getElementById("aboutMeOuter").style.display = "none";
    document.getElementById("projectOuter").style.display = "";

    document.getElementById("projectSelectionSD").style.display = "none";
    document.getElementById("projectSelectionGD").style.display = "";

    fetchProjectData(initialGDProjectPage);
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

var noLinkProvided = "This project can only be viewed upon request to be added to the repo, as it contains code sensitive to the WWU course it is associated with. Feel free to reach out to me if you are interested in viewing the repo!"

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
                    let link = projectData[x][x + i]["link"];
                    if(link == "") {
                        document.getElementById(x + i).className = "inactiveLink";
                        document.getElementById(x + i).innerText = noLinkProvided;
                    }
                    else {
                        document.getElementById(x + i).className = "";
                        document.getElementById(x + i).innerText = projectData[x][x + i]["text"];
                        document.getElementById(x + i).href = link;

                        /* Tells the page to reload in the same tab if the link is for this website */
                        if(link == ".") {
                            document.getElementById(x + i).target = "";
                        }
                        else {
                            document.getElementById(x + i).target = "_blank";
                        }
                    }
                }
                else {
                    document.getElementById(x + i).parentElement.style.display = "none";
                }
            }
        }
    }
}