<script lang="ts">
  import { fly } from 'svelte/transition'
  export let items: string[] = []
  export let value = ''
  let cls: string
  export { cls as class }
  let expanded = false
</script>

<div class="">
  <button
    on:blur={() =>
      // Delay close to enable the li to performe on:click
      setTimeout(() => {
        expanded = false
      }, 250)}
    on:click={() => (expanded = !expanded)}
    class={`${cls}  rounded-lg border-2 border-slate-600/0 hover:shadow-lg pl-1 py-1 transition-all
     duration-500 ease-in-out delay-150 hover:border-2 hover:border-indigo-200/50
     dark:hover:border-slate-600 outline-none`}
  >
    {value.split('-')[1]}
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="inline-block w-5 -mt-1 -ml-2 fill-pink-500"
      viewBox="0 0 20 20"
      fill="currentColor"
      ><path
        fill-rule="evenodd"
        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
        clip-rule="evenodd"
      /></svg
    >
  </button>

  <div class="relative w-0 h-0 ml-2">
    {#if expanded}
      <ul
        transition:fly={{ duration: 200, y: -10, delay: 0 }}
        class="absolute dark:bg-slate-800/90 mt-1 ml-[-0.5rem] dark:border-slate-600 border-2 rounded-lg overflow-hidden bg-indigo-400/70 backdrop-blur border-indigo-300"
      >
        {#each items as i}
          <li
            on:click={() => (value = i)}
            class="px-2 py-1 border-b-2 dark:hover:bg-slate-600 border-indigo-200/50 dark:border-slate-600 hover:bg-indigo-400"
          >
            {i}
          </li>
        {/each}
      </ul>
    {/if}
  </div>
</div>
