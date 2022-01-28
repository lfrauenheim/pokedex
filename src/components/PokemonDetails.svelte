<script>
  export let details;
  let abilities = [];

  details.abilities.forEach(element => {
    abilities.push(element.name)
  });

  const handleBar = (stat) => {
    const percent = Math.round((parseInt(stat) / 200 * 100), 0.5)
    return percent
  }

</script>

<div class="pokemon-type">
  {#each details.types as type}
      <h3 style="background-color: {type.color}">{type.name}</h3>
  {/each}
</div>
<table>
  <tr>
    <td>
      <div>
        <div class="image">
          <img src="{details.front}" alt="">
        </div>
        <div class="image">
          <img src="{details.back}" alt="">
        </div>
        <div class="image">
          <img src="{details.fshiny}" alt="">
        </div>
        <div class="image">
          <img src="{details.bshiny}" alt="">
        </div>
        <div class="profile">
          <h2>Profile:</h2>
          <div class="entry">
            <p><strong>Name: </strong></p>
            <p>&nbsp;{details.pokemon.name}</p>
          </div>
          <div class="entry">
            <p><strong>Weigth: </strong></p>
            <p>&nbsp{details.pokemon.weight}</p>
          </div>
          <div class="entry">
            <p><strong>Abilities: </strong></p>
            <p>&nbsp;{abilities.join(', ')}</p>
          </div>
        </div>
      </div>
    </td>
    <td>
      <div class="stats">
        {#each details.stats as stat}
          <p><strong>{stat.name}:</strong> {stat.value}</p>  
          <div class="container">
            <div class="statbar" style="width: {handleBar(stat.value)}%"></div>
          </div>
        {/each}
      </div>
    </td>
  </tr>
</table>


<style>

.pokemon-type{
  display: flex;
  justify-content: right;
}
h3{
  margin-right: 10px;
  border: 1px solid black;
  border-radius: 6px;
  padding: 0 6px;
  color: white;
  text-transform: capitalize;
}
.stats{
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 335px;
  margin-top: 20px;
}
.statbar{
  padding-top: 10px;
  padding-bottom: 10px;
  color: white;
  background-color: #04AA6D;
  border-radius: 6px; 
}
.container {
  width: 100%;
  height: 20px;
  background-color: #fefefe;
  border-radius: 6px;
  margin-top: 5px;
  margin-left: 5px;
}
p{
  text-transform: capitalize;
  font-size: 21px;
}
.image{
  display: inline-block;
  margin-left: 10px;
}
.profile{
  display: inline-block;
  max-width: 230px;
  margin-top: 20px;
}
.entry{
  display: flex;
}



</style>