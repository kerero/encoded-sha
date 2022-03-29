<script>
  import Title from '$lib/title.svelte'
  import Input, { input_text } from '$lib/input.svelte'
  import Output from '$lib/output.svelte'
  import { SHA_ALGO, sha } from '$lib/sha'
  import { onMount, onDestroy } from 'svelte'
  
  let hash = ''
  let unsub

  onMount(() => {
    unsub = input_text.subscribe(s => sha(s, SHA_ALGO.SHA512).then(h => hash = h))
  })
  onDestroy(() => unsub && unsub())
</script>

<div
  class="w-screen h-screen bg-center-top
   bg-[url('/img/bg.jpg')] 
   dark:bg-[url('/img/bg-dark-1.jpg')] dark:bg-slate-900"
>
  <div class="flex justify-center h-screen w-screen backdrop-blur">
    <div
      class="h-max justify-self-center pb-8 text-white text-center rounded-lg m-7 shadow-lg max-w-[90%] w-10/12 lg:w-1/2  
    bg-cyan-50/40
    dark:bg-slate-800/60 border-2 dark:border-slate-800/40"
    >
      <Title />
      <Input />

      {#if $input_text}
        <div class="mt-6"><Output input={hash} /></div>
      {/if}
    </div>
  </div>
</div>
