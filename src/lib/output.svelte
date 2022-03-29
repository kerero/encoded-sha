<script lang="ts">
  import { fade, fly } from 'svelte/transition'
  import { copied_svg, copy_svg} from './svg-elements'
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

<div
  in:fly={{ duration: 500, y: 50, delay: 0 }}
  out:fade
  class="flex justify-center mt-3"
>
  <div
    class="p-[0.1rem] 
    bg-gradient-to-br to-cyan-200 from-purple-200
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
    class="flex justify-center shadow
    p-[0.1rem] 
    bg-gradient-to-br to-cyan-200 from-purple-200 
    dark:bg-gradient-to-br dark:to-cyan-700 dark:from-pink-700 
    rounded-r-lg ml-[-1px]"
  >
    <button
      on:click={copy_click}
      class="bg-cyan-50 dark:bg-slate-800 
      text-slate-900 dark:text-slate-400
      hover:bg-black/0 rounded-r-lg w-7 outline-none"
    >
      <div class="">
        {#key btn_icon}
          <div
            class="w-7 absolute mt-[-11px] ml-[1px]"
            in:fade={{ delay: 200 }}
            out:fade={{}}
          >
            {@html btn_icon}
          </div>
        {/key}
      </div>
    </button>
  </div>
</div>