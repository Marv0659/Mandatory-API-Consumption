const API_KEY = "d3d3c9e6392b961953ac6b17318caca4";
const BASE_URL = "https://api.themoviedb.org/3";
const IMG_URL = "https://image.tmdb.org/t/p/w500";

const ENDPOINTS = {
  nowPlaying: `${BASE_URL}/movie/now_playing?api_key=${API_KEY}`,
  popular: `${BASE_URL}/movie/popular?api_key=${API_KEY}`,
  topRated: `${BASE_URL}/movie/top_rated?api_key=${API_KEY}`,
  upcoming: `${BASE_URL}/movie/upcoming?api_key=${API_KEY}`,
};

const movieContainer = document.getElementById("movieContainer");
const nowPlayingLink = document.getElementById("now-playing");
const popularLink = document.getElementById("popular");
const topRatedLink = document.getElementById("top-rated");
const upcomingLink = document.getElementById("upcoming");

// Event listeners

nowPlayingLink.addEventListener("click", (e) => {
  e.preventDefault;
  getMovies(ENDPOINTS.nowPlaying);
});

popularLink.addEventListener("click", (e) => {
  e.preventDefault;
  getMovies(ENDPOINTS.popular);
});

topRatedLink.addEventListener("click", (e) => {
  e.preventDefault;
  getMovies(ENDPOINTS.topRated);
});

upcomingLink.addEventListener("click", (e) => {
  e.preventDefault;
  getMovies(ENDPOINTS.upcoming);
});

// Functions

function getMovies(url) {
  fetch(url)
    .then((res) => res.json())
    .then((data) => showMovies(data.results))
    .catch((err) => console.log(err));
}

function showMovies(movies) {
  movieContainer.innerHTML = "";
  movies.forEach((movie) => {
    const { title, poster_path, vote_average, overview, release_date } = movie;
    const movieEl = document.createElement("article");
    movieEl.innerHTML = `
            
            <picture>
                <img src="${IMG_URL + poster_path}" alt="${title}">
            </picture>
            <section id="desc">
            <h2>${title}</h2>
            
            <p>${overview}</p>
            <p>Release date: ${release_date}</p>
            <p>Rating: ${vote_average}</p>
            </section>
        `;
    movieContainer.appendChild(movieEl);
  });
}
