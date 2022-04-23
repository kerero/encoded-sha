<!-- svelte-ignore a11y-autofocus -->
<script lang="ts">
  import { writable } from 'svelte/store'

  export const value = writable('')
</script>

<div class="mt-5 flex justify-center">
  <input
    autofocus
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
