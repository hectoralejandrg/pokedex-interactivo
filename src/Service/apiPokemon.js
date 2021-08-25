import axios from "axios";

const baseUrl = `https://pokeapi.co/api/v2`;

export const fetchPokemon =(url)=> axios.get(`${baseUrl}/${url}`)