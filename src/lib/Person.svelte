<script>
  import KnownFor from './KnownFor.svelte'
  const IMAGE_API = 'https://image.tmdb.org/t/p/w500/'
  export let person
</script>

<section id='person' class='mx-auto max-w-7xl xl:pb-20 xl:mt-5'>
  <div class='bg-primary xl:bg-bgcolour grid xl:grid-cols-5 xl:grid-rows-auto xl:auto-rows-fr' > 
    <div class='w-full xl:col-start-1 xl:col-end-2 xl:row-start-1 xl:row-end-3 mx-auto'>
      
      {#if person.profile_path}
        <img class='mt-4 xl:mt-0 xl:pt-0 w-64 h-96 rounded-2xl mx-auto' src={ IMAGE_API + person.profile_path } alt='profile'>
      {:else}
      <img class='mt-4 xl:pt-0 flex justify-end w-64 h-96 rounded-2xl mx-auto' src='/person.svg' alt='profile'>
      {/if}
      <h2 class='mt-2 w-full text-center mx-auto xl:hidden'>{person.name}</h2>
      <div class='pl-8 w-full xl:p-3'>
        <h2 class='text-2xl mt-2'>Personal Info</h2>
        <h3 class='text-lg font-bold mt-4 mb-1'>Known For</h3>
        <p>{person.known_for_department}</p>
        <h3 class='text-lg font-bold mt-4 mb-1'>Gender</h3>
        {#if person.gender === 2}
          <p>Male</p>
        {:else}
          <p>Female</p>
        {/if}
        <h3 class='text-lg font-bold mt-4 mb-1'>Birthdate</h3>
        {#if person.birthday}
          <p>{person.birthday}</p>
        {:else}
          <p>Unknown</p>
        {/if}
        <h3 class='text-lg font-bold mt-4 mb-1'>Place of Birth</h3>
        {#if person.place_of_birth}
          <p>{person.place_of_birth}</p>
          {:else}
          <p>Unknown</p>
        {/if}
        {#if (person.also_known_as && person.also_known_as.length) }
          <h2 class='mt-4 mb-1'>Also Known As</h2>
          {#each person.also_known_as as alias}
            <p>{alias}</p>
          {/each}
        {/if}
      </div>
    </div>
    <div class="xl:col-start-2 xl:col-end-6 xl:row-start-1 xl:row-end-2">
      <div class='mb-2 xl:mb-4 relative bg-primary xl:ml-5 p-3.5 rounded-2xl'>
        <h2 class='text-2xl hidden xl:inline-block'>{person.name}</h2>
        <h3 class='text-lg font-bold mt-4 mb-1'>Biography</h3>
        <p>{person.biography}</p>

      </div>
    </div>
    <div class="xl:col-start-2 xl:col-end-6 xl:row-start-2 xl:row-end-3 xl:bg-primary xl:ml-5 xl:p-3.5 xl:rounded-2xl">
      <div class='pt-8'>
        <h2 class='text-2xl pl-3.5 xl:pl-0'>Known For</h2>
        <KnownFor personId = {person.id}/>
      </div>
      </div>
  </div>
</section>
