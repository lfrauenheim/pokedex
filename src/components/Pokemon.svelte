<script>
  export let pokemon;
</script>

{#if pokemon.id < 899}
  <a href= "/pokemon/{pokemon.id}">
    <div class="poke-card" >
      <p class="poke-id">#{pokemon.id}</p>
      <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/{pokemon.id}.png" alt="">
      <h1>{pokemon.name}</h1>
    </div>
  </a>
{/if}


<style>
  .poke-card{
    text-align: center;
    border: 1px solid black;
    border-radius: 6px;
    background: #165dad;
    overflow: hidden;
    transition: 0.2s ease-in-out all;
  }
  .poke-card:hover{
    transform: scale(1.05);
  }
  .poke-id{
    background: #e4c439;
    width: 3rem;
    color: #fff;
    padding: 0.1rem;
    font-weight: 700;
    position: absolute;
    border-radius: 0 0 10px 0;
  }
  img{
    width: fit-content;
    height: 250px;
  }
  h1{
    text-transform: capitalize;
    font-size: 30px;
  }
  a{
    text-decoration: none;
    color: black;
  }
</style>




