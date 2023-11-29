const apiUrl = 'https://api.chucknorris.io/jokes/random';


function loadChuckNorrisJoke() {
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const joke = data.value;
            document.getElementById("joke").innerHTML = joke;
        })
        .catch(error => {
            console.error('Error', error);
        });
};

loadChuckNorrisJoke();


document.addEventListener('DOMContentLoaded', function() {
    const btnNewJoke = document.getElementById("button");

    btnNewJoke.addEventListener('click', function() {
        loadChuckNorrisJoke();
    });
});



