<script lang="ts">
  import { fade, fly } from 'svelte/transition'
  import { copied_svg, copy_svg } from './svg-elements'
  import reactive_limit from './reactive-limit'
  import clipboard_copy from './clipboard'

  export let input = ''
  let btn_icon = copy_svg
  const limit = reactive_limit(2000)

  function copy_click() {
    btn_icon = copied_svg
    clipboard_copy(input)
    limit(() => (btn_icon = copy_svg))
  }
</script>

<div in:fly={{ duration: 500, y: 50, delay: 0 }} out:fade class="mt-3 flex justify-center">
  <div
    class="flex 
    max-w-[80%] rounded-l-lg bg-gradient-to-bl
    from-cyan-200 to-purple-200 p-[0.1rem] shadow
    dark:bg-gradient-to-tr
    dark:from-cyan-700 dark:to-pink-700"
  >
    <span
      class="max-w-[100%] break-all
        rounded-l-lg bg-sky-50/75 p-1 pl-2 pr-2 text-left font-mono text-slate-400 dark:bg-slate-800/95"
      >{input}</span
    >
  </div>
  <div
    class="ml-[-1px] flex justify-center
    rounded-r-lg 
    bg-gradient-to-tr from-cyan-200 to-purple-200 
    p-[0.1rem] shadow dark:bg-gradient-to-tl 
    dark:from-cyan-700 dark:to-pink-700"
  >
    <button
      on:click={copy_click}
      class="w-7 rounded-r-lg
      bg-blue-50/75 text-slate-900
      outline-none hover:bg-black/0 dark:bg-slate-800/95 dark:text-slate-400"
    >
      <div class="">
        {#key btn_icon}
          <div class="absolute mt-[-11px] ml-[1px] w-7" in:fade={{ delay: 200 }} out:fade={{}}>
            {@html btn_icon}
          </div>
        {/key}
      </div>
    </button>
  </div>
</div>
