<script>
  import {page } from '$app/stores'
  import Header from '../../components/Header.svelte'
  const id = $page.params.id;
</script>

<Header title={id} />





