<script lang="ts">
  import { fade, fly } from 'svelte/transition'
  export let input = ''
</script>

<div
  in:fly={{ duration: 500, y: 50, delay: 0 }}
  out:fade
  class="flex justify-center mt-3"
>
  <div
    class="p-[0.1rem] 
    dark:bg-gradient-to-tr dark:from-cyan-700 dark:to-pink-700 rounded-l-lg
    flex
    max-w-[80%] shadow"
  >
    <span
      class="bg-cyan-50 dark:bg-slate-800 
        rounded-l-lg text-slate-400 p-1 pl-2 pr-2 max-w-[100%] text-left break-all font-mono"
      >{input}</span
    >
  </div>
  <div
    class="flex shadow
    p-[0.1rem] 
    dark:bg-gradient-to-br dark:to-cyan-700 dark:from-pink-700 
    rounded-r-lg ml-[-1px]"
  >
    <button
      class="bg-cyan-50 dark:bg-slate-800 
    text-slate-900 dark:text-slate-400
    hover:bg-black/0 rounded-r-lg">Copy</button
    >
  </div>
</div>
