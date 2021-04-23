var query = "https://api.github.com/users/tommylu780"
var resumeEl = document.querySelector('#resume')
var download = "https://drive.google.com/uc?export=download&id=1zY71DfgMh6KE0izYweClG-evcXPY9g-a"


function getAPI() {
    fetch(query, {
            method: "GET"
        })
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            var fb = data.blog;
            var gh = data.html_url;
            var twitt = data.twitter_username;
            var linktwitt = "https://twitter.com/" + twitt;

            $("#facebook").html(`<a class='afooter' href='${fb}'><i class="fab fa-facebook fa-2x"></i><br>Facebook`);
            $("#github").html(`<a class='afooter' href='${gh}'><i class="fab fa-github fa-2x"></i><br>Github`);
            $("#twitter").html(`<a class='afooter' href='${linktwitt}'><i class="fab fa-twitter fa-2x"></i><br>Twitter`);
            $(resumeEl).html(`<a href='${download}'>Resume`);
        })
        .catch(function(error) {
            console.log(error)
        })
}

getAPI();