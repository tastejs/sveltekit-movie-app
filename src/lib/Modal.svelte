<script>
  export let trailer_id
  let shown = false;
  export function show() {
    shown = true;
  }
  export function hide() {
    shown = false;
  }

</script>

{#if shown}
  <section id='trailer' class="top-0 left-0 bottom-0 right-0 bg-gray-800 bg-opacity-60 fixed z-50">
        <div class="absolute top-0 left-0 w-full h-full bg-contain">
          <iframe 
            class='iframe absolute top-0 left-0 w-full h-full bg-contain'
            title='Trailer'
            src="https://www.youtube.com/embed/{trailer_id}?rel=0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            controls='true'
            allowfullscreen >
            <track default kind="captions" />
          </iframe>
        </div>

    <div class="close absolute top-1 left-1 text-red-900 text-4xl xl:text-5xl hover:font-bold" 
      on:click={() => hide()}>
      <i class="fa fa-window-close" aria-hidden="true"></i>
    </div>
  </section>
{/if}