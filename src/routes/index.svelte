<script>
  import Title from '$lib/title.svelte'
  import Input from '$lib/input.svelte'
  import Output from '$lib/output.svelte'
  import { SHA_ALGO, sha } from '$lib/sha'

  let input = ''
</script>

<div
  class="w-screen h-screen bg-center-top
   bg-[url('/static/bg.jpg')] 
   dark:bg-[url('/static/bg-dark-1.jpg')] dark:bg-slate-900"
>
  <div class="flex justify-center h-screen w-screen backdrop-blur">
    <div
      class="h-max justify-self-center pb-8 text-white text-center rounded-lg m-7 shadow-lg max-w-[90%] w-10/12 lg:w-1/2  
    bg-cyan-50/40
    dark:bg-slate-800/60 border-2 dark:border-slate-800/40"
    >
      <Title />
      <Input bind:value={input} />

      {#if input}
        {#await sha(input, SHA_ALGO.SHA256) then hash}
          <Output input={hash} />
        {/await}
      {/if}
    </div>
  </div>
</div>
