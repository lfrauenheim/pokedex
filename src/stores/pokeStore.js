import { writable } from "svelte/store";

export const pokemon = writable([]);

export async function getPokemon(limit, offset) {
  const url = 'https://pokeapi.co/api/v2/pokemon'
  const addOffset = `offset=${offset}`
  const addLimit = `limit=${limit}`
  let uri = offset ? `${url}?${addOffset}&${addLimit}` : `${url}?${addLimit}`;
  const res = await fetch(uri);
  const data = await res.json();

  if(offset) {
    const loadedPokemon = data.results.map((data, index) => ({
      name: data.name,
      url: data.url,
      id: index + offset + 1
    }));
    pokemon.set(loadedPokemon);
  } else {
    const loadedPokemon = data.results.map((data, index) => ({
      name: data.name,
      url: data.url,
      id: index + 1
    }));
    pokemon.set(loadedPokemon);
  }  
};






