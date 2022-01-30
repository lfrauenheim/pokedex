<script context="module">
  export async function load({fetch, params}) {
    const name = params.name;
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
    const pokemon = await res.json();
    
    if(res.ok) {
      return {
        props: {
          pokemon 
        }
      }
    }
  };
</script>

<script>
  import Header from '../../components/Header.svelte'
  import PokemonDetails from '../../components/PokemonDetails.svelte'
  export let pokemon;
  
  /**
   * Types
   */
  const TYPE_COLORS = [
      {color: 'bug', value: 'lightgreen'},
      {color: 'dark', value: ''},
      {color: 'dragon', value: 'darkmagenta'},
      {color: 'electric', value: 'rgb(219, 152, 7)'},
      {color: 'fairy', value: 'pink'},
      {color: 'fighting', value: 'black'},
      {color: 'fire', value: 'crimson'},
      {color: 'flying', value: 'lightblue'},
      {color: 'ghost', value: 'purple-700'},
      {color: 'grass', value: 'green'},
      {color: 'ground', value: 'darkgrey'},
      {color: 'ice', value: 'aqua'},
      {color: 'normal', value: 'lightgrey'},
      {color: 'poison', value: 'purple'},
      {color: 'psychic', value: 'rgb(236, 18, 153)'},
      {color: 'rock', value: 'orange'},
      {color: 'steel', value: 'gray'},
      {color: 'water', value: 'blue'}
  ]
  export let types = pokemon.types.map(type => ({
    name: type.type.name,
    color: TYPE_COLORS.find(x => x.color === type.type.name).value
  }));    
  
  /**
   * Stats
  */
  export let stats = pokemon.stats.map(stat => ({
    name : stat.stat.name,
    value: stat.base_stat,
  }))
  /**
   * Image
   */
  export let front = pokemon.sprites.front_default;
  export let back = pokemon.sprites.back_default;
  export let fshiny = pokemon.sprites.front_shiny;
  export let bshiny = pokemon.sprites.back_shiny;
  /**
   * Abilities
   */
  export let abilities = pokemon.abilities.map(ability => ({
    name: ability.ability.name
  }));
  /**
   * Export to PokemonDetails
   */
  export let details = {
    types,
    stats,
    front,
    back,
    fshiny,
    bshiny,
    abilities, 
    pokemon
  }
</script>

<div class="pokemon">
  <Header title={pokemon.name} />
  <PokemonDetails {details} />
</div>

<style>
  .pokemon{
    display: block;
    margin: 150px auto;
    width: 900px;
    height: 500px;
    border: 1px solid black;
    border-radius: 6px;
    padding: 15px;
    background-color: blanchedalmond;
  }

</style>
  












