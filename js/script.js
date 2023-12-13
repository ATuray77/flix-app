const global = {
    currentPage: window.location.pathname,
};
console.log(global.currentPage)

//Fetch data from TMDB API
async function fetchAPIData(endpoint) {
    const API_KEY = 'defc647d519b7d62ebf91cff4c905625';
    const API_URL = 'https://api.themoviedb.org/3/';

    const response = await fetch(`${API_URL}${endpoint}?api_key=${API_KEY}&language=en-US`);
    const data = await response.json();
    return data;
}

//Highlight active link
function highLightActiveLink() {
    const links = document.querySelectorAll('.nav-link');
    links.forEach((link) => {
        if (link.getAttribute('href') === global.currentPage) {
            link.classList.add('active');
        }  
    });
}

//init App
function init() {
    switch(global.currentPage) {
        case '/':
        case '/index.html':
        console.log('Home')
        break;

        case '/shows.html':
        console.log('Shows')
        break;

        case '/movie-details.html':
        console.log('Movie-Details');
        break;

        case '/tv-details.html':
        console.log('TV-Details');
        break;

        case '/search.html':
        console.log('Search');
        break;
    }
    highLightActiveLink();
}

document.addEventListener('DOMContentLoaded', init)