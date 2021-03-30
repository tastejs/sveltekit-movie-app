<section id='spinner' class='w-full h-full m-auto'>
  <section class='flex absolute items-center h-8 top-1/2 left-1/2 transform -translate-x-1/2 '>
    <div class="inline-flex flex-nowrap flex-row items-center justify-between mx-auto w-12">
      <div class='w-3 h-3 rounded-full bg-primary -translate-x-1/2 -translate-y-full'/>
      <div class='w-3 h-3 rounded-full bg-primary  -translate-x-1/2 -translate-y-full'/>
      <div class='w-3 h-3 rounded-full bg-primary -translate-x-1/2 -translate-y-full'/>
    </div>
  </section>
</section>

<style>

div {
    animation: wave 0.8s ease-in-out alternate infinite;
  }

div:nth-of-type(1) {
    animation-delay: -0.4s;
  }

div:nth-of-type(2) {
    animation-delay: -0.2s;
  }

  @keyframes wave {
    from {
      transform: translateY(-100%);
    }
    to {
      transform: translateY(100%);
    }
  }
</style>
