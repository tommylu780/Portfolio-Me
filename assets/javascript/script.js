var query = "https://api.github.com/users/tommylu780"
var queryRepos = "https://api.github.com/users/tommylu780/repos";
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
            var img = data.avatar_url;
            var url = data.blog;
            var splitUrl = url.split(',');
            var gh = data.html_url;
            var twitt = data.twitter_username;
            var linktwitt = "https://twitter.com/" + twitt;

            $(".headbox").html(`<img src="${img}" id="logoimg"> Tommy Lu`)
            $("#facebook").html(`<a class='afooter' href='${splitUrl[0]}'><i class="fab fa-facebook fa-2x"></i><br>Facebook`);
            $("#linkedin").html(`<a class='afooter' href='${splitUrl[1]}'><i class="fab fa-linkedin fa-2x"></i><br>Linkedin`);
            $("#github").html(`<a class='afooter' href='${gh}'><i class="fab fa-github fa-2x"></i><br>Github`);
            $("#twitter").html(`<a class='afooter' href='${linktwitt}'><i class="fab fa-twitter fa-2x"></i><br>Twitter`);
            $(resumeEl).html(`<a href='${download}'>Resume`);

        })
        .catch(function(error) {
            console.log(error)
        })
}

function getRespo() {
    fetch(queryRepos, {
            method: "GET"
        })
        .then(function(repositry) {
            return repositry.json();
        })
        .then(function(repos) {
            for (var i = 1; i < 12; i++) {
                var gitRepos = repos[i].full_name
                var splRepos = gitRepos.split('/');
                var urlRepos = repos[i].html_url

                $(`.bottom-left[data-index=${i}]`).html(`${splRepos[1]}<br><a href='${urlRepos}'>Check Repositry`);
            }

        })
        .catch(function(error) {
            console.log(error)
        })
}

getAPI();
getRespo();