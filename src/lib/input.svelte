<!-- svelte-ignore a11y-autofocus -->
<script lang="ts">
  import { writable } from 'svelte/store'
  import { onMount } from 'svelte'
  
  export const value = writable('')
  
  let ref: HTMLInputElement
  onMount(() => {
    if (!(navigator as any)?.userAgentData?.mobile) {
      ref.focus()
    }
  })
</script>

<div class="mt-5 flex justify-center">
  <input
    bind:this={ref}
    bind:value={$value}
    type="password"
    placeholder="Start Typing..."
    maxlength="256"
    class="
      w-4/5 rounded-full p-1 pl-3 pr-3 text-slate-900 shadow 
      outline-none ring-0
      placeholder:italic md:w-3/5
    "
  />
</div>
