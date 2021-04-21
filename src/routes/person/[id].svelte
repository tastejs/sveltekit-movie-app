<script lang='ts'>
  import { onMount } from  'svelte'
  import Person from '$lib/Person.svelte'
  import Spinner from '$lib/Spinner.svelte'
  import { ApiKey } from '$lib/store'
  import { page } from '$app/stores';

  let PERSONS_API = `https://api.themoviedb.org/3/person/${$page.params.id}?api_key=${$ApiKey}&language=en-US`
 
  let person:PersonType[] = []

  onMount(async () => {
    person = await fetch(PERSONS_API)
    .then(x => x.json())
	})

</script>

{#if person.length !==0}
  <Person {person}/>
{:else}
  <Spinner />
{/if}


<style>
  /* .container {
    margin: 0 auto;
    max-width: 1250px;
    padding-bottom: 70px;
  } */
    /* .wrapper {
    display: grid;
    grid-template-columns: 1fr 4fr;
  }
  img, .icon {
    width: 250px;
    border-radius: 15px;
  } */

  /* .icon {
    display: inline-block;
    height: 165px;
    width: 110px;
    position: relative;
    top: 40px;
    left: 20px;
  }
  .info {
    max-width: 1000px;
    width:100%;
  }
  .persons-card {
    margin-bottom: 0.5rem;
    position: relative;
    background-color:var(--primary-colour);
    margin-left: 0.8rem;
    border-radius: 15px;
    padding: 15px;
  } */


/* 
  .known-for {
    padding-top: 30px;
  }

  h2 {
    color: white;
    margin: 0;
    padding: 0;
    font-weight: 400;
    text-align:center;
    display: flex;
    align-items: center;
  }
  h3 {
    margin: 0;
    padding: 15px 0 5px 0;
  }

  p {
    margin: 0;
    padding: 0;
  }

 */






  /* @media only screen and (max-width: 600px) {
    .wrapper{
      display: grid;
      grid-template-columns: 1fr;
    }
    .personal {
      padding: 20px;
    }
    img {
      width: 100%;
    }
    .persons-card {
      margin-left: 0;
    }
    .container {
      padding-bottom: 0;
    }
  } */
</style>

