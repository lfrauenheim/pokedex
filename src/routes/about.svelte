<script>
  import Header from '../components/Header.svelte'
</script>


<Header title="About"/>
<div class="about">
  <h2>Created with</h2>
  <ul>
    <li><a href="https://kit.svelte.dev/" target="_blank">Svelte-Kit</a></li>
    <li><a href="https://pokeapi.co/" target="_blank">Poké API</a></li>
  </ul>
</div>
<div class="author">
  <p><strong>Author:</strong> Lenard Frauenheim <strong>Last Update:</strong> 26.01.2022</p>
</div>



<style>
  .about{
    display: block;
    width: fit-content;
    margin: 0 auto;
  }
  .about h2{
    font-size: 30px;
  }
  .about li{
    font-size: 25px;
  }
  a{
    font-size: 24px;
    font-weight: bold;
    padding: 6px;
    border-radius: 6px;
    color: black;
    margin: 0 auto;
  }
  li:hover{
    transform: scale(1.05);
  }
  .author{
    width: 270px;
    margin: 40px auto;
  }
  p{
  font-size: 26px;
  }
</style>


