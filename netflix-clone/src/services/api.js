require('dotenv').config();
const axios = require('axios');

const API_KEY = process.env.API_key;
const BASE_URL = 'http://www.omdbapi.com/';

async function fetchTrending() {
    try {
        const response = await axios.get(`${BASE_URL}?s=trending&type=movie&apikey=${API_KEY}`);
        console.log('Trending:', response.data);
    } catch (error) {
        console.error('Erro ao buscar séries e filmes em alta:', error);
    }
}

async function fetchHighlights() {
    try {
        const response = await axios.get(`${BASE_URL}?s=highlight&type=movie&apikey=${API_KEY}`);
        console.log('Highlights:', response.data);
    } catch (error) {
        console.error('Erro ao buscar destaques:', error);
    }
}

async function fetchComedyMovies() {
    try {
        const response = await axios.get(`${BASE_URL}?s=comedy&type=movie&apikey=${API_KEY}`);
        console.log('Comedy Movies:', response.data);
    } catch (error) {
        console.error('Erro ao buscar filmes de comédia:', error);
    }
}

fetchTrending();
fetchHighlights();
fetchComedyMovies();