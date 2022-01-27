<script>
  import Nav from '../components/Nav.svelte'
  import Footer from '../components/Footer.svelte';
  import '../styles/global.css'
</script>

<main>
  <Nav></Nav>
  <slot />
  <Footer></Footer>
</main>

<style>
  
</style>