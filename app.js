// BASE URL https://api.themoviedb.org/3/movie/550?api_key=a66bbaf5e935c44e07e039b045232cb0
const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = 'a66bbaf5e935c44e07e039b045232cb0';
const requestsMovies = {
	fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
	fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_network=123`,
	fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
	fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
	fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
	fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
	fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
	fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
};

const { fetchTrending, fetchNetflixOriginals, fetchTopRated, fetchActionMovies, fetchComedyMovies, fetchHorrorMovies, fetchRomanceMovies, fetchDocumentaries } = requestsMovies;

const fetchMovies = async (url) => {
	try {
		const response = await fetch(url);
		const data = await response.json();

		return data;
	} catch (err) {
		console.log(err);
	}
};


const displayRandomBanner = async () => {
	const banner = document.querySelector('.banner');
	const dataFetchTrending = await fetchMovies(`${BASE_URL}${fetchTrending}`);
	let randomNumber = Math.floor(Math.random() * dataFetchTrending.results.length);

	// IMAGE
	banner.style.backgroundSize = '100% 100%';
	banner.style.backgroundImage = `url(https://image.tmdb.org/t/p/original${dataFetchTrending.results[randomNumber].backdrop_path})`;
	banner.style.backgroundPosition = 'center';

	// TITLE
	const title = document.querySelector('.banner__title');
	title.innerHTML =
		dataFetchTrending.results[randomNumber].title === 'undefined'
			? dataFetchTrending.results[randomNumber].original_title
			: dataFetchTrending.results[randomNumber].title || dataFetchTrending.results[randomNumber].name || dataFetchTrending.results[randomNumber].original_name;

	// OVERVIEW
	const overview = document.querySelector('.banner__overview');
	overview.innerHTML = dataFetchTrending.results[randomNumber].overview;

	console.log(dataFetchTrending.results[randomNumber]);
};

displayRandomBanner();

const displayNetflixOriginals = async () => {
	const netflixOriginal = document.querySelector('.netflix__original');
	const dataFetchNetflixOriginals = await fetchMovies(`${BASE_URL}${fetchNetflixOriginals}`);

	dataFetchNetflixOriginals.results.forEach((movie) => {
		const { id, title, release_date, backdrop_path, poster_path } = movie;
		const poster = movie.poster_path === null ? 'https://via.placeholder.com/300x450' : `https://image.tmdb.org/t/p/original${poster_path}`;
		const netflixOriginalTemplate = `
			<div class="netflix__original__item movie_box">
				<img src="${poster}" alt="${title}"  height="250" class="netflix__original__item__poster">			
			</div>
		`;
		netflixOriginal.innerHTML += netflixOriginalTemplate;
	});
};

displayNetflixOriginals();

const displayTopRated = async () => {
	const netflixTopRated = document.querySelector('.netflix__top_rated');

	const dataFetchTopRated = await fetchMovies(`${BASE_URL}${fetchTopRated}`);
	dataFetchTopRated.results.forEach((movie) => {
		const { id, title, release_date, backdrop_path, poster_path } = movie;
		const poster = movie.poster_path === null ? 'https://via.placeholder.com/300x450' : `https://image.tmdb.org/t/p/original${poster_path}`;
		const netflixOriginalTemplate = `
			<div class="netflix__top_rated__item movie_box">
				<img src="${poster}" alt="${title}"  width="100" class="netflix__original__item__poster">			
			</div>
		`;
		netflixTopRated.innerHTML += netflixOriginalTemplate;
	});
	// console.log(dataFetchTopRated);
};

displayTopRated();

const displayActionMovies = async () => {
	const netflixAction = document.querySelector('.netflix__action');

	const dataFetchActionMovies = await fetchMovies(`${BASE_URL}${fetchActionMovies}`);
	dataFetchActionMovies.results.forEach((movie) => {
		const { id, title, release_date, backdrop_path, poster_path } = movie;
		const poster = movie.poster_path === null ? 'https://via.placeholder.com/300x450' : `https://image.tmdb.org/t/p/original${poster_path}`;
		const netflixOriginalTemplate = `
			<div class="netflix__action__item movie_box">
				<img src="${poster}" alt="${title}"  width="100" class="netflix__original__item__poster">			
			</div>
		`;
		netflixAction.innerHTML += netflixOriginalTemplate;
	});
	// console.log(dataFetchActionMovies);
};

displayActionMovies();

const displayComedyMovies = async () => {
	const netflixComedy = document.querySelector('.netflix__comedy');

	const dataFetchComedyMovies = await fetchMovies(`${BASE_URL}${fetchComedyMovies}`);
	dataFetchComedyMovies.results.forEach((movie) => {
		const { id, title, release_date, backdrop_path, poster_path } = movie;
		const poster = movie.poster_path === null ? 'https://via.placeholder.com/300x450' : `https://image.tmdb.org/t/p/original${poster_path}`;
		const netflixOriginalTemplate = `
			<div class="netflix__comedy__item movie_box">
				<img src="${poster}" alt="${title}"  width="100" class="netflix__original__item__poster">			
			</div>
		`;
		netflixComedy.innerHTML += netflixOriginalTemplate;
	});
	// console.log(dataFetchComedyMovies);
};

displayComedyMovies();

const displayHorrorMovies = async () => {
	const netflixHorror = document.querySelector('.netflix__horror');

	const dataFetchHorrorMovies = await fetchMovies(`${BASE_URL}${fetchHorrorMovies}`);
	dataFetchHorrorMovies.results.forEach((movie) => {
		const { id, title, release_date, backdrop_path, poster_path } = movie;
		const poster = movie.poster_path === null ? 'https://via.placeholder.com/300x450' : `https://image.tmdb.org/t/p/original${poster_path}`;
		const netflixOriginalTemplate = `
			<div class="netflix__horror__item movie_box">
				<img src="${poster}" alt="${title}"  width="100" class="netflix__original__item__poster">			
			</div>
		`;
		netflixHorror.innerHTML += netflixOriginalTemplate;
	});

	// console.log(dataFetchHorrorMovies);
};

displayHorrorMovies();

const displayRomanceMovies = async () => {
	const netflixRomance = document.querySelector('.netflix__romance');

	const dataFetchRomanceMovies = await fetchMovies(`${BASE_URL}${fetchRomanceMovies}`);

	dataFetchRomanceMovies.results.forEach((movie) => {
		const { id, title, release_date, backdrop_path, poster_path } = movie;
		const poster = movie.poster_path === null ? 'https://via.placeholder.com/300x450' : `https://image.tmdb.org/t/p/original${poster_path}`;
		const netflixOriginalTemplate = `
			<div class="netflix__romance__item movie_box">
				<img src="${poster}" alt="${title}"  width="100" class="netflix__original__item__poster">			
			</div>
		`;
		netflixRomance.innerHTML += netflixOriginalTemplate;
	});

	// console.log(dataFetchRomanceMovies);
};

displayRomanceMovies();

const displayDocumentaries = async () => {
	const netFlixDocumentaries = document.querySelector('.netflix__documentaries');
	const dataFetchDocumentaries = await fetchMovies(`${BASE_URL}${fetchDocumentaries}`);

	dataFetchDocumentaries.results.forEach((movie) => {
		const { id, title, release_date, backdrop_path, poster_path } = movie;
		const poster = movie.poster_path === null ? 'https://via.placeholder.com/300x450' : `https://image.tmdb.org/t/p/original${poster_path}`;
		const netflixOriginalTemplate = `
			
			<div class="netflix__documentaries__item movie_box">
				<img src="${poster}" alt="${title}"  width="100" class="netflix__original__item__poster">			
			</div>
		`;
		netFlixDocumentaries.innerHTML += netflixOriginalTemplate;
	});
	// console.log(dataFetchDocumentaries);
};

displayDocumentaries();

//SCROLL EVENT FOR NAVBAR
const showNav = () => {
	if (window.scrollY > 70) {
		document.querySelector('header').style.background = '#111';
	} else {
		document.querySelector('header').style.background = 'none';
	}
};
window.addEventListener('scroll', showNav);
