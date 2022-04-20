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
    on:blur={// Delay close to enable the li to performe on:click
    () =>
      setTimeout(() => {
        expanded = false
      }, 250)}
    on:click={() => (expanded = !expanded)}
    class={`${cls}  rounded-lg border-2 border-slate-600/0 py-1 pl-1 outline-none transition-all
     delay-150 duration-500 ease-in-out hover:border-2 hover:border-indigo-200/50
     hover:shadow-lg dark:hover:border-slate-600`}
  >
    {value.split('-')[1]}
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="-mt-1 -ml-2 inline-block w-5 fill-pink-500"
      viewBox="0 0 20 20"
      fill="currentColor"
      ><path
        fill-rule="evenodd"
        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
        clip-rule="evenodd"
      /></svg
    >
  </button>

  <div class="relative ml-2 h-0 w-0">
    {#if expanded}
      <ul
        transition:fly={{ duration: 200, y: -10, delay: 0 }}
        class="absolute mt-1 ml-[-0.5rem] overflow-hidden rounded-lg border-2 border-indigo-300 bg-indigo-400/70 backdrop-blur dark:border-slate-600 dark:bg-slate-800/90"
      >
        {#each items as i}
          <li
            on:click={() => (value = i)}
            class="w-max border-b-2 border-indigo-200/50 px-2 py-1 hover:bg-indigo-400 dark:border-slate-600 dark:hover:bg-slate-600"
          >
            {i}
          </li>
        {/each}
      </ul>
    {/if}
  </div>
</div>
