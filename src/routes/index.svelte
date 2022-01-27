<script>
  import {pokemon, getPokemon} from '../stores/pokeStore'
  import Pokemon from '../components/Pokemon.svelte'
  import Header from '../components/Header.svelte'
  import {onMount} from 'svelte';
  
  onMount(async () => {
    getPokemon(100)
  });

</script>

<Header title="Hello and Welcome To My Pokédex"/>
<div class="index">
  <p>On this Site you'll find a Pokédex built with data from the Poké API. 
  <p>There are currently over 800 Pokémons with images and details available.</p>
  <div class="link">
    <a href="/0">Check them out right here</a>
  </div>
  <p>If you have any suggestions you can let me know on my Github. Just click the image below.</p>
  <a href="https://github.com/lfrauenheim/pokedex" target="_blank"> 
    <img src="./github.png" alt="">
  </a>
  
</div>

<style>
  .index{
    display: block;
    text-align: center;
    margin: 40px auto;
    width: 800px;
  }
  p{
    font-weight: bold;
    font-size: 26px;
  }
  a{
    font-size: 35px;
    font-weight: bold;
    padding: 6px;
    border-radius: 6px;
    color: black;
    margin: 0 auto;
  }
  .link{
    margin-bottom: 20px;
  }
  .link:hover{
    transform: scale(1.05);
    
  }
  a:hover{
    color: crimson;
  }
  img{
    max-width: 800px;
    border-radius: 6px;
  }
  
  
</style>




