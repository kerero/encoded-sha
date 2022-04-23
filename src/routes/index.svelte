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
      flex h-screen w-screen justify-center border-indigo-200 bg-[url('/static/img/bg.webp')] bg-center-top
      backdrop-blur  dark:border-slate-800
      dark:bg-slate-900 dark:bg-[url('/static/img/bg-dark.webp')] 
      xl:w-3/5 xl:border-x-2 2xl:w-1/2
    "
  >
    <!-- image cover -->
    <div class="flex h-screen w-screen justify-center bg-indigo-50/40 dark:bg-slate-900/50">
      <!-- main container -->
      <div
        class="
          mx-7 my-16__ h-max w-10/12 max-w-[90%] justify-self-center rounded-lg
        border-2 border-indigo-100/70 bg-cyan-100/10  
          pb-8 text-center text-white  
        shadow-md dark:border-slate-800/40
        dark:bg-slate-800/60 md:w-2/3  lg:my-36 my-auto"
      >
        <Title />
        <Input />

        {#if $input_text}
          <div class="mt-6"><Output input={hash} /></div>
        {/if}
      </div>
    </div>
    <div class="relative h-0 w-0">
      <GhCorner repo_name="OriKerer/encoded-sha" />
    </div>
  </div>
</div>
