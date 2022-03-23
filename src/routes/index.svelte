<script>
  import Title from "./title.svelte";
</script>

<div
  class=" flex justify-center h-screen bg-center-top
   bg-[url('/static/bg.jpg')] 
   dark:bg-[url('/static/bg-dark-1.jpg')] dark:bg-slate-900 "
>
  <div
    class="flex justify-center h-screen w-screen backdrop-blur-lg"
  >
    <div class="h-max justify-self-center pb-8 text-white text-center rounded-lg m-10  shadow-2xl w-11/12 lg:w-2/4  
    bg-slate-900/60 border-2 border-slate-800/40">
      <Title />
      <input
        type="text"
        placeholder="Text..."
        class="rounded-md shadow- placeholder:text-center placeholder:italic mt-4 p-1 lg:w-2/5 w-4/5 text-black"
      />
    </div>
  </div>
</div>
