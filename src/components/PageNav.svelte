<script>
  export let p;
  p = parseInt(p);
  export const pageMax = Math.floor(898 / 50);
</script>

<div class="pagenav" >
  {#if p === 0}
    <div class="link">
      <a sveltekit:prefetch href= "/{p + 1}" target="_self">Next</a>
    </div>
  {:else if p === 1}
    <div class="link">
      <a sveltekit:prefetch href= "/{p - 1}" target="_self">Previous</a>
    </div>
    <div class="link">
      <a href= "/{p + 1}" target="_self">Next</a>
    </div>
  {:else if p > 1 && p < pageMax}
    <div class="link">
      <a href= "/{p - 1}" target="_self">Previous</a>
    </div>
    <div class="link">
      <a href= "/{p + 1}" target="_self">Next</a>
    </div>
  {:else if p = pageMax}
    <div class="link">
      <a href= "/{p - 1}" target="_self">Previous</a>
    </div>
  {/if}
</div>


<style>
  .pagenav{
    display: flex;
    justify-content: center;
    margin: 20px auto;
  }
  a{
    font-size: 24px;
    font-weight: bold;
    padding: 6px;
    border-radius: 6px;
    color: black;
    text-decoration: none;
    margin: 0 auto;
  }
  .link:hover{
    transform: scale(1.2);
  }
</style>