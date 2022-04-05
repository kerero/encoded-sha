<script>
  import Title from '$lib/title.svelte'
  import Input, { input_text } from '$lib/input.svelte'
  import Output from '$lib/output.svelte'
  import { compute_hash, selected_sha } from '$lib/sha'
  import GhCorner from '$lib/gh-corner.svelte'

  let hash = ''
  $: compute_hash($input_text, $selected_sha).then((h) => (hash = h))
</script>

<!-- Solid background -->
<div class="flex justify-center bg-indigo-50/30 dark:bg-slate-900">
  <!-- Image background -->
  <div
    class="
      flex justify-center w-screen h-screen bg-center-top backdrop-blur xl:border-x-2
      xl:w-3/5  2xl:w-1/2
      bg-[url('/static/img/bg.webp')] border-indigo-200 
      dark:bg-[url('/static/img/bg-dark.webp')] dark:bg-slate-900 dark:border-slate-800
    "
  >
    <!-- image cover -->
    <div
      class="flex justify-center w-screen h-screen dark:bg-slate-900/50 bg-indigo-50/40"
    >
      <!-- main container -->
      <div
        class="
          h-max justify-self-center pb-8 mx-7 my-16 lg:my-36 shadow-md
        text-white text-center rounded-lg  
          max-w-[90%] w-10/12 md:w-2/3  
        bg-cyan-100/10 border-indigo-100/70
        dark:bg-slate-800/60 border-2  dark:border-slate-800/40"
      >
        <Title />
        <Input />

        {#if $input_text}
          <div class="mt-6"><Output input={hash} /></div>
        {/if}
      </div>
    </div>
    <div class="relative w-0 h-0">
      <GhCorner repo_name="OriKerer/encoded-sha" />
    </div>
  </div>
</div>
