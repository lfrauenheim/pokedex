<script>
import { page } from "$app/stores";
import {pokemon, getPokemon} from '../stores/pokeStore';
import Pokemon from '../components/Pokemon.svelte';
import Header from '../components/Header.svelte';
import PageNav from '../components/PageNav.svelte';
import {onMount} from 'svelte';
export let p = $page.params.page;
const offset = p  * 50;

onMount(async () => {
  getPokemon(50, offset)
});
</script>

<Header title="Pokédex" />

<div class="pokemon">
  {#each $pokemon as pokemon }
    <Pokemon {pokemon} />
  {/each}
</div>
<PageNav {p}/>


